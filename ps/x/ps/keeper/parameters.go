package keeper

import (
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
)

func (k Keeper) SetParameters(ctx sdk.Context, parameters types.Parameters) {
	store := ctx.KVStore(k.storeKey)

	key := []byte("params")
	value := k.cdc.MustMarshalBinaryLengthPrefixed(parameters)
	store.Set(key, value)
}

// Gets the entire Measure metadata struct for a name
func (k Keeper) GetParameters(ctx sdk.Context) types.Parameters {
	key := "params"
	store := ctx.KVStore(k.storeKey)

	if !k.IsKVPresent(ctx, key) {
		return types.NewParameters()
	}

	bz := store.Get([]byte(key))

	var pars types.Parameters
	k.cdc.MustUnmarshalBinaryLengthPrefixed(bz, &pars)
	return pars
}

func queryListParameters(ctx sdk.Context, k Keeper) ([]byte, error) {
	var parametersList []types.Parameters
	store := ctx.KVStore(k.storeKey)

	iterator := sdk.KVStorePrefixIterator(store, []byte("params"))
	for ; iterator.Valid(); iterator.Next() {
		var parameters types.Parameters
		k.cdc.MustUnmarshalBinaryLengthPrefixed(store.Get(iterator.Key()), &parameters)
		parametersList = append(parametersList, parameters)
		break
	}

	res := codec.MustMarshalJSONIndent(k.cdc, parametersList)
	return res, nil
}
