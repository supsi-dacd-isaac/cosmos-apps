package cli

import (
	"bufio"
	"fmt"
	psutils "github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/utils"
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/context"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth"
	"github.com/cosmos/cosmos-sdk/x/auth/client/utils"
	"github.com/supsi-dacd-isaac/cosmos-apps/ps/x/ps/types"
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
		GetCmdSetAdmin(cdc),
		GetCmdSetAllowed(cdc),
		GetCmdSetParameters(cdc),
		GetCmdTokenMinting(cdc),
	)...)

	return ecmTxCmd
}

// GetCmdSetMeasure is the CLI command for sending a SetMeasure transaction
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
			strCoins := fmt.Sprintf("%d%s", val, types.TokenName)
			coins, errCoins := sdk.ParseCoins(strCoins)
			if errCoins != nil {
				return errCoins
			}

			// todo HERE CHECK IF THE USER DOING THE TRANSACTION ON THE PROPER METER
			//  Save a register meter_$HASHMAC = $ACCOUNT, that can be set/read only by the admin
			macs, _ := psutils.GetMacAddr()
			hashedMac := psutils.CalcSHA512Hash(macs[0])

			// Define meter identifier and signal description
			meterId := hashedMac
			signal := "energy"

			// Launch the message
			msg := types.NewMsgSetMeasure(signal, args[0], meterId, args[1], coins, cliCtx.GetFromAddress())
			err := msg.ValidateBasic()
			if err != nil {
				return err
			}

			return utils.GenerateOrBroadcastMsgs(cliCtx, txBldr, []sdk.Msg{msg})
		},
	}
}

// GetCmdSetAdmin is the CLI command for sending a SetAdmin transaction
func GetCmdSetAdmin(cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "set-admin [id]",
		Short: "set the admin register with the administrator identifier",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			cliCtx := context.NewCLIContext().WithCodec(cdc)
			inBuf := bufio.NewReader(cmd.InOrStdin())
			txBldr := auth.NewTxBuilderFromCLI(inBuf).WithTxEncoder(utils.GetTxEncoder(cdc))

			//Check if your are allowed to change the admin register (i.e. you are the admin)
			// Launch the message
			msg := types.NewMsgSetAdmin(args[0], cliCtx.GetFromAddress())
			err := msg.ValidateBasic()
			if err != nil {
				return err
			}

			return utils.GenerateOrBroadcastMsgs(cliCtx, txBldr, []sdk.Msg{msg})
		},
	}
}

// GetCmdSetAdmin is the CLI command for sending a SetAdmin transaction
func GetCmdTokenMinting(cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "tokens-minting [amount] [recipient]",
		Short: "Mint tokens",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			cliCtx := context.NewCLIContext().WithCodec(cdc)
			inBuf := bufio.NewReader(cmd.InOrStdin())
			txBldr := auth.NewTxBuilderFromCLI(inBuf).WithTxEncoder(utils.GetTxEncoder(cdc))

			val, _ := strconv.Atoi(args[0])
			strCoins := fmt.Sprintf("%d%s", val, types.TokenName)
			coins, errCoins := sdk.ParseCoins(strCoins)
			if errCoins != nil {
				return errCoins
			}

			// Define the recipient address
			recipient, _ := sdk.AccAddressFromBech32(args[1])

			msg := types.NewMsgTokensMinting(coins, recipient, cliCtx.GetFromAddress())
			err := msg.ValidateBasic()
			if err != nil {
				return err
			}

			return utils.GenerateOrBroadcastMsgs(cliCtx, txBldr, []sdk.Msg{msg})
		},
	}
}

// GetCmdSetAllowed is the CLI command for sending a SetAllowed transaction
func GetCmdSetAllowed(cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "set-allowed [allowed_string]",
		Short: "set the allowed register",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			cliCtx := context.NewCLIContext().WithCodec(cdc)
			inBuf := bufio.NewReader(cmd.InOrStdin())
			txBldr := auth.NewTxBuilderFromCLI(inBuf).WithTxEncoder(utils.GetTxEncoder(cdc))

			fmt.Println(args[0])
			// Launch the message
			msg := types.NewMsgSetAllowed(args[0], cliCtx.GetFromAddress())
			err := msg.ValidateBasic()
			if err != nil {
				return err
			}

			return utils.GenerateOrBroadcastMsgs(cliCtx, txBldr, []sdk.Msg{msg})
		},
	}
}

func GetCmdSetParameters(cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "set-parameters [prodConvFactor] [consConvFactor] [maxConsumption] [penalty]",
		Short: "Set parameters",
		Args:  cobra.MinimumNArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsProdConvFactor := string(args[0])
			argsConsConvFactor := string(args[1])
			argsMaxConsumption := string(args[2])
			argsPenalty := string(args[3])

			cliCtx := context.NewCLIContext().WithCodec(cdc)
			inBuf := bufio.NewReader(cmd.InOrStdin())
			txBldr := auth.NewTxBuilderFromCLI(inBuf).WithTxEncoder(utils.GetTxEncoder(cdc))
			msg := types.NewMsgSetParameters(cliCtx.GetFromAddress(), argsProdConvFactor, argsConsConvFactor, argsMaxConsumption, argsPenalty)
			err := msg.ValidateBasic()
			if err != nil {
				return err
			}
			return utils.GenerateOrBroadcastMsgs(cliCtx, txBldr, []sdk.Msg{msg})
		},
	}
}
