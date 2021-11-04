package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/supsi-dacd-isaac/cosmos-apps/tsdb/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.TsdbKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
