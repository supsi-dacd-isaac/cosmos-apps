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

func (k Keeper) PlayerAll(c context.Context, req *types.QueryAllPlayerRequest) (*types.QueryAllPlayerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var players []types.Player
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	playerStore := prefix.NewStore(store, types.KeyPrefix(types.PlayerKeyPrefix))

	pageRes, err := query.Paginate(playerStore, req.Pagination, func(key []byte, value []byte) error {
		var player types.Player
		if err := k.cdc.Unmarshal(value, &player); err != nil {
			return err
		}

		players = append(players, player)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPlayerResponse{Player: players, Pagination: pageRes}, nil
}

func (k Keeper) Player(c context.Context, req *types.QueryGetPlayerRequest) (*types.QueryGetPlayerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetPlayer(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetPlayerResponse{Player: val}, nil
}
