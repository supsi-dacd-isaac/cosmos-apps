import { Reader, Writer } from 'protobufjs/minimal';
import { Dso } from '../pm/dso';
import { Player } from '../pm/player';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Aggregator } from '../pm/aggregator';
import { Lem } from '../pm/lem';
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface QueryGetDsoRequest {
}
export interface QueryGetDsoResponse {
    Dso: Dso | undefined;
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
export interface QueryGetAggregatorRequest {
}
export interface QueryGetAggregatorResponse {
    Aggregator: Aggregator | undefined;
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
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a dso by index. */
    Dso(request: QueryGetDsoRequest): Promise<QueryGetDsoResponse>;
    /** Queries a player by index. */
    Player(request: QueryGetPlayerRequest): Promise<QueryGetPlayerResponse>;
    /** Queries a list of player items. */
    PlayerAll(request: QueryAllPlayerRequest): Promise<QueryAllPlayerResponse>;
    /** Queries a aggregator by index. */
    Aggregator(request: QueryGetAggregatorRequest): Promise<QueryGetAggregatorResponse>;
    /** Queries a lem by index. */
    Lem(request: QueryGetLemRequest): Promise<QueryGetLemResponse>;
    /** Queries a list of lem items. */
    LemAll(request: QueryAllLemRequest): Promise<QueryAllLemResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Dso(request: QueryGetDsoRequest): Promise<QueryGetDsoResponse>;
    Player(request: QueryGetPlayerRequest): Promise<QueryGetPlayerResponse>;
    PlayerAll(request: QueryAllPlayerRequest): Promise<QueryAllPlayerResponse>;
    Aggregator(request: QueryGetAggregatorRequest): Promise<QueryGetAggregatorResponse>;
    Lem(request: QueryGetLemRequest): Promise<QueryGetLemResponse>;
    LemAll(request: QueryAllLemRequest): Promise<QueryAllLemResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
