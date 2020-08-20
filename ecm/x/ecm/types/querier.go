package types

import "strings"

// QueryResNames Queries Result Payload for a names query
type QueryResMeasures []string

// implement fmt.Stringer
func (n QueryResMeasures) String() string {
	return strings.Join(n[:], "\n")
}
