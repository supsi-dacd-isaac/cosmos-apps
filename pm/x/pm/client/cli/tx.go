package cli

import (
	"context"
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreateDso())
	cmd.AddCommand(CmdUpdateDso())
	cmd.AddCommand(CmdDeleteDso())
	cmd.AddCommand(CmdCreateAggregator())
	cmd.AddCommand(CmdUpdateAggregator())
	cmd.AddCommand(CmdDeleteAggregator())
	cmd.AddCommand(CmdCreatePlayer())
	cmd.AddCommand(CmdUpdatePlayer())
	cmd.AddCommand(CmdDeletePlayer())
	cmd.AddCommand(CmdCreateLem())
	cmd.AddCommand(CmdUpdateLem())
	cmd.AddCommand(CmdDeleteLem())
	cmd.AddCommand(CmdCreateLemMeasure())
	cmd.AddCommand(CmdUpdateLemMeasure())
	cmd.AddCommand(CmdDeleteLemMeasure())
	cmd.AddCommand(CmdCreateSla())
	cmd.AddCommand(CmdUpdateSla())
	cmd.AddCommand(CmdDeleteSla())
	cmd.AddCommand(CmdCreateKpi())
	cmd.AddCommand(CmdUpdateKpi())
	cmd.AddCommand(CmdDeleteKpi())
	cmd.AddCommand(CmdCreateKpiMeasure())
	cmd.AddCommand(CmdUpdateKpiMeasure())
	cmd.AddCommand(CmdDeleteKpiMeasure())
	// this line is used by starport scaffolding # 1

	return cmd
}

// Utilities functions
func isDSO(ctx client.Context) bool {
	queryClient := types.NewQueryClient(ctx)
	params := &types.QueryGetDsoRequest{}
	res, _ := queryClient.Dso(context.Background(), params)
	if res.GetDso().Address != ctx.GetFromAddress().String() {
		return false
	} else {
		return true
	}
}

func isAggregator(ctx client.Context) bool {
	queryClient := types.NewQueryClient(ctx)
	params := &types.QueryGetAggregatorRequest{}
	res, _ := queryClient.Aggregator(context.Background(), params)
	if res.GetAggregator().Address != ctx.GetFromAddress().String() {
		return false
	} else {
		return true
	}
}
