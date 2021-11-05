package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func (k msgServer) CreatePlayer(goCtx context.Context, msg *types.MsgCreatePlayer) (*types.MsgCreatePlayerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetPlayer(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var player = types.Player{
		Creator: msg.Creator,
		Index:   msg.Index,
		Address: msg.Address,
		Role:    msg.Role,
	}

	k.SetPlayer(
		ctx,
		player,
	)
	return &types.MsgCreatePlayerResponse{}, nil
}

func (k msgServer) UpdatePlayer(goCtx context.Context, msg *types.MsgUpdatePlayer) (*types.MsgUpdatePlayerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPlayer(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var player = types.Player{
		Creator: msg.Creator,
		Index:   msg.Index,
		Address: msg.Address,
		Role:    msg.Role,
	}

	k.SetPlayer(ctx, player)

	return &types.MsgUpdatePlayerResponse{}, nil
}

func (k msgServer) DeletePlayer(goCtx context.Context, msg *types.MsgDeletePlayer) (*types.MsgDeletePlayerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPlayer(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePlayer(
		ctx,
		msg.Index,
	)

	return &types.MsgDeletePlayerResponse{}, nil
}
