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

func createNLem(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Lem {
	items := make([]types.Lem, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetLem(ctx, items[i])
	}
	return items
}

func TestLemGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNLem(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetLem(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestLemRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNLem(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveLem(ctx,
			item.Index,
		)
		_, found := keeper.GetLem(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestLemGetAll(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNLem(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllLem(ctx))
}
