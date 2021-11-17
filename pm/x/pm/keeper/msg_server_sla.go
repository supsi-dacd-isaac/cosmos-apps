package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func (k msgServer) CreateSla(goCtx context.Context, msg *types.MsgCreateSla) (*types.MsgCreateSlaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetSla(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var sla = types.Sla{
		Creator: msg.Creator,
		Index:   msg.Index,
		Start:   msg.Start,
		End:     msg.End,
	}

	k.SetSla(
		ctx,
		sla,
	)
	return &types.MsgCreateSlaResponse{}, nil
}

func (k msgServer) UpdateSla(goCtx context.Context, msg *types.MsgUpdateSla) (*types.MsgUpdateSlaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetSla(
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

	var sla = types.Sla{
		Creator: msg.Creator,
		Index:   msg.Index,
		Start:   msg.Start,
		End:     msg.End,
	}

	k.SetSla(ctx, sla)

	return &types.MsgUpdateSlaResponse{}, nil
}

func (k msgServer) DeleteSla(goCtx context.Context, msg *types.MsgDeleteSla) (*types.MsgDeleteSlaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetSla(
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

	k.RemoveSla(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteSlaResponse{}, nil
}
