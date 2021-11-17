import { Reader, Writer } from "protobufjs/minimal";
import { Dso } from "../pm/dso";
import { Aggregator } from "../pm/aggregator";
import { Player } from "../pm/player";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Lem } from "../pm/lem";
import { LemMeasure } from "../pm/lem_measure";
import { Sla } from "../pm/sla";
import { Kpi } from "../pm/kpi";
import { KpiMeasure } from "../pm/kpi_measure";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface QueryGetDsoRequest {
}
export interface QueryGetDsoResponse {
    Dso: Dso | undefined;
}
export interface QueryGetAggregatorRequest {
}
export interface QueryGetAggregatorResponse {
    Aggregator: Aggregator | undefined;
}
export interface QueryGetPlayerRequest {
    index: string;
}
export interface QueryGetPlayerResponse {
    player: Player | undefined;
}
export interface QueryAllPlayerRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPlayerResponse {
    player: Player[];
    pagination: PageResponse | undefined;
}
export interface QueryGetLemRequest {
    index: string;
}
export interface QueryGetLemResponse {
    lem: Lem | undefined;
}
export interface QueryAllLemRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllLemResponse {
    lem: Lem[];
    pagination: PageResponse | undefined;
}
export interface QueryGetLemMeasureRequest {
    index: string;
}
export interface QueryGetLemMeasureResponse {
    lemMeasure: LemMeasure | undefined;
}
export interface QueryAllLemMeasureRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllLemMeasureResponse {
    lemMeasure: LemMeasure[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSlaRequest {
    index: string;
}
export interface QueryGetSlaResponse {
    sla: Sla | undefined;
}
export interface QueryAllSlaRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSlaResponse {
    sla: Sla[];
    pagination: PageResponse | undefined;
}
export interface QueryGetKpiRequest {
    index: string;
}
export interface QueryGetKpiResponse {
    kpi: Kpi | undefined;
}
export interface QueryAllKpiRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllKpiResponse {
    kpi: Kpi[];
    pagination: PageResponse | undefined;
}
export interface QueryGetKpiMeasureRequest {
    index: string;
}
export interface QueryGetKpiMeasureResponse {
    kpiMeasure: KpiMeasure | undefined;
}
export interface QueryAllKpiMeasureRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllKpiMeasureResponse {
    kpiMeasure: KpiMeasure[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetDsoRequest: {
    encode(_: QueryGetDsoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDsoRequest;
    fromJSON(_: any): QueryGetDsoRequest;
    toJSON(_: QueryGetDsoRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetDsoRequest>): QueryGetDsoRequest;
};
export declare const QueryGetDsoResponse: {
    encode(message: QueryGetDsoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDsoResponse;
    fromJSON(object: any): QueryGetDsoResponse;
    toJSON(message: QueryGetDsoResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetDsoResponse>): QueryGetDsoResponse;
};
export declare const QueryGetAggregatorRequest: {
    encode(_: QueryGetAggregatorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAggregatorRequest;
    fromJSON(_: any): QueryGetAggregatorRequest;
    toJSON(_: QueryGetAggregatorRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetAggregatorRequest>): QueryGetAggregatorRequest;
};
export declare const QueryGetAggregatorResponse: {
    encode(message: QueryGetAggregatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAggregatorResponse;
    fromJSON(object: any): QueryGetAggregatorResponse;
    toJSON(message: QueryGetAggregatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAggregatorResponse>): QueryGetAggregatorResponse;
};
export declare const QueryGetPlayerRequest: {
    encode(message: QueryGetPlayerRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPlayerRequest;
    fromJSON(object: any): QueryGetPlayerRequest;
    toJSON(message: QueryGetPlayerRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPlayerRequest>): QueryGetPlayerRequest;
};
export declare const QueryGetPlayerResponse: {
    encode(message: QueryGetPlayerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPlayerResponse;
    fromJSON(object: any): QueryGetPlayerResponse;
    toJSON(message: QueryGetPlayerResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPlayerResponse>): QueryGetPlayerResponse;
};
export declare const QueryAllPlayerRequest: {
    encode(message: QueryAllPlayerRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPlayerRequest;
    fromJSON(object: any): QueryAllPlayerRequest;
    toJSON(message: QueryAllPlayerRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPlayerRequest>): QueryAllPlayerRequest;
};
export declare const QueryAllPlayerResponse: {
    encode(message: QueryAllPlayerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPlayerResponse;
    fromJSON(object: any): QueryAllPlayerResponse;
    toJSON(message: QueryAllPlayerResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPlayerResponse>): QueryAllPlayerResponse;
};
export declare const QueryGetLemRequest: {
    encode(message: QueryGetLemRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetLemRequest;
    fromJSON(object: any): QueryGetLemRequest;
    toJSON(message: QueryGetLemRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetLemRequest>): QueryGetLemRequest;
};
export declare const QueryGetLemResponse: {
    encode(message: QueryGetLemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetLemResponse;
    fromJSON(object: any): QueryGetLemResponse;
    toJSON(message: QueryGetLemResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetLemResponse>): QueryGetLemResponse;
};
export declare const QueryAllLemRequest: {
    encode(message: QueryAllLemRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllLemRequest;
    fromJSON(object: any): QueryAllLemRequest;
    toJSON(message: QueryAllLemRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllLemRequest>): QueryAllLemRequest;
};
export declare const QueryAllLemResponse: {
    encode(message: QueryAllLemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllLemResponse;
    fromJSON(object: any): QueryAllLemResponse;
    toJSON(message: QueryAllLemResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllLemResponse>): QueryAllLemResponse;
};
export declare const QueryGetLemMeasureRequest: {
    encode(message: QueryGetLemMeasureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetLemMeasureRequest;
    fromJSON(object: any): QueryGetLemMeasureRequest;
    toJSON(message: QueryGetLemMeasureRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetLemMeasureRequest>): QueryGetLemMeasureRequest;
};
export declare const QueryGetLemMeasureResponse: {
    encode(message: QueryGetLemMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetLemMeasureResponse;
    fromJSON(object: any): QueryGetLemMeasureResponse;
    toJSON(message: QueryGetLemMeasureResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetLemMeasureResponse>): QueryGetLemMeasureResponse;
};
export declare const QueryAllLemMeasureRequest: {
    encode(message: QueryAllLemMeasureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllLemMeasureRequest;
    fromJSON(object: any): QueryAllLemMeasureRequest;
    toJSON(message: QueryAllLemMeasureRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllLemMeasureRequest>): QueryAllLemMeasureRequest;
};
export declare const QueryAllLemMeasureResponse: {
    encode(message: QueryAllLemMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllLemMeasureResponse;
    fromJSON(object: any): QueryAllLemMeasureResponse;
    toJSON(message: QueryAllLemMeasureResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllLemMeasureResponse>): QueryAllLemMeasureResponse;
};
export declare const QueryGetSlaRequest: {
    encode(message: QueryGetSlaRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSlaRequest;
    fromJSON(object: any): QueryGetSlaRequest;
    toJSON(message: QueryGetSlaRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSlaRequest>): QueryGetSlaRequest;
};
export declare const QueryGetSlaResponse: {
    encode(message: QueryGetSlaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSlaResponse;
    fromJSON(object: any): QueryGetSlaResponse;
    toJSON(message: QueryGetSlaResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSlaResponse>): QueryGetSlaResponse;
};
export declare const QueryAllSlaRequest: {
    encode(message: QueryAllSlaRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSlaRequest;
    fromJSON(object: any): QueryAllSlaRequest;
    toJSON(message: QueryAllSlaRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSlaRequest>): QueryAllSlaRequest;
};
export declare const QueryAllSlaResponse: {
    encode(message: QueryAllSlaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSlaResponse;
    fromJSON(object: any): QueryAllSlaResponse;
    toJSON(message: QueryAllSlaResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSlaResponse>): QueryAllSlaResponse;
};
export declare const QueryGetKpiRequest: {
    encode(message: QueryGetKpiRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetKpiRequest;
    fromJSON(object: any): QueryGetKpiRequest;
    toJSON(message: QueryGetKpiRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetKpiRequest>): QueryGetKpiRequest;
};
export declare const QueryGetKpiResponse: {
    encode(message: QueryGetKpiResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetKpiResponse;
    fromJSON(object: any): QueryGetKpiResponse;
    toJSON(message: QueryGetKpiResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetKpiResponse>): QueryGetKpiResponse;
};
export declare const QueryAllKpiRequest: {
    encode(message: QueryAllKpiRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllKpiRequest;
    fromJSON(object: any): QueryAllKpiRequest;
    toJSON(message: QueryAllKpiRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllKpiRequest>): QueryAllKpiRequest;
};
export declare const QueryAllKpiResponse: {
    encode(message: QueryAllKpiResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllKpiResponse;
    fromJSON(object: any): QueryAllKpiResponse;
    toJSON(message: QueryAllKpiResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllKpiResponse>): QueryAllKpiResponse;
};
export declare const QueryGetKpiMeasureRequest: {
    encode(message: QueryGetKpiMeasureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetKpiMeasureRequest;
    fromJSON(object: any): QueryGetKpiMeasureRequest;
    toJSON(message: QueryGetKpiMeasureRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetKpiMeasureRequest>): QueryGetKpiMeasureRequest;
};
export declare const QueryGetKpiMeasureResponse: {
    encode(message: QueryGetKpiMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetKpiMeasureResponse;
    fromJSON(object: any): QueryGetKpiMeasureResponse;
    toJSON(message: QueryGetKpiMeasureResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetKpiMeasureResponse>): QueryGetKpiMeasureResponse;
};
export declare const QueryAllKpiMeasureRequest: {
    encode(message: QueryAllKpiMeasureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllKpiMeasureRequest;
    fromJSON(object: any): QueryAllKpiMeasureRequest;
    toJSON(message: QueryAllKpiMeasureRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllKpiMeasureRequest>): QueryAllKpiMeasureRequest;
};
export declare const QueryAllKpiMeasureResponse: {
    encode(message: QueryAllKpiMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllKpiMeasureResponse;
    fromJSON(object: any): QueryAllKpiMeasureResponse;
    toJSON(message: QueryAllKpiMeasureResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllKpiMeasureResponse>): QueryAllKpiMeasureResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a dso by index. */
    Dso(request: QueryGetDsoRequest): Promise<QueryGetDsoResponse>;
    /** Queries a aggregator by index. */
    Aggregator(request: QueryGetAggregatorRequest): Promise<QueryGetAggregatorResponse>;
    /** Queries a player by index. */
    Player(request: QueryGetPlayerRequest): Promise<QueryGetPlayerResponse>;
    /** Queries a list of player items. */
    PlayerAll(request: QueryAllPlayerRequest): Promise<QueryAllPlayerResponse>;
    /** Queries a lem by index. */
    Lem(request: QueryGetLemRequest): Promise<QueryGetLemResponse>;
    /** Queries a list of lem items. */
    LemAll(request: QueryAllLemRequest): Promise<QueryAllLemResponse>;
    /** Queries a lemMeasure by index. */
    LemMeasure(request: QueryGetLemMeasureRequest): Promise<QueryGetLemMeasureResponse>;
    /** Queries a list of lemMeasure items. */
    LemMeasureAll(request: QueryAllLemMeasureRequest): Promise<QueryAllLemMeasureResponse>;
    /** Queries a sla by index. */
    Sla(request: QueryGetSlaRequest): Promise<QueryGetSlaResponse>;
    /** Queries a list of sla items. */
    SlaAll(request: QueryAllSlaRequest): Promise<QueryAllSlaResponse>;
    /** Queries a kpi by index. */
    Kpi(request: QueryGetKpiRequest): Promise<QueryGetKpiResponse>;
    /** Queries a list of kpi items. */
    KpiAll(request: QueryAllKpiRequest): Promise<QueryAllKpiResponse>;
    /** Queries a kpiMeasure by index. */
    KpiMeasure(request: QueryGetKpiMeasureRequest): Promise<QueryGetKpiMeasureResponse>;
    /** Queries a list of kpiMeasure items. */
    KpiMeasureAll(request: QueryAllKpiMeasureRequest): Promise<QueryAllKpiMeasureResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Dso(request: QueryGetDsoRequest): Promise<QueryGetDsoResponse>;
    Aggregator(request: QueryGetAggregatorRequest): Promise<QueryGetAggregatorResponse>;
    Player(request: QueryGetPlayerRequest): Promise<QueryGetPlayerResponse>;
    PlayerAll(request: QueryAllPlayerRequest): Promise<QueryAllPlayerResponse>;
    Lem(request: QueryGetLemRequest): Promise<QueryGetLemResponse>;
    LemAll(request: QueryAllLemRequest): Promise<QueryAllLemResponse>;
    LemMeasure(request: QueryGetLemMeasureRequest): Promise<QueryGetLemMeasureResponse>;
    LemMeasureAll(request: QueryAllLemMeasureRequest): Promise<QueryAllLemMeasureResponse>;
    Sla(request: QueryGetSlaRequest): Promise<QueryGetSlaResponse>;
    SlaAll(request: QueryAllSlaRequest): Promise<QueryAllSlaResponse>;
    Kpi(request: QueryGetKpiRequest): Promise<QueryGetKpiResponse>;
    KpiAll(request: QueryAllKpiRequest): Promise<QueryAllKpiResponse>;
    KpiMeasure(request: QueryGetKpiMeasureRequest): Promise<QueryGetKpiMeasureResponse>;
    KpiMeasureAll(request: QueryAllKpiMeasureRequest): Promise<QueryAllKpiMeasureResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
