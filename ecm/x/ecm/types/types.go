package types

import (
	"fmt"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

type Error struct {
	Code        string
	Description string
}

type Measure struct {
	Signal    string         `json:"signal"`
	Timestamp string         `json:"timestamp"`
	MeterId   string         `json:"meterId"`
	Value     string         `json:"value"`
	Account   sdk.AccAddress `json:"account"`
	Cost      sdk.Coins      `json:"cost"`
}

func NewMeasure() Measure {
	return Measure{}
}

// implement fmt.Stringer
func (w Measure) String() string {
	return strings.TrimSpace(fmt.Sprintf(`Signal: %s Timestamp: %s Meter: %s Value: %s Account: %s Price: %s`,
		w.Signal, w.Timestamp, w.MeterId, w.Value, w.Account, w.Cost))
}

type Admin struct {
	Id      string         `json:"id"`
	Account sdk.AccAddress `json:"account"`
}

func NewAdmin() Admin {
	return Admin{}
}

// implement fmt.Stringer
func (w Admin) String() string {
	return strings.TrimSpace(fmt.Sprintf(`Id: %s Account: %s`, w.Id, w.Account))
}
