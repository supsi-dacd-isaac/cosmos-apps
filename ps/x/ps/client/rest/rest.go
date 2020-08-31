package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client/context"
)

// RegisterRoutes registers ps-related REST handlers to a router
func RegisterRoutes(cliCtx context.CLIContext, r *mux.Router) {
	// this line is used by starport scaffolding
	r.HandleFunc("/ps/meterAccount", listMeterAccountHandler(cliCtx, "ps")).Methods("GET")
	r.HandleFunc("/ps/meterAccount", createMeterAccountHandler(cliCtx)).Methods("POST")
	r.HandleFunc("/ps/parameters", listParametersHandler(cliCtx, "ps")).Methods("GET")
	r.HandleFunc("/ps/parameters", createParametersHandler(cliCtx)).Methods("POST")
}
