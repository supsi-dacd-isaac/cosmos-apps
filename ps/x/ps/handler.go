package ps

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/utils"
	"strconv"
)

// NewHandler returns a handler for "ecm" type messages.
func NewHandler(keeper Keeper) sdk.Handler {
	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		switch msg := msg.(type) {
		case types.MsgSetAdmin:
			return handleMsgSetAdmin(ctx, keeper, msg)
		case types.MsgSetMeasure:
			return handleMsgSetMeasure(ctx, keeper, msg)
		case types.MsgSetParameters:
			return handleMsgSetParameters(ctx, keeper, msg)
		case types.MsgTokensMinting:
			return handleMsgTokensMinting(ctx, keeper, msg)
		case types.MsgCreateMeterAccount:
			return handleMsgCreateMeterAccount(ctx, keeper, msg)
		default:
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, fmt.Sprintf("Unrecognized Msg type: %v", msg.Type()))
		}
	}
}

// Handle a message to set name
func handleMsgSetMeasure(ctx sdk.Context, keeper Keeper, msg types.MsgSetMeasure) (*sdk.Result, error) {
	// Update the cost according to the conversion factor
	pars := keeper.GetParameters(ctx)

	// If signal is related to a consumed/produced energy then tokens are burnt/minted
	if msg.Signal == "E_cons" {
		val, _ := strconv.ParseFloat(msg.Value, 64)
		strCoins := fmt.Sprintf("%d%s", int(val), types.TokenName)
		coins, _ := sdk.ParseCoins(strCoins)
		coins = utils.MulCoins(coins, pars.ConsConvFactor)
		_, err := keeper.CoinKeeper.SubtractCoins(ctx, msg.Account, coins)
		if err != nil {
			return nil, nil
		}
	} else if msg.Signal == "E_prod" {
		val, _ := strconv.ParseFloat(msg.Value, 64)
		strCoins := fmt.Sprintf("%d%s", int(val), types.TokenName)
		coins, _ := sdk.ParseCoins(strCoins)
		coins = utils.MulCoins(coins, pars.ProdConvFactor)
		_, err := keeper.CoinKeeper.AddCoins(ctx, msg.Account, coins)
		if err != nil {
			return nil, nil
		}
	}

	keeper.SetMeasure(ctx, msg)
	return &sdk.Result{}, nil
}

// Handle a message to set the admin register
func handleMsgSetAdmin(ctx sdk.Context, keeper Keeper, msg types.MsgSetAdmin) (*sdk.Result, error) {

	keeper.SetAdmin(ctx, msg)
	return &sdk.Result{}, nil
}

// Handle a message to mint tokens
func handleMsgTokensMinting(ctx sdk.Context, keeper Keeper, msg types.MsgTokensMinting) (*sdk.Result, error) {
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

	keeper.SetParameters(ctx, parameters)
	return &sdk.Result{Events: ctx.EventManager().Events()}, nil
}

// Handle a message to create an istance meter-account
func handleMsgCreateMeterAccount(ctx sdk.Context, keeper Keeper, msg types.MsgCreateMeterAccount) (*sdk.Result, error) {
	var meterAccount = types.MeterAccount{
		Meter:   msg.Meter,
		Account: msg.Account,
		Admin:   msg.Admin,
	}

	keeper.CreateMeterAccount(ctx, meterAccount)
	return &sdk.Result{Events: ctx.EventManager().Events()}, nil
}
