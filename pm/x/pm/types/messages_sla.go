package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateSla{}

func NewMsgCreateSla(
	creator string,
	index string,
	start int32,
	end int32,

) *MsgCreateSla {
	return &MsgCreateSla{
		Creator: creator,
		Index:   index,
		Start:   start,
		End:     end,
	}
}

func (msg *MsgCreateSla) Route() string {
	return RouterKey
}

func (msg *MsgCreateSla) Type() string {
	return "CreateSla"
}

func (msg *MsgCreateSla) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSla) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSla) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSla{}

func NewMsgUpdateSla(
	creator string,
	index string,
	start int32,
	end int32,

) *MsgUpdateSla {
	return &MsgUpdateSla{
		Creator: creator,
		Index:   index,
		Start:   start,
		End:     end,
	}
}

func (msg *MsgUpdateSla) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSla) Type() string {
	return "UpdateSla"
}

func (msg *MsgUpdateSla) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSla) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSla) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSla{}

func NewMsgDeleteSla(
	creator string,
	index string,

) *MsgDeleteSla {
	return &MsgDeleteSla{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteSla) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSla) Type() string {
	return "DeleteSla"
}

func (msg *MsgDeleteSla) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSla) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSla) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
