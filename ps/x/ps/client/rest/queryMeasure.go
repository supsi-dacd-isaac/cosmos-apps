package rest

import (
	"fmt"
	"net/http"

	"github.com/cosmos/cosmos-sdk/client/context"
	"github.com/cosmos/cosmos-sdk/types/rest"
)

func getMeasureHandler(cliCtx context.CLIContext, storeName string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		resMeterId, _, errMeterId := cliCtx.QueryWithData(fmt.Sprintf("custom/ps/get-meterId"), nil)
		meterId := string(resMeterId)
		if errMeterId != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "This node is not allowed to read this measure")
			return
		}

		// Define the measure identifier
		idMeasure := fmt.Sprintf("%s_%s_%s", r.URL.Query()["signal"][0], r.URL.Query()["timestamp"][0], meterId)

		res, _, err := cliCtx.QueryWithData(fmt.Sprintf("custom/ps/measure/%s", idMeasure), nil)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusNotFound, err.Error())
			return
		}
		rest.PostProcessResponse(w, cliCtx, res)
	}
}
