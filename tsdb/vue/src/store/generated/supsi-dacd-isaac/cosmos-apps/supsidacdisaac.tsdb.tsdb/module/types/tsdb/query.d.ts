import { Reader, Writer } from 'protobufjs/minimal';
import { Timeseries } from '../tsdb/timeseries';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Measure } from '../tsdb/measure';
export declare const protobufPackage = "supsidacdisaac.tsdb.tsdb";
export interface QueryGetTimeseriesRequest {
    id: number;
}
export interface QueryGetTimeseriesResponse {
    Timeseries: Timeseries | undefined;
}
export interface QueryAllTimeseriesRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTimeseriesResponse {
    Timeseries: Timeseries[];
    pagination: PageResponse | undefined;
}
export interface QueryGetMeasureRequest {
    id: number;
}
export interface QueryGetMeasureResponse {
    Measure: Measure | undefined;
}
export interface QueryAllMeasureRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllMeasureResponse {
    Measure: Measure[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetTimeseriesRequest: {
    encode(message: QueryGetTimeseriesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimeseriesRequest;
    fromJSON(object: any): QueryGetTimeseriesRequest;
    toJSON(message: QueryGetTimeseriesRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTimeseriesRequest>): QueryGetTimeseriesRequest;
};
export declare const QueryGetTimeseriesResponse: {
    encode(message: QueryGetTimeseriesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimeseriesResponse;
    fromJSON(object: any): QueryGetTimeseriesResponse;
    toJSON(message: QueryGetTimeseriesResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTimeseriesResponse>): QueryGetTimeseriesResponse;
};
export declare const QueryAllTimeseriesRequest: {
    encode(message: QueryAllTimeseriesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimeseriesRequest;
    fromJSON(object: any): QueryAllTimeseriesRequest;
    toJSON(message: QueryAllTimeseriesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTimeseriesRequest>): QueryAllTimeseriesRequest;
};
export declare const QueryAllTimeseriesResponse: {
    encode(message: QueryAllTimeseriesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimeseriesResponse;
    fromJSON(object: any): QueryAllTimeseriesResponse;
    toJSON(message: QueryAllTimeseriesResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTimeseriesResponse>): QueryAllTimeseriesResponse;
};
export declare const QueryGetMeasureRequest: {
    encode(message: QueryGetMeasureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMeasureRequest;
    fromJSON(object: any): QueryGetMeasureRequest;
    toJSON(message: QueryGetMeasureRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMeasureRequest>): QueryGetMeasureRequest;
};
export declare const QueryGetMeasureResponse: {
    encode(message: QueryGetMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMeasureResponse;
    fromJSON(object: any): QueryGetMeasureResponse;
    toJSON(message: QueryGetMeasureResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMeasureResponse>): QueryGetMeasureResponse;
};
export declare const QueryAllMeasureRequest: {
    encode(message: QueryAllMeasureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMeasureRequest;
    fromJSON(object: any): QueryAllMeasureRequest;
    toJSON(message: QueryAllMeasureRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMeasureRequest>): QueryAllMeasureRequest;
};
export declare const QueryAllMeasureResponse: {
    encode(message: QueryAllMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMeasureResponse;
    fromJSON(object: any): QueryAllMeasureResponse;
    toJSON(message: QueryAllMeasureResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMeasureResponse>): QueryAllMeasureResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a timeseries by id. */
    Timeseries(request: QueryGetTimeseriesRequest): Promise<QueryGetTimeseriesResponse>;
    /** Queries a list of timeseries items. */
    TimeseriesAll(request: QueryAllTimeseriesRequest): Promise<QueryAllTimeseriesResponse>;
    /** Queries a measure by id. */
    Measure(request: QueryGetMeasureRequest): Promise<QueryGetMeasureResponse>;
    /** Queries a list of measure items. */
    MeasureAll(request: QueryAllMeasureRequest): Promise<QueryAllMeasureResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Timeseries(request: QueryGetTimeseriesRequest): Promise<QueryGetTimeseriesResponse>;
    TimeseriesAll(request: QueryAllTimeseriesRequest): Promise<QueryAllTimeseriesResponse>;
    Measure(request: QueryGetMeasureRequest): Promise<QueryGetMeasureResponse>;
    MeasureAll(request: QueryAllMeasureRequest): Promise<QueryAllMeasureResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
