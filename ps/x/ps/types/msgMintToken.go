package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

type MsgTokensMinting struct {
	Amount    sdk.Coins      `json:"amount" yaml:"amount"`
	Recipient sdk.AccAddress `json:"recipient" yaml:"recipient"`
	Minter    sdk.AccAddress `json:"minter" yaml:"minter"`
}

// NewMsgNewMeasure is a constructor function for MsgNewMeasure
func NewMsgTokensMinting(amount sdk.Coins, recipient sdk.AccAddress, minter sdk.AccAddress) MsgTokensMinting {
	return MsgTokensMinting{
		Amount:    amount,
		Recipient: recipient,
		Minter:    minter,
	}
}

// ValidateBasic runs stateless checks on the message
func (msg MsgTokensMinting) ValidateBasic() error {
	if msg.Minter.Empty() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, msg.Minter.String())
	}
	if msg.Recipient.Empty() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, msg.Recipient.String())
	}
	if msg.Amount.Empty() {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "Id cannot be empty")
	}
	return nil
}

// Route should return the name of the module
func (msg MsgTokensMinting) Route() string { return RouterKey }

// Type should return the action
func (msg MsgTokensMinting) Type() string { return "tokens_minting" }

// GetSignBytes encodes the message for signing
func (msg MsgTokensMinting) GetSignBytes() []byte {
	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(msg))
}

// GetSigners defines whose signature is required
func (msg MsgTokensMinting) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{msg.Minter}
}
