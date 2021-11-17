/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.pm.pm";

export interface Aggregator {
  idx: string;
  address: string;
  creator: string;
}

const baseAggregator: object = { idx: "", address: "", creator: "" };

export const Aggregator = {
  encode(message: Aggregator, writer: Writer = Writer.create()): Writer {
    if (message.idx !== "") {
      writer.uint32(10).string(message.idx);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Aggregator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAggregator } as Aggregator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idx = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Aggregator {
    const message = { ...baseAggregator } as Aggregator;
    if (object.idx !== undefined && object.idx !== null) {
      message.idx = String(object.idx);
    } else {
      message.idx = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Aggregator): unknown {
    const obj: any = {};
    message.idx !== undefined && (obj.idx = message.idx);
    message.address !== undefined && (obj.address = message.address);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Aggregator>): Aggregator {
    const message = { ...baseAggregator } as Aggregator;
    if (object.idx !== undefined && object.idx !== null) {
      message.idx = object.idx;
    } else {
      message.idx = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
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
