import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateDso } from "./types/pm/tx";
import { MsgUpdatePlayer } from "./types/pm/tx";
import { MsgCreateAggregator } from "./types/pm/tx";
import { MsgCreateKpiMeasure } from "./types/pm/tx";
import { MsgDeleteAggregator } from "./types/pm/tx";
import { MsgDeleteKpi } from "./types/pm/tx";
import { MsgDeleteDso } from "./types/pm/tx";
import { MsgCreateLem } from "./types/pm/tx";
import { MsgDeleteSla } from "./types/pm/tx";
import { MsgCreateSla } from "./types/pm/tx";
import { MsgUpdateSla } from "./types/pm/tx";
import { MsgUpdateDso } from "./types/pm/tx";
import { MsgCreatePlayer } from "./types/pm/tx";
import { MsgUpdateLemMeasure } from "./types/pm/tx";
import { MsgCreateKpi } from "./types/pm/tx";
import { MsgDeleteLem } from "./types/pm/tx";
import { MsgUpdateKpiMeasure } from "./types/pm/tx";
import { MsgDeleteLemMeasure } from "./types/pm/tx";
import { MsgDeleteKpiMeasure } from "./types/pm/tx";
import { MsgUpdateAggregator } from "./types/pm/tx";
import { MsgDeletePlayer } from "./types/pm/tx";
import { MsgUpdateLem } from "./types/pm/tx";
import { MsgUpdateKpi } from "./types/pm/tx";
import { MsgCreateLemMeasure } from "./types/pm/tx";
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
    msgCreateDso: (data: MsgCreateDso) => EncodeObject;
    msgUpdatePlayer: (data: MsgUpdatePlayer) => EncodeObject;
    msgCreateAggregator: (data: MsgCreateAggregator) => EncodeObject;
    msgCreateKpiMeasure: (data: MsgCreateKpiMeasure) => EncodeObject;
    msgDeleteAggregator: (data: MsgDeleteAggregator) => EncodeObject;
    msgDeleteKpi: (data: MsgDeleteKpi) => EncodeObject;
    msgDeleteDso: (data: MsgDeleteDso) => EncodeObject;
    msgCreateLem: (data: MsgCreateLem) => EncodeObject;
    msgDeleteSla: (data: MsgDeleteSla) => EncodeObject;
    msgCreateSla: (data: MsgCreateSla) => EncodeObject;
    msgUpdateSla: (data: MsgUpdateSla) => EncodeObject;
    msgUpdateDso: (data: MsgUpdateDso) => EncodeObject;
    msgCreatePlayer: (data: MsgCreatePlayer) => EncodeObject;
    msgUpdateLemMeasure: (data: MsgUpdateLemMeasure) => EncodeObject;
    msgCreateKpi: (data: MsgCreateKpi) => EncodeObject;
    msgDeleteLem: (data: MsgDeleteLem) => EncodeObject;
    msgUpdateKpiMeasure: (data: MsgUpdateKpiMeasure) => EncodeObject;
    msgDeleteLemMeasure: (data: MsgDeleteLemMeasure) => EncodeObject;
    msgDeleteKpiMeasure: (data: MsgDeleteKpiMeasure) => EncodeObject;
    msgUpdateAggregator: (data: MsgUpdateAggregator) => EncodeObject;
    msgDeletePlayer: (data: MsgDeletePlayer) => EncodeObject;
    msgUpdateLem: (data: MsgUpdateLem) => EncodeObject;
    msgUpdateKpi: (data: MsgUpdateKpi) => EncodeObject;
    msgCreateLemMeasure: (data: MsgCreateLemMeasure) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
