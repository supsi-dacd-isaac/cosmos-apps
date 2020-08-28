package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

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
