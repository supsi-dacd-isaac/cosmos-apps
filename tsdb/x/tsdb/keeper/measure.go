package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

// GetMeasureCount get the total number of measure
func (k Keeper) GetMeasureCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.MeasureCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetMeasureCount set the total number of measure
func (k Keeper) SetMeasureCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.MeasureCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendMeasure appends a measure in the store with a new id and update the count
func (k Keeper) AppendMeasure(
	ctx sdk.Context,
	measure types.Measure,
) uint64 {
	// Create the measure
	count := k.GetMeasureCount(ctx)

	// Set the ID of the appended value
	measure.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeasureKey))
	appendedValue := k.cdc.MustMarshal(&measure)
	store.Set(GetMeasureIDBytes(measure.Id), appendedValue)

	// Update measure count
	k.SetMeasureCount(ctx, count+1)

	return count
}

// SetMeasure set a specific measure in the store
func (k Keeper) SetMeasure(ctx sdk.Context, measure types.Measure) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeasureKey))
	b := k.cdc.MustMarshal(&measure)
	store.Set(GetMeasureIDBytes(measure.Id), b)
}

// GetMeasure returns a measure from its id
func (k Keeper) GetMeasure(ctx sdk.Context, id uint64) (val types.Measure, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeasureKey))
	b := store.Get(GetMeasureIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMeasure removes a measure from the store
func (k Keeper) RemoveMeasure(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeasureKey))
	store.Delete(GetMeasureIDBytes(id))
}

// GetAllMeasure returns all measure
func (k Keeper) GetAllMeasure(ctx sdk.Context) (list []types.Measure) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeasureKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Measure
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetMeasureIDBytes returns the byte representation of the ID
func GetMeasureIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetMeasureIDFromBytes returns ID in uint64 format from a byte array
func GetMeasureIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
