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
			Idx:     "idx",
			Address: "address",
		},
		Aggregator: &types.Aggregator{
			Idx:     "idx",
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
		LemList: []types.Lem{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		LemMeasureList: []types.LemMeasure{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		SlaList: []types.Sla{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		KpiList: []types.Kpi{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		KpiMeasureList: []types.KpiMeasure{
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
	require.Equal(t, genesisState.Aggregator, got.Aggregator)
	require.Len(t, got.PlayerList, len(genesisState.PlayerList))
	require.Subset(t, genesisState.PlayerList, got.PlayerList)
	require.Len(t, got.LemList, len(genesisState.LemList))
	require.Subset(t, genesisState.LemList, got.LemList)
	require.Len(t, got.LemMeasureList, len(genesisState.LemMeasureList))
	require.Subset(t, genesisState.LemMeasureList, got.LemMeasureList)
	require.Len(t, got.SlaList, len(genesisState.SlaList))
	require.Subset(t, genesisState.SlaList, got.SlaList)
	require.Len(t, got.KpiList, len(genesisState.KpiList))
	require.Subset(t, genesisState.KpiList, got.KpiList)
	require.Len(t, got.KpiMeasureList, len(genesisState.KpiMeasureList))
	require.Subset(t, genesisState.KpiMeasureList, got.KpiMeasureList)
	// this line is used by starport scaffolding # genesis/test/assert
}
