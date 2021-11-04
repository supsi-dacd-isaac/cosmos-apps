package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateTimeseries{}

func NewMsgCreateTimeseries(creator string, location string, signal string) *MsgCreateTimeseries {
	return &MsgCreateTimeseries{
		Creator:  creator,
		Location: location,
		Signal:   signal,
	}
}

func (msg *MsgCreateTimeseries) Route() string {
	return RouterKey
}

func (msg *MsgCreateTimeseries) Type() string {
	return "CreateTimeseries"
}

func (msg *MsgCreateTimeseries) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTimeseries) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTimeseries) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateTimeseries{}

func NewMsgUpdateTimeseries(creator string, id uint64, location string, signal string) *MsgUpdateTimeseries {
	return &MsgUpdateTimeseries{
		Id:       id,
		Creator:  creator,
		Location: location,
		Signal:   signal,
	}
}

func (msg *MsgUpdateTimeseries) Route() string {
	return RouterKey
}

func (msg *MsgUpdateTimeseries) Type() string {
	return "UpdateTimeseries"
}

func (msg *MsgUpdateTimeseries) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateTimeseries) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateTimeseries) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteTimeseries{}

func NewMsgDeleteTimeseries(creator string, id uint64) *MsgDeleteTimeseries {
	return &MsgDeleteTimeseries{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteTimeseries) Route() string {
	return RouterKey
}

func (msg *MsgDeleteTimeseries) Type() string {
	return "DeleteTimeseries"
}

func (msg *MsgDeleteTimeseries) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteTimeseries) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteTimeseries) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
