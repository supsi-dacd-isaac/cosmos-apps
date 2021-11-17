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

func (k Keeper) LemMeasureAll(c context.Context, req *types.QueryAllLemMeasureRequest) (*types.QueryAllLemMeasureResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var lemMeasures []types.LemMeasure
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	lemMeasureStore := prefix.NewStore(store, types.KeyPrefix(types.LemMeasureKeyPrefix))

	pageRes, err := query.Paginate(lemMeasureStore, req.Pagination, func(key []byte, value []byte) error {
		var lemMeasure types.LemMeasure
		if err := k.cdc.Unmarshal(value, &lemMeasure); err != nil {
			return err
		}

		lemMeasures = append(lemMeasures, lemMeasure)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllLemMeasureResponse{LemMeasure: lemMeasures, Pagination: pageRes}, nil
}

func (k Keeper) LemMeasure(c context.Context, req *types.QueryGetLemMeasureRequest) (*types.QueryGetLemMeasureResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetLemMeasure(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetLemMeasureResponse{LemMeasure: val}, nil
}
