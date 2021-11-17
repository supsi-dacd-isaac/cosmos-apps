package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// KpiKeyPrefix is the prefix to retrieve all Kpi
	KpiKeyPrefix = "Kpi/value/"
)

// KpiKey returns the store key to retrieve a Kpi from the index fields
func KpiKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
