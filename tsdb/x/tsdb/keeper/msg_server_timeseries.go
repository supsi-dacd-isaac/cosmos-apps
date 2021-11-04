package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

func (k msgServer) CreateTimeseries(goCtx context.Context, msg *types.MsgCreateTimeseries) (*types.MsgCreateTimeseriesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var timeseries = types.Timeseries{
		Creator:  msg.Creator,
		Location: msg.Location,
		Signal:   msg.Signal,
	}

	id := k.AppendTimeseries(
		ctx,
		timeseries,
	)

	return &types.MsgCreateTimeseriesResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTimeseries(goCtx context.Context, msg *types.MsgUpdateTimeseries) (*types.MsgUpdateTimeseriesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var timeseries = types.Timeseries{
		Creator:  msg.Creator,
		Id:       msg.Id,
		Location: msg.Location,
		Signal:   msg.Signal,
	}

	// Checks that the element exists
	val, found := k.GetTimeseries(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTimeseries(ctx, timeseries)

	return &types.MsgUpdateTimeseriesResponse{}, nil
}

func (k msgServer) DeleteTimeseries(goCtx context.Context, msg *types.MsgDeleteTimeseries) (*types.MsgDeleteTimeseriesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetTimeseries(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTimeseries(ctx, msg.Id)

	return &types.MsgDeleteTimeseriesResponse{}, nil
}
