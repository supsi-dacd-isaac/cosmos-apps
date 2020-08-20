package types

import (
	"fmt"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

type Measure struct {
	Signal    string         `json:"signal"`
	Timestamp string         `json:"timestamp"`
	Value     string         `json:"value"`
	Meter     sdk.AccAddress `json:"meter"`
	Cost      sdk.Coins      `json:"cost"`
}

func NewMeasure() Measure {
	return Measure{}
}

// implement fmt.Stringer
func (w Measure) String() string {
	return strings.TrimSpace(fmt.Sprintf(`Signal: %s Timestamp: %s Value: %s Meter: %s Price: %s`, w.Signal, w.Timestamp, w.Value, w.Meter, w.Cost))
}
