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

func createNPlayer(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Player {
	items := make([]types.Player, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetPlayer(ctx, items[i])
	}
	return items
}

func TestPlayerGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNPlayer(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetPlayer(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestPlayerRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNPlayer(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePlayer(ctx,
			item.Index,
		)
		_, found := keeper.GetPlayer(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestPlayerGetAll(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNPlayer(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllPlayer(ctx))
}
