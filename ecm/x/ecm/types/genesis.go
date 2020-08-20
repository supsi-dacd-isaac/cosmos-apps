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
		MeasuresRecords: []Measure{},
	}
}
