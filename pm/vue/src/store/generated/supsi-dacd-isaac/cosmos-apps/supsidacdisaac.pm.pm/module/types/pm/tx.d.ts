import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface MsgCreateDso {
    creator: string;
    index: string;
    address: string;
}
export interface MsgCreateDsoResponse {
}
export interface MsgUpdateDso {
    creator: string;
    index: string;
    address: string;
}
export interface MsgUpdateDsoResponse {
}
export interface MsgDeleteDso {
    creator: string;
}
export interface MsgDeleteDsoResponse {
}
export interface MsgCreatePlayer {
    creator: string;
    index: string;
    address: string;
    role: string;
}
export interface MsgCreatePlayerResponse {
}
export interface MsgUpdatePlayer {
    creator: string;
    index: string;
    address: string;
    role: string;
}
export interface MsgUpdatePlayerResponse {
}
export interface MsgDeletePlayer {
    creator: string;
    index: string;
}
export interface MsgDeletePlayerResponse {
}
export interface MsgCreateAggregator {
    creator: string;
    index: string;
    address: string;
}
export interface MsgCreateAggregatorResponse {
}
export interface MsgUpdateAggregator {
    creator: string;
    index: string;
    address: string;
}
export interface MsgUpdateAggregatorResponse {
}
export interface MsgDeleteAggregator {
    creator: string;
}
export interface MsgDeleteAggregatorResponse {
}
export interface MsgCreateLem {
    creator: string;
    index: string;
    indexEnd: string;
    params: string[];
    players: string[];
}
export interface MsgCreateLemResponse {
}
export interface MsgUpdateLem {
    creator: string;
    index: string;
    indexEnd: string;
    params: string[];
    players: string[];
}
export interface MsgUpdateLemResponse {
}
export interface MsgDeleteLem {
    creator: string;
    index: string;
}
export interface MsgDeleteLemResponse {
}
export declare const MsgCreateDso: {
    encode(message: MsgCreateDso, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDso;
    fromJSON(object: any): MsgCreateDso;
    toJSON(message: MsgCreateDso): unknown;
    fromPartial(object: DeepPartial<MsgCreateDso>): MsgCreateDso;
};
export declare const MsgCreateDsoResponse: {
    encode(_: MsgCreateDsoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDsoResponse;
    fromJSON(_: any): MsgCreateDsoResponse;
    toJSON(_: MsgCreateDsoResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateDsoResponse>): MsgCreateDsoResponse;
};
export declare const MsgUpdateDso: {
    encode(message: MsgUpdateDso, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDso;
    fromJSON(object: any): MsgUpdateDso;
    toJSON(message: MsgUpdateDso): unknown;
    fromPartial(object: DeepPartial<MsgUpdateDso>): MsgUpdateDso;
};
export declare const MsgUpdateDsoResponse: {
    encode(_: MsgUpdateDsoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDsoResponse;
    fromJSON(_: any): MsgUpdateDsoResponse;
    toJSON(_: MsgUpdateDsoResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateDsoResponse>): MsgUpdateDsoResponse;
};
export declare const MsgDeleteDso: {
    encode(message: MsgDeleteDso, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDso;
    fromJSON(object: any): MsgDeleteDso;
    toJSON(message: MsgDeleteDso): unknown;
    fromPartial(object: DeepPartial<MsgDeleteDso>): MsgDeleteDso;
};
export declare const MsgDeleteDsoResponse: {
    encode(_: MsgDeleteDsoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDsoResponse;
    fromJSON(_: any): MsgDeleteDsoResponse;
    toJSON(_: MsgDeleteDsoResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteDsoResponse>): MsgDeleteDsoResponse;
};
export declare const MsgCreatePlayer: {
    encode(message: MsgCreatePlayer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePlayer;
    fromJSON(object: any): MsgCreatePlayer;
    toJSON(message: MsgCreatePlayer): unknown;
    fromPartial(object: DeepPartial<MsgCreatePlayer>): MsgCreatePlayer;
};
export declare const MsgCreatePlayerResponse: {
    encode(_: MsgCreatePlayerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePlayerResponse;
    fromJSON(_: any): MsgCreatePlayerResponse;
    toJSON(_: MsgCreatePlayerResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePlayerResponse>): MsgCreatePlayerResponse;
};
export declare const MsgUpdatePlayer: {
    encode(message: MsgUpdatePlayer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePlayer;
    fromJSON(object: any): MsgUpdatePlayer;
    toJSON(message: MsgUpdatePlayer): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePlayer>): MsgUpdatePlayer;
};
export declare const MsgUpdatePlayerResponse: {
    encode(_: MsgUpdatePlayerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePlayerResponse;
    fromJSON(_: any): MsgUpdatePlayerResponse;
    toJSON(_: MsgUpdatePlayerResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePlayerResponse>): MsgUpdatePlayerResponse;
};
export declare const MsgDeletePlayer: {
    encode(message: MsgDeletePlayer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePlayer;
    fromJSON(object: any): MsgDeletePlayer;
    toJSON(message: MsgDeletePlayer): unknown;
    fromPartial(object: DeepPartial<MsgDeletePlayer>): MsgDeletePlayer;
};
export declare const MsgDeletePlayerResponse: {
    encode(_: MsgDeletePlayerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePlayerResponse;
    fromJSON(_: any): MsgDeletePlayerResponse;
    toJSON(_: MsgDeletePlayerResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePlayerResponse>): MsgDeletePlayerResponse;
};
export declare const MsgCreateAggregator: {
    encode(message: MsgCreateAggregator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAggregator;
    fromJSON(object: any): MsgCreateAggregator;
    toJSON(message: MsgCreateAggregator): unknown;
    fromPartial(object: DeepPartial<MsgCreateAggregator>): MsgCreateAggregator;
};
export declare const MsgCreateAggregatorResponse: {
    encode(_: MsgCreateAggregatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAggregatorResponse;
    fromJSON(_: any): MsgCreateAggregatorResponse;
    toJSON(_: MsgCreateAggregatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateAggregatorResponse>): MsgCreateAggregatorResponse;
};
export declare const MsgUpdateAggregator: {
    encode(message: MsgUpdateAggregator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAggregator;
    fromJSON(object: any): MsgUpdateAggregator;
    toJSON(message: MsgUpdateAggregator): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAggregator>): MsgUpdateAggregator;
};
export declare const MsgUpdateAggregatorResponse: {
    encode(_: MsgUpdateAggregatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAggregatorResponse;
    fromJSON(_: any): MsgUpdateAggregatorResponse;
    toJSON(_: MsgUpdateAggregatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateAggregatorResponse>): MsgUpdateAggregatorResponse;
};
export declare const MsgDeleteAggregator: {
    encode(message: MsgDeleteAggregator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAggregator;
    fromJSON(object: any): MsgDeleteAggregator;
    toJSON(message: MsgDeleteAggregator): unknown;
    fromPartial(object: DeepPartial<MsgDeleteAggregator>): MsgDeleteAggregator;
};
export declare const MsgDeleteAggregatorResponse: {
    encode(_: MsgDeleteAggregatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAggregatorResponse;
    fromJSON(_: any): MsgDeleteAggregatorResponse;
    toJSON(_: MsgDeleteAggregatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteAggregatorResponse>): MsgDeleteAggregatorResponse;
};
export declare const MsgCreateLem: {
    encode(message: MsgCreateLem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateLem;
    fromJSON(object: any): MsgCreateLem;
    toJSON(message: MsgCreateLem): unknown;
    fromPartial(object: DeepPartial<MsgCreateLem>): MsgCreateLem;
};
export declare const MsgCreateLemResponse: {
    encode(_: MsgCreateLemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateLemResponse;
    fromJSON(_: any): MsgCreateLemResponse;
    toJSON(_: MsgCreateLemResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateLemResponse>): MsgCreateLemResponse;
};
export declare const MsgUpdateLem: {
    encode(message: MsgUpdateLem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateLem;
    fromJSON(object: any): MsgUpdateLem;
    toJSON(message: MsgUpdateLem): unknown;
    fromPartial(object: DeepPartial<MsgUpdateLem>): MsgUpdateLem;
};
export declare const MsgUpdateLemResponse: {
    encode(_: MsgUpdateLemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateLemResponse;
    fromJSON(_: any): MsgUpdateLemResponse;
    toJSON(_: MsgUpdateLemResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateLemResponse>): MsgUpdateLemResponse;
};
export declare const MsgDeleteLem: {
    encode(message: MsgDeleteLem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteLem;
    fromJSON(object: any): MsgDeleteLem;
    toJSON(message: MsgDeleteLem): unknown;
    fromPartial(object: DeepPartial<MsgDeleteLem>): MsgDeleteLem;
};
export declare const MsgDeleteLemResponse: {
    encode(_: MsgDeleteLemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteLemResponse;
    fromJSON(_: any): MsgDeleteLemResponse;
    toJSON(_: MsgDeleteLemResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteLemResponse>): MsgDeleteLemResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateDso(request: MsgCreateDso): Promise<MsgCreateDsoResponse>;
    UpdateDso(request: MsgUpdateDso): Promise<MsgUpdateDsoResponse>;
    DeleteDso(request: MsgDeleteDso): Promise<MsgDeleteDsoResponse>;
    CreatePlayer(request: MsgCreatePlayer): Promise<MsgCreatePlayerResponse>;
    UpdatePlayer(request: MsgUpdatePlayer): Promise<MsgUpdatePlayerResponse>;
    DeletePlayer(request: MsgDeletePlayer): Promise<MsgDeletePlayerResponse>;
    CreateAggregator(request: MsgCreateAggregator): Promise<MsgCreateAggregatorResponse>;
    UpdateAggregator(request: MsgUpdateAggregator): Promise<MsgUpdateAggregatorResponse>;
    DeleteAggregator(request: MsgDeleteAggregator): Promise<MsgDeleteAggregatorResponse>;
    CreateLem(request: MsgCreateLem): Promise<MsgCreateLemResponse>;
    UpdateLem(request: MsgUpdateLem): Promise<MsgUpdateLemResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteLem(request: MsgDeleteLem): Promise<MsgDeleteLemResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDso(request: MsgCreateDso): Promise<MsgCreateDsoResponse>;
    UpdateDso(request: MsgUpdateDso): Promise<MsgUpdateDsoResponse>;
    DeleteDso(request: MsgDeleteDso): Promise<MsgDeleteDsoResponse>;
    CreatePlayer(request: MsgCreatePlayer): Promise<MsgCreatePlayerResponse>;
    UpdatePlayer(request: MsgUpdatePlayer): Promise<MsgUpdatePlayerResponse>;
    DeletePlayer(request: MsgDeletePlayer): Promise<MsgDeletePlayerResponse>;
    CreateAggregator(request: MsgCreateAggregator): Promise<MsgCreateAggregatorResponse>;
    UpdateAggregator(request: MsgUpdateAggregator): Promise<MsgUpdateAggregatorResponse>;
    DeleteAggregator(request: MsgDeleteAggregator): Promise<MsgDeleteAggregatorResponse>;
    CreateLem(request: MsgCreateLem): Promise<MsgCreateLemResponse>;
    UpdateLem(request: MsgUpdateLem): Promise<MsgUpdateLemResponse>;
    DeleteLem(request: MsgDeleteLem): Promise<MsgDeleteLemResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
