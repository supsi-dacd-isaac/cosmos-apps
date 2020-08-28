package keeper

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"strings"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
)

// Gets the entire Measure metadata struct for a name
func (k Keeper) GetAllowed(ctx sdk.Context) types.Allowed {
	key := "allowed"
	store := ctx.KVStore(k.storeKey)

	if !k.IsKVPresent(ctx, key) {
		return types.NewAllowed()
	}

	bz := store.Get([]byte(key))

	var allowed types.Allowed
	k.cdc.MustUnmarshalBinaryBare(bz, &allowed)
	return allowed
}

func (k Keeper) IsAllowed(ctx sdk.Context, meterId string) bool {
	data := k.GetAllowed(ctx)
	allowedMeters := strings.Split(data.Allowed, ",")

	if Find(allowedMeters, meterId) {
		return true
	} else {
		return false
	}
}

// SetAllowed - sets the allowed register
func (k Keeper) SetAllowed(ctx sdk.Context, msg types.MsgSetAllowed) {
	// Update the KV instance
	allowed := types.NewAllowed()
	allowed.Allowed = msg.Allowed
	allowed.Account = msg.Account

	// Set the updated dataset
	store := ctx.KVStore(k.storeKey)
	store.Set([]byte("allowed"), k.cdc.MustMarshalBinaryBare(allowed))
}

func queryAllowed(ctx sdk.Context, keeper Keeper) ([]byte, error) {
	allowed := keeper.GetAllowed(ctx)

	res, err := codec.MarshalJSONIndent(keeper.cdc, allowed)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error())
	}

	return res, nil
}
