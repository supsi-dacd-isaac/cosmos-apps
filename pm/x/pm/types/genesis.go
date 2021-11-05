package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		Dso:        nil,
		PlayerList: []Player{},
		Aggregator: nil,
		LemList:    []Lem{},
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
	// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
