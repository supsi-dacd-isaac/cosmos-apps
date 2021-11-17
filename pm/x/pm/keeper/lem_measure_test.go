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

func createNLemMeasure(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.LemMeasure {
	items := make([]types.LemMeasure, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetLemMeasure(ctx, items[i])
	}
	return items
}

func TestLemMeasureGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNLemMeasure(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetLemMeasure(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestLemMeasureRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNLemMeasure(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveLemMeasure(ctx,
			item.Index,
		)
		_, found := keeper.GetLemMeasure(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestLemMeasureGetAll(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNLemMeasure(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllLemMeasure(ctx))
}
