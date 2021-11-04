package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateTimeseries{}, "tsdb/CreateTimeseries", nil)
	cdc.RegisterConcrete(&MsgUpdateTimeseries{}, "tsdb/UpdateTimeseries", nil)
	cdc.RegisterConcrete(&MsgDeleteTimeseries{}, "tsdb/DeleteTimeseries", nil)
	cdc.RegisterConcrete(&MsgCreateMeasure{}, "tsdb/CreateMeasure", nil)
	cdc.RegisterConcrete(&MsgUpdateMeasure{}, "tsdb/UpdateMeasure", nil)
	cdc.RegisterConcrete(&MsgDeleteMeasure{}, "tsdb/DeleteMeasure", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTimeseries{},
		&MsgUpdateTimeseries{},
		&MsgDeleteTimeseries{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMeasure{},
		&MsgUpdateMeasure{},
		&MsgDeleteMeasure{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
