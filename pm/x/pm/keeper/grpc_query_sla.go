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

func (k Keeper) SlaAll(c context.Context, req *types.QueryAllSlaRequest) (*types.QueryAllSlaResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var slas []types.Sla
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	slaStore := prefix.NewStore(store, types.KeyPrefix(types.SlaKeyPrefix))

	pageRes, err := query.Paginate(slaStore, req.Pagination, func(key []byte, value []byte) error {
		var sla types.Sla
		if err := k.cdc.Unmarshal(value, &sla); err != nil {
			return err
		}

		slas = append(slas, sla)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSlaResponse{Sla: slas, Pagination: pageRes}, nil
}

func (k Keeper) Sla(c context.Context, req *types.QueryGetSlaRequest) (*types.QueryGetSlaResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSla(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetSlaResponse{Sla: val}, nil
}
