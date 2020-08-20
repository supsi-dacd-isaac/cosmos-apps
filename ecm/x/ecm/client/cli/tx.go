package cli

import (
	"bufio"
	"fmt"
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/context"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth"
	"github.com/cosmos/cosmos-sdk/x/auth/client/utils"
	"github.com/supsi-dacd-isaac/cosmos-apps/ecm/x/ecm/types"
)

func GetTxCmd(storeKey string, cdc *codec.Codec) *cobra.Command {
	ecmTxCmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "ECM transaction subcommands",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	ecmTxCmd.AddCommand(flags.PostCommands(
		GetCmdSetMeasure(cdc),
	)...)

	return ecmTxCmd
}

// GetCmdSetMeasure is the CLI command for sending a SetName transaction
func GetCmdSetMeasure(cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "set-measure [timestamp] [value]",
		Short: "set the value associated with a timestamp",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			cliCtx := context.NewCLIContext().WithCodec(cdc)
			inBuf := bufio.NewReader(cmd.InOrStdin())
			txBldr := auth.NewTxBuilderFromCLI(inBuf).WithTxEncoder(utils.GetTxEncoder(cdc))

			val, _ := strconv.Atoi(args[1])
			// todo 1 must be configured! Now 1 Wh = 1 coin
			strCoins := fmt.Sprintf("%dectoken", (val * 1))
			coins, errCoins := sdk.ParseCoins(strCoins)
			if errCoins != nil {
				return errCoins
			}

			// Launch the message
			msg := types.NewMsgSetMeasure(args[0], args[1], coins, cliCtx.GetFromAddress())
			err := msg.ValidateBasic()
			if err != nil {
				return err
			}

			// return utils.CompleteAndBroadcastTxCLI(txBldr, cliCtx, msgs)
			return utils.GenerateOrBroadcastMsgs(cliCtx, txBldr, []sdk.Msg{msg})
		},
	}
}

