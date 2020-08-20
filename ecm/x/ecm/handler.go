package ecm

import (
	"fmt"

	"github.com/supsi-dacd-isaac/cosmos-apps/ecm/x/ecm/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// NewHandler returns a handler for "ecm" type messages.
func NewHandler(keeper Keeper) sdk.Handler {
	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		switch msg := msg.(type) {
		case types.MsgSetMeasure:
			return handleMsgSetMeasure(ctx, keeper, msg)
		default:
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, fmt.Sprintf("Unrecognized ecm Msg type: %v", msg.Type()))
		}
	}
}

// Handle a message to set name
func handleMsgSetMeasure(ctx sdk.Context, keeper Keeper, msg types.MsgSetMeasure) (*sdk.Result, error) {
	_, err := keeper.CoinKeeper.SubtractCoins(ctx, msg.Meter, msg.Cost) // If so, deduct the Bid amount from the sender
	if err != nil {
		return nil, err
	}

	keeper.SetMeasure(ctx, msg)
	return &sdk.Result{}, nil
}