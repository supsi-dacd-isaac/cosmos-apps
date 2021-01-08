package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

type MsgSetMeasure struct {
	Signal    string         `json:"signal"`
	Timestamp string         `json:"timestamp"`
	MeterId   string         `json:"meterId"`
	Value     string         `json:"value"`
	Account   sdk.AccAddress `json:"account"`
}

// NewMsgNewMeasure is a constructor function for MsgNewMeasure
func NewMsgSetMeasure(signal string, timestamp string, meterId string, value string, account sdk.AccAddress) MsgSetMeasure {
	return MsgSetMeasure{
		Signal:    signal,
		Timestamp: timestamp,
		MeterId:   meterId,
		Value:     value,
		Account:   account,
	}
}

// ValidateBasic runs stateless checks on the message
func (msg MsgSetMeasure) ValidateBasic() error {
	if msg.Account.Empty() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, msg.Account.String())
	}
	if len(msg.Timestamp) == 0 || len(msg.Value) == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "Name and/or Value cannot be empty")
	}
	return nil
}

// Route should return the name of the module
func (msg MsgSetMeasure) Route() string { return RouterKey }

// Type should return the action
func (msg MsgSetMeasure) Type() string { return "set_measure" }

// GetSignBytes encodes the message for signing
func (msg MsgSetMeasure) GetSignBytes() []byte {
	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(msg))
}

// GetSigners defines whose signature is required
func (msg MsgSetMeasure) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{msg.Account}
}
