package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"github.com/supsi-dacd-isaac/cosmos-apps/pm/testutil/sample"
)

func TestMsgCreateLemMeasure_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateLemMeasure
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateLemMeasure{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateLemMeasure{
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

func TestMsgUpdateLemMeasure_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateLemMeasure
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateLemMeasure{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateLemMeasure{
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

func TestMsgDeleteLemMeasure_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteLemMeasure
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteLemMeasure{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteLemMeasure{
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
