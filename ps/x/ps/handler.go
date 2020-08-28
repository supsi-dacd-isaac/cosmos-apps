package ps

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
)

// NewHandler returns a handler for "ecm" type messages.
func NewHandler(keeper Keeper) sdk.Handler {
	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		switch msg := msg.(type) {
		case types.MsgSetAdmin:
			return handleMsgSetAdmin(ctx, keeper, msg)
		case types.MsgSetMeasure:
			return handleMsgSetMeasure(ctx, keeper, msg)
		case types.MsgSetAllowed:
			return handleMsgSetAllowed(ctx, keeper, msg)
		case types.MsgSetParameters:
			return handleMsgSetParameters(ctx, keeper, msg)
		case types.MsgTokensMinting:
			return handleMsgTokensMinting(ctx, keeper, msg)
		default:
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, fmt.Sprintf("Unrecognized Msg type: %v", msg.Type()))
		}
	}
}

// Handle a message to set name
func handleMsgSetMeasure(ctx sdk.Context, keeper Keeper, msg types.MsgSetMeasure) (*sdk.Result, error) {
	// Check the allowance
	if !keeper.IsAllowed(ctx, msg.MeterId) {
		return nil, nil
	}

	_, err := keeper.CoinKeeper.SubtractCoins(ctx, msg.Account, msg.Cost) // If so, deduct the Bid amount from the sender
	if err != nil {
		return nil, err
	}

	keeper.SetMeasure(ctx, msg)
	return &sdk.Result{}, nil
}

// Handle a message to set the admin register
func handleMsgSetAdmin(ctx sdk.Context, keeper Keeper, msg types.MsgSetAdmin) (*sdk.Result, error) {

	// Check if the account doing the transaction is not the administrator
	if !keeper.IsAdmin(ctx) {
		return nil, nil
	}

	keeper.SetAdmin(ctx, msg)
	return &sdk.Result{}, nil
}

// Handle a message to set the allowed register
func handleMsgSetAllowed(ctx sdk.Context, keeper Keeper, msg types.MsgSetAllowed) (*sdk.Result, error) {

	// Check if the account doing the transaction is not the administrator
	if !keeper.IsAdmin(ctx) {
		return nil, nil
	}

	keeper.SetAllowed(ctx, msg)
	return &sdk.Result{}, nil
}

// Handle a message to mint tokens
func handleMsgTokensMinting(ctx sdk.Context, keeper Keeper, msg types.MsgTokensMinting) (*sdk.Result, error) {
	// Check if the minter is the administrator
	if !keeper.IsAdmin(ctx) {
		return nil, nil
	}

	_, err := keeper.CoinKeeper.AddCoins(ctx, msg.Recipient, msg.Amount)
	if err != nil {
		return nil, err
	}

	return &sdk.Result{}, nil
}

// Handle a message to set the parameters
func handleMsgSetParameters(ctx sdk.Context, keeper Keeper, msg types.MsgSetParameters) (*sdk.Result, error) {
	var parameters = types.Parameters{
		Creator:        msg.Creator,
		ProdConvFactor: msg.ProdConvFactor,
		ConsConvFactor: msg.ConsConvFactor,
		MaxConsumption: msg.MaxConsumption,
		Penalty:        msg.Penalty,
	}

	// Check if the account doing the transaction is the administrator
	if !keeper.IsAdmin(ctx) {
		return nil, nil
	}

	keeper.SetParameters(ctx, parameters)

	return &sdk.Result{Events: ctx.EventManager().Events()}, nil
}
