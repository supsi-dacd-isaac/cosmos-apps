// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateTimeseries } from "./types/tsdb/tx";
import { MsgCreateMeasure } from "./types/tsdb/tx";
import { MsgCreateTimeseries } from "./types/tsdb/tx";
import { MsgUpdateMeasure } from "./types/tsdb/tx";
import { MsgDeleteMeasure } from "./types/tsdb/tx";
import { MsgDeleteTimeseries } from "./types/tsdb/tx";
const types = [
    ["/supsidacdisaac.tsdb.tsdb.MsgUpdateTimeseries", MsgUpdateTimeseries],
    ["/supsidacdisaac.tsdb.tsdb.MsgCreateMeasure", MsgCreateMeasure],
    ["/supsidacdisaac.tsdb.tsdb.MsgCreateTimeseries", MsgCreateTimeseries],
    ["/supsidacdisaac.tsdb.tsdb.MsgUpdateMeasure", MsgUpdateMeasure],
    ["/supsidacdisaac.tsdb.tsdb.MsgDeleteMeasure", MsgDeleteMeasure],
    ["/supsidacdisaac.tsdb.tsdb.MsgDeleteTimeseries", MsgDeleteTimeseries],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdateTimeseries: (data) => ({ typeUrl: "/supsidacdisaac.tsdb.tsdb.MsgUpdateTimeseries", value: data }),
        msgCreateMeasure: (data) => ({ typeUrl: "/supsidacdisaac.tsdb.tsdb.MsgCreateMeasure", value: data }),
        msgCreateTimeseries: (data) => ({ typeUrl: "/supsidacdisaac.tsdb.tsdb.MsgCreateTimeseries", value: data }),
        msgUpdateMeasure: (data) => ({ typeUrl: "/supsidacdisaac.tsdb.tsdb.MsgUpdateMeasure", value: data }),
        msgDeleteMeasure: (data) => ({ typeUrl: "/supsidacdisaac.tsdb.tsdb.MsgDeleteMeasure", value: data }),
        msgDeleteTimeseries: (data) => ({ typeUrl: "/supsidacdisaac.tsdb.tsdb.MsgDeleteTimeseries", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
