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

func createNSla(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Sla {
	items := make([]types.Sla, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetSla(ctx, items[i])
	}
	return items
}

func TestSlaGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNSla(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSla(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestSlaRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNSla(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSla(ctx,
			item.Index,
		)
		_, found := keeper.GetSla(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestSlaGetAll(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNSla(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllSla(ctx))
}
