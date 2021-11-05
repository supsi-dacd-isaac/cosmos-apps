package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/supsi-dacd-isaac/cosmos-apps/pm/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func createTestDso(keeper *keeper.Keeper, ctx sdk.Context) types.Dso {
	item := types.Dso{}
	keeper.SetDso(ctx, item)
	return item
}

func TestDsoGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	item := createTestDso(keeper, ctx)
	rst, found := keeper.GetDso(ctx)
	require.True(t, found)
	require.Equal(t, item, rst)
}
func TestDsoRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	createTestDso(keeper, ctx)
	keeper.RemoveDso(ctx)
	_, found := keeper.GetDso(ctx)
	require.False(t, found)
}
