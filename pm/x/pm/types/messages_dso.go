package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateDso{}

func NewMsgCreateDso(creator string, idx string, address string) *MsgCreateDso {
	return &MsgCreateDso{
		Creator: creator,
		Idx:     idx,
		Address: address,
	}
}

func (msg *MsgCreateDso) Route() string {
	return RouterKey
}

func (msg *MsgCreateDso) Type() string {
	return "CreateDso"
}

func (msg *MsgCreateDso) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDso) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDso) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDso{}

func NewMsgUpdateDso(creator string, idx string, address string) *MsgUpdateDso {
	return &MsgUpdateDso{
		Creator: creator,
		Idx:     idx,
		Address: address,
	}
}

func (msg *MsgUpdateDso) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDso) Type() string {
	return "UpdateDso"
}

func (msg *MsgUpdateDso) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDso) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDso) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDso{}

func NewMsgDeleteDso(creator string) *MsgDeleteDso {
	return &MsgDeleteDso{
		Creator: creator,
	}
}
func (msg *MsgDeleteDso) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDso) Type() string {
	return "DeleteDso"
}

func (msg *MsgDeleteDso) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDso) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDso) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
