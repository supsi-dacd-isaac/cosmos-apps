package types

import (
	"fmt"
)

type GenesisState struct {
	MeasuresRecords []Measure `json:"measures_records"`
}

func NewGenesisState(measuresRecords []Measure) GenesisState {
	return GenesisState{MeasuresRecords: nil}
}

func ValidateGenesis(data GenesisState) error {
	for _, record := range data.MeasuresRecords {
		if record.Account == nil {
			return fmt.Errorf("invalid MeasuresRecord: Value: %s. Error: Missing Meter", record.Account)
		}
		if record.Value == "" {
			return fmt.Errorf("invalid MeasuresRecord: Account: %s. Error: Missing Value", record.Account)
		}
		if record.Timestamp == "" {
			return fmt.Errorf("invalid MeasuresRecord: Timestamp: %s. Error: Missing Value", record.Timestamp)
		}

	}
	return nil
}

func DefaultGenesisState() GenesisState {
	return GenesisState{
		MeasuresRecords: []Measure{},
	}
}
