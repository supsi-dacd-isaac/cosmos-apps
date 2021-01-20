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

type setAdminRequest struct {
	BaseReq   		rest.BaseReq `json:"base_req"`
	AdminAddress	string       `json:"address"`
}

func setAdminHandler(cliCtx context.CLIContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req setAdminRequest
		if !rest.ReadRESTReq(w, r, cliCtx.Codec, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}
		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		// Admin checking
		res, _, _ := cliCtx.QueryWithData(fmt.Sprintf("custom/ps/admin/admin"), nil)
		if !CheckAdmin([]byte(res), req.BaseReq.From) {
			rest.WriteErrorResponse(w, http.StatusForbidden, "Forbidden! The node trying to perform the transaction is not the admin")
			return
		}

		account, err := sdk.AccAddressFromBech32(req.BaseReq.From)
		if err != nil {
			fmt.Println("ERROR")
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		msg := types.NewMsgSetAdmin(req.AdminAddress, account)
		utils.WriteGenerateStdTxResponse(w, cliCtx, baseReq, []sdk.Msg{msg})
	}
}
