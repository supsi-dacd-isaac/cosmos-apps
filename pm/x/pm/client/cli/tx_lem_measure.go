package cli

import (
	"github.com/spf13/cast"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func CmdCreateLemMeasure() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-lem-measure [index] [player] [signal] [timestamp] [value] [mu]",
		Short: "Create a new lemMeasure",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argPlayer := args[1]
			argSignal := args[2]
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

			msg := types.NewMsgCreateLemMeasure(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argPlayer,
				argSignal,
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

func CmdUpdateLemMeasure() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-lem-measure [index] [player] [signal] [timestamp] [value] [mu]",
		Short: "Update a lemMeasure",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argPlayer := args[1]
			argSignal := args[2]
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

			msg := types.NewMsgUpdateLemMeasure(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argPlayer,
				argSignal,
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

func CmdDeleteLemMeasure() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-lem-measure [index]",
		Short: "Delete a lemMeasure",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteLemMeasure(
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
