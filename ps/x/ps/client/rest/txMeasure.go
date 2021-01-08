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

type setMeasureRequest struct {
	BaseReq   rest.BaseReq `json:"base_req"`
	Signal    string       `json:"signal"`
	Timestamp string       `json:"timestamp"`
	Value     string       `json:"value"`
}

func setMeasure(cliCtx context.CLIContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req setMeasureRequest
		if !rest.ReadRESTReq(w, r, cliCtx.Codec, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}
		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		account, err := sdk.AccAddressFromBech32(req.BaseReq.From)
		if err != nil {
			fmt.Println("ERROR")
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		// Check if the meter is allowed to save measures
		resMeterId, _, errMeterId := cliCtx.QueryWithData(fmt.Sprintf("custom/ps/get-meterId"), nil)
		meterId := string(resMeterId)
		if errMeterId != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "This node is not allowed to save measures in the sidechain")
			return
		}

		// Get the market parameters
		resParameters, _, _ := cliCtx.QueryWithData(fmt.Sprintf("custom/ps/list-parameters"), nil)
		if string(resParameters) == "null" {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "Unable to get market parameters")
			return
		}

		msg := types.NewMsgSetMeasure(req.Signal, req.Timestamp, meterId, req.Value, account)
		utils.WriteGenerateStdTxResponse(w, cliCtx, baseReq, []sdk.Msg{msg})
	}
}
