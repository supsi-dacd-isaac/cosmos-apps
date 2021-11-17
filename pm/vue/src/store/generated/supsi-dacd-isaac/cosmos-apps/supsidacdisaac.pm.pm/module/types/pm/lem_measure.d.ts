import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface LemMeasure {
    index: string;
    player: string;
    signal: string;
    timestamp: number;
    value: string;
    mu: string;
    creator: string;
}
export declare const LemMeasure: {
    encode(message: LemMeasure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): LemMeasure;
    fromJSON(object: any): LemMeasure;
    toJSON(message: LemMeasure): unknown;
    fromPartial(object: DeepPartial<LemMeasure>): LemMeasure;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
