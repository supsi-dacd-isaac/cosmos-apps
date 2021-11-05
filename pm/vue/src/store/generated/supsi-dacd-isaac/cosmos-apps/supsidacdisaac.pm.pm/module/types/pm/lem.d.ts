import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface Lem {
    index: string;
    indexEnd: string;
    params: string[];
    players: string[];
    creator: string;
}
export declare const Lem: {
    encode(message: Lem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Lem;
    fromJSON(object: any): Lem;
    toJSON(message: Lem): unknown;
    fromPartial(object: DeepPartial<Lem>): Lem;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
