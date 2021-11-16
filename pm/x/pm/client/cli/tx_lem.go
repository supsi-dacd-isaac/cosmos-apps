package cli

import (
	"fmt"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func CmdCreateLem() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-lem [index] [index-end] [params] [players]",
		Short: "Create a new lem",
		Args:  cobra.MinimumNArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argIndexEnd := args[1]
			argParams := args[2:8]
			argPlayers := args[8:len(args)]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the aggregator
			if isAggregator(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to create a LEM")
				return nil
			}

			msg := types.NewMsgCreateLem(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argIndexEnd,
				argParams,
				argPlayers,
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

func CmdUpdateLem() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-lem [index] [index-end] [params] [players]",
		Short: "Update a lem",
		Args:  cobra.MinimumNArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argIndexEnd := args[1]
			argParams := args[2:8]
			argPlayers := args[8:len(args)]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the aggregator
			if isAggregator(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to update a LEM")
				return nil
			}

			msg := types.NewMsgUpdateLem(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argIndexEnd,
				argParams,
				argPlayers,
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

func CmdDeleteLem() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-lem [index]",
		Short: "Delete a lem",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the aggregator
			if isAggregator(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to delete a LEM")
				return nil
			}

			msg := types.NewMsgDeleteLem(
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
