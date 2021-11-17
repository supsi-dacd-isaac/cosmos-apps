package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

// SetKpiMeasure set a specific kpiMeasure in the store from its index
func (k Keeper) SetKpiMeasure(ctx sdk.Context, kpiMeasure types.KpiMeasure) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KpiMeasureKeyPrefix))
	b := k.cdc.MustMarshal(&kpiMeasure)
	store.Set(types.KpiMeasureKey(
		kpiMeasure.Index,
	), b)
}

// GetKpiMeasure returns a kpiMeasure from its index
func (k Keeper) GetKpiMeasure(
	ctx sdk.Context,
	index string,

) (val types.KpiMeasure, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KpiMeasureKeyPrefix))

	b := store.Get(types.KpiMeasureKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveKpiMeasure removes a kpiMeasure from the store
func (k Keeper) RemoveKpiMeasure(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KpiMeasureKeyPrefix))
	store.Delete(types.KpiMeasureKey(
		index,
	))
}

// GetAllKpiMeasure returns all kpiMeasure
func (k Keeper) GetAllKpiMeasure(ctx sdk.Context) (list []types.KpiMeasure) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KpiMeasureKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.KpiMeasure
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
