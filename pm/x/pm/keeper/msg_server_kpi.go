package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func (k msgServer) CreateKpi(goCtx context.Context, msg *types.MsgCreateKpi) (*types.MsgCreateKpiResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetKpi(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var kpi = types.Kpi{
		Creator: msg.Creator,
		Index:   msg.Index,
		Sla:     msg.Sla,
		Rule:    msg.Rule,
		Limit:   msg.Limit,
		Mu:      msg.Mu,
		Penalty: msg.Penalty,
	}

	k.SetKpi(
		ctx,
		kpi,
	)
	return &types.MsgCreateKpiResponse{}, nil
}

func (k msgServer) UpdateKpi(goCtx context.Context, msg *types.MsgUpdateKpi) (*types.MsgUpdateKpiResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetKpi(
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

	var kpi = types.Kpi{
		Creator: msg.Creator,
		Index:   msg.Index,
		Sla:     msg.Sla,
		Rule:    msg.Rule,
		Limit:   msg.Limit,
		Mu:      msg.Mu,
		Penalty: msg.Penalty,
	}

	k.SetKpi(ctx, kpi)

	return &types.MsgUpdateKpiResponse{}, nil
}

func (k msgServer) DeleteKpi(goCtx context.Context, msg *types.MsgDeleteKpi) (*types.MsgDeleteKpiResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetKpi(
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

	k.RemoveKpi(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteKpiResponse{}, nil
}
