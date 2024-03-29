package keeper

import (
	"fmt"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
	psutils "github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/utils"
)

func (k Keeper) CreateMeterAccount(ctx sdk.Context, meterAccount types.MeterAccount) {
	store := ctx.KVStore(k.storeKey)
	key := []byte(types.MeterAccountPrefix + meterAccount.Meter)
	value := k.cdc.MustMarshalBinaryLengthPrefixed(meterAccount)
	store.Set(key, value)
}

func queryListMeterAccount(ctx sdk.Context, k Keeper) ([]byte, error) {
	var meterAccountList []types.MeterAccount
	store := ctx.KVStore(k.storeKey)

	hashedMac := ""
	if !k.IsAdmin(ctx) {
		macs, _ := psutils.GetMacAddr()
		hashedMac = psutils.CalcSHA512Hash(macs[0])
	}

	iterator := sdk.KVStorePrefixIterator(store, []byte(types.MeterAccountPrefix))
	for ; iterator.Valid(); iterator.Next() {
		var meterAccount types.MeterAccount
		k.cdc.MustUnmarshalBinaryLengthPrefixed(store.Get(iterator.Key()), &meterAccount)
		// Check if admin
		if len(hashedMac) > 0 {
			if meterAccount.Meter == hashedMac {
				meterAccountList = append(meterAccountList, meterAccount)
				break
			}
		} else {
			meterAccountList = append(meterAccountList, meterAccount)
		}
	}
	res := codec.MustMarshalJSONIndent(k.cdc, meterAccountList)
	return res, nil
}

func queryListMeters(ctx sdk.Context, k Keeper) ([]byte, error) {
	var metersList []string
	store := ctx.KVStore(k.storeKey)

	iterator := sdk.KVStorePrefixIterator(store, []byte(types.MeterAccountPrefix))
	for ; iterator.Valid(); iterator.Next() {
		var meterAccount types.MeterAccount
		k.cdc.MustUnmarshalBinaryLengthPrefixed(store.Get(iterator.Key()), &meterAccount)
		metersList = append(metersList, meterAccount.Meter)
	}
	res := codec.MustMarshalJSONIndent(k.cdc, metersList)
	return res, nil
}

func queryGetMeterId(ctx sdk.Context, k Keeper) ([]byte, error) {
	store := ctx.KVStore(k.storeKey)

	macs, _ := psutils.GetMacAddr()
	hashedMac := psutils.CalcSHA512Hash(macs[0])

	iterator := sdk.KVStorePrefixIterator(store, []byte(types.MeterAccountPrefix))
	for ; iterator.Valid(); iterator.Next() {
		var meterAccount types.MeterAccount
		k.cdc.MustUnmarshalBinaryLengthPrefixed(store.Get(iterator.Key()), &meterAccount)
		if meterAccount.Meter == hashedMac {
			return []byte(meterAccount.Meter), nil
		}
	}
	return []byte(""), fmt.Errorf("Unable to find the meter Id")
}

// checkMeterAccount a correspondence meter-account
func (k Keeper) CheckMeterAccount(ctx sdk.Context, account sdk.AccAddress) bool {
	store := ctx.KVStore(k.storeKey)

	// Get the hashed MAC address
	macs, _ := psutils.GetMacAddr()
	hashedMac := psutils.CalcSHA512Hash(macs[0])

	iterator := sdk.KVStorePrefixIterator(store, []byte(types.MeterAccountPrefix))
	for ; iterator.Valid(); iterator.Next() {
		var meterAccount types.MeterAccount
		k.cdc.MustUnmarshalBinaryLengthPrefixed(store.Get(iterator.Key()), &meterAccount)
		// Check the correspondence meterId-hashedMac <-> account_doing_tx-account_saved
		if hashedMac == meterAccount.Meter && account.String() == meterAccount.Account.String() {
			return true
		}
	}
	return false
}
