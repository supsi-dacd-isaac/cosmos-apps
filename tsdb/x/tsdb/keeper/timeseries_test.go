package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/supsi-dacd-isaac/cosmos-apps/tsdb/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

func createNTimeseries(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Timeseries {
	items := make([]types.Timeseries, n)
	for i := range items {
		items[i].Id = keeper.AppendTimeseries(ctx, items[i])
	}
	return items
}

func TestTimeseriesGet(t *testing.T) {
	keeper, ctx := keepertest.TsdbKeeper(t)
	items := createNTimeseries(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetTimeseries(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestTimeseriesRemove(t *testing.T) {
	keeper, ctx := keepertest.TsdbKeeper(t)
	items := createNTimeseries(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTimeseries(ctx, item.Id)
		_, found := keeper.GetTimeseries(ctx, item.Id)
		require.False(t, found)
	}
}

func TestTimeseriesGetAll(t *testing.T) {
	keeper, ctx := keepertest.TsdbKeeper(t)
	items := createNTimeseries(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllTimeseries(ctx))
}

func TestTimeseriesCount(t *testing.T) {
	keeper, ctx := keepertest.TsdbKeeper(t)
	items := createNTimeseries(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetTimeseriesCount(ctx))
}
