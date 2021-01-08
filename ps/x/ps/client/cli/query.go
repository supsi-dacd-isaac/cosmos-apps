package cli

import (
	"encoding/json"
	"fmt"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/context"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/spf13/cobra"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
	psutils "github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/utils"
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
		GetCmdListParameters(storeKey, cdc),
		GetCmdListMeterAccount(storeKey, cdc),
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

			// Define the measure identifier
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

// GetCmdAdmin queries information about admin register
func GetCmdAdmin(queryRoute string, cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "admin",
		Short: "Query about admin register",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			cliCtx := context.NewCLIContext().WithCodec(cdc)

			res, _, err := cliCtx.QueryWithData(fmt.Sprintf("custom/%s/admin/%s", queryRoute, "admin"), nil)
			if err != nil {
				fmt.Printf("could not resolve key - %s \n", "admin")
				return nil
			}

			fmt.Sprintf("queryRoute -> %s", queryRoute)

			// Check if admin
			var out types.Admin
			cdc.MustUnmarshalJSON(res, &out)
			macs, _ := psutils.GetMacAddr()
			hashedMac := psutils.CalcSHA512Hash(macs[0])
			if out.Id != hashedMac {
				ad, _ := json.Marshal(types.Error{"403", "ACCESS DENIED! Not allowed to access the admin register"})
				return cliCtx.PrintOutput(string(ad))
			}

			return cliCtx.PrintOutput(out)
		},
	}
}

// GetCmdListParameters queries information about parameters list
func GetCmdListParameters(queryRoute string, cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "list-parameters",
		Short: "list all parameters",
		RunE: func(cmd *cobra.Command, args []string) error {
			cliCtx := context.NewCLIContext().WithCodec(cdc)
			res, _, err := cliCtx.QueryWithData(fmt.Sprintf("custom/%s/"+types.QueryListParameters, queryRoute), nil)
			if err != nil {
				fmt.Printf("could not list Parameters\n%s\n", err.Error())
				return nil
			}
			var out []types.Parameters
			cdc.MustUnmarshalJSON(res, &out)
			return cliCtx.PrintOutput(out)
		},
	}
}

// GetCmdListMeterAccount queries information about meters-accounts list
func GetCmdListMeterAccount(queryRoute string, cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "list-meterAccount",
		Short: "list all meterAccount",
		RunE: func(cmd *cobra.Command, args []string) error {
			cliCtx := context.NewCLIContext().WithCodec(cdc)
			res, _, err := cliCtx.QueryWithData(fmt.Sprintf("custom/%s/"+types.QueryListMeterAccount, queryRoute), nil)
			if err != nil {
				fmt.Printf("could not list MeterAccount\n%s\n", err.Error())
				return nil
			}
			var out []types.MeterAccount
			cdc.MustUnmarshalJSON(res, &out)
			return cliCtx.PrintOutput(out)
		},
	}
}
