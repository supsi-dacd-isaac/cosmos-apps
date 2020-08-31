package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	abci "github.com/tendermint/tendermint/abci/types"
)

// query endpoints supported by the ECM Querier
const (
	QueryMeasure          = "measure"
	QueryAdmin            = "admin"
	QueryAllowed          = "allowed"
	QueryListParameters   = "list-parameters"
	QueryListMeterAccount = "list-meterAccount"
)

// NewQuerier is the module level router for state queries
func NewQuerier(keeper Keeper) sdk.Querier {
	return func(ctx sdk.Context, path []string, req abci.RequestQuery) (res []byte, err error) {
		switch path[0] {
		case QueryMeasure:
			return queryMeasure(ctx, path[1:], keeper)
		case QueryAdmin:
			return queryAdmin(ctx, keeper)
		case QueryAllowed:
			return queryAllowed(ctx, keeper)
		case QueryListParameters:
			return queryListParameters(ctx, keeper)
		case QueryListMeterAccount:
			return queryListMeterAccount(ctx, keeper)
		default:
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "unknown query endpoint")
		}
	}
}
