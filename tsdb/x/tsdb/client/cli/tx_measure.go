package cli

import (
	"io/ioutil"
	"log"
	"net/http"

	//"io/ioutil"
	//"log"
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

func CmdCreateMeasure() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-measure [timeseries-id] [ts] [value]",
		Short: "Create a new measure",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTimeseriesID := args[0]
			argTs := args[1]
			argValue := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Example of data querying
			//strUrl := "http://localhost:1317/supsi-dacd-isaac/tsdb/tsdb/timeseries"
			//res, _ := http.Get(strUrl)
			//body, err := ioutil.ReadAll(res.Body)
			//if err != nil {
			//	log.Fatalln(err)
			//}
			////Convert the body to type string
			//sb := string(body)
			//log.Printf(sb)

			msg := types.NewMsgCreateMeasure(clientCtx.GetFromAddress().String(), argTimeseriesID, argTs, argValue)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateMeasure() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-measure [id] [timeseries-id] [ts] [value]",
		Short: "Update a measure",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argTimeseriesID := args[1]

			argTs := args[2]

			argValue := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateMeasure(clientCtx.GetFromAddress().String(), id, argTimeseriesID, argTs, argValue)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteMeasure() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-measure [id]",
		Short: "Delete a measure by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteMeasure(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
