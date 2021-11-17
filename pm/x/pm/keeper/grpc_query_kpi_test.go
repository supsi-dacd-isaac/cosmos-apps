package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/supsi-dacd-isaac/cosmos-apps/pm/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestKpiQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNKpi(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetKpiRequest
		response *types.QueryGetKpiResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetKpiRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetKpiResponse{Kpi: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetKpiRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetKpiResponse{Kpi: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetKpiRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Kpi(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Equal(t, tc.response, response)
			}
		})
	}
}

func TestKpiQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNKpi(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllKpiRequest {
		return &types.QueryAllKpiRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.KpiAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Kpi), step)
			require.Subset(t, msgs, resp.Kpi)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.KpiAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Kpi), step)
			require.Subset(t, msgs, resp.Kpi)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.KpiAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.KpiAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
