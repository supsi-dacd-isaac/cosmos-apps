package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

// SetDso set dso in the store
func (k Keeper) SetDso(ctx sdk.Context, dso types.Dso) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DsoKey))
	b := k.cdc.MustMarshal(&dso)
	store.Set([]byte{0}, b)
}

// GetDso returns dso
func (k Keeper) GetDso(ctx sdk.Context) (val types.Dso, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DsoKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDso removes dso from the store
func (k Keeper) RemoveDso(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DsoKey))
	store.Delete([]byte{0})
}
