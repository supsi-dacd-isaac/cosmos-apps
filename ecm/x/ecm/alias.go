package ecm

import (
	"github.com/supsi-dacd-isaac/cosmos-apps/ecm/x/ecm/keeper"
	"github.com/supsi-dacd-isaac/cosmos-apps/ecm/x/ecm/types"
)

const (
	ModuleName   = types.ModuleName
	RouterKey    = types.RouterKey
	StoreKey     = types.StoreKey
	QuerierRoute = types.QuerierRoute
)

var (
	NewKeeper        = keeper.NewKeeper
	NewQuerier       = keeper.NewQuerier

	NewMsgSetMeasure = types.NewMsgSetMeasure

	ModuleCdc        = types.ModuleCdc
	RegisterCodec    = types.RegisterCodec
)

type (
	Keeper          	= keeper.Keeper
	MsgSetNameMeasure	= types.MsgSetMeasure
)
