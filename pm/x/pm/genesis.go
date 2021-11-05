package pm

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.Dso != nil {
		k.SetDso(ctx, *genState.Dso)
	}
	// Set all the player
	for _, elem := range genState.PlayerList {
		k.SetPlayer(ctx, elem)
	}
	// Set if defined
	if genState.Aggregator != nil {
		k.SetAggregator(ctx, *genState.Aggregator)
	}
	// Set all the lem
	for _, elem := range genState.LemList {
		k.SetLem(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// Get all dso
	dso, found := k.GetDso(ctx)
	if found {
		genesis.Dso = &dso
	}
	genesis.PlayerList = k.GetAllPlayer(ctx)
	// Get all aggregator
	aggregator, found := k.GetAggregator(ctx)
	if found {
		genesis.Aggregator = &aggregator
	}
	genesis.LemList = k.GetAllLem(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
