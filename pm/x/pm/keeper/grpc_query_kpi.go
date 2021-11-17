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

func (k Keeper) KpiAll(c context.Context, req *types.QueryAllKpiRequest) (*types.QueryAllKpiResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var kpis []types.Kpi
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	kpiStore := prefix.NewStore(store, types.KeyPrefix(types.KpiKeyPrefix))

	pageRes, err := query.Paginate(kpiStore, req.Pagination, func(key []byte, value []byte) error {
		var kpi types.Kpi
		if err := k.cdc.Unmarshal(value, &kpi); err != nil {
			return err
		}

		kpis = append(kpis, kpi)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllKpiResponse{Kpi: kpis, Pagination: pageRes}, nil
}

func (k Keeper) Kpi(c context.Context, req *types.QueryGetKpiRequest) (*types.QueryGetKpiResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetKpi(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetKpiResponse{Kpi: val}, nil
}
