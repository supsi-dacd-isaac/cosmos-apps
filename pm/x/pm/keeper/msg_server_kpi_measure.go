package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func (k msgServer) CreateKpiMeasure(goCtx context.Context, msg *types.MsgCreateKpiMeasure) (*types.MsgCreateKpiMeasureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetKpiMeasure(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var kpiMeasure = types.KpiMeasure{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Kpi:       msg.Kpi,
		Player:    msg.Player,
		Timestamp: msg.Timestamp,
		Value:     msg.Value,
		Mu:        msg.Mu,
	}

	k.SetKpiMeasure(
		ctx,
		kpiMeasure,
	)
	return &types.MsgCreateKpiMeasureResponse{}, nil
}

func (k msgServer) UpdateKpiMeasure(goCtx context.Context, msg *types.MsgUpdateKpiMeasure) (*types.MsgUpdateKpiMeasureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetKpiMeasure(
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

	var kpiMeasure = types.KpiMeasure{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Kpi:       msg.Kpi,
		Player:    msg.Player,
		Timestamp: msg.Timestamp,
		Value:     msg.Value,
		Mu:        msg.Mu,
	}

	k.SetKpiMeasure(ctx, kpiMeasure)

	return &types.MsgUpdateKpiMeasureResponse{}, nil
}

func (k msgServer) DeleteKpiMeasure(goCtx context.Context, msg *types.MsgDeleteKpiMeasure) (*types.MsgDeleteKpiMeasureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetKpiMeasure(
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

	k.RemoveKpiMeasure(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteKpiMeasureResponse{}, nil
}
