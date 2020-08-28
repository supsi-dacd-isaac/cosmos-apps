package keeper

import (
	"fmt"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-app/ps/x/ps/types"
)

// Gets the entire Measure metadata struct for a name
func (k Keeper) GetMeasure(ctx sdk.Context, measureId string) types.Measure {
	store := ctx.KVStore(k.storeKey)

	if !k.IsKVPresent(ctx, measureId) {
		return types.NewMeasure()
	}

	bz := store.Get([]byte(measureId))

	var measure types.Measure
	k.cdc.MustUnmarshalBinaryBare(bz, &measure)
	return measure
}

// SetName - sets the value string that a name resolves to
func (k Keeper) SetMeasure(ctx sdk.Context, msg types.MsgSetMeasure) {
	// Define the measure key
	measureKey := fmt.Sprintf("energy_%s_%s", msg.Timestamp, msg.MeterId)

	// Get the (eventual) key in the KVStore
	measure := k.GetMeasure(ctx, measureKey)

	// Update the KV instance
	measure.Signal = msg.Signal
	measure.Timestamp = msg.Timestamp
	measure.Value = msg.Value
	measure.MeterId = msg.MeterId
	measure.Cost = msg.Cost
	measure.Account = msg.Account

	// Set the updated dataset
	store := ctx.KVStore(k.storeKey)
	store.Set([]byte(measureKey), k.cdc.MustMarshalBinaryBare(measure))
}

func queryMeasure(ctx sdk.Context, path []string, keeper Keeper) ([]byte, error) {
	measure := keeper.GetMeasure(ctx, path[0])

	res, err := codec.MarshalJSONIndent(keeper.cdc, measure)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error())
	}

	return res, nil
}
