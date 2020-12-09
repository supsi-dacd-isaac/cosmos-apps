package rest

import (
	"fmt"
	"github.com/cosmos/cosmos-sdk/client/context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/rest"
	"github.com/cosmos/cosmos-sdk/x/auth/client/utils"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
	"net/http"
)

type createParametersRequest struct {
	BaseReq        rest.BaseReq `json:"base_req"`
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
		creator, err := sdk.AccAddressFromBech32(req.BaseReq.From)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		// Admin checking
		res, _, _ := cliCtx.QueryWithData(fmt.Sprintf("custom/ps/admin/admin"), nil)
		if !CheckAdmin([]byte(res), req.BaseReq.From) {
			rest.WriteErrorResponse(w, http.StatusForbidden, "Forbidden! The node trying to perform the transaction is not the admin")
			return
		}

		msg := types.NewMsgSetParameters(creator, req.ProdConvFactor, req.ConsConvFactor, req.MaxConsumption, req.Penalty)
		utils.WriteGenerateStdTxResponse(w, cliCtx, baseReq, []sdk.Msg{msg})
	}
}
