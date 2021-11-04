/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'supsidacdisaac.tsdb.tsdb'

export interface MsgCreateTimeseries {
  creator: string
  location: string
  signal: string
}

export interface MsgCreateTimeseriesResponse {
  id: number
}

export interface MsgUpdateTimeseries {
  creator: string
  id: number
  location: string
  signal: string
}

export interface MsgUpdateTimeseriesResponse {}

export interface MsgDeleteTimeseries {
  creator: string
  id: number
}

export interface MsgDeleteTimeseriesResponse {}

export interface MsgCreateMeasure {
  creator: string
  timeseriesID: string
  ts: string
  value: string
}

export interface MsgCreateMeasureResponse {
  id: number
}

export interface MsgUpdateMeasure {
  creator: string
  id: number
  timeseriesID: string
  ts: string
  value: string
}

export interface MsgUpdateMeasureResponse {}

export interface MsgDeleteMeasure {
  creator: string
  id: number
}

export interface MsgDeleteMeasureResponse {}

const baseMsgCreateTimeseries: object = { creator: '', location: '', signal: '' }

export const MsgCreateTimeseries = {
  encode(message: MsgCreateTimeseries, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.location !== '') {
      writer.uint32(18).string(message.location)
    }
    if (message.signal !== '') {
      writer.uint32(26).string(message.signal)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTimeseries {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateTimeseries } as MsgCreateTimeseries
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.location = reader.string()
          break
        case 3:
          message.signal = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateTimeseries {
    const message = { ...baseMsgCreateTimeseries } as MsgCreateTimeseries
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location)
    } else {
      message.location = ''
    }
    if (object.signal !== undefined && object.signal !== null) {
      message.signal = String(object.signal)
    } else {
      message.signal = ''
    }
    return message
  },

  toJSON(message: MsgCreateTimeseries): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.location !== undefined && (obj.location = message.location)
    message.signal !== undefined && (obj.signal = message.signal)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateTimeseries>): MsgCreateTimeseries {
    const message = { ...baseMsgCreateTimeseries } as MsgCreateTimeseries
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location
    } else {
      message.location = ''
    }
    if (object.signal !== undefined && object.signal !== null) {
      message.signal = object.signal
    } else {
      message.signal = ''
    }
    return message
  }
}

const baseMsgCreateTimeseriesResponse: object = { id: 0 }

export const MsgCreateTimeseriesResponse = {
  encode(message: MsgCreateTimeseriesResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTimeseriesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateTimeseriesResponse } as MsgCreateTimeseriesResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateTimeseriesResponse {
    const message = { ...baseMsgCreateTimeseriesResponse } as MsgCreateTimeseriesResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateTimeseriesResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateTimeseriesResponse>): MsgCreateTimeseriesResponse {
    const message = { ...baseMsgCreateTimeseriesResponse } as MsgCreateTimeseriesResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateTimeseries: object = { creator: '', id: 0, location: '', signal: '' }

export const MsgUpdateTimeseries = {
  encode(message: MsgUpdateTimeseries, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.location !== '') {
      writer.uint32(26).string(message.location)
    }
    if (message.signal !== '') {
      writer.uint32(34).string(message.signal)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimeseries {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateTimeseries } as MsgUpdateTimeseries
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.location = reader.string()
          break
        case 4:
          message.signal = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateTimeseries {
    const message = { ...baseMsgUpdateTimeseries } as MsgUpdateTimeseries
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location)
    } else {
      message.location = ''
    }
    if (object.signal !== undefined && object.signal !== null) {
      message.signal = String(object.signal)
    } else {
      message.signal = ''
    }
    return message
  },

  toJSON(message: MsgUpdateTimeseries): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.location !== undefined && (obj.location = message.location)
    message.signal !== undefined && (obj.signal = message.signal)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateTimeseries>): MsgUpdateTimeseries {
    const message = { ...baseMsgUpdateTimeseries } as MsgUpdateTimeseries
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location
    } else {
      message.location = ''
    }
    if (object.signal !== undefined && object.signal !== null) {
      message.signal = object.signal
    } else {
      message.signal = ''
    }
    return message
  }
}

const baseMsgUpdateTimeseriesResponse: object = {}

export const MsgUpdateTimeseriesResponse = {
  encode(_: MsgUpdateTimeseriesResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimeseriesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateTimeseriesResponse } as MsgUpdateTimeseriesResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateTimeseriesResponse {
    const message = { ...baseMsgUpdateTimeseriesResponse } as MsgUpdateTimeseriesResponse
    return message
  },

  toJSON(_: MsgUpdateTimeseriesResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateTimeseriesResponse>): MsgUpdateTimeseriesResponse {
    const message = { ...baseMsgUpdateTimeseriesResponse } as MsgUpdateTimeseriesResponse
    return message
  }
}

const baseMsgDeleteTimeseries: object = { creator: '', id: 0 }

export const MsgDeleteTimeseries = {
  encode(message: MsgDeleteTimeseries, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimeseries {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteTimeseries } as MsgDeleteTimeseries
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteTimeseries {
    const message = { ...baseMsgDeleteTimeseries } as MsgDeleteTimeseries
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteTimeseries): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteTimeseries>): MsgDeleteTimeseries {
    const message = { ...baseMsgDeleteTimeseries } as MsgDeleteTimeseries
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteTimeseriesResponse: object = {}

export const MsgDeleteTimeseriesResponse = {
  encode(_: MsgDeleteTimeseriesResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimeseriesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteTimeseriesResponse } as MsgDeleteTimeseriesResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteTimeseriesResponse {
    const message = { ...baseMsgDeleteTimeseriesResponse } as MsgDeleteTimeseriesResponse
    return message
  },

  toJSON(_: MsgDeleteTimeseriesResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteTimeseriesResponse>): MsgDeleteTimeseriesResponse {
    const message = { ...baseMsgDeleteTimeseriesResponse } as MsgDeleteTimeseriesResponse
    return message
  }
}

const baseMsgCreateMeasure: object = { creator: '', timeseriesID: '', ts: '', value: '' }

export const MsgCreateMeasure = {
  encode(message: MsgCreateMeasure, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.timeseriesID !== '') {
      writer.uint32(18).string(message.timeseriesID)
    }
    if (message.ts !== '') {
      writer.uint32(26).string(message.ts)
    }
    if (message.value !== '') {
      writer.uint32(34).string(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMeasure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateMeasure } as MsgCreateMeasure
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.timeseriesID = reader.string()
          break
        case 3:
          message.ts = reader.string()
          break
        case 4:
          message.value = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateMeasure {
    const message = { ...baseMsgCreateMeasure } as MsgCreateMeasure
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.timeseriesID !== undefined && object.timeseriesID !== null) {
      message.timeseriesID = String(object.timeseriesID)
    } else {
      message.timeseriesID = ''
    }
    if (object.ts !== undefined && object.ts !== null) {
      message.ts = String(object.ts)
    } else {
      message.ts = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value)
    } else {
      message.value = ''
    }
    return message
  },

  toJSON(message: MsgCreateMeasure): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.timeseriesID !== undefined && (obj.timeseriesID = message.timeseriesID)
    message.ts !== undefined && (obj.ts = message.ts)
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateMeasure>): MsgCreateMeasure {
    const message = { ...baseMsgCreateMeasure } as MsgCreateMeasure
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.timeseriesID !== undefined && object.timeseriesID !== null) {
      message.timeseriesID = object.timeseriesID
    } else {
      message.timeseriesID = ''
    }
    if (object.ts !== undefined && object.ts !== null) {
      message.ts = object.ts
    } else {
      message.ts = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = ''
    }
    return message
  }
}

const baseMsgCreateMeasureResponse: object = { id: 0 }

export const MsgCreateMeasureResponse = {
  encode(message: MsgCreateMeasureResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateMeasureResponse } as MsgCreateMeasureResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateMeasureResponse {
    const message = { ...baseMsgCreateMeasureResponse } as MsgCreateMeasureResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateMeasureResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateMeasureResponse>): MsgCreateMeasureResponse {
    const message = { ...baseMsgCreateMeasureResponse } as MsgCreateMeasureResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateMeasure: object = { creator: '', id: 0, timeseriesID: '', ts: '', value: '' }

export const MsgUpdateMeasure = {
  encode(message: MsgUpdateMeasure, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.timeseriesID !== '') {
      writer.uint32(26).string(message.timeseriesID)
    }
    if (message.ts !== '') {
      writer.uint32(34).string(message.ts)
    }
    if (message.value !== '') {
      writer.uint32(42).string(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMeasure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateMeasure } as MsgUpdateMeasure
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.timeseriesID = reader.string()
          break
        case 4:
          message.ts = reader.string()
          break
        case 5:
          message.value = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateMeasure {
    const message = { ...baseMsgUpdateMeasure } as MsgUpdateMeasure
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.timeseriesID !== undefined && object.timeseriesID !== null) {
      message.timeseriesID = String(object.timeseriesID)
    } else {
      message.timeseriesID = ''
    }
    if (object.ts !== undefined && object.ts !== null) {
      message.ts = String(object.ts)
    } else {
      message.ts = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value)
    } else {
      message.value = ''
    }
    return message
  },

  toJSON(message: MsgUpdateMeasure): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.timeseriesID !== undefined && (obj.timeseriesID = message.timeseriesID)
    message.ts !== undefined && (obj.ts = message.ts)
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateMeasure>): MsgUpdateMeasure {
    const message = { ...baseMsgUpdateMeasure } as MsgUpdateMeasure
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.timeseriesID !== undefined && object.timeseriesID !== null) {
      message.timeseriesID = object.timeseriesID
    } else {
      message.timeseriesID = ''
    }
    if (object.ts !== undefined && object.ts !== null) {
      message.ts = object.ts
    } else {
      message.ts = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = ''
    }
    return message
  }
}

const baseMsgUpdateMeasureResponse: object = {}

export const MsgUpdateMeasureResponse = {
  encode(_: MsgUpdateMeasureResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateMeasureResponse } as MsgUpdateMeasureResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateMeasureResponse {
    const message = { ...baseMsgUpdateMeasureResponse } as MsgUpdateMeasureResponse
    return message
  },

  toJSON(_: MsgUpdateMeasureResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateMeasureResponse>): MsgUpdateMeasureResponse {
    const message = { ...baseMsgUpdateMeasureResponse } as MsgUpdateMeasureResponse
    return message
  }
}

const baseMsgDeleteMeasure: object = { creator: '', id: 0 }

export const MsgDeleteMeasure = {
  encode(message: MsgDeleteMeasure, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMeasure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteMeasure } as MsgDeleteMeasure
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteMeasure {
    const message = { ...baseMsgDeleteMeasure } as MsgDeleteMeasure
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteMeasure): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteMeasure>): MsgDeleteMeasure {
    const message = { ...baseMsgDeleteMeasure } as MsgDeleteMeasure
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteMeasureResponse: object = {}

export const MsgDeleteMeasureResponse = {
  encode(_: MsgDeleteMeasureResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteMeasureResponse } as MsgDeleteMeasureResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteMeasureResponse {
    const message = { ...baseMsgDeleteMeasureResponse } as MsgDeleteMeasureResponse
    return message
  },

  toJSON(_: MsgDeleteMeasureResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteMeasureResponse>): MsgDeleteMeasureResponse {
    const message = { ...baseMsgDeleteMeasureResponse } as MsgDeleteMeasureResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  CreateTimeseries(request: MsgCreateTimeseries): Promise<MsgCreateTimeseriesResponse>
  UpdateTimeseries(request: MsgUpdateTimeseries): Promise<MsgUpdateTimeseriesResponse>
  DeleteTimeseries(request: MsgDeleteTimeseries): Promise<MsgDeleteTimeseriesResponse>
  CreateMeasure(request: MsgCreateMeasure): Promise<MsgCreateMeasureResponse>
  UpdateMeasure(request: MsgUpdateMeasure): Promise<MsgUpdateMeasureResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteMeasure(request: MsgDeleteMeasure): Promise<MsgDeleteMeasureResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateTimeseries(request: MsgCreateTimeseries): Promise<MsgCreateTimeseriesResponse> {
    const data = MsgCreateTimeseries.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Msg', 'CreateTimeseries', data)
    return promise.then((data) => MsgCreateTimeseriesResponse.decode(new Reader(data)))
  }

  UpdateTimeseries(request: MsgUpdateTimeseries): Promise<MsgUpdateTimeseriesResponse> {
    const data = MsgUpdateTimeseries.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Msg', 'UpdateTimeseries', data)
    return promise.then((data) => MsgUpdateTimeseriesResponse.decode(new Reader(data)))
  }

  DeleteTimeseries(request: MsgDeleteTimeseries): Promise<MsgDeleteTimeseriesResponse> {
    const data = MsgDeleteTimeseries.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Msg', 'DeleteTimeseries', data)
    return promise.then((data) => MsgDeleteTimeseriesResponse.decode(new Reader(data)))
  }

  CreateMeasure(request: MsgCreateMeasure): Promise<MsgCreateMeasureResponse> {
    const data = MsgCreateMeasure.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Msg', 'CreateMeasure', data)
    return promise.then((data) => MsgCreateMeasureResponse.decode(new Reader(data)))
  }

  UpdateMeasure(request: MsgUpdateMeasure): Promise<MsgUpdateMeasureResponse> {
    const data = MsgUpdateMeasure.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Msg', 'UpdateMeasure', data)
    return promise.then((data) => MsgUpdateMeasureResponse.decode(new Reader(data)))
  }

  DeleteMeasure(request: MsgDeleteMeasure): Promise<MsgDeleteMeasureResponse> {
    const data = MsgDeleteMeasure.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Msg', 'DeleteMeasure', data)
    return promise.then((data) => MsgDeleteMeasureResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
