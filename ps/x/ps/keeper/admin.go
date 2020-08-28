package keeper

import (
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
	psutils "github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/utils"
)

// Gets the entire Measure metadata struct for a name
func (k Keeper) GetAdmin(ctx sdk.Context) types.Admin {
	key := "admin"
	store := ctx.KVStore(k.storeKey)

	if !k.IsKVPresent(ctx, key) {
		return types.NewAdmin()
	}

	bz := store.Get([]byte(key))

	var admin types.Admin
	k.cdc.MustUnmarshalBinaryBare(bz, &admin)
	return admin
}

// Check if the node is the administrator
func (k Keeper) IsAdmin(ctx sdk.Context) bool {
	admin := k.GetAdmin(ctx)
	macs, _ := psutils.GetMacAddr()
	hashedMac := psutils.CalcSHA512Hash(macs[0])

	if admin.Id == hashedMac || len(admin.Id) == 0 {
		return true
	} else {
		return false
	}
}

// SetAdmin - sets the admin register
func (k Keeper) SetAdmin(ctx sdk.Context, msg types.MsgSetAdmin) {
	// Update the KV instance
	admin := types.NewAdmin()
	admin.Id = msg.Id
	admin.Account = msg.Account

	// Set the updated dataset
	store := ctx.KVStore(k.storeKey)
	store.Set([]byte("admin"), k.cdc.MustMarshalBinaryBare(admin))
}

func queryAdmin(ctx sdk.Context, keeper Keeper) ([]byte, error) {
	admin := keeper.GetAdmin(ctx)

	res, err := codec.MarshalJSONIndent(keeper.cdc, admin)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error())
	}

	return res, nil
}
