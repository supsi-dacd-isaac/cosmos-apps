package cli

import (
	"context"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

func CmdListKpiMeasure() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-kpi-measure",
		Short: "list all kpiMeasure",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllKpiMeasureRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.KpiMeasureAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowKpiMeasure() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-kpi-measure [index]",
		Short: "shows a kpiMeasure",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetKpiMeasureRequest{
				Index: argIndex,
			}

			res, err := queryClient.KpiMeasure(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
