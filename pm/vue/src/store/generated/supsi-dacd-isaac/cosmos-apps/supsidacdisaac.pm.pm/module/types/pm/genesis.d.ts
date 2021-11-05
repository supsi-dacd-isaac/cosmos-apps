import { Dso } from '../pm/dso';
import { Player } from '../pm/player';
import { Aggregator } from '../pm/aggregator';
import { Lem } from '../pm/lem';
import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "supsidacdisaac.pm.pm";
/** GenesisState defines the pm module's genesis state. */
export interface GenesisState {
    dso: Dso | undefined;
    playerList: Player[];
    aggregator: Aggregator | undefined;
    /** this line is used by starport scaffolding # genesis/proto/state */
    lemList: Lem[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
