package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateLemMeasure{}

func NewMsgCreateLemMeasure(
	creator string,
	index string,
	player string,
	signal string,
	timestamp int32,
	value string,
	mu string,

) *MsgCreateLemMeasure {
	return &MsgCreateLemMeasure{
		Creator:   creator,
		Index:     index,
		Player:    player,
		Signal:    signal,
		Timestamp: timestamp,
		Value:     value,
		Mu:        mu,
	}
}

func (msg *MsgCreateLemMeasure) Route() string {
	return RouterKey
}

func (msg *MsgCreateLemMeasure) Type() string {
	return "CreateLemMeasure"
}

func (msg *MsgCreateLemMeasure) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateLemMeasure) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateLemMeasure) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateLemMeasure{}

func NewMsgUpdateLemMeasure(
	creator string,
	index string,
	player string,
	signal string,
	timestamp int32,
	value string,
	mu string,

) *MsgUpdateLemMeasure {
	return &MsgUpdateLemMeasure{
		Creator:   creator,
		Index:     index,
		Player:    player,
		Signal:    signal,
		Timestamp: timestamp,
		Value:     value,
		Mu:        mu,
	}
}

func (msg *MsgUpdateLemMeasure) Route() string {
	return RouterKey
}

func (msg *MsgUpdateLemMeasure) Type() string {
	return "UpdateLemMeasure"
}

func (msg *MsgUpdateLemMeasure) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateLemMeasure) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateLemMeasure) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteLemMeasure{}

func NewMsgDeleteLemMeasure(
	creator string,
	index string,

) *MsgDeleteLemMeasure {
	return &MsgDeleteLemMeasure{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteLemMeasure) Route() string {
	return RouterKey
}

func (msg *MsgDeleteLemMeasure) Type() string {
	return "DeleteLemMeasure"
}

func (msg *MsgDeleteLemMeasure) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteLemMeasure) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteLemMeasure) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
