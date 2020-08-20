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

// Gets the entire Measure metadata struct for a name
func (k Keeper) GetAdmin(ctx sdk.Context, key string) types.Admin {
	store := ctx.KVStore(k.storeKey)

	if !k.IsKVPresent(ctx, key) {
		return types.NewAdmin()
	}

	bz := store.Get([]byte(key))

	var admin types.Admin
	k.cdc.MustUnmarshalBinaryBare(bz, &admin)
	return admin
}

// Check if the name is present in the store or not
func (k Keeper) IsKVPresent(ctx sdk.Context, key string) bool {
	store := ctx.KVStore(k.storeKey)
	return store.Has([]byte(key))
}

// SetName - sets the value string that a name resolves to
func (k Keeper) SetMeasure(ctx sdk.Context, msg types.MsgSetMeasure) {
	// Define the measure key
	measureKey := fmt.Sprintf("energy_%s_%s", msg.Timestamp, msg.MeterId)

	fmt.Println(measureKey)

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

// SetName - sets the value string that a name resolves to
func (k Keeper) SetAdmin(ctx sdk.Context, msg types.MsgSetAdmin) {
	// Get the (eventual) key in the KVStore

	admin := types.NewAdmin()

	// Update the KV instance
	admin.Id = msg.Id
	admin.Account = msg.Account

	// Set the updated dataset
	store := ctx.KVStore(k.storeKey)
	store.Set([]byte("admin"), k.cdc.MustMarshalBinaryBare(admin))
}
