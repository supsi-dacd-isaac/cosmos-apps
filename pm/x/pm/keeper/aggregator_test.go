package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/supsi-dacd-isaac/cosmos-apps/pm/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func createTestAggregator(keeper *keeper.Keeper, ctx sdk.Context) types.Aggregator {
	item := types.Aggregator{}
	keeper.SetAggregator(ctx, item)
	return item
}

func TestAggregatorGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	item := createTestAggregator(keeper, ctx)
	rst, found := keeper.GetAggregator(ctx)
	require.True(t, found)
	require.Equal(t, item, rst)
}
func TestAggregatorRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	createTestAggregator(keeper, ctx)
	keeper.RemoveAggregator(ctx)
	_, found := keeper.GetAggregator(ctx)
	require.False(t, found)
}
