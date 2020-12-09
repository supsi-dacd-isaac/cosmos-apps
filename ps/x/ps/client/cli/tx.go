package cli

import (
	"bufio"
	"encoding/json"
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

func CheckAdmin(cdc *codec.Codec, res []byte, sender sdk.Address) bool {
	var out types.Admin
	cdc.MustUnmarshalJSON(res, &out)

	if len(out.Id) == 0 && len(out.Account) == 0 {
		return true
	} else {
		macs, _ := psutils.GetMacAddr()
		hashedMac := psutils.CalcSHA512Hash(macs[0])

		// Check if the MAC address and the account are related to the admin node
		if out.Id != hashedMac || out.Account.String() != sender.String() {
			return false
		} else {
			return true
		}
	}
}

func CheckMeterAccount(cdc *codec.Codec, res []byte, sender sdk.Address) bool {
	var out []types.MeterAccount
	cdc.MustUnmarshalJSON(res, &out)

	macs, _ := psutils.GetMacAddr()
	hashedMac := psutils.CalcSHA512Hash(macs[0])

	for i := 0; i < len(out); i++ {
		if out[i].Meter == hashedMac && out[i].Account.String() == sender.String() {
			return true
		}
	}
	return false
}

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
		GetCmdSetParameters(cdc),
		GetCmdTokenMinting(cdc),
		GetCmdCreateMeterAccount(cdc),
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

			macs, _ := psutils.GetMacAddr()
			hashedMac := psutils.CalcSHA512Hash(macs[0])

			// Define meter identifier and signal description
			meterId := hashedMac
			signal := "energy"

			res, _, _ := cliCtx.QueryWithData(fmt.Sprintf("custom/ps/"+types.QueryListMeterAccount), nil)
			if !CheckMeterAccount(cdc, res, cliCtx.GetFromAddress()) {
				ad, _ := json.Marshal(types.Error{"403", "ACCESS DENIED! The account trying to perform the TX is not allowed to insert measures"})
				return cliCtx.PrintOutput(string(ad))
			}

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

			// Check if the address performing the transaction is the administrator
			res, _, _ := cliCtx.QueryWithData(fmt.Sprintf("custom/ps/admin/admin"), nil)
			if !CheckAdmin(cdc, []byte(res), cliCtx.GetFromAddress()) {
				ad, _ := json.Marshal(types.Error{"403", "ACCESS DENIED! The account trying to perform the TX is not the admin"})
				return cliCtx.PrintOutput(string(ad))
			}

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

			// Check if the address performing the transaction is the administrator
			res, _, _ := cliCtx.QueryWithData(fmt.Sprintf("custom/ps/admin/admin"), nil)
			if !CheckAdmin(cdc, []byte(res), cliCtx.GetFromAddress()) {
				ad, _ := json.Marshal(types.Error{"403", "ACCESS DENIED! The account trying to perform the TX is not the admin"})
				return cliCtx.PrintOutput(string(ad))
			}

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

// GetCmdSetParameters is the CLI command for sending a SetParameters transaction
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

			// Check if the address performing the transaction is the administrator
			res, _, _ := cliCtx.QueryWithData(fmt.Sprintf("custom/ps/admin/admin"), nil)
			if !CheckAdmin(cdc, []byte(res), cliCtx.GetFromAddress()) {
				ad, _ := json.Marshal(types.Error{"403", "ACCESS DENIED! The account trying to perform the TX is not the admin"})
				return cliCtx.PrintOutput(string(ad))
			}

			msg := types.NewMsgSetParameters(cliCtx.GetFromAddress(), argsProdConvFactor, argsConsConvFactor, argsMaxConsumption, argsPenalty)
			err := msg.ValidateBasic()
			if err != nil {
				return err
			}
			return utils.GenerateOrBroadcastMsgs(cliCtx, txBldr, []sdk.Msg{msg})
		},
	}
}

// GetCmdCreateMeterAccount is the CLI command for sending a CreateMeterAccount transaction
func GetCmdCreateMeterAccount(cdc *codec.Codec) *cobra.Command {
	return &cobra.Command{
		Use:   "create-meterAccount [meter] [account]",
		Short: "Creates a new meterAccount",
		Args:  cobra.MinimumNArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {

			account, _ := sdk.AccAddressFromBech32(args[1])
			cliCtx := context.NewCLIContext().WithCodec(cdc)
			inBuf := bufio.NewReader(cmd.InOrStdin())
			txBldr := auth.NewTxBuilderFromCLI(inBuf).WithTxEncoder(utils.GetTxEncoder(cdc))

			// Check if the address performing the transaction is the administrator
			res, _, _ := cliCtx.QueryWithData(fmt.Sprintf("custom/ps/admin/admin"), nil)
			if !CheckAdmin(cdc, []byte(res), cliCtx.GetFromAddress()) {
				ad, _ := json.Marshal(types.Error{"403", "ACCESS DENIED! The account trying to perform the TX is not the admin"})
				return cliCtx.PrintOutput(string(ad))
			}

			msg := types.NewMsgCreateMeterAccount(args[0], account, cliCtx.GetFromAddress())
			err := msg.ValidateBasic()
			if err != nil {
				return err
			}
			return utils.GenerateOrBroadcastMsgs(cliCtx, txBldr, []sdk.Msg{msg})
		},
	}
}
