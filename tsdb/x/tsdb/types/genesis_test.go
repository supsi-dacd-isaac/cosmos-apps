package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
				TimeseriesList: []types.Timeseries{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				TimeseriesCount: 2,
				MeasureList: []types.Measure{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				MeasureCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated timeseries",
			genState: &types.GenesisState{
				TimeseriesList: []types.Timeseries{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid timeseries count",
			genState: &types.GenesisState{
				TimeseriesList: []types.Timeseries{
					{
						Id: 1,
					},
				},
				TimeseriesCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated measure",
			genState: &types.GenesisState{
				MeasureList: []types.Measure{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid measure count",
			genState: &types.GenesisState{
				MeasureList: []types.Measure{
					{
						Id: 1,
					},
				},
				MeasureCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
