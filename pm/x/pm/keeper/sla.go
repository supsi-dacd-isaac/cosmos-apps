package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

// SetSla set a specific sla in the store from its index
func (k Keeper) SetSla(ctx sdk.Context, sla types.Sla) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SlaKeyPrefix))
	b := k.cdc.MustMarshal(&sla)
	store.Set(types.SlaKey(
		sla.Index,
	), b)
}

// GetSla returns a sla from its index
func (k Keeper) GetSla(
	ctx sdk.Context,
	index string,

) (val types.Sla, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SlaKeyPrefix))

	b := store.Get(types.SlaKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSla removes a sla from the store
func (k Keeper) RemoveSla(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SlaKeyPrefix))
	store.Delete(types.SlaKey(
		index,
	))
}

// GetAllSla returns all sla
func (k Keeper) GetAllSla(ctx sdk.Context) (list []types.Sla) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SlaKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Sla
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
