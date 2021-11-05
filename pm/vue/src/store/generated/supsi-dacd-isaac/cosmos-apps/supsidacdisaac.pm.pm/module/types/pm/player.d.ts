import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface Player {
    index: string;
    address: string;
    role: string;
    creator: string;
}
export declare const Player: {
    encode(message: Player, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Player;
    fromJSON(object: any): Player;
    toJSON(message: Player): unknown;
    fromPartial(object: DeepPartial<Player>): Player;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
