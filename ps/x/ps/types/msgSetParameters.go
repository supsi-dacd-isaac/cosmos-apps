package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSetParameters{}

type MsgSetParameters struct {
	ID             string
	Creator        sdk.AccAddress `json:"creator" yaml:"creator"`
	ProdConvFactor string         `json:"prodConvFactor" yaml:"prodConvFactor"`
	ConsConvFactor string         `json:"consConvFactor" yaml:"consConvFactor"`
	MaxConsumption string         `json:"maxConsumption" yaml:"maxConsumption"`
	Penalty        string         `json:"penalty" yaml:"penalty"`
}

func NewMsgSetParameters(creator sdk.AccAddress, prodConvFactor string, consConvFactor string, maxConsumption string, penalty string) MsgSetParameters {
	return MsgSetParameters{
		Creator:        creator,
		ProdConvFactor: prodConvFactor,
		ConsConvFactor: consConvFactor,
		MaxConsumption: maxConsumption,
		Penalty:        penalty,
	}
}

func (msg MsgSetParameters) Route() string {
	return RouterKey
}

func (msg MsgSetParameters) Type() string {
	return "CreateParameters"
}

func (msg MsgSetParameters) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{sdk.AccAddress(msg.Creator)}
}

func (msg MsgSetParameters) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg MsgSetParameters) ValidateBasic() error {
	if msg.Creator.Empty() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "creator can't be empty")
	}
	return nil
}
