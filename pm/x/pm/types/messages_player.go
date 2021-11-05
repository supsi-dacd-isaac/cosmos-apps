package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePlayer{}

func NewMsgCreatePlayer(
	creator string,
	index string,
	address string,
	role string,

) *MsgCreatePlayer {
	return &MsgCreatePlayer{
		Creator: creator,
		Index:   index,
		Address: address,
		Role:    role,
	}
}

func (msg *MsgCreatePlayer) Route() string {
	return RouterKey
}

func (msg *MsgCreatePlayer) Type() string {
	return "CreatePlayer"
}

func (msg *MsgCreatePlayer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePlayer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePlayer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePlayer{}

func NewMsgUpdatePlayer(
	creator string,
	index string,
	address string,
	role string,

) *MsgUpdatePlayer {
	return &MsgUpdatePlayer{
		Creator: creator,
		Index:   index,
		Address: address,
		Role:    role,
	}
}

func (msg *MsgUpdatePlayer) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePlayer) Type() string {
	return "UpdatePlayer"
}

func (msg *MsgUpdatePlayer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePlayer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePlayer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePlayer{}

func NewMsgDeletePlayer(
	creator string,
	index string,

) *MsgDeletePlayer {
	return &MsgDeletePlayer{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeletePlayer) Route() string {
	return RouterKey
}

func (msg *MsgDeletePlayer) Type() string {
	return "DeletePlayer"
}

func (msg *MsgDeletePlayer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePlayer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePlayer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
