package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func (k msgServer) CreateAggregator(goCtx context.Context, msg *types.MsgCreateAggregator) (*types.MsgCreateAggregatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetAggregator(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var aggregator = types.Aggregator{
		Creator: msg.Creator,
		Idx:     msg.Idx,
		Address: msg.Address,
	}

	k.SetAggregator(
		ctx,
		aggregator,
	)
	return &types.MsgCreateAggregatorResponse{}, nil
}

func (k msgServer) UpdateAggregator(goCtx context.Context, msg *types.MsgUpdateAggregator) (*types.MsgUpdateAggregatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetAggregator(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var aggregator = types.Aggregator{
		Creator: msg.Creator,
		Idx:     msg.Idx,
		Address: msg.Address,
	}

	k.SetAggregator(ctx, aggregator)

	return &types.MsgUpdateAggregatorResponse{}, nil
}

func (k msgServer) DeleteAggregator(goCtx context.Context, msg *types.MsgDeleteAggregator) (*types.MsgDeleteAggregatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetAggregator(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveAggregator(ctx)

	return &types.MsgDeleteAggregatorResponse{}, nil
}
