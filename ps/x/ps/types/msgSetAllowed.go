package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

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
