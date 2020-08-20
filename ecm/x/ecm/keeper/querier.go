package keeper

import (
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	abci "github.com/tendermint/tendermint/abci/types"
)

// query endpoints supported by the ECM Querier
const (
	QueryMeasure = "measure"
	QueryAdmin   = "admin"
)

// NewQuerier is the module level router for state queries
func NewQuerier(keeper Keeper) sdk.Querier {
	return func(ctx sdk.Context, path []string, req abci.RequestQuery) (res []byte, err error) {
		switch path[0] {
		case QueryMeasure:
			return queryMeasure(ctx, path[1:], req, keeper)
		case QueryAdmin:
			return queryAdmin(ctx, path[1:], req, keeper)
		default:
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "unknown ECM query endpoint")
		}
	}
}

func queryMeasure(ctx sdk.Context, path []string, req abci.RequestQuery, keeper Keeper) ([]byte, error) {
	measure := keeper.GetMeasure(ctx, path[0])

	res, err := codec.MarshalJSONIndent(keeper.cdc, measure)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error())
	}

	return res, nil
}

func queryAdmin(ctx sdk.Context, path []string, req abci.RequestQuery, keeper Keeper) ([]byte, error) {
	admin := keeper.GetAdmin(ctx, path[0])

	res, err := codec.MarshalJSONIndent(keeper.cdc, admin)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error())
	}

	return res, nil
}
