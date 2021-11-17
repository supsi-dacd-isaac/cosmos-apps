import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface KpiMeasure {
    index: string;
    kpi: string;
    player: string;
    timestamp: number;
    value: string;
    mu: string;
    creator: string;
}
export declare const KpiMeasure: {
    encode(message: KpiMeasure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): KpiMeasure;
    fromJSON(object: any): KpiMeasure;
    toJSON(message: KpiMeasure): unknown;
    fromPartial(object: DeepPartial<KpiMeasure>): KpiMeasure;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
