package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

func TestMeasureMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateMeasure(ctx, &types.MsgCreateMeasure{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestMeasureMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateMeasure
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateMeasure{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateMeasure{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateMeasure{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateMeasure(ctx, &types.MsgCreateMeasure{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateMeasure(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestMeasureMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteMeasure
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteMeasure{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteMeasure{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteMeasure{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateMeasure(ctx, &types.MsgCreateMeasure{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteMeasure(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
