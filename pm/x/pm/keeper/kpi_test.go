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

func createNKpi(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Kpi {
	items := make([]types.Kpi, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetKpi(ctx, items[i])
	}
	return items
}

func TestKpiGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNKpi(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetKpi(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestKpiRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNKpi(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveKpi(ctx,
			item.Index,
		)
		_, found := keeper.GetKpi(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestKpiGetAll(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNKpi(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllKpi(ctx))
}
