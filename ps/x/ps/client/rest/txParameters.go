package rest

import (
	"net/http"

	"github.com/cosmos/cosmos-sdk/client/context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/rest"
	"github.com/cosmos/cosmos-sdk/x/auth/client/utils"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
)

type createParametersRequest struct {
	BaseReq        rest.BaseReq `json:"base_req"`
	Creator        string       `json:"creator"`
	ProdConvFactor string       `json:"prodConvFactor"`
	ConsConvFactor string       `json:"consConvFactor"`
	MaxConsumption string       `json:"maxConsumption"`
	Penalty        string       `json:"penalty"`
}

func createParametersHandler(cliCtx context.CLIContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req createParametersRequest
		if !rest.ReadRESTReq(w, r, cliCtx.Codec, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}
		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}
		creator, err := sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}
		msg := types.NewMsgSetParameters(creator, req.ProdConvFactor, req.ConsConvFactor, req.MaxConsumption, req.Penalty)
		utils.WriteGenerateStdTxResponse(w, cliCtx, baseReq, []sdk.Msg{msg})
	}
}
