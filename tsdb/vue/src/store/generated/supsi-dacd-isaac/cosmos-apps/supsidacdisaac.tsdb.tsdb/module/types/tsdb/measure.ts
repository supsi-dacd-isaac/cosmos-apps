/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'supsidacdisaac.tsdb.tsdb'

export interface Measure {
  id: number
  timeseriesID: string
  ts: string
  value: string
  creator: string
}

const baseMeasure: object = { id: 0, timeseriesID: '', ts: '', value: '', creator: '' }

export const Measure = {
  encode(message: Measure, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
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
    if (message.creator !== '') {
      writer.uint32(42).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Measure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMeasure } as Measure
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
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
        case 5:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Measure {
    const message = { ...baseMeasure } as Measure
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: Measure): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.timeseriesID !== undefined && (obj.timeseriesID = message.timeseriesID)
    message.ts !== undefined && (obj.ts = message.ts)
    message.value !== undefined && (obj.value = message.value)
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<Measure>): Measure {
    const message = { ...baseMeasure } as Measure
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
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
