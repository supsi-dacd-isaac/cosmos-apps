/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.pm.pm";

export interface LemMeasure {
  index: string;
  player: string;
  signal: string;
  timestamp: number;
  value: string;
  mu: string;
  creator: string;
}

const baseLemMeasure: object = {
  index: "",
  player: "",
  signal: "",
  timestamp: 0,
  value: "",
  mu: "",
  creator: "",
};

export const LemMeasure = {
  encode(message: LemMeasure, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.player !== "") {
      writer.uint32(18).string(message.player);
    }
    if (message.signal !== "") {
      writer.uint32(26).string(message.signal);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).int32(message.timestamp);
    }
    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }
    if (message.mu !== "") {
      writer.uint32(50).string(message.mu);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LemMeasure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLemMeasure } as LemMeasure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.player = reader.string();
          break;
        case 3:
          message.signal = reader.string();
          break;
        case 4:
          message.timestamp = reader.int32();
          break;
        case 5:
          message.value = reader.string();
          break;
        case 6:
          message.mu = reader.string();
          break;
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LemMeasure {
    const message = { ...baseLemMeasure } as LemMeasure;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.player !== undefined && object.player !== null) {
      message.player = String(object.player);
    } else {
      message.player = "";
    }
    if (object.signal !== undefined && object.signal !== null) {
      message.signal = String(object.signal);
    } else {
      message.signal = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.mu !== undefined && object.mu !== null) {
      message.mu = String(object.mu);
    } else {
      message.mu = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: LemMeasure): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.player !== undefined && (obj.player = message.player);
    message.signal !== undefined && (obj.signal = message.signal);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.value !== undefined && (obj.value = message.value);
    message.mu !== undefined && (obj.mu = message.mu);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<LemMeasure>): LemMeasure {
    const message = { ...baseLemMeasure } as LemMeasure;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.player !== undefined && object.player !== null) {
      message.player = object.player;
    } else {
      message.player = "";
    }
    if (object.signal !== undefined && object.signal !== null) {
      message.signal = object.signal;
    } else {
      message.signal = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.mu !== undefined && object.mu !== null) {
      message.mu = object.mu;
    } else {
      message.mu = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
