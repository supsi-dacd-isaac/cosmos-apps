package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

func (k msgServer) CreateMeasure(goCtx context.Context, msg *types.MsgCreateMeasure) (*types.MsgCreateMeasureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var measure = types.Measure{
		Creator:      msg.Creator,
		TimeseriesID: msg.TimeseriesID,
		Ts:           msg.Ts,
		Value:        msg.Value,
	}

	id := k.AppendMeasure(
		ctx,
		measure,
	)

	return &types.MsgCreateMeasureResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateMeasure(goCtx context.Context, msg *types.MsgUpdateMeasure) (*types.MsgUpdateMeasureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var measure = types.Measure{
		Creator:      msg.Creator,
		Id:           msg.Id,
		TimeseriesID: msg.TimeseriesID,
		Ts:           msg.Ts,
		Value:        msg.Value,
	}

	// Checks that the element exists
	val, found := k.GetMeasure(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetMeasure(ctx, measure)

	return &types.MsgUpdateMeasureResponse{}, nil
}

func (k msgServer) DeleteMeasure(goCtx context.Context, msg *types.MsgDeleteMeasure) (*types.MsgDeleteMeasureResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetMeasure(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMeasure(ctx, msg.Id)

	return &types.MsgDeleteMeasureResponse{}, nil
}
