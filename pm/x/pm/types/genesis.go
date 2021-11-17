package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		Dso:            nil,
		Aggregator:     nil,
		PlayerList:     []Player{},
		LemList:        []Lem{},
		LemMeasureList: []LemMeasure{},
		SlaList:        []Sla{},
		KpiList:        []Kpi{},
		KpiMeasureList: []KpiMeasure{},
		// this line is used by starport scaffolding # genesis/types/default
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in player
	playerIndexMap := make(map[string]struct{})

	for _, elem := range gs.PlayerList {
		index := string(PlayerKey(elem.Index))
		if _, ok := playerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for player")
		}
		playerIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in lem
	lemIndexMap := make(map[string]struct{})

	for _, elem := range gs.LemList {
		index := string(LemKey(elem.Index))
		if _, ok := lemIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for lem")
		}
		lemIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in lemMeasure
	lemMeasureIndexMap := make(map[string]struct{})

	for _, elem := range gs.LemMeasureList {
		index := string(LemMeasureKey(elem.Index))
		if _, ok := lemMeasureIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for lemMeasure")
		}
		lemMeasureIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in sla
	slaIndexMap := make(map[string]struct{})

	for _, elem := range gs.SlaList {
		index := string(SlaKey(elem.Index))
		if _, ok := slaIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for sla")
		}
		slaIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in kpi
	kpiIndexMap := make(map[string]struct{})

	for _, elem := range gs.KpiList {
		index := string(KpiKey(elem.Index))
		if _, ok := kpiIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for kpi")
		}
		kpiIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in kpiMeasure
	kpiMeasureIndexMap := make(map[string]struct{})

	for _, elem := range gs.KpiMeasureList {
		index := string(KpiMeasureKey(elem.Index))
		if _, ok := kpiMeasureIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for kpiMeasure")
		}
		kpiMeasureIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
