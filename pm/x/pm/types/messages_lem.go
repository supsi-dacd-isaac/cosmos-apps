package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateLem{}

func NewMsgCreateLem(
	creator string,
	index string,
	indexEnd string,
	params []string,
	players []string,

) *MsgCreateLem {
	return &MsgCreateLem{
		Creator:  creator,
		Index:    index,
		IndexEnd: indexEnd,
		Params:   params,
		Players:  players,
	}
}

func (msg *MsgCreateLem) Route() string {
	return RouterKey
}

func (msg *MsgCreateLem) Type() string {
	return "CreateLem"
}

func (msg *MsgCreateLem) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateLem) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateLem) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateLem{}

func NewMsgUpdateLem(
	creator string,
	index string,
	indexEnd string,
	params []string,
	players []string,

) *MsgUpdateLem {
	return &MsgUpdateLem{
		Creator:  creator,
		Index:    index,
		IndexEnd: indexEnd,
		Params:   params,
		Players:  players,
	}
}

func (msg *MsgUpdateLem) Route() string {
	return RouterKey
}

func (msg *MsgUpdateLem) Type() string {
	return "UpdateLem"
}

func (msg *MsgUpdateLem) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateLem) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateLem) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteLem{}

func NewMsgDeleteLem(
	creator string,
	index string,

) *MsgDeleteLem {
	return &MsgDeleteLem{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteLem) Route() string {
	return RouterKey
}

func (msg *MsgDeleteLem) Type() string {
	return "DeleteLem"
}

func (msg *MsgDeleteLem) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteLem) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteLem) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
