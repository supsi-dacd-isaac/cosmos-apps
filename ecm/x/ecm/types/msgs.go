package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// SET MEASURE SECTION
type MsgSetMeasure struct {
	Signal    string         `json:"signal"`
	Timestamp string         `json:"timestamp"`
	MeterId   string         `json:"meterId"`
	Value     string         `json:"value"`
	Cost      sdk.Coins      `json:"cost"`
	Account   sdk.AccAddress `json:"account"`
}

// NewMsgNewMeasure is a constructor function for MsgNewMeasure
func NewMsgSetMeasure(signal string, timestamp string, meterId string, value string, cost sdk.Coins, account sdk.AccAddress) MsgSetMeasure {
	return MsgSetMeasure{
		Signal:    signal,
		Timestamp: timestamp,
		MeterId:   meterId,
		Value:     value,
		Cost:      cost,
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

// SET ADMIN SECTION
type MsgSetAdmin struct {
	Id      string         `json:"Id"`
	Account sdk.AccAddress `json:"account"`
}

// NewMsgNewMeasure is a constructor function for MsgNewMeasure
func NewMsgSetAdmin(id string, account sdk.AccAddress) MsgSetAdmin {
	return MsgSetAdmin{
		Id:      id,
		Account: account,
	}
}

// ValidateBasic runs stateless checks on the message
func (msg MsgSetAdmin) ValidateBasic() error {
	if msg.Account.Empty() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, msg.Account.String())
	}
	if len(msg.Id) == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "Id cannot be empty")
	}
	return nil
}

// Route should return the name of the module
func (msg MsgSetAdmin) Route() string { return RouterKey }

// Type should return the action
func (msg MsgSetAdmin) Type() string { return "set_admin" }

// GetSignBytes encodes the message for signing
func (msg MsgSetAdmin) GetSignBytes() []byte {
	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(msg))
}

// GetSigners defines whose signature is required
func (msg MsgSetAdmin) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{msg.Account}
}

// SET ALLOWED SECTION
type MsgSetAllowed struct {
	Allowed string         `json:"allowed"`
	Account sdk.AccAddress `json:"account"`
}

// NewMsgNewMeasure is a constructor function for MsgNewMeasure
func NewMsgSetAllowed(allowed string, account sdk.AccAddress) MsgSetAllowed {
	return MsgSetAllowed{
		Allowed: allowed,
		Account: account,
	}
}

// ValidateBasic runs stateless checks on the message
func (msg MsgSetAllowed) ValidateBasic() error {
	if msg.Account.Empty() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, msg.Account.String())
	}
	if len(msg.Allowed) == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "Id cannot be empty")
	}
	return nil
}

// Route should return the name of the module
func (msg MsgSetAllowed) Route() string { return RouterKey }

// Type should return the action
func (msg MsgSetAllowed) Type() string { return "set_allowed" }

// GetSignBytes encodes the message for signing
func (msg MsgSetAllowed) GetSignBytes() []byte {
	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(msg))
}

// GetSigners defines whose signature is required
func (msg MsgSetAllowed) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{msg.Account}
}
