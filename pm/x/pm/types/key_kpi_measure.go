package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// KpiMeasureKeyPrefix is the prefix to retrieve all KpiMeasure
	KpiMeasureKeyPrefix = "KpiMeasure/value/"
)

// KpiMeasureKey returns the store key to retrieve a KpiMeasure from the index fields
func KpiMeasureKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
