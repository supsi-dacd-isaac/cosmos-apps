package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateAggregator{}

func NewMsgCreateAggregator(creator string, index string, address string) *MsgCreateAggregator {
	return &MsgCreateAggregator{
		Creator: creator,
		Index:   index,
		Address: address,
	}
}

func (msg *MsgCreateAggregator) Route() string {
	return RouterKey
}

func (msg *MsgCreateAggregator) Type() string {
	return "CreateAggregator"
}

func (msg *MsgCreateAggregator) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAggregator) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAggregator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateAggregator{}

func NewMsgUpdateAggregator(creator string, index string, address string) *MsgUpdateAggregator {
	return &MsgUpdateAggregator{
		Creator: creator,
		Index:   index,
		Address: address,
	}
}

func (msg *MsgUpdateAggregator) Route() string {
	return RouterKey
}

func (msg *MsgUpdateAggregator) Type() string {
	return "UpdateAggregator"
}

func (msg *MsgUpdateAggregator) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateAggregator) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateAggregator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteAggregator{}

func NewMsgDeleteAggregator(creator string) *MsgDeleteAggregator {
	return &MsgDeleteAggregator{
		Creator: creator,
	}
}
func (msg *MsgDeleteAggregator) Route() string {
	return RouterKey
}

func (msg *MsgDeleteAggregator) Type() string {
	return "DeleteAggregator"
}

func (msg *MsgDeleteAggregator) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteAggregator) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteAggregator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
