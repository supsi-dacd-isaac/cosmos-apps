package ecm

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-apps/ecm/x/ecm/types"
)

type GenesisState struct {
	MeasuresRecords []types.Measure `json:"measures_records"`
}

func NewGenesisState(measuresRecords []types.Measure) GenesisState {
	return GenesisState{MeasuresRecords: nil}
}

func ValidateGenesis(data GenesisState) error {
	for _, record := range data.MeasuresRecords {
		if record.Meter == nil {
			return fmt.Errorf("invalid MeasuresRecord: Value: %s. Error: Missing Meter", record.Meter)
		}
		if record.Value == "" {
			return fmt.Errorf("invalid MeasuresRecord: Meter: %s. Error: Missing Value", record.Meter)
		}
		if record.Timestamp == "" {
			return fmt.Errorf("invalid MeasuresRecord: Timestamp: %s. Error: Missing Value", record.Timestamp)
		}

	}
	return nil
}

func DefaultGenesisState() GenesisState {
	return GenesisState{
		MeasuresRecords: []types.Measure{},
	}
}

func InitGenesis(ctx sdk.Context, keeper Keeper, data GenesisState) {
	//for _, record := range data.MeasuresRecords {
	//	keeper.SetMeasure(ctx, record.Value, record)
	//}
}

func ExportGenesis(ctx sdk.Context, k Keeper) GenesisState {
	//var records []Whois
	//iterator := k.GetNamesIterator(ctx)
	//for ; iterator.Valid(); iterator.Next() {
	//
	//	name := string(iterator.Key())
	//	whois := k.GetWhois(ctx, name)
	//	records = append(records, whois)
	//
	//}
	return GenesisState{MeasuresRecords: nil}
}
