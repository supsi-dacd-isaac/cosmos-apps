import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "supsidacdisaac.tsdb.tsdb";
export interface Timeseries {
    id: number;
    location: string;
    signal: string;
    creator: string;
}
export declare const Timeseries: {
    encode(message: Timeseries, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Timeseries;
    fromJSON(object: any): Timeseries;
    toJSON(message: Timeseries): unknown;
    fromPartial(object: DeepPartial<Timeseries>): Timeseries;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
