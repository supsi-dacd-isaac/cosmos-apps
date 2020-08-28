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

// Measure section
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

// Admin section
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

// Allowed section
type Allowed struct {
	Allowed string         `json:"allowed"`
	Account sdk.AccAddress `json:"account"`
}

func NewAllowed() Allowed {
	return Allowed{}
}

// implement fmt.Stringer
func (w Allowed) String() string {
	return strings.TrimSpace(fmt.Sprintf(`Allowed: %s Account: %s`, w.Allowed, w.Account))
}

// Parameters section
type Parameters struct {
	Creator        sdk.AccAddress `json:"creator" yaml:"creator"`
	ProdConvFactor string         `json:"prodConvFactor" yaml:"prodConvFactor"`
	ConsConvFactor string         `json:"consConvFactor" yaml:"consConvFactor"`
	MaxConsumption string         `json:"maxConsumption" yaml:"maxConsumption"`
	Penalty        string         `json:"penalty" yaml:"penalty"`
}

func NewParameters() Parameters {
	return Parameters{}
}

// implement fmt.Stringer
func (w Parameters) String() string {
	return strings.TrimSpace(fmt.Sprintf(`ProdConvFactor: %s ConsConvFactor: %s MaxConsumption: %s Penalty: %s`,
		w.ProdConvFactor, w.ConsConvFactor, w.MaxConsumption, w.Penalty))
}

// TokensMinting section
type TokensMinting struct {
	Amount    sdk.Coins      `json:"amount" yaml:"amount"`
	Recipient sdk.AccAddress `json:"recipient" yaml:"recipient"`
	Minter    sdk.AccAddress `json:"minter" yaml:"minter"`
}

func NewTokensMinting() TokensMinting {
	return TokensMinting{}
}

// implement fmt.Stringer
func (w TokensMinting) String() string {
	return strings.TrimSpace(fmt.Sprintf(`Amount: %s Recipient: %s Minter: %s`,
		w.Amount.String(), w.Recipient.String(), w.Minter.String()))
}
