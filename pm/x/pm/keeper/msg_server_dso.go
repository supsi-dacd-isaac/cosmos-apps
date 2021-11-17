package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func (k msgServer) CreateDso(goCtx context.Context, msg *types.MsgCreateDso) (*types.MsgCreateDsoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetDso(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var dso = types.Dso{
		Creator: msg.Creator,
		Idx:     msg.Idx,
		Address: msg.Address,
	}

	k.SetDso(
		ctx,
		dso,
	)
	return &types.MsgCreateDsoResponse{}, nil
}

func (k msgServer) UpdateDso(goCtx context.Context, msg *types.MsgUpdateDso) (*types.MsgUpdateDsoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetDso(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var dso = types.Dso{
		Creator: msg.Creator,
		Idx:     msg.Idx,
		Address: msg.Address,
	}

	k.SetDso(ctx, dso)

	return &types.MsgUpdateDsoResponse{}, nil
}

func (k msgServer) DeleteDso(goCtx context.Context, msg *types.MsgDeleteDso) (*types.MsgDeleteDsoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetDso(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDso(ctx)

	return &types.MsgDeleteDsoResponse{}, nil
}
