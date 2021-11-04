package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

// GetTimeseriesCount get the total number of timeseries
func (k Keeper) GetTimeseriesCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TimeseriesCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetTimeseriesCount set the total number of timeseries
func (k Keeper) SetTimeseriesCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TimeseriesCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendTimeseries appends a timeseries in the store with a new id and update the count
func (k Keeper) AppendTimeseries(
	ctx sdk.Context,
	timeseries types.Timeseries,
) uint64 {
	// Create the timeseries
	count := k.GetTimeseriesCount(ctx)

	// Set the ID of the appended value
	timeseries.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeseriesKey))
	appendedValue := k.cdc.MustMarshal(&timeseries)
	store.Set(GetTimeseriesIDBytes(timeseries.Id), appendedValue)

	// Update timeseries count
	k.SetTimeseriesCount(ctx, count+1)

	return count
}

// SetTimeseries set a specific timeseries in the store
func (k Keeper) SetTimeseries(ctx sdk.Context, timeseries types.Timeseries) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeseriesKey))
	b := k.cdc.MustMarshal(&timeseries)
	store.Set(GetTimeseriesIDBytes(timeseries.Id), b)
}

// GetTimeseries returns a timeseries from its id
func (k Keeper) GetTimeseries(ctx sdk.Context, id uint64) (val types.Timeseries, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeseriesKey))
	b := store.Get(GetTimeseriesIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTimeseries removes a timeseries from the store
func (k Keeper) RemoveTimeseries(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeseriesKey))
	store.Delete(GetTimeseriesIDBytes(id))
}

// GetAllTimeseries returns all timeseries
func (k Keeper) GetAllTimeseries(ctx sdk.Context) (list []types.Timeseries) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeseriesKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Timeseries
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTimeseriesIDBytes returns the byte representation of the ID
func GetTimeseriesIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTimeseriesIDFromBytes returns ID in uint64 format from a byte array
func GetTimeseriesIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
