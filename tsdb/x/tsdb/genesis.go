package tsdb

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the timeseries
	for _, elem := range genState.TimeseriesList {
		k.SetTimeseries(ctx, elem)
	}

	// Set timeseries count
	k.SetTimeseriesCount(ctx, genState.TimeseriesCount)
	// Set all the measure
	for _, elem := range genState.MeasureList {
		k.SetMeasure(ctx, elem)
	}

	// Set measure count
	k.SetMeasureCount(ctx, genState.MeasureCount)
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.TimeseriesList = k.GetAllTimeseries(ctx)
	genesis.TimeseriesCount = k.GetTimeseriesCount(ctx)
	genesis.MeasureList = k.GetAllMeasure(ctx)
	genesis.MeasureCount = k.GetMeasureCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
