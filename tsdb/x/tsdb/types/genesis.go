package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		TimeseriesList: []Timeseries{},
		MeasureList:    []Measure{},
		// this line is used by starport scaffolding # genesis/types/default
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in timeseries
	timeseriesIdMap := make(map[uint64]bool)
	timeseriesCount := gs.GetTimeseriesCount()
	for _, elem := range gs.TimeseriesList {
		if _, ok := timeseriesIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for timeseries")
		}
		if elem.Id >= timeseriesCount {
			return fmt.Errorf("timeseries id should be lower or equal than the last id")
		}
		timeseriesIdMap[elem.Id] = true
	}
	// Check for duplicated ID in measure
	measureIdMap := make(map[uint64]bool)
	measureCount := gs.GetMeasureCount()
	for _, elem := range gs.MeasureList {
		if _, ok := measureIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for measure")
		}
		if elem.Id >= measureCount {
			return fmt.Errorf("measure id should be lower or equal than the last id")
		}
		measureIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
