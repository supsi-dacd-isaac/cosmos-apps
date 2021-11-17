package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateDso{}, "pm/CreateDso", nil)
	cdc.RegisterConcrete(&MsgUpdateDso{}, "pm/UpdateDso", nil)
	cdc.RegisterConcrete(&MsgDeleteDso{}, "pm/DeleteDso", nil)
	cdc.RegisterConcrete(&MsgCreateAggregator{}, "pm/CreateAggregator", nil)
	cdc.RegisterConcrete(&MsgUpdateAggregator{}, "pm/UpdateAggregator", nil)
	cdc.RegisterConcrete(&MsgDeleteAggregator{}, "pm/DeleteAggregator", nil)
	cdc.RegisterConcrete(&MsgCreatePlayer{}, "pm/CreatePlayer", nil)
	cdc.RegisterConcrete(&MsgUpdatePlayer{}, "pm/UpdatePlayer", nil)
	cdc.RegisterConcrete(&MsgDeletePlayer{}, "pm/DeletePlayer", nil)
	cdc.RegisterConcrete(&MsgCreateLem{}, "pm/CreateLem", nil)
	cdc.RegisterConcrete(&MsgUpdateLem{}, "pm/UpdateLem", nil)
	cdc.RegisterConcrete(&MsgDeleteLem{}, "pm/DeleteLem", nil)
	cdc.RegisterConcrete(&MsgCreateLemMeasure{}, "pm/CreateLemMeasure", nil)
	cdc.RegisterConcrete(&MsgUpdateLemMeasure{}, "pm/UpdateLemMeasure", nil)
	cdc.RegisterConcrete(&MsgDeleteLemMeasure{}, "pm/DeleteLemMeasure", nil)
	cdc.RegisterConcrete(&MsgCreateSla{}, "pm/CreateSla", nil)
	cdc.RegisterConcrete(&MsgUpdateSla{}, "pm/UpdateSla", nil)
	cdc.RegisterConcrete(&MsgDeleteSla{}, "pm/DeleteSla", nil)
	cdc.RegisterConcrete(&MsgCreateKpi{}, "pm/CreateKpi", nil)
	cdc.RegisterConcrete(&MsgUpdateKpi{}, "pm/UpdateKpi", nil)
	cdc.RegisterConcrete(&MsgDeleteKpi{}, "pm/DeleteKpi", nil)
	cdc.RegisterConcrete(&MsgCreateKpiMeasure{}, "pm/CreateKpiMeasure", nil)
	cdc.RegisterConcrete(&MsgUpdateKpiMeasure{}, "pm/UpdateKpiMeasure", nil)
	cdc.RegisterConcrete(&MsgDeleteKpiMeasure{}, "pm/DeleteKpiMeasure", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDso{},
		&MsgUpdateDso{},
		&MsgDeleteDso{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateAggregator{},
		&MsgUpdateAggregator{},
		&MsgDeleteAggregator{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePlayer{},
		&MsgUpdatePlayer{},
		&MsgDeletePlayer{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateLem{},
		&MsgUpdateLem{},
		&MsgDeleteLem{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateLemMeasure{},
		&MsgUpdateLemMeasure{},
		&MsgDeleteLemMeasure{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSla{},
		&MsgUpdateSla{},
		&MsgDeleteSla{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateKpi{},
		&MsgUpdateKpi{},
		&MsgDeleteKpi{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateKpiMeasure{},
		&MsgUpdateKpiMeasure{},
		&MsgDeleteKpiMeasure{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
