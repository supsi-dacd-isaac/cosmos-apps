package types

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

var name = "maTurtle"

func TestMsgSetMeasure(t *testing.T) {
	timestamp := "1234"
	value := "1"
	acc := sdk.AccAddress([]byte("me"))
	cost := sdk.NewCoins(sdk.NewInt64Coin("ectoken", 10))
	var msg = NewMsgSetMeasure(timestamp, value, cost, acc)

	require.Equal(t, msg.Route(), RouterKey)
	require.Equal(t, msg.Type(), "set_measure")
}
