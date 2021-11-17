package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/testutil/sample"
)

func TestMsgCreateKpi_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateKpi
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateKpi{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateKpi{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateKpi_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateKpi
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateKpi{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateKpi{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteKpi_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteKpi
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteKpi{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteKpi{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
