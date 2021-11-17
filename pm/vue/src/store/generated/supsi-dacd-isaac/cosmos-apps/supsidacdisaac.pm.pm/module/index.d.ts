import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteSla } from "./types/pm/tx";
import { MsgUpdateDso } from "./types/pm/tx";
import { MsgUpdateLemMeasure } from "./types/pm/tx";
import { MsgDeleteKpi } from "./types/pm/tx";
import { MsgDeletePlayer } from "./types/pm/tx";
import { MsgUpdateSla } from "./types/pm/tx";
import { MsgUpdateLem } from "./types/pm/tx";
import { MsgCreateAggregator } from "./types/pm/tx";
import { MsgDeleteLemMeasure } from "./types/pm/tx";
import { MsgCreatePlayer } from "./types/pm/tx";
import { MsgCreateKpi } from "./types/pm/tx";
import { MsgCreateLem } from "./types/pm/tx";
import { MsgCreateDso } from "./types/pm/tx";
import { MsgDeleteAggregator } from "./types/pm/tx";
import { MsgDeleteDso } from "./types/pm/tx";
import { MsgUpdateKpiMeasure } from "./types/pm/tx";
import { MsgCreateSla } from "./types/pm/tx";
import { MsgUpdateAggregator } from "./types/pm/tx";
import { MsgDeleteLem } from "./types/pm/tx";
import { MsgUpdatePlayer } from "./types/pm/tx";
import { MsgCreateLemMeasure } from "./types/pm/tx";
import { MsgDeleteKpiMeasure } from "./types/pm/tx";
import { MsgUpdateKpi } from "./types/pm/tx";
import { MsgCreateKpiMeasure } from "./types/pm/tx";
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
    msgDeleteSla: (data: MsgDeleteSla) => EncodeObject;
    msgUpdateDso: (data: MsgUpdateDso) => EncodeObject;
    msgUpdateLemMeasure: (data: MsgUpdateLemMeasure) => EncodeObject;
    msgDeleteKpi: (data: MsgDeleteKpi) => EncodeObject;
    msgDeletePlayer: (data: MsgDeletePlayer) => EncodeObject;
    msgUpdateSla: (data: MsgUpdateSla) => EncodeObject;
    msgUpdateLem: (data: MsgUpdateLem) => EncodeObject;
    msgCreateAggregator: (data: MsgCreateAggregator) => EncodeObject;
    msgDeleteLemMeasure: (data: MsgDeleteLemMeasure) => EncodeObject;
    msgCreatePlayer: (data: MsgCreatePlayer) => EncodeObject;
    msgCreateKpi: (data: MsgCreateKpi) => EncodeObject;
    msgCreateLem: (data: MsgCreateLem) => EncodeObject;
    msgCreateDso: (data: MsgCreateDso) => EncodeObject;
    msgDeleteAggregator: (data: MsgDeleteAggregator) => EncodeObject;
    msgDeleteDso: (data: MsgDeleteDso) => EncodeObject;
    msgUpdateKpiMeasure: (data: MsgUpdateKpiMeasure) => EncodeObject;
    msgCreateSla: (data: MsgCreateSla) => EncodeObject;
    msgUpdateAggregator: (data: MsgUpdateAggregator) => EncodeObject;
    msgDeleteLem: (data: MsgDeleteLem) => EncodeObject;
    msgUpdatePlayer: (data: MsgUpdatePlayer) => EncodeObject;
    msgCreateLemMeasure: (data: MsgCreateLemMeasure) => EncodeObject;
    msgDeleteKpiMeasure: (data: MsgDeleteKpiMeasure) => EncodeObject;
    msgUpdateKpi: (data: MsgUpdateKpi) => EncodeObject;
    msgCreateKpiMeasure: (data: MsgCreateKpiMeasure) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
