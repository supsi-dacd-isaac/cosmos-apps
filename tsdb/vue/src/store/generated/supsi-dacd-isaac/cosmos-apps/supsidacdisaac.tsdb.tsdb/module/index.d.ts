import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateTimeseries } from "./types/tsdb/tx";
import { MsgCreateMeasure } from "./types/tsdb/tx";
import { MsgCreateTimeseries } from "./types/tsdb/tx";
import { MsgUpdateMeasure } from "./types/tsdb/tx";
import { MsgDeleteMeasure } from "./types/tsdb/tx";
import { MsgDeleteTimeseries } from "./types/tsdb/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateTimeseries: (data: MsgUpdateTimeseries) => EncodeObject;
    msgCreateMeasure: (data: MsgCreateMeasure) => EncodeObject;
    msgCreateTimeseries: (data: MsgCreateTimeseries) => EncodeObject;
    msgUpdateMeasure: (data: MsgUpdateMeasure) => EncodeObject;
    msgDeleteMeasure: (data: MsgDeleteMeasure) => EncodeObject;
    msgDeleteTimeseries: (data: MsgDeleteTimeseries) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
