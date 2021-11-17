package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/supsi-dacd-isaac/cosmos-apps/pm/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNKpiMeasure(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.KpiMeasure {
	items := make([]types.KpiMeasure, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetKpiMeasure(ctx, items[i])
	}
	return items
}

func TestKpiMeasureGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNKpiMeasure(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetKpiMeasure(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestKpiMeasureRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNKpiMeasure(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveKpiMeasure(ctx,
			item.Index,
		)
		_, found := keeper.GetKpiMeasure(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestKpiMeasureGetAll(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNKpiMeasure(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllKpiMeasure(ctx))
}
