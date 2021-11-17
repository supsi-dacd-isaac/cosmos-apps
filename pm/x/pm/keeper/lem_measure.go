package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

// SetLemMeasure set a specific lemMeasure in the store from its index
func (k Keeper) SetLemMeasure(ctx sdk.Context, lemMeasure types.LemMeasure) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LemMeasureKeyPrefix))
	b := k.cdc.MustMarshal(&lemMeasure)
	store.Set(types.LemMeasureKey(
		lemMeasure.Index,
	), b)
}

// GetLemMeasure returns a lemMeasure from its index
func (k Keeper) GetLemMeasure(
	ctx sdk.Context,
	index string,

) (val types.LemMeasure, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LemMeasureKeyPrefix))

	b := store.Get(types.LemMeasureKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveLemMeasure removes a lemMeasure from the store
func (k Keeper) RemoveLemMeasure(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LemMeasureKeyPrefix))
	store.Delete(types.LemMeasureKey(
		index,
	))
}

// GetAllLemMeasure returns all lemMeasure
func (k Keeper) GetAllLemMeasure(ctx sdk.Context) (list []types.LemMeasure) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LemMeasureKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.LemMeasure
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
