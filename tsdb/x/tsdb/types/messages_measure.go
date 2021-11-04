package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateMeasure{}

func NewMsgCreateMeasure(creator string, timeseriesID string, ts string, value string) *MsgCreateMeasure {
	return &MsgCreateMeasure{
		Creator:      creator,
		TimeseriesID: timeseriesID,
		Ts:           ts,
		Value:        value,
	}
}

func (msg *MsgCreateMeasure) Route() string {
	return RouterKey
}

func (msg *MsgCreateMeasure) Type() string {
	return "CreateMeasure"
}

func (msg *MsgCreateMeasure) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateMeasure) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMeasure) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMeasure{}

func NewMsgUpdateMeasure(creator string, id uint64, timeseriesID string, ts string, value string) *MsgUpdateMeasure {
	return &MsgUpdateMeasure{
		Id:           id,
		Creator:      creator,
		TimeseriesID: timeseriesID,
		Ts:           ts,
		Value:        value,
	}
}

func (msg *MsgUpdateMeasure) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMeasure) Type() string {
	return "UpdateMeasure"
}

func (msg *MsgUpdateMeasure) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateMeasure) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMeasure) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMeasure{}

func NewMsgDeleteMeasure(creator string, id uint64) *MsgDeleteMeasure {
	return &MsgDeleteMeasure{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteMeasure) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMeasure) Type() string {
	return "DeleteMeasure"
}

func (msg *MsgDeleteMeasure) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteMeasure) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMeasure) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
