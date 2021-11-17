/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.pm.pm";

export interface Sla {
  index: string;
  start: number;
  end: number;
  creator: string;
}

const baseSla: object = { index: "", start: 0, end: 0, creator: "" };

export const Sla = {
  encode(message: Sla, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.start !== 0) {
      writer.uint32(16).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(24).int32(message.end);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Sla {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSla } as Sla;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.start = reader.int32();
          break;
        case 3:
          message.end = reader.int32();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Sla {
    const message = { ...baseSla } as Sla;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = Number(object.start);
    } else {
      message.start = 0;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Number(object.end);
    } else {
      message.end = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Sla): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Sla>): Sla {
    const message = { ...baseSla } as Sla;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = 0;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    } else {
      message.end = 0;
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
