package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

// SetLem set a specific lem in the store from its index
func (k Keeper) SetLem(ctx sdk.Context, lem types.Lem) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LemKeyPrefix))
	b := k.cdc.MustMarshal(&lem)
	store.Set(types.LemKey(
		lem.Index,
	), b)
}

// GetLem returns a lem from its index
func (k Keeper) GetLem(
	ctx sdk.Context,
	index string,

) (val types.Lem, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LemKeyPrefix))

	b := store.Get(types.LemKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveLem removes a lem from the store
func (k Keeper) RemoveLem(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LemKeyPrefix))
	store.Delete(types.LemKey(
		index,
	))
}

// GetAllLem returns all lem
func (k Keeper) GetAllLem(ctx sdk.Context) (list []types.Lem) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LemKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Lem
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
