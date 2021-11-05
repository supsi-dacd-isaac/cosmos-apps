package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// LemKeyPrefix is the prefix to retrieve all Lem
	LemKeyPrefix = "Lem/value/"
)

// LemKey returns the store key to retrieve a Lem from the index fields
func LemKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
