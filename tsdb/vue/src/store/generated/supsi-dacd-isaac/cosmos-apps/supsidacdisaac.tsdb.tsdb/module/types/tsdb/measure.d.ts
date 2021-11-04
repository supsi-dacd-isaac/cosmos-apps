import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "supsidacdisaac.tsdb.tsdb";
export interface Measure {
    id: number;
    timeseriesID: string;
    ts: string;
    value: string;
    creator: string;
}
export declare const Measure: {
    encode(message: Measure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Measure;
    fromJSON(object: any): Measure;
    toJSON(message: Measure): unknown;
    fromPartial(object: DeepPartial<Measure>): Measure;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
