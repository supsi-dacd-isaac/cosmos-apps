package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func (k msgServer) CreateLemMeasure(goCtx context.Context, msg *types.MsgCreateLemMeasure) (*types.MsgCreateLemMeasureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetLemMeasure(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var lemMeasure = types.LemMeasure{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Player:    msg.Player,
		Signal:    msg.Signal,
		Timestamp: msg.Timestamp,
		Value:     msg.Value,
		Mu:        msg.Mu,
	}

	k.SetLemMeasure(
		ctx,
		lemMeasure,
	)
	return &types.MsgCreateLemMeasureResponse{}, nil
}

func (k msgServer) UpdateLemMeasure(goCtx context.Context, msg *types.MsgUpdateLemMeasure) (*types.MsgUpdateLemMeasureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLemMeasure(
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

	var lemMeasure = types.LemMeasure{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Player:    msg.Player,
		Signal:    msg.Signal,
		Timestamp: msg.Timestamp,
		Value:     msg.Value,
		Mu:        msg.Mu,
	}

	k.SetLemMeasure(ctx, lemMeasure)

	return &types.MsgUpdateLemMeasureResponse{}, nil
}

func (k msgServer) DeleteLemMeasure(goCtx context.Context, msg *types.MsgDeleteLemMeasure) (*types.MsgDeleteLemMeasureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLemMeasure(
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

	k.RemoveLemMeasure(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteLemMeasureResponse{}, nil
}
