import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface Kpi {
    index: string;
    sla: string;
    rule: string;
    limit: string;
    mu: string;
    penalty: number;
    creator: string;
}
export declare const Kpi: {
    encode(message: Kpi, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Kpi;
    fromJSON(object: any): Kpi;
    toJSON(message: Kpi): unknown;
    fromPartial(object: DeepPartial<Kpi>): Kpi;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
