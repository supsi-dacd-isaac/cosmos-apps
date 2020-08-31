package ps

import (
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
)

const (
	ModuleName   = types.ModuleName
	RouterKey    = types.RouterKey
	StoreKey     = types.StoreKey
	QuerierRoute = types.QuerierRoute
)

var (
	NewKeeper  = keeper.NewKeeper
	NewQuerier = keeper.NewQuerier

	NewMsgSetMeasure         = types.NewMsgSetMeasure
	NewMsgSetAdmin           = types.NewMsgSetAdmin
	NewMsgSetAllowed         = types.NewMsgSetAllowed
	NewMsgSetParameters      = types.NewMsgSetParameters
	NewMsgCreateMeterAccount = types.NewMsgCreateMeterAccount

	ModuleCdc     = types.ModuleCdc
	RegisterCodec = types.RegisterCodec
)

type (
	Keeper                = keeper.Keeper
	MsgSetMeasure         = types.MsgSetMeasure
	MsgSetAdmin           = types.MsgSetAdmin
	MsgSetAllowed         = types.MsgSetAllowed
	MsgCreateMeterAccount = types.MsgCreateMeterAccount
)
