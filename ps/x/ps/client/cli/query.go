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
		GetCmdAllowed(storeKey, cdc),
		GetCmdListParameters(storeKey, cdc),
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

			// todo Handle the id as follows
			// 	ADMIN -> args[2] (id) is used for the measure
			// 	NOT ADMIN -> args[2] (id) is not used, hash(MAC) is calculated
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

// GetCmdAllowed queries information about allowed register
func GetCmdAllowed(queryRoute string, cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "allowed",
		Short: "Query about allowed register",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			cliCtx := context.NewCLIContext().WithCodec(cdc)

			// Read the admin register
			resAdmin, _, errAdmin := cliCtx.QueryWithData(fmt.Sprintf("custom/%s/admin/%s", queryRoute, "admin"), nil)
			if errAdmin != nil {
				fmt.Printf("could not resolve key - %s \n", "admin")
				return nil
			}

			// Check if admin
			var outAdmin types.Admin
			cdc.MustUnmarshalJSON(resAdmin, &outAdmin)
			macs, _ := psutils.GetMacAddr()
			hashedMac := psutils.CalcSHA512Hash(macs[0])
			if outAdmin.Id != hashedMac {
				ad, _ := json.Marshal(types.Error{"403", "ACCESS DENIED! Not allowed to access the allowed register"})
				return cliCtx.PrintOutput(string(ad))
			}

			// Read the allowed register
			resAllowed, _, errAllowed := cliCtx.QueryWithData(fmt.Sprintf("custom/%s/allowed/%s", queryRoute, "allowed"), nil)
			if errAllowed != nil {
				fmt.Printf("could not resolve key - %s \n", "allowed")
				return nil
			}
			var outAllowed types.Allowed
			cdc.MustUnmarshalJSON(resAllowed, &outAllowed)

			return cliCtx.PrintOutput(outAllowed)
		},
	}
}

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
