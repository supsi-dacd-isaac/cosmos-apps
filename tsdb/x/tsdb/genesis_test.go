package tsdb_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/supsi-dacd-isaac/cosmos-apps/tsdb/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		TimeseriesList: []types.Timeseries{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		TimeseriesCount: 2,
		MeasureList: []types.Measure{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		MeasureCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TsdbKeeper(t)
	tsdb.InitGenesis(ctx, *k, genesisState)
	got := tsdb.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.TimeseriesList, len(genesisState.TimeseriesList))
	require.Subset(t, genesisState.TimeseriesList, got.TimeseriesList)
	require.Equal(t, genesisState.TimeseriesCount, got.TimeseriesCount)
	require.Len(t, got.MeasureList, len(genesisState.MeasureList))
	require.Subset(t, genesisState.MeasureList, got.MeasureList)
	require.Equal(t, genesisState.MeasureCount, got.MeasureCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
