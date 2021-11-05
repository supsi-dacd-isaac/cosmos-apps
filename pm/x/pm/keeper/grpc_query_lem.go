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

func (k Keeper) LemAll(c context.Context, req *types.QueryAllLemRequest) (*types.QueryAllLemResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var lems []types.Lem
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	lemStore := prefix.NewStore(store, types.KeyPrefix(types.LemKeyPrefix))

	pageRes, err := query.Paginate(lemStore, req.Pagination, func(key []byte, value []byte) error {
		var lem types.Lem
		if err := k.cdc.Unmarshal(value, &lem); err != nil {
			return err
		}

		lems = append(lems, lem)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllLemResponse{Lem: lems, Pagination: pageRes}, nil
}

func (k Keeper) Lem(c context.Context, req *types.QueryGetLemRequest) (*types.QueryGetLemResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetLem(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetLemResponse{Lem: val}, nil
}
