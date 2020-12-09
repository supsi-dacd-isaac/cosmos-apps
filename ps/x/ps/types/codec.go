package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
)

// RegisterCodec registers concrete types on codec
func RegisterCodec(cdc *codec.Codec) {
	cdc.RegisterConcrete(MsgSetMeasure{}, "ps/SetMeasure", nil)
	cdc.RegisterConcrete(MsgSetAdmin{}, "ps/SetAdmin", nil)
	cdc.RegisterConcrete(MsgSetParameters{}, "ps/SetParameters", nil)
	cdc.RegisterConcrete(MsgTokensMinting{}, "ps/TokenMinting", nil)
	cdc.RegisterConcrete(MsgCreateMeterAccount{}, "ps/MsgCreateMeterAccount", nil)
}

// ModuleCdc defines the module codec
var ModuleCdc *codec.Codec

func init() {
	ModuleCdc = codec.New()
	RegisterCodec(ModuleCdc)
	codec.RegisterCrypto(ModuleCdc)
	ModuleCdc.Seal()
}
