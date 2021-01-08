package rest

import (
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client/context"
	"github.com/gorilla/mux"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
	psutils "github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/utils"
)

// RegisterRoutes registers ps-related REST handlers to a router
func RegisterRoutes(cliCtx context.CLIContext, r *mux.Router) {
	r.HandleFunc("/ps/meterAccount", listMeterAccountHandler(cliCtx, "ps")).Methods("GET")
	r.HandleFunc("/ps/parameters", listParametersHandler(cliCtx, "ps")).Methods("GET")
	r.HandleFunc("/ps/getMeasure", getMeasureHandler(cliCtx, "ps")).Methods("GET")

	r.HandleFunc("/ps/meterAccount", createMeterAccountHandler(cliCtx)).Methods("POST")
	r.HandleFunc("/ps/parameters", createParametersHandler(cliCtx)).Methods("POST")
	r.HandleFunc("/ps/setMeasure", setMeasure(cliCtx)).Methods("POST")
}

// Utilities functions used the REST handlers
func CheckAdmin(res []byte, creator string) bool {
	var out types.Admin
	json.Unmarshal(res, &out)

	if len(out.Id) == 0 && len(out.Account) == 0 {
		return true
	} else {
		macs, _ := psutils.GetMacAddr()
		hashedMac := psutils.CalcSHA512Hash(macs[0])

		// Check if the MAC address and the account are related to the admin node
		if out.Id != hashedMac || out.Account.String() != creator {
			return false
		} else {
			return true
		}
	}
}
