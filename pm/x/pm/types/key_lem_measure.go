package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// LemMeasureKeyPrefix is the prefix to retrieve all LemMeasure
	LemMeasureKeyPrefix = "LemMeasure/value/"
)

// LemMeasureKey returns the store key to retrieve a LemMeasure from the index fields
func LemMeasureKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
