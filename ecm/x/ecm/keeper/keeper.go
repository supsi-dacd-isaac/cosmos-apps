package keeper

import (
	"fmt"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/ecm/x/ecm/types"
)

// Keeper maintains the link to storage and exposes getter/setter methods for the various parts of the state machine
type Keeper struct {
	CoinKeeper types.BankKeeper

	storeKey sdk.StoreKey // Unexposed key to access store from sdk.Context

	cdc *codec.Codec // The wire codec for binary encoding/decoding.
}

// NewKeeper creates new instances of the ECM Keeper
func NewKeeper(cdc *codec.Codec, storeKey sdk.StoreKey, coinKeeper types.BankKeeper) Keeper {
	return Keeper{
		cdc:        cdc,
		storeKey:   storeKey,
		CoinKeeper: coinKeeper,
	}
}

// Gets the entire Whois metadata struct for a name
func (k Keeper) GetMeasure(ctx sdk.Context, measureId string) types.Measure {
	store := ctx.KVStore(k.storeKey)

	if !k.IsMeasurePresent(ctx, measureId) {
		return types.NewMeasure()
	}

	bz := store.Get([]byte(measureId))

	var measure types.Measure
	k.cdc.MustUnmarshalBinaryBare(bz, &measure)
	return measure
}

// Check if the name is present in the store or not
func (k Keeper) IsMeasurePresent(ctx sdk.Context, measureId string) bool {
	store := ctx.KVStore(k.storeKey)
	return store.Has([]byte(measureId))
}


// SetName - sets the value string that a name resolves to
func (k Keeper) SetMeasure(ctx sdk.Context, msg types.MsgSetMeasure) {
	measureId := (fmt.Sprintf("energy_%s_%s", string(msg.Timestamp), msg.Meter.String()))
	measure := k.GetMeasure(ctx, measureId)

	measure.Signal = "energy"
	measure.Timestamp = msg.Timestamp
	measure.Value = msg.Value
	measure.Meter = msg.Meter
	measure.Cost = msg.Cost

	store := ctx.KVStore(k.storeKey)
	store.Set([]byte(measureId), k.cdc.MustMarshalBinaryBare(measure))
}
