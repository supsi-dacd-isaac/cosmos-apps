package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

type MsgSetMeasure struct {
	Timestamp string         `json:"ts"`
	Value     string         `json:"value"`
	Cost      sdk.Coins      `json:"cost"`
	Meter     sdk.AccAddress `json:"meter"`
}

// NewMsgNewMeasure is a constructor function for MsgNewMeasure
func NewMsgSetMeasure(ts string, value string, cost sdk.Coins, meter sdk.AccAddress) MsgSetMeasure {
	return MsgSetMeasure{
		Timestamp: ts,
		Value:     value,
		Cost:      cost,
		Meter:     meter,
	}
}

// ValidateBasic runs stateless checks on the message
func (msg MsgSetMeasure) ValidateBasic() error {
	if msg.Meter.Empty() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, msg.Meter.String())
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
	return []sdk.AccAddress{msg.Meter}
}

