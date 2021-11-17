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

func TestKpiMeasureQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNKpiMeasure(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetKpiMeasureRequest
		response *types.QueryGetKpiMeasureResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetKpiMeasureRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetKpiMeasureResponse{KpiMeasure: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetKpiMeasureRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetKpiMeasureResponse{KpiMeasure: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetKpiMeasureRequest{
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
			response, err := keeper.KpiMeasure(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Equal(t, tc.response, response)
			}
		})
	}
}

func TestKpiMeasureQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNKpiMeasure(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllKpiMeasureRequest {
		return &types.QueryAllKpiMeasureRequest{
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
			resp, err := keeper.KpiMeasureAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.KpiMeasure), step)
			require.Subset(t, msgs, resp.KpiMeasure)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.KpiMeasureAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.KpiMeasure), step)
			require.Subset(t, msgs, resp.KpiMeasure)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.KpiMeasureAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.KpiMeasureAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
