/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'supsidacdisaac.pm.pm'

export interface MsgCreateDso {
  creator: string
  index: string
  address: string
}

export interface MsgCreateDsoResponse {}

export interface MsgUpdateDso {
  creator: string
  index: string
  address: string
}

export interface MsgUpdateDsoResponse {}

export interface MsgDeleteDso {
  creator: string
}

export interface MsgDeleteDsoResponse {}

export interface MsgCreatePlayer {
  creator: string
  index: string
  address: string
  role: string
}

export interface MsgCreatePlayerResponse {}

export interface MsgUpdatePlayer {
  creator: string
  index: string
  address: string
  role: string
}

export interface MsgUpdatePlayerResponse {}

export interface MsgDeletePlayer {
  creator: string
  index: string
}

export interface MsgDeletePlayerResponse {}

export interface MsgCreateAggregator {
  creator: string
  index: string
  address: string
}

export interface MsgCreateAggregatorResponse {}

export interface MsgUpdateAggregator {
  creator: string
  index: string
  address: string
}

export interface MsgUpdateAggregatorResponse {}

export interface MsgDeleteAggregator {
  creator: string
}

export interface MsgDeleteAggregatorResponse {}

export interface MsgCreateLem {
  creator: string
  index: string
  indexEnd: string
  params: string[]
  players: string[]
}

export interface MsgCreateLemResponse {}

export interface MsgUpdateLem {
  creator: string
  index: string
  indexEnd: string
  params: string[]
  players: string[]
}

export interface MsgUpdateLemResponse {}

export interface MsgDeleteLem {
  creator: string
  index: string
}

export interface MsgDeleteLemResponse {}

const baseMsgCreateDso: object = { creator: '', index: '', address: '' }

export const MsgCreateDso = {
  encode(message: MsgCreateDso, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(26).string(message.index)
    }
    if (message.address !== '') {
      writer.uint32(34).string(message.address)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDso {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateDso } as MsgCreateDso
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 3:
          message.index = reader.string()
          break
        case 4:
          message.address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateDso {
    const message = { ...baseMsgCreateDso } as MsgCreateDso
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: MsgCreateDso): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateDso>): MsgCreateDso {
    const message = { ...baseMsgCreateDso } as MsgCreateDso
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  }
}

const baseMsgCreateDsoResponse: object = {}

export const MsgCreateDsoResponse = {
  encode(_: MsgCreateDsoResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDsoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateDsoResponse } as MsgCreateDsoResponse
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

  fromJSON(_: any): MsgCreateDsoResponse {
    const message = { ...baseMsgCreateDsoResponse } as MsgCreateDsoResponse
    return message
  },

  toJSON(_: MsgCreateDsoResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateDsoResponse>): MsgCreateDsoResponse {
    const message = { ...baseMsgCreateDsoResponse } as MsgCreateDsoResponse
    return message
  }
}

const baseMsgUpdateDso: object = { creator: '', index: '', address: '' }

export const MsgUpdateDso = {
  encode(message: MsgUpdateDso, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(26).string(message.index)
    }
    if (message.address !== '') {
      writer.uint32(34).string(message.address)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDso {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateDso } as MsgUpdateDso
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 3:
          message.index = reader.string()
          break
        case 4:
          message.address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateDso {
    const message = { ...baseMsgUpdateDso } as MsgUpdateDso
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: MsgUpdateDso): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateDso>): MsgUpdateDso {
    const message = { ...baseMsgUpdateDso } as MsgUpdateDso
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  }
}

const baseMsgUpdateDsoResponse: object = {}

export const MsgUpdateDsoResponse = {
  encode(_: MsgUpdateDsoResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDsoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateDsoResponse } as MsgUpdateDsoResponse
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

  fromJSON(_: any): MsgUpdateDsoResponse {
    const message = { ...baseMsgUpdateDsoResponse } as MsgUpdateDsoResponse
    return message
  },

  toJSON(_: MsgUpdateDsoResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateDsoResponse>): MsgUpdateDsoResponse {
    const message = { ...baseMsgUpdateDsoResponse } as MsgUpdateDsoResponse
    return message
  }
}

const baseMsgDeleteDso: object = { creator: '' }

export const MsgDeleteDso = {
  encode(message: MsgDeleteDso, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDso {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteDso } as MsgDeleteDso
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteDso {
    const message = { ...baseMsgDeleteDso } as MsgDeleteDso
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: MsgDeleteDso): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteDso>): MsgDeleteDso {
    const message = { ...baseMsgDeleteDso } as MsgDeleteDso
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
}

const baseMsgDeleteDsoResponse: object = {}

export const MsgDeleteDsoResponse = {
  encode(_: MsgDeleteDsoResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDsoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteDsoResponse } as MsgDeleteDsoResponse
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

  fromJSON(_: any): MsgDeleteDsoResponse {
    const message = { ...baseMsgDeleteDsoResponse } as MsgDeleteDsoResponse
    return message
  },

  toJSON(_: MsgDeleteDsoResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteDsoResponse>): MsgDeleteDsoResponse {
    const message = { ...baseMsgDeleteDsoResponse } as MsgDeleteDsoResponse
    return message
  }
}

const baseMsgCreatePlayer: object = { creator: '', index: '', address: '', role: '' }

export const MsgCreatePlayer = {
  encode(message: MsgCreatePlayer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.address !== '') {
      writer.uint32(26).string(message.address)
    }
    if (message.role !== '') {
      writer.uint32(34).string(message.role)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePlayer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePlayer } as MsgCreatePlayer
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.address = reader.string()
          break
        case 4:
          message.role = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreatePlayer {
    const message = { ...baseMsgCreatePlayer } as MsgCreatePlayer
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = String(object.role)
    } else {
      message.role = ''
    }
    return message
  },

  toJSON(message: MsgCreatePlayer): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.address !== undefined && (obj.address = message.address)
    message.role !== undefined && (obj.role = message.role)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreatePlayer>): MsgCreatePlayer {
    const message = { ...baseMsgCreatePlayer } as MsgCreatePlayer
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role
    } else {
      message.role = ''
    }
    return message
  }
}

const baseMsgCreatePlayerResponse: object = {}

export const MsgCreatePlayerResponse = {
  encode(_: MsgCreatePlayerResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePlayerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePlayerResponse } as MsgCreatePlayerResponse
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

  fromJSON(_: any): MsgCreatePlayerResponse {
    const message = { ...baseMsgCreatePlayerResponse } as MsgCreatePlayerResponse
    return message
  },

  toJSON(_: MsgCreatePlayerResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreatePlayerResponse>): MsgCreatePlayerResponse {
    const message = { ...baseMsgCreatePlayerResponse } as MsgCreatePlayerResponse
    return message
  }
}

const baseMsgUpdatePlayer: object = { creator: '', index: '', address: '', role: '' }

export const MsgUpdatePlayer = {
  encode(message: MsgUpdatePlayer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.address !== '') {
      writer.uint32(26).string(message.address)
    }
    if (message.role !== '') {
      writer.uint32(34).string(message.role)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePlayer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePlayer } as MsgUpdatePlayer
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.address = reader.string()
          break
        case 4:
          message.role = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdatePlayer {
    const message = { ...baseMsgUpdatePlayer } as MsgUpdatePlayer
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = String(object.role)
    } else {
      message.role = ''
    }
    return message
  },

  toJSON(message: MsgUpdatePlayer): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.address !== undefined && (obj.address = message.address)
    message.role !== undefined && (obj.role = message.role)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdatePlayer>): MsgUpdatePlayer {
    const message = { ...baseMsgUpdatePlayer } as MsgUpdatePlayer
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role
    } else {
      message.role = ''
    }
    return message
  }
}

const baseMsgUpdatePlayerResponse: object = {}

export const MsgUpdatePlayerResponse = {
  encode(_: MsgUpdatePlayerResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePlayerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePlayerResponse } as MsgUpdatePlayerResponse
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

  fromJSON(_: any): MsgUpdatePlayerResponse {
    const message = { ...baseMsgUpdatePlayerResponse } as MsgUpdatePlayerResponse
    return message
  },

  toJSON(_: MsgUpdatePlayerResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdatePlayerResponse>): MsgUpdatePlayerResponse {
    const message = { ...baseMsgUpdatePlayerResponse } as MsgUpdatePlayerResponse
    return message
  }
}

const baseMsgDeletePlayer: object = { creator: '', index: '' }

export const MsgDeletePlayer = {
  encode(message: MsgDeletePlayer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePlayer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePlayer } as MsgDeletePlayer
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeletePlayer {
    const message = { ...baseMsgDeletePlayer } as MsgDeletePlayer
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: MsgDeletePlayer): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeletePlayer>): MsgDeletePlayer {
    const message = { ...baseMsgDeletePlayer } as MsgDeletePlayer
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseMsgDeletePlayerResponse: object = {}

export const MsgDeletePlayerResponse = {
  encode(_: MsgDeletePlayerResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePlayerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePlayerResponse } as MsgDeletePlayerResponse
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

  fromJSON(_: any): MsgDeletePlayerResponse {
    const message = { ...baseMsgDeletePlayerResponse } as MsgDeletePlayerResponse
    return message
  },

  toJSON(_: MsgDeletePlayerResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeletePlayerResponse>): MsgDeletePlayerResponse {
    const message = { ...baseMsgDeletePlayerResponse } as MsgDeletePlayerResponse
    return message
  }
}

const baseMsgCreateAggregator: object = { creator: '', index: '', address: '' }

export const MsgCreateAggregator = {
  encode(message: MsgCreateAggregator, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(26).string(message.index)
    }
    if (message.address !== '') {
      writer.uint32(34).string(message.address)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAggregator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateAggregator } as MsgCreateAggregator
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 3:
          message.index = reader.string()
          break
        case 4:
          message.address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateAggregator {
    const message = { ...baseMsgCreateAggregator } as MsgCreateAggregator
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: MsgCreateAggregator): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateAggregator>): MsgCreateAggregator {
    const message = { ...baseMsgCreateAggregator } as MsgCreateAggregator
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  }
}

const baseMsgCreateAggregatorResponse: object = {}

export const MsgCreateAggregatorResponse = {
  encode(_: MsgCreateAggregatorResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAggregatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateAggregatorResponse } as MsgCreateAggregatorResponse
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

  fromJSON(_: any): MsgCreateAggregatorResponse {
    const message = { ...baseMsgCreateAggregatorResponse } as MsgCreateAggregatorResponse
    return message
  },

  toJSON(_: MsgCreateAggregatorResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateAggregatorResponse>): MsgCreateAggregatorResponse {
    const message = { ...baseMsgCreateAggregatorResponse } as MsgCreateAggregatorResponse
    return message
  }
}

const baseMsgUpdateAggregator: object = { creator: '', index: '', address: '' }

export const MsgUpdateAggregator = {
  encode(message: MsgUpdateAggregator, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(26).string(message.index)
    }
    if (message.address !== '') {
      writer.uint32(34).string(message.address)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAggregator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateAggregator } as MsgUpdateAggregator
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 3:
          message.index = reader.string()
          break
        case 4:
          message.address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateAggregator {
    const message = { ...baseMsgUpdateAggregator } as MsgUpdateAggregator
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: MsgUpdateAggregator): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateAggregator>): MsgUpdateAggregator {
    const message = { ...baseMsgUpdateAggregator } as MsgUpdateAggregator
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  }
}

const baseMsgUpdateAggregatorResponse: object = {}

export const MsgUpdateAggregatorResponse = {
  encode(_: MsgUpdateAggregatorResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAggregatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateAggregatorResponse } as MsgUpdateAggregatorResponse
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

  fromJSON(_: any): MsgUpdateAggregatorResponse {
    const message = { ...baseMsgUpdateAggregatorResponse } as MsgUpdateAggregatorResponse
    return message
  },

  toJSON(_: MsgUpdateAggregatorResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateAggregatorResponse>): MsgUpdateAggregatorResponse {
    const message = { ...baseMsgUpdateAggregatorResponse } as MsgUpdateAggregatorResponse
    return message
  }
}

const baseMsgDeleteAggregator: object = { creator: '' }

export const MsgDeleteAggregator = {
  encode(message: MsgDeleteAggregator, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAggregator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteAggregator } as MsgDeleteAggregator
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteAggregator {
    const message = { ...baseMsgDeleteAggregator } as MsgDeleteAggregator
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: MsgDeleteAggregator): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteAggregator>): MsgDeleteAggregator {
    const message = { ...baseMsgDeleteAggregator } as MsgDeleteAggregator
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
}

const baseMsgDeleteAggregatorResponse: object = {}

export const MsgDeleteAggregatorResponse = {
  encode(_: MsgDeleteAggregatorResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAggregatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteAggregatorResponse } as MsgDeleteAggregatorResponse
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

  fromJSON(_: any): MsgDeleteAggregatorResponse {
    const message = { ...baseMsgDeleteAggregatorResponse } as MsgDeleteAggregatorResponse
    return message
  },

  toJSON(_: MsgDeleteAggregatorResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteAggregatorResponse>): MsgDeleteAggregatorResponse {
    const message = { ...baseMsgDeleteAggregatorResponse } as MsgDeleteAggregatorResponse
    return message
  }
}

const baseMsgCreateLem: object = { creator: '', index: '', indexEnd: '', params: '', players: '' }

export const MsgCreateLem = {
  encode(message: MsgCreateLem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.indexEnd !== '') {
      writer.uint32(26).string(message.indexEnd)
    }
    for (const v of message.params) {
      writer.uint32(34).string(v!)
    }
    for (const v of message.players) {
      writer.uint32(42).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateLem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateLem } as MsgCreateLem
    message.params = []
    message.players = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.indexEnd = reader.string()
          break
        case 4:
          message.params.push(reader.string())
          break
        case 5:
          message.players.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateLem {
    const message = { ...baseMsgCreateLem } as MsgCreateLem
    message.params = []
    message.players = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    return message
  },

  toJSON(message: MsgCreateLem): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
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
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateLem>): MsgCreateLem {
    const message = { ...baseMsgCreateLem } as MsgCreateLem
    message.params = []
    message.players = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    return message
  }
}

const baseMsgCreateLemResponse: object = {}

export const MsgCreateLemResponse = {
  encode(_: MsgCreateLemResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateLemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateLemResponse } as MsgCreateLemResponse
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

  fromJSON(_: any): MsgCreateLemResponse {
    const message = { ...baseMsgCreateLemResponse } as MsgCreateLemResponse
    return message
  },

  toJSON(_: MsgCreateLemResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateLemResponse>): MsgCreateLemResponse {
    const message = { ...baseMsgCreateLemResponse } as MsgCreateLemResponse
    return message
  }
}

const baseMsgUpdateLem: object = { creator: '', index: '', indexEnd: '', params: '', players: '' }

export const MsgUpdateLem = {
  encode(message: MsgUpdateLem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.indexEnd !== '') {
      writer.uint32(26).string(message.indexEnd)
    }
    for (const v of message.params) {
      writer.uint32(34).string(v!)
    }
    for (const v of message.players) {
      writer.uint32(42).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateLem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateLem } as MsgUpdateLem
    message.params = []
    message.players = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.indexEnd = reader.string()
          break
        case 4:
          message.params.push(reader.string())
          break
        case 5:
          message.players.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateLem {
    const message = { ...baseMsgUpdateLem } as MsgUpdateLem
    message.params = []
    message.players = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
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
    return message
  },

  toJSON(message: MsgUpdateLem): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
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
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateLem>): MsgUpdateLem {
    const message = { ...baseMsgUpdateLem } as MsgUpdateLem
    message.params = []
    message.players = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
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
    return message
  }
}

const baseMsgUpdateLemResponse: object = {}

export const MsgUpdateLemResponse = {
  encode(_: MsgUpdateLemResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateLemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateLemResponse } as MsgUpdateLemResponse
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

  fromJSON(_: any): MsgUpdateLemResponse {
    const message = { ...baseMsgUpdateLemResponse } as MsgUpdateLemResponse
    return message
  },

  toJSON(_: MsgUpdateLemResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateLemResponse>): MsgUpdateLemResponse {
    const message = { ...baseMsgUpdateLemResponse } as MsgUpdateLemResponse
    return message
  }
}

const baseMsgDeleteLem: object = { creator: '', index: '' }

export const MsgDeleteLem = {
  encode(message: MsgDeleteLem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteLem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteLem } as MsgDeleteLem
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteLem {
    const message = { ...baseMsgDeleteLem } as MsgDeleteLem
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: MsgDeleteLem): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteLem>): MsgDeleteLem {
    const message = { ...baseMsgDeleteLem } as MsgDeleteLem
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseMsgDeleteLemResponse: object = {}

export const MsgDeleteLemResponse = {
  encode(_: MsgDeleteLemResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteLemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteLemResponse } as MsgDeleteLemResponse
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

  fromJSON(_: any): MsgDeleteLemResponse {
    const message = { ...baseMsgDeleteLemResponse } as MsgDeleteLemResponse
    return message
  },

  toJSON(_: MsgDeleteLemResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteLemResponse>): MsgDeleteLemResponse {
    const message = { ...baseMsgDeleteLemResponse } as MsgDeleteLemResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  CreateDso(request: MsgCreateDso): Promise<MsgCreateDsoResponse>
  UpdateDso(request: MsgUpdateDso): Promise<MsgUpdateDsoResponse>
  DeleteDso(request: MsgDeleteDso): Promise<MsgDeleteDsoResponse>
  CreatePlayer(request: MsgCreatePlayer): Promise<MsgCreatePlayerResponse>
  UpdatePlayer(request: MsgUpdatePlayer): Promise<MsgUpdatePlayerResponse>
  DeletePlayer(request: MsgDeletePlayer): Promise<MsgDeletePlayerResponse>
  CreateAggregator(request: MsgCreateAggregator): Promise<MsgCreateAggregatorResponse>
  UpdateAggregator(request: MsgUpdateAggregator): Promise<MsgUpdateAggregatorResponse>
  DeleteAggregator(request: MsgDeleteAggregator): Promise<MsgDeleteAggregatorResponse>
  CreateLem(request: MsgCreateLem): Promise<MsgCreateLemResponse>
  UpdateLem(request: MsgUpdateLem): Promise<MsgUpdateLemResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteLem(request: MsgDeleteLem): Promise<MsgDeleteLemResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateDso(request: MsgCreateDso): Promise<MsgCreateDsoResponse> {
    const data = MsgCreateDso.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Msg', 'CreateDso', data)
    return promise.then((data) => MsgCreateDsoResponse.decode(new Reader(data)))
  }

  UpdateDso(request: MsgUpdateDso): Promise<MsgUpdateDsoResponse> {
    const data = MsgUpdateDso.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Msg', 'UpdateDso', data)
    return promise.then((data) => MsgUpdateDsoResponse.decode(new Reader(data)))
  }

  DeleteDso(request: MsgDeleteDso): Promise<MsgDeleteDsoResponse> {
    const data = MsgDeleteDso.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Msg', 'DeleteDso', data)
    return promise.then((data) => MsgDeleteDsoResponse.decode(new Reader(data)))
  }

  CreatePlayer(request: MsgCreatePlayer): Promise<MsgCreatePlayerResponse> {
    const data = MsgCreatePlayer.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Msg', 'CreatePlayer', data)
    return promise.then((data) => MsgCreatePlayerResponse.decode(new Reader(data)))
  }

  UpdatePlayer(request: MsgUpdatePlayer): Promise<MsgUpdatePlayerResponse> {
    const data = MsgUpdatePlayer.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Msg', 'UpdatePlayer', data)
    return promise.then((data) => MsgUpdatePlayerResponse.decode(new Reader(data)))
  }

  DeletePlayer(request: MsgDeletePlayer): Promise<MsgDeletePlayerResponse> {
    const data = MsgDeletePlayer.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Msg', 'DeletePlayer', data)
    return promise.then((data) => MsgDeletePlayerResponse.decode(new Reader(data)))
  }

  CreateAggregator(request: MsgCreateAggregator): Promise<MsgCreateAggregatorResponse> {
    const data = MsgCreateAggregator.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Msg', 'CreateAggregator', data)
    return promise.then((data) => MsgCreateAggregatorResponse.decode(new Reader(data)))
  }

  UpdateAggregator(request: MsgUpdateAggregator): Promise<MsgUpdateAggregatorResponse> {
    const data = MsgUpdateAggregator.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Msg', 'UpdateAggregator', data)
    return promise.then((data) => MsgUpdateAggregatorResponse.decode(new Reader(data)))
  }

  DeleteAggregator(request: MsgDeleteAggregator): Promise<MsgDeleteAggregatorResponse> {
    const data = MsgDeleteAggregator.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Msg', 'DeleteAggregator', data)
    return promise.then((data) => MsgDeleteAggregatorResponse.decode(new Reader(data)))
  }

  CreateLem(request: MsgCreateLem): Promise<MsgCreateLemResponse> {
    const data = MsgCreateLem.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Msg', 'CreateLem', data)
    return promise.then((data) => MsgCreateLemResponse.decode(new Reader(data)))
  }

  UpdateLem(request: MsgUpdateLem): Promise<MsgUpdateLemResponse> {
    const data = MsgUpdateLem.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Msg', 'UpdateLem', data)
    return promise.then((data) => MsgUpdateLemResponse.decode(new Reader(data)))
  }

  DeleteLem(request: MsgDeleteLem): Promise<MsgDeleteLemResponse> {
    const data = MsgDeleteLem.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Msg', 'DeleteLem', data)
    return promise.then((data) => MsgDeleteLemResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
