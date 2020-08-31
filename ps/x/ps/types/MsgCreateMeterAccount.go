package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateMeterAccount{}

type MsgCreateMeterAccount struct {
	Meter   string         `json:"meter" yaml:"meter"`
	Account sdk.AccAddress `json:"account" yaml:"account"`
	Admin   sdk.AccAddress `json:"admin" yaml:"admin"`
}

func NewMsgCreateMeterAccount(meter string, account sdk.AccAddress, admin sdk.AccAddress) MsgCreateMeterAccount {
	return MsgCreateMeterAccount{
		Meter:   meter,
		Account: account,
		Admin:   admin,
	}
}

func (msg MsgCreateMeterAccount) Route() string {
	return RouterKey
}

func (msg MsgCreateMeterAccount) Type() string {
	return "CreateMeterAccount"
}

func (msg MsgCreateMeterAccount) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{sdk.AccAddress(msg.Admin)}
}

func (msg MsgCreateMeterAccount) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg MsgCreateMeterAccount) ValidateBasic() error {
	if msg.Admin.Empty() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "creator can't be empty")
	}
	return nil
}
