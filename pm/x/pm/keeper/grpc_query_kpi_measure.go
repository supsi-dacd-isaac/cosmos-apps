package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) KpiMeasureAll(c context.Context, req *types.QueryAllKpiMeasureRequest) (*types.QueryAllKpiMeasureResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var kpiMeasures []types.KpiMeasure
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	kpiMeasureStore := prefix.NewStore(store, types.KeyPrefix(types.KpiMeasureKeyPrefix))

	pageRes, err := query.Paginate(kpiMeasureStore, req.Pagination, func(key []byte, value []byte) error {
		var kpiMeasure types.KpiMeasure
		if err := k.cdc.Unmarshal(value, &kpiMeasure); err != nil {
			return err
		}

		kpiMeasures = append(kpiMeasures, kpiMeasure)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllKpiMeasureResponse{KpiMeasure: kpiMeasures, Pagination: pageRes}, nil
}

func (k Keeper) KpiMeasure(c context.Context, req *types.QueryGetKpiMeasureRequest) (*types.QueryGetKpiMeasureResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetKpiMeasure(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetKpiMeasureResponse{KpiMeasure: val}, nil
}
