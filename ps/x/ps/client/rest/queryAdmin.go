package rest

import (
	"fmt"
	"net/http"

	"github.com/cosmos/cosmos-sdk/client/context"
	"github.com/cosmos/cosmos-sdk/types/rest"
)

func getAdminHandler(cliCtx context.CLIContext, storeName string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		res, _, _ := cliCtx.QueryWithData(fmt.Sprintf("custom/%s/admin/admin", storeName), nil)
		rest.PostProcessResponse(w, cliCtx, res)
	}
}
