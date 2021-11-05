package pm_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/supsi-dacd-isaac/cosmos-apps/pm/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Dso: &types.Dso{
			Index:   "index",
			Address: "address",
		},
		PlayerList: []types.Player{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		Aggregator: &types.Aggregator{
			Index:   "index",
			Address: "address",
		},
		LemList: []types.Lem{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.PmKeeper(t)
	pm.InitGenesis(ctx, *k, genesisState)
	got := pm.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Equal(t, genesisState.Dso, got.Dso)
	require.Len(t, got.PlayerList, len(genesisState.PlayerList))
	require.Subset(t, genesisState.PlayerList, got.PlayerList)
	require.Equal(t, genesisState.Aggregator, got.Aggregator)
	require.Len(t, got.LemList, len(genesisState.LemList))
	require.Subset(t, genesisState.LemList, got.LemList)
	// this line is used by starport scaffolding # genesis/test/assert
}
