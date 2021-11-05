package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PlayerKeyPrefix is the prefix to retrieve all Player
	PlayerKeyPrefix = "Player/value/"
)

// PlayerKey returns the store key to retrieve a Player from the index fields
func PlayerKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
