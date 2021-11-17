package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func (k msgServer) CreateLem(goCtx context.Context, msg *types.MsgCreateLem) (*types.MsgCreateLemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetLem(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var lem = types.Lem{
		Creator: msg.Creator,
		Index:   msg.Index,
		Start:   msg.Start,
		End:     msg.End,
		Params:  msg.Params,
		Players: msg.Players,
	}

	k.SetLem(
		ctx,
		lem,
	)
	return &types.MsgCreateLemResponse{}, nil
}

func (k msgServer) UpdateLem(goCtx context.Context, msg *types.MsgUpdateLem) (*types.MsgUpdateLemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLem(
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

	var lem = types.Lem{
		Creator: msg.Creator,
		Index:   msg.Index,
		Start:   msg.Start,
		End:     msg.End,
		Params:  msg.Params,
		Players: msg.Players,
	}

	k.SetLem(ctx, lem)

	return &types.MsgUpdateLemResponse{}, nil
}

func (k msgServer) DeleteLem(goCtx context.Context, msg *types.MsgDeleteLem) (*types.MsgDeleteLemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLem(
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

	k.RemoveLem(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteLemResponse{}, nil
}
