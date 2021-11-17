package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/testutil/sample"
)

func TestMsgCreateKpiMeasure_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateKpiMeasure
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateKpiMeasure{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateKpiMeasure{
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

func TestMsgUpdateKpiMeasure_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateKpiMeasure
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateKpiMeasure{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateKpiMeasure{
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

func TestMsgDeleteKpiMeasure_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteKpiMeasure
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteKpiMeasure{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteKpiMeasure{
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
