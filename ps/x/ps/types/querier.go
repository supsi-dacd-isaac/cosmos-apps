package types

import "strings"

// QueryResMeasures Queries
type QueryResMeasures []string

// implement fmt.Stringer
func (n QueryResMeasures) String() string {
	return strings.Join(n[:], "\n")
}

// QueryResAdmin Queries
type QueryResAdmin []string

// implement fmt.Stringer
func (n QueryResAdmin) String() string {
	return strings.Join(n[:], "\n")
}

// QueryResAllowed Queries
type QueryResAllowed []string

// implement fmt.Stringer
func (n QueryResAllowed) String() string {
	return strings.Join(n[:], "\n")
}

const (
	QueryListParameters = "list-parameters"
)

// QueryResAllowed Queries
type QueryResParameters []string

// implement fmt.Stringer
func (n QueryResParameters) String() string {
	return strings.Join(n[:], "\n")
}

const (
	QueryListMeterAccount = "list-meterAccount"
)
