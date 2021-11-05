/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'supsidacdisaac.pm.pm'

export interface Lem {
  index: string
  indexEnd: string
  params: string[]
  players: string[]
  creator: string
}

const baseLem: object = { index: '', indexEnd: '', params: '', players: '', creator: '' }

export const Lem = {
  encode(message: Lem, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    if (message.indexEnd !== '') {
      writer.uint32(18).string(message.indexEnd)
    }
    for (const v of message.params) {
      writer.uint32(26).string(v!)
    }
    for (const v of message.players) {
      writer.uint32(34).string(v!)
    }
    if (message.creator !== '') {
      writer.uint32(42).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Lem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseLem } as Lem
    message.params = []
    message.players = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        case 2:
          message.indexEnd = reader.string()
          break
        case 3:
          message.params.push(reader.string())
          break
        case 4:
          message.players.push(reader.string())
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

  fromJSON(object: any): Lem {
    const message = { ...baseLem } as Lem
    message.params = []
    message.players = []
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.indexEnd !== undefined && object.indexEnd !== null) {
      message.indexEnd = String(object.indexEnd)
    } else {
      message.indexEnd = ''
    }
    if (object.params !== undefined && object.params !== null) {
      for (const e of object.params) {
        message.params.push(String(e))
      }
    }
    if (object.players !== undefined && object.players !== null) {
      for (const e of object.players) {
        message.players.push(String(e))
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: Lem): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    message.indexEnd !== undefined && (obj.indexEnd = message.indexEnd)
    if (message.params) {
      obj.params = message.params.map((e) => e)
    } else {
      obj.params = []
    }
    if (message.players) {
      obj.players = message.players.map((e) => e)
    } else {
      obj.players = []
    }
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<Lem>): Lem {
    const message = { ...baseLem } as Lem
    message.params = []
    message.players = []
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.indexEnd !== undefined && object.indexEnd !== null) {
      message.indexEnd = object.indexEnd
    } else {
      message.indexEnd = ''
    }
    if (object.params !== undefined && object.params !== null) {
      for (const e of object.params) {
        message.params.push(e)
      }
    }
    if (object.players !== undefined && object.players !== null) {
      for (const e of object.players) {
        message.players.push(e)
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
}

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
