package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// SlaKeyPrefix is the prefix to retrieve all Sla
	SlaKeyPrefix = "Sla/value/"
)

// SlaKey returns the store key to retrieve a Sla from the index fields
func SlaKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
