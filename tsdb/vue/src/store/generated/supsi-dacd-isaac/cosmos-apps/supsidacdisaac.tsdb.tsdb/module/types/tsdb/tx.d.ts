import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "supsidacdisaac.tsdb.tsdb";
export interface MsgCreateTimeseries {
    creator: string;
    location: string;
    signal: string;
}
export interface MsgCreateTimeseriesResponse {
    id: number;
}
export interface MsgUpdateTimeseries {
    creator: string;
    id: number;
    location: string;
    signal: string;
}
export interface MsgUpdateTimeseriesResponse {
}
export interface MsgDeleteTimeseries {
    creator: string;
    id: number;
}
export interface MsgDeleteTimeseriesResponse {
}
export interface MsgCreateMeasure {
    creator: string;
    timeseriesID: string;
    ts: string;
    value: string;
}
export interface MsgCreateMeasureResponse {
    id: number;
}
export interface MsgUpdateMeasure {
    creator: string;
    id: number;
    timeseriesID: string;
    ts: string;
    value: string;
}
export interface MsgUpdateMeasureResponse {
}
export interface MsgDeleteMeasure {
    creator: string;
    id: number;
}
export interface MsgDeleteMeasureResponse {
}
export declare const MsgCreateTimeseries: {
    encode(message: MsgCreateTimeseries, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTimeseries;
    fromJSON(object: any): MsgCreateTimeseries;
    toJSON(message: MsgCreateTimeseries): unknown;
    fromPartial(object: DeepPartial<MsgCreateTimeseries>): MsgCreateTimeseries;
};
export declare const MsgCreateTimeseriesResponse: {
    encode(message: MsgCreateTimeseriesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTimeseriesResponse;
    fromJSON(object: any): MsgCreateTimeseriesResponse;
    toJSON(message: MsgCreateTimeseriesResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTimeseriesResponse>): MsgCreateTimeseriesResponse;
};
export declare const MsgUpdateTimeseries: {
    encode(message: MsgUpdateTimeseries, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimeseries;
    fromJSON(object: any): MsgUpdateTimeseries;
    toJSON(message: MsgUpdateTimeseries): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTimeseries>): MsgUpdateTimeseries;
};
export declare const MsgUpdateTimeseriesResponse: {
    encode(_: MsgUpdateTimeseriesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimeseriesResponse;
    fromJSON(_: any): MsgUpdateTimeseriesResponse;
    toJSON(_: MsgUpdateTimeseriesResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTimeseriesResponse>): MsgUpdateTimeseriesResponse;
};
export declare const MsgDeleteTimeseries: {
    encode(message: MsgDeleteTimeseries, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimeseries;
    fromJSON(object: any): MsgDeleteTimeseries;
    toJSON(message: MsgDeleteTimeseries): unknown;
    fromPartial(object: DeepPartial<MsgDeleteTimeseries>): MsgDeleteTimeseries;
};
export declare const MsgDeleteTimeseriesResponse: {
    encode(_: MsgDeleteTimeseriesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimeseriesResponse;
    fromJSON(_: any): MsgDeleteTimeseriesResponse;
    toJSON(_: MsgDeleteTimeseriesResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteTimeseriesResponse>): MsgDeleteTimeseriesResponse;
};
export declare const MsgCreateMeasure: {
    encode(message: MsgCreateMeasure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMeasure;
    fromJSON(object: any): MsgCreateMeasure;
    toJSON(message: MsgCreateMeasure): unknown;
    fromPartial(object: DeepPartial<MsgCreateMeasure>): MsgCreateMeasure;
};
export declare const MsgCreateMeasureResponse: {
    encode(message: MsgCreateMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMeasureResponse;
    fromJSON(object: any): MsgCreateMeasureResponse;
    toJSON(message: MsgCreateMeasureResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateMeasureResponse>): MsgCreateMeasureResponse;
};
export declare const MsgUpdateMeasure: {
    encode(message: MsgUpdateMeasure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMeasure;
    fromJSON(object: any): MsgUpdateMeasure;
    toJSON(message: MsgUpdateMeasure): unknown;
    fromPartial(object: DeepPartial<MsgUpdateMeasure>): MsgUpdateMeasure;
};
export declare const MsgUpdateMeasureResponse: {
    encode(_: MsgUpdateMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMeasureResponse;
    fromJSON(_: any): MsgUpdateMeasureResponse;
    toJSON(_: MsgUpdateMeasureResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateMeasureResponse>): MsgUpdateMeasureResponse;
};
export declare const MsgDeleteMeasure: {
    encode(message: MsgDeleteMeasure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMeasure;
    fromJSON(object: any): MsgDeleteMeasure;
    toJSON(message: MsgDeleteMeasure): unknown;
    fromPartial(object: DeepPartial<MsgDeleteMeasure>): MsgDeleteMeasure;
};
export declare const MsgDeleteMeasureResponse: {
    encode(_: MsgDeleteMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMeasureResponse;
    fromJSON(_: any): MsgDeleteMeasureResponse;
    toJSON(_: MsgDeleteMeasureResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteMeasureResponse>): MsgDeleteMeasureResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateTimeseries(request: MsgCreateTimeseries): Promise<MsgCreateTimeseriesResponse>;
    UpdateTimeseries(request: MsgUpdateTimeseries): Promise<MsgUpdateTimeseriesResponse>;
    DeleteTimeseries(request: MsgDeleteTimeseries): Promise<MsgDeleteTimeseriesResponse>;
    CreateMeasure(request: MsgCreateMeasure): Promise<MsgCreateMeasureResponse>;
    UpdateMeasure(request: MsgUpdateMeasure): Promise<MsgUpdateMeasureResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteMeasure(request: MsgDeleteMeasure): Promise<MsgDeleteMeasureResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateTimeseries(request: MsgCreateTimeseries): Promise<MsgCreateTimeseriesResponse>;
    UpdateTimeseries(request: MsgUpdateTimeseries): Promise<MsgUpdateTimeseriesResponse>;
    DeleteTimeseries(request: MsgDeleteTimeseries): Promise<MsgDeleteTimeseriesResponse>;
    CreateMeasure(request: MsgCreateMeasure): Promise<MsgCreateMeasureResponse>;
    UpdateMeasure(request: MsgUpdateMeasure): Promise<MsgUpdateMeasureResponse>;
    DeleteMeasure(request: MsgDeleteMeasure): Promise<MsgDeleteMeasureResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
