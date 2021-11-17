package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

// SetKpi set a specific kpi in the store from its index
func (k Keeper) SetKpi(ctx sdk.Context, kpi types.Kpi) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KpiKeyPrefix))
	b := k.cdc.MustMarshal(&kpi)
	store.Set(types.KpiKey(
		kpi.Index,
	), b)
}

// GetKpi returns a kpi from its index
func (k Keeper) GetKpi(
	ctx sdk.Context,
	index string,

) (val types.Kpi, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KpiKeyPrefix))

	b := store.Get(types.KpiKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveKpi removes a kpi from the store
func (k Keeper) RemoveKpi(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KpiKeyPrefix))
	store.Delete(types.KpiKey(
		index,
	))
}

// GetAllKpi returns all kpi
func (k Keeper) GetAllKpi(ctx sdk.Context) (list []types.Kpi) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KpiKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Kpi
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
