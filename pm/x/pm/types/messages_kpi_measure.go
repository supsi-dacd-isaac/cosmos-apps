package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateKpiMeasure{}

func NewMsgCreateKpiMeasure(
	creator string,
	index string,
	kpi string,
	player string,
	timestamp int32,
	value string,
	mu string,

) *MsgCreateKpiMeasure {
	return &MsgCreateKpiMeasure{
		Creator:   creator,
		Index:     index,
		Kpi:       kpi,
		Player:    player,
		Timestamp: timestamp,
		Value:     value,
		Mu:        mu,
	}
}

func (msg *MsgCreateKpiMeasure) Route() string {
	return RouterKey
}

func (msg *MsgCreateKpiMeasure) Type() string {
	return "CreateKpiMeasure"
}

func (msg *MsgCreateKpiMeasure) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateKpiMeasure) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateKpiMeasure) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateKpiMeasure{}

func NewMsgUpdateKpiMeasure(
	creator string,
	index string,
	kpi string,
	player string,
	timestamp int32,
	value string,
	mu string,

) *MsgUpdateKpiMeasure {
	return &MsgUpdateKpiMeasure{
		Creator:   creator,
		Index:     index,
		Kpi:       kpi,
		Player:    player,
		Timestamp: timestamp,
		Value:     value,
		Mu:        mu,
	}
}

func (msg *MsgUpdateKpiMeasure) Route() string {
	return RouterKey
}

func (msg *MsgUpdateKpiMeasure) Type() string {
	return "UpdateKpiMeasure"
}

func (msg *MsgUpdateKpiMeasure) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateKpiMeasure) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateKpiMeasure) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteKpiMeasure{}

func NewMsgDeleteKpiMeasure(
	creator string,
	index string,

) *MsgDeleteKpiMeasure {
	return &MsgDeleteKpiMeasure{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteKpiMeasure) Route() string {
	return RouterKey
}

func (msg *MsgDeleteKpiMeasure) Type() string {
	return "DeleteKpiMeasure"
}

func (msg *MsgDeleteKpiMeasure) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteKpiMeasure) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteKpiMeasure) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
