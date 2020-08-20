package cli

import (
	"encoding/json"
	"fmt"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/context"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/spf13/cobra"
	"github.com/supsi-dacd-isaac/cosmos-apps/ecm/x/ecm/types"
	ecmutils "github.com/supsi-dacd-isaac/cosmos-apps/ecm/x/ecm/utils"
)

func GetQueryCmd(storeKey string, cdc *codec.Codec) *cobra.Command {
	ecmQueryCmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "Querying commands for the ECM module",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}
	ecmQueryCmd.AddCommand(flags.GetCommands(
		GetCmdMeasure(storeKey, cdc),
		GetCmdAdmin(storeKey, cdc),
	)...)

	return ecmQueryCmd
}

// GetCmdMeasure queries information about a measure
func GetCmdMeasure(queryRoute string, cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "measure [signal] [timestamp] [id]",
		Short: "Query about measures",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			cliCtx := context.NewCLIContext().WithCodec(cdc)

			// todo Check if can read the measurement of another meter (i.e. you are the admin!)
			// ADMIN -> args[2] (id) is used for the measure
			// NOT ADMIN -> args[2] (id) is not used, hash(MAC) is calculated
			idMeasure := (fmt.Sprintf("%s_%s_%s", args[0], args[1], args[2]))

			res, _, err := cliCtx.QueryWithData(fmt.Sprintf("custom/%s/measure/%s", queryRoute, idMeasure), nil)
			if err != nil {
				fmt.Printf("could not resolve measure - %s \n", idMeasure)
				return nil
			}

			var out types.Measure
			cdc.MustUnmarshalJSON(res, &out)
			return cliCtx.PrintOutput(out)
		},
	}
}

// GetCmdAdmin 	e queries information about the admin
func GetCmdAdmin(queryRoute string, cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "admin",
		Short: "Query about admin",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			cliCtx := context.NewCLIContext().WithCodec(cdc)

			// todo check if you are the admin!

			res, _, err := cliCtx.QueryWithData(fmt.Sprintf("custom/%s/admin/%s", queryRoute, "admin"), nil)
			if err != nil {
				fmt.Printf("could not resolve key - %s \n", "admin")
				return nil
			}

			var out types.Admin
			cdc.MustUnmarshalJSON(res, &out)

			// Check if can read the measurement of another meter (i.e. you are the admin!)
			macs, _ := ecmutils.GetMacAddr()
			hashedMac := ecmutils.CalcSHA512Hash(macs[0])
			if out.Id != hashedMac {
				ad, _ := json.Marshal(types.Error{"403", "ACCESS DENIED! Not allowed to access the admin register"})
				return cliCtx.PrintOutput(string(ad))
			}

			return cliCtx.PrintOutput(out)
		},
	}
}
