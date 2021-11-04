package keeper

import (
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

var _ types.QueryServer = Keeper{}
