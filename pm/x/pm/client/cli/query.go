package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/supsi-dacd-isaac/cosmos-apps/pm/x/pm/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group pm queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdShowDso())
	cmd.AddCommand(CmdListPlayer())
	cmd.AddCommand(CmdShowPlayer())
	cmd.AddCommand(CmdShowAggregator())
	cmd.AddCommand(CmdListLem())
	cmd.AddCommand(CmdShowLem())
	// this line is used by starport scaffolding # 1

	return cmd
}
