import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface Sla {
    index: string;
    start: number;
    end: number;
    creator: string;
}
export declare const Sla: {
    encode(message: Sla, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Sla;
    fromJSON(object: any): Sla;
    toJSON(message: Sla): unknown;
    fromPartial(object: DeepPartial<Sla>): Sla;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
