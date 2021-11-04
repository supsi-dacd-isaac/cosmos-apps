import { Writer, Reader } from 'protobufjs/minimal';
import { Timeseries } from '../tsdb/timeseries';
import { Measure } from '../tsdb/measure';
export declare const protobufPackage = "supsidacdisaac.tsdb.tsdb";
/** GenesisState defines the tsdb module's genesis state. */
export interface GenesisState {
    timeseriesList: Timeseries[];
    timeseriesCount: number;
    measureList: Measure[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    measureCount: number;
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
