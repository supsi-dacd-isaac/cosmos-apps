package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateKpi{}

func NewMsgCreateKpi(
	creator string,
	index string,
	sla string,
	rule string,
	limit string,
	mu string,
	penalty int32,

) *MsgCreateKpi {
	return &MsgCreateKpi{
		Creator: creator,
		Index:   index,
		Sla:     sla,
		Rule:    rule,
		Limit:   limit,
		Mu:      mu,
		Penalty: penalty,
	}
}

func (msg *MsgCreateKpi) Route() string {
	return RouterKey
}

func (msg *MsgCreateKpi) Type() string {
	return "CreateKpi"
}

func (msg *MsgCreateKpi) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateKpi) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateKpi) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateKpi{}

func NewMsgUpdateKpi(
	creator string,
	index string,
	sla string,
	rule string,
	limit string,
	mu string,
	penalty int32,

) *MsgUpdateKpi {
	return &MsgUpdateKpi{
		Creator: creator,
		Index:   index,
		Sla:     sla,
		Rule:    rule,
		Limit:   limit,
		Mu:      mu,
		Penalty: penalty,
	}
}

func (msg *MsgUpdateKpi) Route() string {
	return RouterKey
}

func (msg *MsgUpdateKpi) Type() string {
	return "UpdateKpi"
}

func (msg *MsgUpdateKpi) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateKpi) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateKpi) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteKpi{}

func NewMsgDeleteKpi(
	creator string,
	index string,

) *MsgDeleteKpi {
	return &MsgDeleteKpi{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteKpi) Route() string {
	return RouterKey
}

func (msg *MsgDeleteKpi) Type() string {
	return "DeleteKpi"
}

func (msg *MsgDeleteKpi) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteKpi) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteKpi) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
