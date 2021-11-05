package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

// SetAggregator set aggregator in the store
func (k Keeper) SetAggregator(ctx sdk.Context, aggregator types.Aggregator) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AggregatorKey))
	b := k.cdc.MustMarshal(&aggregator)
	store.Set([]byte{0}, b)
}

// GetAggregator returns aggregator
func (k Keeper) GetAggregator(ctx sdk.Context) (val types.Aggregator, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AggregatorKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAggregator removes aggregator from the store
func (k Keeper) RemoveAggregator(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AggregatorKey))
	store.Delete([]byte{0})
}
