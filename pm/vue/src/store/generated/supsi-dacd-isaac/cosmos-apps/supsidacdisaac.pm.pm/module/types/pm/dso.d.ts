import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface Dso {
    idx: string;
    address: string;
    creator: string;
}
export declare const Dso: {
    encode(message: Dso, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Dso;
    fromJSON(object: any): Dso;
    toJSON(message: Dso): unknown;
    fromPartial(object: DeepPartial<Dso>): Dso;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
