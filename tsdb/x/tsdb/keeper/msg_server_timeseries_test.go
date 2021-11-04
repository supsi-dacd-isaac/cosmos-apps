package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/supsi-dacd-isaac/cosmos-apps/tsdb/x/tsdb/types"
)

func TestTimeseriesMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateTimeseries(ctx, &types.MsgCreateTimeseries{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestTimeseriesMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateTimeseries
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateTimeseries{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTimeseries{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTimeseries{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateTimeseries(ctx, &types.MsgCreateTimeseries{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateTimeseries(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestTimeseriesMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteTimeseries
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteTimeseries{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteTimeseries{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteTimeseries{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateTimeseries(ctx, &types.MsgCreateTimeseries{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteTimeseries(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
