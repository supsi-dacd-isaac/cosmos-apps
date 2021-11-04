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

func (k Keeper) MeasureAll(c context.Context, req *types.QueryAllMeasureRequest) (*types.QueryAllMeasureResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var measures []types.Measure
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	measureStore := prefix.NewStore(store, types.KeyPrefix(types.MeasureKey))

	pageRes, err := query.Paginate(measureStore, req.Pagination, func(key []byte, value []byte) error {
		var measure types.Measure
		if err := k.cdc.Unmarshal(value, &measure); err != nil {
			return err
		}

		measures = append(measures, measure)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMeasureResponse{Measure: measures, Pagination: pageRes}, nil
}

func (k Keeper) Measure(c context.Context, req *types.QueryGetMeasureRequest) (*types.QueryGetMeasureResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	measure, found := k.GetMeasure(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetMeasureResponse{Measure: measure}, nil
}
