package cli

import (
	"github.com/spf13/cast"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func CmdCreateKpiMeasure() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-kpi-measure [index] [kpi] [player] [timestamp] [value] [mu]",
		Short: "Create a new kpiMeasure",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argKpi := args[1]
			argPlayer := args[2]
			argTimestamp, err := cast.ToInt32E(args[3])
			if err != nil {
				return err
			}
			argValue := args[4]
			argMu := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateKpiMeasure(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argKpi,
				argPlayer,
				argTimestamp,
				argValue,
				argMu,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateKpiMeasure() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-kpi-measure [index] [kpi] [player] [timestamp] [value] [mu]",
		Short: "Update a kpiMeasure",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argKpi := args[1]
			argPlayer := args[2]
			argTimestamp, err := cast.ToInt32E(args[3])
			if err != nil {
				return err
			}
			argValue := args[4]
			argMu := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateKpiMeasure(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argKpi,
				argPlayer,
				argTimestamp,
				argValue,
				argMu,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteKpiMeasure() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-kpi-measure [index]",
		Short: "Delete a kpiMeasure",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteKpiMeasure(
				clientCtx.GetFromAddress().String(),
				indexIndex,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
