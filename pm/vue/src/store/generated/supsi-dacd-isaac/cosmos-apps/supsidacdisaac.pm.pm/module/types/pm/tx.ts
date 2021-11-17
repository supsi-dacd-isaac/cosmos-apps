/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.pm.pm";

export interface MsgCreateDso {
  creator: string;
  idx: string;
  address: string;
}

export interface MsgCreateDsoResponse {}

export interface MsgUpdateDso {
  creator: string;
  idx: string;
  address: string;
}

export interface MsgUpdateDsoResponse {}

export interface MsgDeleteDso {
  creator: string;
}

export interface MsgDeleteDsoResponse {}

export interface MsgCreateAggregator {
  creator: string;
  idx: string;
  address: string;
}

export interface MsgCreateAggregatorResponse {}

export interface MsgUpdateAggregator {
  creator: string;
  idx: string;
  address: string;
}

export interface MsgUpdateAggregatorResponse {}

export interface MsgDeleteAggregator {
  creator: string;
}

export interface MsgDeleteAggregatorResponse {}

export interface MsgCreatePlayer {
  creator: string;
  index: string;
  idx: string;
  address: string;
  role: string;
}

export interface MsgCreatePlayerResponse {}

export interface MsgUpdatePlayer {
  creator: string;
  index: string;
  idx: string;
  address: string;
  role: string;
}

export interface MsgUpdatePlayerResponse {}

export interface MsgDeletePlayer {
  creator: string;
  index: string;
}

export interface MsgDeletePlayerResponse {}

export interface MsgCreateLem {
  creator: string;
  index: string;
  start: number;
  end: number;
  params: string[];
  players: string[];
}

export interface MsgCreateLemResponse {}

export interface MsgUpdateLem {
  creator: string;
  index: string;
  start: number;
  end: number;
  params: string[];
  players: string[];
}

export interface MsgUpdateLemResponse {}

export interface MsgDeleteLem {
  creator: string;
  index: string;
}

export interface MsgDeleteLemResponse {}

export interface MsgCreateLemMeasure {
  creator: string;
  index: string;
  player: string;
  signal: string;
  timestamp: number;
  value: string;
  mu: string;
}

export interface MsgCreateLemMeasureResponse {}

export interface MsgUpdateLemMeasure {
  creator: string;
  index: string;
  player: string;
  signal: string;
  timestamp: number;
  value: string;
  mu: string;
}

export interface MsgUpdateLemMeasureResponse {}

export interface MsgDeleteLemMeasure {
  creator: string;
  index: string;
}

export interface MsgDeleteLemMeasureResponse {}

export interface MsgCreateSla {
  creator: string;
  index: string;
  start: number;
  end: number;
}

export interface MsgCreateSlaResponse {}

export interface MsgUpdateSla {
  creator: string;
  index: string;
  start: number;
  end: number;
}

export interface MsgUpdateSlaResponse {}

export interface MsgDeleteSla {
  creator: string;
  index: string;
}

export interface MsgDeleteSlaResponse {}

export interface MsgCreateKpi {
  creator: string;
  index: string;
  sla: string;
  rule: string;
  limit: string;
  mu: string;
  penalty: number;
}

export interface MsgCreateKpiResponse {}

export interface MsgUpdateKpi {
  creator: string;
  index: string;
  sla: string;
  rule: string;
  limit: string;
  mu: string;
  penalty: number;
}

export interface MsgUpdateKpiResponse {}

export interface MsgDeleteKpi {
  creator: string;
  index: string;
}

export interface MsgDeleteKpiResponse {}

export interface MsgCreateKpiMeasure {
  creator: string;
  index: string;
  kpi: string;
  player: string;
  timestamp: number;
  value: string;
  mu: string;
}

export interface MsgCreateKpiMeasureResponse {}

export interface MsgUpdateKpiMeasure {
  creator: string;
  index: string;
  kpi: string;
  player: string;
  timestamp: number;
  value: string;
  mu: string;
}

export interface MsgUpdateKpiMeasureResponse {}

export interface MsgDeleteKpiMeasure {
  creator: string;
  index: string;
}

export interface MsgDeleteKpiMeasureResponse {}

const baseMsgCreateDso: object = { creator: "", idx: "", address: "" };

export const MsgCreateDso = {
  encode(message: MsgCreateDso, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.idx !== "") {
      writer.uint32(26).string(message.idx);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDso {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDso } as MsgCreateDso;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.idx = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDso {
    const message = { ...baseMsgCreateDso } as MsgCreateDso;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateDso): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.idx !== undefined && (obj.idx = message.idx);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDso>): MsgCreateDso {
    const message = { ...baseMsgCreateDso } as MsgCreateDso;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgCreateDsoResponse: object = {};

export const MsgCreateDsoResponse = {
  encode(_: MsgCreateDsoResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDsoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDsoResponse } as MsgCreateDsoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateDsoResponse {
    const message = { ...baseMsgCreateDsoResponse } as MsgCreateDsoResponse;
    return message;
  },

  toJSON(_: MsgCreateDsoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateDsoResponse>): MsgCreateDsoResponse {
    const message = { ...baseMsgCreateDsoResponse } as MsgCreateDsoResponse;
    return message;
  },
};

const baseMsgUpdateDso: object = { creator: "", idx: "", address: "" };

export const MsgUpdateDso = {
  encode(message: MsgUpdateDso, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.idx !== "") {
      writer.uint32(26).string(message.idx);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDso {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDso } as MsgUpdateDso;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.idx = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDso {
    const message = { ...baseMsgUpdateDso } as MsgUpdateDso;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateDso): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.idx !== undefined && (obj.idx = message.idx);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateDso>): MsgUpdateDso {
    const message = { ...baseMsgUpdateDso } as MsgUpdateDso;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateDsoResponse: object = {};

export const MsgUpdateDsoResponse = {
  encode(_: MsgUpdateDsoResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDsoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDsoResponse } as MsgUpdateDsoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDsoResponse {
    const message = { ...baseMsgUpdateDsoResponse } as MsgUpdateDsoResponse;
    return message;
  },

  toJSON(_: MsgUpdateDsoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateDsoResponse>): MsgUpdateDsoResponse {
    const message = { ...baseMsgUpdateDsoResponse } as MsgUpdateDsoResponse;
    return message;
  },
};

const baseMsgDeleteDso: object = { creator: "" };

export const MsgDeleteDso = {
  encode(message: MsgDeleteDso, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDso {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteDso } as MsgDeleteDso;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDso {
    const message = { ...baseMsgDeleteDso } as MsgDeleteDso;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteDso): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteDso>): MsgDeleteDso {
    const message = { ...baseMsgDeleteDso } as MsgDeleteDso;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteDsoResponse: object = {};

export const MsgDeleteDsoResponse = {
  encode(_: MsgDeleteDsoResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDsoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteDsoResponse } as MsgDeleteDsoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteDsoResponse {
    const message = { ...baseMsgDeleteDsoResponse } as MsgDeleteDsoResponse;
    return message;
  },

  toJSON(_: MsgDeleteDsoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteDsoResponse>): MsgDeleteDsoResponse {
    const message = { ...baseMsgDeleteDsoResponse } as MsgDeleteDsoResponse;
    return message;
  },
};

const baseMsgCreateAggregator: object = { creator: "", idx: "", address: "" };

export const MsgCreateAggregator = {
  encode(
    message: MsgCreateAggregator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.idx !== "") {
      writer.uint32(26).string(message.idx);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAggregator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAggregator } as MsgCreateAggregator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.idx = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAggregator {
    const message = { ...baseMsgCreateAggregator } as MsgCreateAggregator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateAggregator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.idx !== undefined && (obj.idx = message.idx);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateAggregator>): MsgCreateAggregator {
    const message = { ...baseMsgCreateAggregator } as MsgCreateAggregator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgCreateAggregatorResponse: object = {};

export const MsgCreateAggregatorResponse = {
  encode(
    _: MsgCreateAggregatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateAggregatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAggregatorResponse,
    } as MsgCreateAggregatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateAggregatorResponse {
    const message = {
      ...baseMsgCreateAggregatorResponse,
    } as MsgCreateAggregatorResponse;
    return message;
  },

  toJSON(_: MsgCreateAggregatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateAggregatorResponse>
  ): MsgCreateAggregatorResponse {
    const message = {
      ...baseMsgCreateAggregatorResponse,
    } as MsgCreateAggregatorResponse;
    return message;
  },
};

const baseMsgUpdateAggregator: object = { creator: "", idx: "", address: "" };

export const MsgUpdateAggregator = {
  encode(
    message: MsgUpdateAggregator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.idx !== "") {
      writer.uint32(26).string(message.idx);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAggregator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAggregator } as MsgUpdateAggregator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.idx = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAggregator {
    const message = { ...baseMsgUpdateAggregator } as MsgUpdateAggregator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateAggregator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.idx !== undefined && (obj.idx = message.idx);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateAggregator>): MsgUpdateAggregator {
    const message = { ...baseMsgUpdateAggregator } as MsgUpdateAggregator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateAggregatorResponse: object = {};

export const MsgUpdateAggregatorResponse = {
  encode(
    _: MsgUpdateAggregatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateAggregatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAggregatorResponse,
    } as MsgUpdateAggregatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateAggregatorResponse {
    const message = {
      ...baseMsgUpdateAggregatorResponse,
    } as MsgUpdateAggregatorResponse;
    return message;
  },

  toJSON(_: MsgUpdateAggregatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateAggregatorResponse>
  ): MsgUpdateAggregatorResponse {
    const message = {
      ...baseMsgUpdateAggregatorResponse,
    } as MsgUpdateAggregatorResponse;
    return message;
  },
};

const baseMsgDeleteAggregator: object = { creator: "" };

export const MsgDeleteAggregator = {
  encode(
    message: MsgDeleteAggregator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAggregator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteAggregator } as MsgDeleteAggregator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAggregator {
    const message = { ...baseMsgDeleteAggregator } as MsgDeleteAggregator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteAggregator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteAggregator>): MsgDeleteAggregator {
    const message = { ...baseMsgDeleteAggregator } as MsgDeleteAggregator;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteAggregatorResponse: object = {};

export const MsgDeleteAggregatorResponse = {
  encode(
    _: MsgDeleteAggregatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteAggregatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteAggregatorResponse,
    } as MsgDeleteAggregatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteAggregatorResponse {
    const message = {
      ...baseMsgDeleteAggregatorResponse,
    } as MsgDeleteAggregatorResponse;
    return message;
  },

  toJSON(_: MsgDeleteAggregatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteAggregatorResponse>
  ): MsgDeleteAggregatorResponse {
    const message = {
      ...baseMsgDeleteAggregatorResponse,
    } as MsgDeleteAggregatorResponse;
    return message;
  },
};

const baseMsgCreatePlayer: object = {
  creator: "",
  index: "",
  idx: "",
  address: "",
  role: "",
};

export const MsgCreatePlayer = {
  encode(message: MsgCreatePlayer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.idx !== "") {
      writer.uint32(26).string(message.idx);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.role !== "") {
      writer.uint32(42).string(message.role);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePlayer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePlayer } as MsgCreatePlayer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.idx = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePlayer {
    const message = { ...baseMsgCreatePlayer } as MsgCreatePlayer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
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
    if (object.role !== undefined && object.role !== null) {
      message.role = String(object.role);
    } else {
      message.role = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePlayer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.idx !== undefined && (obj.idx = message.idx);
    message.address !== undefined && (obj.address = message.address);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePlayer>): MsgCreatePlayer {
    const message = { ...baseMsgCreatePlayer } as MsgCreatePlayer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
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
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    } else {
      message.role = "";
    }
    return message;
  },
};

const baseMsgCreatePlayerResponse: object = {};

export const MsgCreatePlayerResponse = {
  encode(_: MsgCreatePlayerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePlayerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePlayerResponse,
    } as MsgCreatePlayerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePlayerResponse {
    const message = {
      ...baseMsgCreatePlayerResponse,
    } as MsgCreatePlayerResponse;
    return message;
  },

  toJSON(_: MsgCreatePlayerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreatePlayerResponse>
  ): MsgCreatePlayerResponse {
    const message = {
      ...baseMsgCreatePlayerResponse,
    } as MsgCreatePlayerResponse;
    return message;
  },
};

const baseMsgUpdatePlayer: object = {
  creator: "",
  index: "",
  idx: "",
  address: "",
  role: "",
};

export const MsgUpdatePlayer = {
  encode(message: MsgUpdatePlayer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.idx !== "") {
      writer.uint32(26).string(message.idx);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.role !== "") {
      writer.uint32(42).string(message.role);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePlayer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePlayer } as MsgUpdatePlayer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.idx = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePlayer {
    const message = { ...baseMsgUpdatePlayer } as MsgUpdatePlayer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
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
    if (object.role !== undefined && object.role !== null) {
      message.role = String(object.role);
    } else {
      message.role = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePlayer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.idx !== undefined && (obj.idx = message.idx);
    message.address !== undefined && (obj.address = message.address);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePlayer>): MsgUpdatePlayer {
    const message = { ...baseMsgUpdatePlayer } as MsgUpdatePlayer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
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
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    } else {
      message.role = "";
    }
    return message;
  },
};

const baseMsgUpdatePlayerResponse: object = {};

export const MsgUpdatePlayerResponse = {
  encode(_: MsgUpdatePlayerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePlayerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePlayerResponse,
    } as MsgUpdatePlayerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdatePlayerResponse {
    const message = {
      ...baseMsgUpdatePlayerResponse,
    } as MsgUpdatePlayerResponse;
    return message;
  },

  toJSON(_: MsgUpdatePlayerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePlayerResponse>
  ): MsgUpdatePlayerResponse {
    const message = {
      ...baseMsgUpdatePlayerResponse,
    } as MsgUpdatePlayerResponse;
    return message;
  },
};

const baseMsgDeletePlayer: object = { creator: "", index: "" };

export const MsgDeletePlayer = {
  encode(message: MsgDeletePlayer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePlayer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePlayer } as MsgDeletePlayer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePlayer {
    const message = { ...baseMsgDeletePlayer } as MsgDeletePlayer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeletePlayer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePlayer>): MsgDeletePlayer {
    const message = { ...baseMsgDeletePlayer } as MsgDeletePlayer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeletePlayerResponse: object = {};

export const MsgDeletePlayerResponse = {
  encode(_: MsgDeletePlayerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePlayerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePlayerResponse,
    } as MsgDeletePlayerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeletePlayerResponse {
    const message = {
      ...baseMsgDeletePlayerResponse,
    } as MsgDeletePlayerResponse;
    return message;
  },

  toJSON(_: MsgDeletePlayerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePlayerResponse>
  ): MsgDeletePlayerResponse {
    const message = {
      ...baseMsgDeletePlayerResponse,
    } as MsgDeletePlayerResponse;
    return message;
  },
};

const baseMsgCreateLem: object = {
  creator: "",
  index: "",
  start: 0,
  end: 0,
  params: "",
  players: "",
};

export const MsgCreateLem = {
  encode(message: MsgCreateLem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.start !== 0) {
      writer.uint32(24).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    for (const v of message.params) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.players) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateLem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateLem } as MsgCreateLem;
    message.params = [];
    message.players = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.start = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        case 5:
          message.params.push(reader.string());
          break;
        case 6:
          message.players.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLem {
    const message = { ...baseMsgCreateLem } as MsgCreateLem;
    message.params = [];
    message.players = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.params !== undefined && object.params !== null) {
      for (const e of object.params) {
        message.params.push(String(e));
      }
    }
    if (object.players !== undefined && object.players !== null) {
      for (const e of object.players) {
        message.players.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateLem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    if (message.params) {
      obj.params = message.params.map((e) => e);
    } else {
      obj.params = [];
    }
    if (message.players) {
      obj.players = message.players.map((e) => e);
    } else {
      obj.players = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateLem>): MsgCreateLem {
    const message = { ...baseMsgCreateLem } as MsgCreateLem;
    message.params = [];
    message.players = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.params !== undefined && object.params !== null) {
      for (const e of object.params) {
        message.params.push(e);
      }
    }
    if (object.players !== undefined && object.players !== null) {
      for (const e of object.players) {
        message.players.push(e);
      }
    }
    return message;
  },
};

const baseMsgCreateLemResponse: object = {};

export const MsgCreateLemResponse = {
  encode(_: MsgCreateLemResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateLemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateLemResponse } as MsgCreateLemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateLemResponse {
    const message = { ...baseMsgCreateLemResponse } as MsgCreateLemResponse;
    return message;
  },

  toJSON(_: MsgCreateLemResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateLemResponse>): MsgCreateLemResponse {
    const message = { ...baseMsgCreateLemResponse } as MsgCreateLemResponse;
    return message;
  },
};

const baseMsgUpdateLem: object = {
  creator: "",
  index: "",
  start: 0,
  end: 0,
  params: "",
  players: "",
};

export const MsgUpdateLem = {
  encode(message: MsgUpdateLem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.start !== 0) {
      writer.uint32(24).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    for (const v of message.params) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.players) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateLem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateLem } as MsgUpdateLem;
    message.params = [];
    message.players = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.start = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        case 5:
          message.params.push(reader.string());
          break;
        case 6:
          message.players.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateLem {
    const message = { ...baseMsgUpdateLem } as MsgUpdateLem;
    message.params = [];
    message.players = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.params !== undefined && object.params !== null) {
      for (const e of object.params) {
        message.params.push(String(e));
      }
    }
    if (object.players !== undefined && object.players !== null) {
      for (const e of object.players) {
        message.players.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateLem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    if (message.params) {
      obj.params = message.params.map((e) => e);
    } else {
      obj.params = [];
    }
    if (message.players) {
      obj.players = message.players.map((e) => e);
    } else {
      obj.players = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateLem>): MsgUpdateLem {
    const message = { ...baseMsgUpdateLem } as MsgUpdateLem;
    message.params = [];
    message.players = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.params !== undefined && object.params !== null) {
      for (const e of object.params) {
        message.params.push(e);
      }
    }
    if (object.players !== undefined && object.players !== null) {
      for (const e of object.players) {
        message.players.push(e);
      }
    }
    return message;
  },
};

const baseMsgUpdateLemResponse: object = {};

export const MsgUpdateLemResponse = {
  encode(_: MsgUpdateLemResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateLemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateLemResponse } as MsgUpdateLemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateLemResponse {
    const message = { ...baseMsgUpdateLemResponse } as MsgUpdateLemResponse;
    return message;
  },

  toJSON(_: MsgUpdateLemResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateLemResponse>): MsgUpdateLemResponse {
    const message = { ...baseMsgUpdateLemResponse } as MsgUpdateLemResponse;
    return message;
  },
};

const baseMsgDeleteLem: object = { creator: "", index: "" };

export const MsgDeleteLem = {
  encode(message: MsgDeleteLem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteLem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteLem } as MsgDeleteLem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteLem {
    const message = { ...baseMsgDeleteLem } as MsgDeleteLem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteLem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteLem>): MsgDeleteLem {
    const message = { ...baseMsgDeleteLem } as MsgDeleteLem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteLemResponse: object = {};

export const MsgDeleteLemResponse = {
  encode(_: MsgDeleteLemResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteLemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteLemResponse } as MsgDeleteLemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteLemResponse {
    const message = { ...baseMsgDeleteLemResponse } as MsgDeleteLemResponse;
    return message;
  },

  toJSON(_: MsgDeleteLemResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteLemResponse>): MsgDeleteLemResponse {
    const message = { ...baseMsgDeleteLemResponse } as MsgDeleteLemResponse;
    return message;
  },
};

const baseMsgCreateLemMeasure: object = {
  creator: "",
  index: "",
  player: "",
  signal: "",
  timestamp: 0,
  value: "",
  mu: "",
};

export const MsgCreateLemMeasure = {
  encode(
    message: MsgCreateLemMeasure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.player !== "") {
      writer.uint32(26).string(message.player);
    }
    if (message.signal !== "") {
      writer.uint32(34).string(message.signal);
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).int32(message.timestamp);
    }
    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }
    if (message.mu !== "") {
      writer.uint32(58).string(message.mu);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateLemMeasure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateLemMeasure } as MsgCreateLemMeasure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.player = reader.string();
          break;
        case 4:
          message.signal = reader.string();
          break;
        case 5:
          message.timestamp = reader.int32();
          break;
        case 6:
          message.value = reader.string();
          break;
        case 7:
          message.mu = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLemMeasure {
    const message = { ...baseMsgCreateLemMeasure } as MsgCreateLemMeasure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateLemMeasure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.player !== undefined && (obj.player = message.player);
    message.signal !== undefined && (obj.signal = message.signal);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.value !== undefined && (obj.value = message.value);
    message.mu !== undefined && (obj.mu = message.mu);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateLemMeasure>): MsgCreateLemMeasure {
    const message = { ...baseMsgCreateLemMeasure } as MsgCreateLemMeasure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgCreateLemMeasureResponse: object = {};

export const MsgCreateLemMeasureResponse = {
  encode(
    _: MsgCreateLemMeasureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateLemMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateLemMeasureResponse,
    } as MsgCreateLemMeasureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateLemMeasureResponse {
    const message = {
      ...baseMsgCreateLemMeasureResponse,
    } as MsgCreateLemMeasureResponse;
    return message;
  },

  toJSON(_: MsgCreateLemMeasureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateLemMeasureResponse>
  ): MsgCreateLemMeasureResponse {
    const message = {
      ...baseMsgCreateLemMeasureResponse,
    } as MsgCreateLemMeasureResponse;
    return message;
  },
};

const baseMsgUpdateLemMeasure: object = {
  creator: "",
  index: "",
  player: "",
  signal: "",
  timestamp: 0,
  value: "",
  mu: "",
};

export const MsgUpdateLemMeasure = {
  encode(
    message: MsgUpdateLemMeasure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.player !== "") {
      writer.uint32(26).string(message.player);
    }
    if (message.signal !== "") {
      writer.uint32(34).string(message.signal);
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).int32(message.timestamp);
    }
    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }
    if (message.mu !== "") {
      writer.uint32(58).string(message.mu);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateLemMeasure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateLemMeasure } as MsgUpdateLemMeasure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.player = reader.string();
          break;
        case 4:
          message.signal = reader.string();
          break;
        case 5:
          message.timestamp = reader.int32();
          break;
        case 6:
          message.value = reader.string();
          break;
        case 7:
          message.mu = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateLemMeasure {
    const message = { ...baseMsgUpdateLemMeasure } as MsgUpdateLemMeasure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateLemMeasure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.player !== undefined && (obj.player = message.player);
    message.signal !== undefined && (obj.signal = message.signal);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.value !== undefined && (obj.value = message.value);
    message.mu !== undefined && (obj.mu = message.mu);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateLemMeasure>): MsgUpdateLemMeasure {
    const message = { ...baseMsgUpdateLemMeasure } as MsgUpdateLemMeasure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateLemMeasureResponse: object = {};

export const MsgUpdateLemMeasureResponse = {
  encode(
    _: MsgUpdateLemMeasureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateLemMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateLemMeasureResponse,
    } as MsgUpdateLemMeasureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateLemMeasureResponse {
    const message = {
      ...baseMsgUpdateLemMeasureResponse,
    } as MsgUpdateLemMeasureResponse;
    return message;
  },

  toJSON(_: MsgUpdateLemMeasureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateLemMeasureResponse>
  ): MsgUpdateLemMeasureResponse {
    const message = {
      ...baseMsgUpdateLemMeasureResponse,
    } as MsgUpdateLemMeasureResponse;
    return message;
  },
};

const baseMsgDeleteLemMeasure: object = { creator: "", index: "" };

export const MsgDeleteLemMeasure = {
  encode(
    message: MsgDeleteLemMeasure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteLemMeasure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteLemMeasure } as MsgDeleteLemMeasure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteLemMeasure {
    const message = { ...baseMsgDeleteLemMeasure } as MsgDeleteLemMeasure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteLemMeasure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteLemMeasure>): MsgDeleteLemMeasure {
    const message = { ...baseMsgDeleteLemMeasure } as MsgDeleteLemMeasure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteLemMeasureResponse: object = {};

export const MsgDeleteLemMeasureResponse = {
  encode(
    _: MsgDeleteLemMeasureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteLemMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteLemMeasureResponse,
    } as MsgDeleteLemMeasureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteLemMeasureResponse {
    const message = {
      ...baseMsgDeleteLemMeasureResponse,
    } as MsgDeleteLemMeasureResponse;
    return message;
  },

  toJSON(_: MsgDeleteLemMeasureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteLemMeasureResponse>
  ): MsgDeleteLemMeasureResponse {
    const message = {
      ...baseMsgDeleteLemMeasureResponse,
    } as MsgDeleteLemMeasureResponse;
    return message;
  },
};

const baseMsgCreateSla: object = { creator: "", index: "", start: 0, end: 0 };

export const MsgCreateSla = {
  encode(message: MsgCreateSla, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.start !== 0) {
      writer.uint32(24).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSla {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSla } as MsgCreateSla;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.start = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSla {
    const message = { ...baseMsgCreateSla } as MsgCreateSla;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateSla): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSla>): MsgCreateSla {
    const message = { ...baseMsgCreateSla } as MsgCreateSla;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgCreateSlaResponse: object = {};

export const MsgCreateSlaResponse = {
  encode(_: MsgCreateSlaResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSlaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSlaResponse } as MsgCreateSlaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateSlaResponse {
    const message = { ...baseMsgCreateSlaResponse } as MsgCreateSlaResponse;
    return message;
  },

  toJSON(_: MsgCreateSlaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateSlaResponse>): MsgCreateSlaResponse {
    const message = { ...baseMsgCreateSlaResponse } as MsgCreateSlaResponse;
    return message;
  },
};

const baseMsgUpdateSla: object = { creator: "", index: "", start: 0, end: 0 };

export const MsgUpdateSla = {
  encode(message: MsgUpdateSla, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.start !== 0) {
      writer.uint32(24).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSla {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateSla } as MsgUpdateSla;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.start = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSla {
    const message = { ...baseMsgUpdateSla } as MsgUpdateSla;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateSla): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateSla>): MsgUpdateSla {
    const message = { ...baseMsgUpdateSla } as MsgUpdateSla;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateSlaResponse: object = {};

export const MsgUpdateSlaResponse = {
  encode(_: MsgUpdateSlaResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSlaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateSlaResponse } as MsgUpdateSlaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateSlaResponse {
    const message = { ...baseMsgUpdateSlaResponse } as MsgUpdateSlaResponse;
    return message;
  },

  toJSON(_: MsgUpdateSlaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateSlaResponse>): MsgUpdateSlaResponse {
    const message = { ...baseMsgUpdateSlaResponse } as MsgUpdateSlaResponse;
    return message;
  },
};

const baseMsgDeleteSla: object = { creator: "", index: "" };

export const MsgDeleteSla = {
  encode(message: MsgDeleteSla, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSla {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteSla } as MsgDeleteSla;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSla {
    const message = { ...baseMsgDeleteSla } as MsgDeleteSla;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteSla): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteSla>): MsgDeleteSla {
    const message = { ...baseMsgDeleteSla } as MsgDeleteSla;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteSlaResponse: object = {};

export const MsgDeleteSlaResponse = {
  encode(_: MsgDeleteSlaResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSlaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteSlaResponse } as MsgDeleteSlaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteSlaResponse {
    const message = { ...baseMsgDeleteSlaResponse } as MsgDeleteSlaResponse;
    return message;
  },

  toJSON(_: MsgDeleteSlaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteSlaResponse>): MsgDeleteSlaResponse {
    const message = { ...baseMsgDeleteSlaResponse } as MsgDeleteSlaResponse;
    return message;
  },
};

const baseMsgCreateKpi: object = {
  creator: "",
  index: "",
  sla: "",
  rule: "",
  limit: "",
  mu: "",
  penalty: 0,
};

export const MsgCreateKpi = {
  encode(message: MsgCreateKpi, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.sla !== "") {
      writer.uint32(26).string(message.sla);
    }
    if (message.rule !== "") {
      writer.uint32(34).string(message.rule);
    }
    if (message.limit !== "") {
      writer.uint32(42).string(message.limit);
    }
    if (message.mu !== "") {
      writer.uint32(50).string(message.mu);
    }
    if (message.penalty !== 0) {
      writer.uint32(56).int32(message.penalty);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateKpi {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateKpi } as MsgCreateKpi;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.sla = reader.string();
          break;
        case 4:
          message.rule = reader.string();
          break;
        case 5:
          message.limit = reader.string();
          break;
        case 6:
          message.mu = reader.string();
          break;
        case 7:
          message.penalty = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateKpi {
    const message = { ...baseMsgCreateKpi } as MsgCreateKpi;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.sla !== undefined && object.sla !== null) {
      message.sla = String(object.sla);
    } else {
      message.sla = "";
    }
    if (object.rule !== undefined && object.rule !== null) {
      message.rule = String(object.rule);
    } else {
      message.rule = "";
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = String(object.limit);
    } else {
      message.limit = "";
    }
    if (object.mu !== undefined && object.mu !== null) {
      message.mu = String(object.mu);
    } else {
      message.mu = "";
    }
    if (object.penalty !== undefined && object.penalty !== null) {
      message.penalty = Number(object.penalty);
    } else {
      message.penalty = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateKpi): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.sla !== undefined && (obj.sla = message.sla);
    message.rule !== undefined && (obj.rule = message.rule);
    message.limit !== undefined && (obj.limit = message.limit);
    message.mu !== undefined && (obj.mu = message.mu);
    message.penalty !== undefined && (obj.penalty = message.penalty);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateKpi>): MsgCreateKpi {
    const message = { ...baseMsgCreateKpi } as MsgCreateKpi;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.sla !== undefined && object.sla !== null) {
      message.sla = object.sla;
    } else {
      message.sla = "";
    }
    if (object.rule !== undefined && object.rule !== null) {
      message.rule = object.rule;
    } else {
      message.rule = "";
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = "";
    }
    if (object.mu !== undefined && object.mu !== null) {
      message.mu = object.mu;
    } else {
      message.mu = "";
    }
    if (object.penalty !== undefined && object.penalty !== null) {
      message.penalty = object.penalty;
    } else {
      message.penalty = 0;
    }
    return message;
  },
};

const baseMsgCreateKpiResponse: object = {};

export const MsgCreateKpiResponse = {
  encode(_: MsgCreateKpiResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateKpiResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateKpiResponse } as MsgCreateKpiResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateKpiResponse {
    const message = { ...baseMsgCreateKpiResponse } as MsgCreateKpiResponse;
    return message;
  },

  toJSON(_: MsgCreateKpiResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateKpiResponse>): MsgCreateKpiResponse {
    const message = { ...baseMsgCreateKpiResponse } as MsgCreateKpiResponse;
    return message;
  },
};

const baseMsgUpdateKpi: object = {
  creator: "",
  index: "",
  sla: "",
  rule: "",
  limit: "",
  mu: "",
  penalty: 0,
};

export const MsgUpdateKpi = {
  encode(message: MsgUpdateKpi, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.sla !== "") {
      writer.uint32(26).string(message.sla);
    }
    if (message.rule !== "") {
      writer.uint32(34).string(message.rule);
    }
    if (message.limit !== "") {
      writer.uint32(42).string(message.limit);
    }
    if (message.mu !== "") {
      writer.uint32(50).string(message.mu);
    }
    if (message.penalty !== 0) {
      writer.uint32(56).int32(message.penalty);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateKpi {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateKpi } as MsgUpdateKpi;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.sla = reader.string();
          break;
        case 4:
          message.rule = reader.string();
          break;
        case 5:
          message.limit = reader.string();
          break;
        case 6:
          message.mu = reader.string();
          break;
        case 7:
          message.penalty = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateKpi {
    const message = { ...baseMsgUpdateKpi } as MsgUpdateKpi;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.sla !== undefined && object.sla !== null) {
      message.sla = String(object.sla);
    } else {
      message.sla = "";
    }
    if (object.rule !== undefined && object.rule !== null) {
      message.rule = String(object.rule);
    } else {
      message.rule = "";
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = String(object.limit);
    } else {
      message.limit = "";
    }
    if (object.mu !== undefined && object.mu !== null) {
      message.mu = String(object.mu);
    } else {
      message.mu = "";
    }
    if (object.penalty !== undefined && object.penalty !== null) {
      message.penalty = Number(object.penalty);
    } else {
      message.penalty = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateKpi): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.sla !== undefined && (obj.sla = message.sla);
    message.rule !== undefined && (obj.rule = message.rule);
    message.limit !== undefined && (obj.limit = message.limit);
    message.mu !== undefined && (obj.mu = message.mu);
    message.penalty !== undefined && (obj.penalty = message.penalty);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateKpi>): MsgUpdateKpi {
    const message = { ...baseMsgUpdateKpi } as MsgUpdateKpi;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.sla !== undefined && object.sla !== null) {
      message.sla = object.sla;
    } else {
      message.sla = "";
    }
    if (object.rule !== undefined && object.rule !== null) {
      message.rule = object.rule;
    } else {
      message.rule = "";
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = "";
    }
    if (object.mu !== undefined && object.mu !== null) {
      message.mu = object.mu;
    } else {
      message.mu = "";
    }
    if (object.penalty !== undefined && object.penalty !== null) {
      message.penalty = object.penalty;
    } else {
      message.penalty = 0;
    }
    return message;
  },
};

const baseMsgUpdateKpiResponse: object = {};

export const MsgUpdateKpiResponse = {
  encode(_: MsgUpdateKpiResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateKpiResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateKpiResponse } as MsgUpdateKpiResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateKpiResponse {
    const message = { ...baseMsgUpdateKpiResponse } as MsgUpdateKpiResponse;
    return message;
  },

  toJSON(_: MsgUpdateKpiResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateKpiResponse>): MsgUpdateKpiResponse {
    const message = { ...baseMsgUpdateKpiResponse } as MsgUpdateKpiResponse;
    return message;
  },
};

const baseMsgDeleteKpi: object = { creator: "", index: "" };

export const MsgDeleteKpi = {
  encode(message: MsgDeleteKpi, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteKpi {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteKpi } as MsgDeleteKpi;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteKpi {
    const message = { ...baseMsgDeleteKpi } as MsgDeleteKpi;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteKpi): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteKpi>): MsgDeleteKpi {
    const message = { ...baseMsgDeleteKpi } as MsgDeleteKpi;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteKpiResponse: object = {};

export const MsgDeleteKpiResponse = {
  encode(_: MsgDeleteKpiResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteKpiResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteKpiResponse } as MsgDeleteKpiResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteKpiResponse {
    const message = { ...baseMsgDeleteKpiResponse } as MsgDeleteKpiResponse;
    return message;
  },

  toJSON(_: MsgDeleteKpiResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteKpiResponse>): MsgDeleteKpiResponse {
    const message = { ...baseMsgDeleteKpiResponse } as MsgDeleteKpiResponse;
    return message;
  },
};

const baseMsgCreateKpiMeasure: object = {
  creator: "",
  index: "",
  kpi: "",
  player: "",
  timestamp: 0,
  value: "",
  mu: "",
};

export const MsgCreateKpiMeasure = {
  encode(
    message: MsgCreateKpiMeasure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.kpi !== "") {
      writer.uint32(26).string(message.kpi);
    }
    if (message.player !== "") {
      writer.uint32(34).string(message.player);
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).int32(message.timestamp);
    }
    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }
    if (message.mu !== "") {
      writer.uint32(58).string(message.mu);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateKpiMeasure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateKpiMeasure } as MsgCreateKpiMeasure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.kpi = reader.string();
          break;
        case 4:
          message.player = reader.string();
          break;
        case 5:
          message.timestamp = reader.int32();
          break;
        case 6:
          message.value = reader.string();
          break;
        case 7:
          message.mu = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateKpiMeasure {
    const message = { ...baseMsgCreateKpiMeasure } as MsgCreateKpiMeasure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.kpi !== undefined && object.kpi !== null) {
      message.kpi = String(object.kpi);
    } else {
      message.kpi = "";
    }
    if (object.player !== undefined && object.player !== null) {
      message.player = String(object.player);
    } else {
      message.player = "";
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
    return message;
  },

  toJSON(message: MsgCreateKpiMeasure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.kpi !== undefined && (obj.kpi = message.kpi);
    message.player !== undefined && (obj.player = message.player);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.value !== undefined && (obj.value = message.value);
    message.mu !== undefined && (obj.mu = message.mu);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateKpiMeasure>): MsgCreateKpiMeasure {
    const message = { ...baseMsgCreateKpiMeasure } as MsgCreateKpiMeasure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.kpi !== undefined && object.kpi !== null) {
      message.kpi = object.kpi;
    } else {
      message.kpi = "";
    }
    if (object.player !== undefined && object.player !== null) {
      message.player = object.player;
    } else {
      message.player = "";
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
    return message;
  },
};

const baseMsgCreateKpiMeasureResponse: object = {};

export const MsgCreateKpiMeasureResponse = {
  encode(
    _: MsgCreateKpiMeasureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateKpiMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateKpiMeasureResponse,
    } as MsgCreateKpiMeasureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateKpiMeasureResponse {
    const message = {
      ...baseMsgCreateKpiMeasureResponse,
    } as MsgCreateKpiMeasureResponse;
    return message;
  },

  toJSON(_: MsgCreateKpiMeasureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateKpiMeasureResponse>
  ): MsgCreateKpiMeasureResponse {
    const message = {
      ...baseMsgCreateKpiMeasureResponse,
    } as MsgCreateKpiMeasureResponse;
    return message;
  },
};

const baseMsgUpdateKpiMeasure: object = {
  creator: "",
  index: "",
  kpi: "",
  player: "",
  timestamp: 0,
  value: "",
  mu: "",
};

export const MsgUpdateKpiMeasure = {
  encode(
    message: MsgUpdateKpiMeasure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.kpi !== "") {
      writer.uint32(26).string(message.kpi);
    }
    if (message.player !== "") {
      writer.uint32(34).string(message.player);
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).int32(message.timestamp);
    }
    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }
    if (message.mu !== "") {
      writer.uint32(58).string(message.mu);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateKpiMeasure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateKpiMeasure } as MsgUpdateKpiMeasure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.kpi = reader.string();
          break;
        case 4:
          message.player = reader.string();
          break;
        case 5:
          message.timestamp = reader.int32();
          break;
        case 6:
          message.value = reader.string();
          break;
        case 7:
          message.mu = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateKpiMeasure {
    const message = { ...baseMsgUpdateKpiMeasure } as MsgUpdateKpiMeasure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.kpi !== undefined && object.kpi !== null) {
      message.kpi = String(object.kpi);
    } else {
      message.kpi = "";
    }
    if (object.player !== undefined && object.player !== null) {
      message.player = String(object.player);
    } else {
      message.player = "";
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
    return message;
  },

  toJSON(message: MsgUpdateKpiMeasure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.kpi !== undefined && (obj.kpi = message.kpi);
    message.player !== undefined && (obj.player = message.player);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.value !== undefined && (obj.value = message.value);
    message.mu !== undefined && (obj.mu = message.mu);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateKpiMeasure>): MsgUpdateKpiMeasure {
    const message = { ...baseMsgUpdateKpiMeasure } as MsgUpdateKpiMeasure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.kpi !== undefined && object.kpi !== null) {
      message.kpi = object.kpi;
    } else {
      message.kpi = "";
    }
    if (object.player !== undefined && object.player !== null) {
      message.player = object.player;
    } else {
      message.player = "";
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
    return message;
  },
};

const baseMsgUpdateKpiMeasureResponse: object = {};

export const MsgUpdateKpiMeasureResponse = {
  encode(
    _: MsgUpdateKpiMeasureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateKpiMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateKpiMeasureResponse,
    } as MsgUpdateKpiMeasureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateKpiMeasureResponse {
    const message = {
      ...baseMsgUpdateKpiMeasureResponse,
    } as MsgUpdateKpiMeasureResponse;
    return message;
  },

  toJSON(_: MsgUpdateKpiMeasureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateKpiMeasureResponse>
  ): MsgUpdateKpiMeasureResponse {
    const message = {
      ...baseMsgUpdateKpiMeasureResponse,
    } as MsgUpdateKpiMeasureResponse;
    return message;
  },
};

const baseMsgDeleteKpiMeasure: object = { creator: "", index: "" };

export const MsgDeleteKpiMeasure = {
  encode(
    message: MsgDeleteKpiMeasure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteKpiMeasure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteKpiMeasure } as MsgDeleteKpiMeasure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteKpiMeasure {
    const message = { ...baseMsgDeleteKpiMeasure } as MsgDeleteKpiMeasure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteKpiMeasure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteKpiMeasure>): MsgDeleteKpiMeasure {
    const message = { ...baseMsgDeleteKpiMeasure } as MsgDeleteKpiMeasure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteKpiMeasureResponse: object = {};

export const MsgDeleteKpiMeasureResponse = {
  encode(
    _: MsgDeleteKpiMeasureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteKpiMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteKpiMeasureResponse,
    } as MsgDeleteKpiMeasureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteKpiMeasureResponse {
    const message = {
      ...baseMsgDeleteKpiMeasureResponse,
    } as MsgDeleteKpiMeasureResponse;
    return message;
  },

  toJSON(_: MsgDeleteKpiMeasureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteKpiMeasureResponse>
  ): MsgDeleteKpiMeasureResponse {
    const message = {
      ...baseMsgDeleteKpiMeasureResponse,
    } as MsgDeleteKpiMeasureResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateDso(request: MsgCreateDso): Promise<MsgCreateDsoResponse>;
  UpdateDso(request: MsgUpdateDso): Promise<MsgUpdateDsoResponse>;
  DeleteDso(request: MsgDeleteDso): Promise<MsgDeleteDsoResponse>;
  CreateAggregator(
    request: MsgCreateAggregator
  ): Promise<MsgCreateAggregatorResponse>;
  UpdateAggregator(
    request: MsgUpdateAggregator
  ): Promise<MsgUpdateAggregatorResponse>;
  DeleteAggregator(
    request: MsgDeleteAggregator
  ): Promise<MsgDeleteAggregatorResponse>;
  CreatePlayer(request: MsgCreatePlayer): Promise<MsgCreatePlayerResponse>;
  UpdatePlayer(request: MsgUpdatePlayer): Promise<MsgUpdatePlayerResponse>;
  DeletePlayer(request: MsgDeletePlayer): Promise<MsgDeletePlayerResponse>;
  CreateLem(request: MsgCreateLem): Promise<MsgCreateLemResponse>;
  UpdateLem(request: MsgUpdateLem): Promise<MsgUpdateLemResponse>;
  DeleteLem(request: MsgDeleteLem): Promise<MsgDeleteLemResponse>;
  CreateLemMeasure(
    request: MsgCreateLemMeasure
  ): Promise<MsgCreateLemMeasureResponse>;
  UpdateLemMeasure(
    request: MsgUpdateLemMeasure
  ): Promise<MsgUpdateLemMeasureResponse>;
  DeleteLemMeasure(
    request: MsgDeleteLemMeasure
  ): Promise<MsgDeleteLemMeasureResponse>;
  CreateSla(request: MsgCreateSla): Promise<MsgCreateSlaResponse>;
  UpdateSla(request: MsgUpdateSla): Promise<MsgUpdateSlaResponse>;
  DeleteSla(request: MsgDeleteSla): Promise<MsgDeleteSlaResponse>;
  CreateKpi(request: MsgCreateKpi): Promise<MsgCreateKpiResponse>;
  UpdateKpi(request: MsgUpdateKpi): Promise<MsgUpdateKpiResponse>;
  DeleteKpi(request: MsgDeleteKpi): Promise<MsgDeleteKpiResponse>;
  CreateKpiMeasure(
    request: MsgCreateKpiMeasure
  ): Promise<MsgCreateKpiMeasureResponse>;
  UpdateKpiMeasure(
    request: MsgUpdateKpiMeasure
  ): Promise<MsgUpdateKpiMeasureResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteKpiMeasure(
    request: MsgDeleteKpiMeasure
  ): Promise<MsgDeleteKpiMeasureResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateDso(request: MsgCreateDso): Promise<MsgCreateDsoResponse> {
    const data = MsgCreateDso.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "CreateDso",
      data
    );
    return promise.then((data) =>
      MsgCreateDsoResponse.decode(new Reader(data))
    );
  }

  UpdateDso(request: MsgUpdateDso): Promise<MsgUpdateDsoResponse> {
    const data = MsgUpdateDso.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "UpdateDso",
      data
    );
    return promise.then((data) =>
      MsgUpdateDsoResponse.decode(new Reader(data))
    );
  }

  DeleteDso(request: MsgDeleteDso): Promise<MsgDeleteDsoResponse> {
    const data = MsgDeleteDso.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "DeleteDso",
      data
    );
    return promise.then((data) =>
      MsgDeleteDsoResponse.decode(new Reader(data))
    );
  }

  CreateAggregator(
    request: MsgCreateAggregator
  ): Promise<MsgCreateAggregatorResponse> {
    const data = MsgCreateAggregator.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "CreateAggregator",
      data
    );
    return promise.then((data) =>
      MsgCreateAggregatorResponse.decode(new Reader(data))
    );
  }

  UpdateAggregator(
    request: MsgUpdateAggregator
  ): Promise<MsgUpdateAggregatorResponse> {
    const data = MsgUpdateAggregator.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "UpdateAggregator",
      data
    );
    return promise.then((data) =>
      MsgUpdateAggregatorResponse.decode(new Reader(data))
    );
  }

  DeleteAggregator(
    request: MsgDeleteAggregator
  ): Promise<MsgDeleteAggregatorResponse> {
    const data = MsgDeleteAggregator.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "DeleteAggregator",
      data
    );
    return promise.then((data) =>
      MsgDeleteAggregatorResponse.decode(new Reader(data))
    );
  }

  CreatePlayer(request: MsgCreatePlayer): Promise<MsgCreatePlayerResponse> {
    const data = MsgCreatePlayer.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "CreatePlayer",
      data
    );
    return promise.then((data) =>
      MsgCreatePlayerResponse.decode(new Reader(data))
    );
  }

  UpdatePlayer(request: MsgUpdatePlayer): Promise<MsgUpdatePlayerResponse> {
    const data = MsgUpdatePlayer.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "UpdatePlayer",
      data
    );
    return promise.then((data) =>
      MsgUpdatePlayerResponse.decode(new Reader(data))
    );
  }

  DeletePlayer(request: MsgDeletePlayer): Promise<MsgDeletePlayerResponse> {
    const data = MsgDeletePlayer.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "DeletePlayer",
      data
    );
    return promise.then((data) =>
      MsgDeletePlayerResponse.decode(new Reader(data))
    );
  }

  CreateLem(request: MsgCreateLem): Promise<MsgCreateLemResponse> {
    const data = MsgCreateLem.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "CreateLem",
      data
    );
    return promise.then((data) =>
      MsgCreateLemResponse.decode(new Reader(data))
    );
  }

  UpdateLem(request: MsgUpdateLem): Promise<MsgUpdateLemResponse> {
    const data = MsgUpdateLem.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "UpdateLem",
      data
    );
    return promise.then((data) =>
      MsgUpdateLemResponse.decode(new Reader(data))
    );
  }

  DeleteLem(request: MsgDeleteLem): Promise<MsgDeleteLemResponse> {
    const data = MsgDeleteLem.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "DeleteLem",
      data
    );
    return promise.then((data) =>
      MsgDeleteLemResponse.decode(new Reader(data))
    );
  }

  CreateLemMeasure(
    request: MsgCreateLemMeasure
  ): Promise<MsgCreateLemMeasureResponse> {
    const data = MsgCreateLemMeasure.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "CreateLemMeasure",
      data
    );
    return promise.then((data) =>
      MsgCreateLemMeasureResponse.decode(new Reader(data))
    );
  }

  UpdateLemMeasure(
    request: MsgUpdateLemMeasure
  ): Promise<MsgUpdateLemMeasureResponse> {
    const data = MsgUpdateLemMeasure.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "UpdateLemMeasure",
      data
    );
    return promise.then((data) =>
      MsgUpdateLemMeasureResponse.decode(new Reader(data))
    );
  }

  DeleteLemMeasure(
    request: MsgDeleteLemMeasure
  ): Promise<MsgDeleteLemMeasureResponse> {
    const data = MsgDeleteLemMeasure.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "DeleteLemMeasure",
      data
    );
    return promise.then((data) =>
      MsgDeleteLemMeasureResponse.decode(new Reader(data))
    );
  }

  CreateSla(request: MsgCreateSla): Promise<MsgCreateSlaResponse> {
    const data = MsgCreateSla.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "CreateSla",
      data
    );
    return promise.then((data) =>
      MsgCreateSlaResponse.decode(new Reader(data))
    );
  }

  UpdateSla(request: MsgUpdateSla): Promise<MsgUpdateSlaResponse> {
    const data = MsgUpdateSla.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "UpdateSla",
      data
    );
    return promise.then((data) =>
      MsgUpdateSlaResponse.decode(new Reader(data))
    );
  }

  DeleteSla(request: MsgDeleteSla): Promise<MsgDeleteSlaResponse> {
    const data = MsgDeleteSla.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "DeleteSla",
      data
    );
    return promise.then((data) =>
      MsgDeleteSlaResponse.decode(new Reader(data))
    );
  }

  CreateKpi(request: MsgCreateKpi): Promise<MsgCreateKpiResponse> {
    const data = MsgCreateKpi.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "CreateKpi",
      data
    );
    return promise.then((data) =>
      MsgCreateKpiResponse.decode(new Reader(data))
    );
  }

  UpdateKpi(request: MsgUpdateKpi): Promise<MsgUpdateKpiResponse> {
    const data = MsgUpdateKpi.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "UpdateKpi",
      data
    );
    return promise.then((data) =>
      MsgUpdateKpiResponse.decode(new Reader(data))
    );
  }

  DeleteKpi(request: MsgDeleteKpi): Promise<MsgDeleteKpiResponse> {
    const data = MsgDeleteKpi.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "DeleteKpi",
      data
    );
    return promise.then((data) =>
      MsgDeleteKpiResponse.decode(new Reader(data))
    );
  }

  CreateKpiMeasure(
    request: MsgCreateKpiMeasure
  ): Promise<MsgCreateKpiMeasureResponse> {
    const data = MsgCreateKpiMeasure.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "CreateKpiMeasure",
      data
    );
    return promise.then((data) =>
      MsgCreateKpiMeasureResponse.decode(new Reader(data))
    );
  }

  UpdateKpiMeasure(
    request: MsgUpdateKpiMeasure
  ): Promise<MsgUpdateKpiMeasureResponse> {
    const data = MsgUpdateKpiMeasure.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "UpdateKpiMeasure",
      data
    );
    return promise.then((data) =>
      MsgUpdateKpiMeasureResponse.decode(new Reader(data))
    );
  }

  DeleteKpiMeasure(
    request: MsgDeleteKpiMeasure
  ): Promise<MsgDeleteKpiMeasureResponse> {
    const data = MsgDeleteKpiMeasure.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Msg",
      "DeleteKpiMeasure",
      data
    );
    return promise.then((data) =>
      MsgDeleteKpiMeasureResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
