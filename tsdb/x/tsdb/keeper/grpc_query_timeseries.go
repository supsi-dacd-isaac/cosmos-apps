package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TimeseriesAll(c context.Context, req *types.QueryAllTimeseriesRequest) (*types.QueryAllTimeseriesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var timeseriess []types.Timeseries
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	timeseriesStore := prefix.NewStore(store, types.KeyPrefix(types.TimeseriesKey))

	pageRes, err := query.Paginate(timeseriesStore, req.Pagination, func(key []byte, value []byte) error {
		var timeseries types.Timeseries
		if err := k.cdc.Unmarshal(value, &timeseries); err != nil {
			return err
		}

		timeseriess = append(timeseriess, timeseries)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTimeseriesResponse{Timeseries: timeseriess, Pagination: pageRes}, nil
}

func (k Keeper) Timeseries(c context.Context, req *types.QueryGetTimeseriesRequest) (*types.QueryGetTimeseriesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	timeseries, found := k.GetTimeseries(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetTimeseriesResponse{Timeseries: timeseries}, nil
}
