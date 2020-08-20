package cli

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/context"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/spf13/cobra"
	"github.com/supsi-dacd-isaac/cosmos-apps/ecm/x/ecm/types"
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
	)...)

	return ecmQueryCmd
}

// GetCmdMeasure queries information about a domain
func GetCmdMeasure(queryRoute string, cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "measure [id]",
		Short: "Query about measures",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			cliCtx := context.NewCLIContext().WithCodec(cdc)
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
