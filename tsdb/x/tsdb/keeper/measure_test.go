package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/supsi-dacd-isaac/cosmos-apps/tsdb/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

func createNMeasure(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Measure {
	items := make([]types.Measure, n)
	for i := range items {
		items[i].Id = keeper.AppendMeasure(ctx, items[i])
	}
	return items
}

func TestMeasureGet(t *testing.T) {
	keeper, ctx := keepertest.TsdbKeeper(t)
	items := createNMeasure(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetMeasure(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestMeasureRemove(t *testing.T) {
	keeper, ctx := keepertest.TsdbKeeper(t)
	items := createNMeasure(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMeasure(ctx, item.Id)
		_, found := keeper.GetMeasure(ctx, item.Id)
		require.False(t, found)
	}
}

func TestMeasureGetAll(t *testing.T) {
	keeper, ctx := keepertest.TsdbKeeper(t)
	items := createNMeasure(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllMeasure(ctx))
}

func TestMeasureCount(t *testing.T) {
	keeper, ctx := keepertest.TsdbKeeper(t)
	items := createNMeasure(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetMeasureCount(ctx))
}
