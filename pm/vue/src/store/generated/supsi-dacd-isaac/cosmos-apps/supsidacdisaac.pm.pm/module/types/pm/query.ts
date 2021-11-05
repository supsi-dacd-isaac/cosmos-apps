/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Dso } from '../pm/dso'
import { Player } from '../pm/player'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Aggregator } from '../pm/aggregator'
import { Lem } from '../pm/lem'

export const protobufPackage = 'supsidacdisaac.pm.pm'

export interface QueryGetDsoRequest {}

export interface QueryGetDsoResponse {
  Dso: Dso | undefined
}

export interface QueryGetPlayerRequest {
  index: string
}

export interface QueryGetPlayerResponse {
  player: Player | undefined
}

export interface QueryAllPlayerRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllPlayerResponse {
  player: Player[]
  pagination: PageResponse | undefined
}

export interface QueryGetAggregatorRequest {}

export interface QueryGetAggregatorResponse {
  Aggregator: Aggregator | undefined
}

export interface QueryGetLemRequest {
  index: string
}

export interface QueryGetLemResponse {
  lem: Lem | undefined
}

export interface QueryAllLemRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllLemResponse {
  lem: Lem[]
  pagination: PageResponse | undefined
}

const baseQueryGetDsoRequest: object = {}

export const QueryGetDsoRequest = {
  encode(_: QueryGetDsoRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDsoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetDsoRequest } as QueryGetDsoRequest
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

  fromJSON(_: any): QueryGetDsoRequest {
    const message = { ...baseQueryGetDsoRequest } as QueryGetDsoRequest
    return message
  },

  toJSON(_: QueryGetDsoRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryGetDsoRequest>): QueryGetDsoRequest {
    const message = { ...baseQueryGetDsoRequest } as QueryGetDsoRequest
    return message
  }
}

const baseQueryGetDsoResponse: object = {}

export const QueryGetDsoResponse = {
  encode(message: QueryGetDsoResponse, writer: Writer = Writer.create()): Writer {
    if (message.Dso !== undefined) {
      Dso.encode(message.Dso, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDsoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetDsoResponse } as QueryGetDsoResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Dso = Dso.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetDsoResponse {
    const message = { ...baseQueryGetDsoResponse } as QueryGetDsoResponse
    if (object.Dso !== undefined && object.Dso !== null) {
      message.Dso = Dso.fromJSON(object.Dso)
    } else {
      message.Dso = undefined
    }
    return message
  },

  toJSON(message: QueryGetDsoResponse): unknown {
    const obj: any = {}
    message.Dso !== undefined && (obj.Dso = message.Dso ? Dso.toJSON(message.Dso) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetDsoResponse>): QueryGetDsoResponse {
    const message = { ...baseQueryGetDsoResponse } as QueryGetDsoResponse
    if (object.Dso !== undefined && object.Dso !== null) {
      message.Dso = Dso.fromPartial(object.Dso)
    } else {
      message.Dso = undefined
    }
    return message
  }
}

const baseQueryGetPlayerRequest: object = { index: '' }

export const QueryGetPlayerRequest = {
  encode(message: QueryGetPlayerRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPlayerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPlayerRequest } as QueryGetPlayerRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPlayerRequest {
    const message = { ...baseQueryGetPlayerRequest } as QueryGetPlayerRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetPlayerRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPlayerRequest>): QueryGetPlayerRequest {
    const message = { ...baseQueryGetPlayerRequest } as QueryGetPlayerRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetPlayerResponse: object = {}

export const QueryGetPlayerResponse = {
  encode(message: QueryGetPlayerResponse, writer: Writer = Writer.create()): Writer {
    if (message.player !== undefined) {
      Player.encode(message.player, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPlayerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPlayerResponse } as QueryGetPlayerResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.player = Player.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPlayerResponse {
    const message = { ...baseQueryGetPlayerResponse } as QueryGetPlayerResponse
    if (object.player !== undefined && object.player !== null) {
      message.player = Player.fromJSON(object.player)
    } else {
      message.player = undefined
    }
    return message
  },

  toJSON(message: QueryGetPlayerResponse): unknown {
    const obj: any = {}
    message.player !== undefined && (obj.player = message.player ? Player.toJSON(message.player) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPlayerResponse>): QueryGetPlayerResponse {
    const message = { ...baseQueryGetPlayerResponse } as QueryGetPlayerResponse
    if (object.player !== undefined && object.player !== null) {
      message.player = Player.fromPartial(object.player)
    } else {
      message.player = undefined
    }
    return message
  }
}

const baseQueryAllPlayerRequest: object = {}

export const QueryAllPlayerRequest = {
  encode(message: QueryAllPlayerRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPlayerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPlayerRequest } as QueryAllPlayerRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPlayerRequest {
    const message = { ...baseQueryAllPlayerRequest } as QueryAllPlayerRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPlayerRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPlayerRequest>): QueryAllPlayerRequest {
    const message = { ...baseQueryAllPlayerRequest } as QueryAllPlayerRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllPlayerResponse: object = {}

export const QueryAllPlayerResponse = {
  encode(message: QueryAllPlayerResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.player) {
      Player.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPlayerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPlayerResponse } as QueryAllPlayerResponse
    message.player = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.player.push(Player.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPlayerResponse {
    const message = { ...baseQueryAllPlayerResponse } as QueryAllPlayerResponse
    message.player = []
    if (object.player !== undefined && object.player !== null) {
      for (const e of object.player) {
        message.player.push(Player.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPlayerResponse): unknown {
    const obj: any = {}
    if (message.player) {
      obj.player = message.player.map((e) => (e ? Player.toJSON(e) : undefined))
    } else {
      obj.player = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPlayerResponse>): QueryAllPlayerResponse {
    const message = { ...baseQueryAllPlayerResponse } as QueryAllPlayerResponse
    message.player = []
    if (object.player !== undefined && object.player !== null) {
      for (const e of object.player) {
        message.player.push(Player.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetAggregatorRequest: object = {}

export const QueryGetAggregatorRequest = {
  encode(_: QueryGetAggregatorRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAggregatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAggregatorRequest } as QueryGetAggregatorRequest
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

  fromJSON(_: any): QueryGetAggregatorRequest {
    const message = { ...baseQueryGetAggregatorRequest } as QueryGetAggregatorRequest
    return message
  },

  toJSON(_: QueryGetAggregatorRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryGetAggregatorRequest>): QueryGetAggregatorRequest {
    const message = { ...baseQueryGetAggregatorRequest } as QueryGetAggregatorRequest
    return message
  }
}

const baseQueryGetAggregatorResponse: object = {}

export const QueryGetAggregatorResponse = {
  encode(message: QueryGetAggregatorResponse, writer: Writer = Writer.create()): Writer {
    if (message.Aggregator !== undefined) {
      Aggregator.encode(message.Aggregator, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAggregatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAggregatorResponse } as QueryGetAggregatorResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Aggregator = Aggregator.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetAggregatorResponse {
    const message = { ...baseQueryGetAggregatorResponse } as QueryGetAggregatorResponse
    if (object.Aggregator !== undefined && object.Aggregator !== null) {
      message.Aggregator = Aggregator.fromJSON(object.Aggregator)
    } else {
      message.Aggregator = undefined
    }
    return message
  },

  toJSON(message: QueryGetAggregatorResponse): unknown {
    const obj: any = {}
    message.Aggregator !== undefined && (obj.Aggregator = message.Aggregator ? Aggregator.toJSON(message.Aggregator) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAggregatorResponse>): QueryGetAggregatorResponse {
    const message = { ...baseQueryGetAggregatorResponse } as QueryGetAggregatorResponse
    if (object.Aggregator !== undefined && object.Aggregator !== null) {
      message.Aggregator = Aggregator.fromPartial(object.Aggregator)
    } else {
      message.Aggregator = undefined
    }
    return message
  }
}

const baseQueryGetLemRequest: object = { index: '' }

export const QueryGetLemRequest = {
  encode(message: QueryGetLemRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetLemRequest } as QueryGetLemRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetLemRequest {
    const message = { ...baseQueryGetLemRequest } as QueryGetLemRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetLemRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetLemRequest>): QueryGetLemRequest {
    const message = { ...baseQueryGetLemRequest } as QueryGetLemRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetLemResponse: object = {}

export const QueryGetLemResponse = {
  encode(message: QueryGetLemResponse, writer: Writer = Writer.create()): Writer {
    if (message.lem !== undefined) {
      Lem.encode(message.lem, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetLemResponse } as QueryGetLemResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.lem = Lem.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetLemResponse {
    const message = { ...baseQueryGetLemResponse } as QueryGetLemResponse
    if (object.lem !== undefined && object.lem !== null) {
      message.lem = Lem.fromJSON(object.lem)
    } else {
      message.lem = undefined
    }
    return message
  },

  toJSON(message: QueryGetLemResponse): unknown {
    const obj: any = {}
    message.lem !== undefined && (obj.lem = message.lem ? Lem.toJSON(message.lem) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetLemResponse>): QueryGetLemResponse {
    const message = { ...baseQueryGetLemResponse } as QueryGetLemResponse
    if (object.lem !== undefined && object.lem !== null) {
      message.lem = Lem.fromPartial(object.lem)
    } else {
      message.lem = undefined
    }
    return message
  }
}

const baseQueryAllLemRequest: object = {}

export const QueryAllLemRequest = {
  encode(message: QueryAllLemRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllLemRequest } as QueryAllLemRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllLemRequest {
    const message = { ...baseQueryAllLemRequest } as QueryAllLemRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllLemRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllLemRequest>): QueryAllLemRequest {
    const message = { ...baseQueryAllLemRequest } as QueryAllLemRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllLemResponse: object = {}

export const QueryAllLemResponse = {
  encode(message: QueryAllLemResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.lem) {
      Lem.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllLemResponse } as QueryAllLemResponse
    message.lem = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.lem.push(Lem.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllLemResponse {
    const message = { ...baseQueryAllLemResponse } as QueryAllLemResponse
    message.lem = []
    if (object.lem !== undefined && object.lem !== null) {
      for (const e of object.lem) {
        message.lem.push(Lem.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllLemResponse): unknown {
    const obj: any = {}
    if (message.lem) {
      obj.lem = message.lem.map((e) => (e ? Lem.toJSON(e) : undefined))
    } else {
      obj.lem = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllLemResponse>): QueryAllLemResponse {
    const message = { ...baseQueryAllLemResponse } as QueryAllLemResponse
    message.lem = []
    if (object.lem !== undefined && object.lem !== null) {
      for (const e of object.lem) {
        message.lem.push(Lem.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a dso by index. */
  Dso(request: QueryGetDsoRequest): Promise<QueryGetDsoResponse>
  /** Queries a player by index. */
  Player(request: QueryGetPlayerRequest): Promise<QueryGetPlayerResponse>
  /** Queries a list of player items. */
  PlayerAll(request: QueryAllPlayerRequest): Promise<QueryAllPlayerResponse>
  /** Queries a aggregator by index. */
  Aggregator(request: QueryGetAggregatorRequest): Promise<QueryGetAggregatorResponse>
  /** Queries a lem by index. */
  Lem(request: QueryGetLemRequest): Promise<QueryGetLemResponse>
  /** Queries a list of lem items. */
  LemAll(request: QueryAllLemRequest): Promise<QueryAllLemResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Dso(request: QueryGetDsoRequest): Promise<QueryGetDsoResponse> {
    const data = QueryGetDsoRequest.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Query', 'Dso', data)
    return promise.then((data) => QueryGetDsoResponse.decode(new Reader(data)))
  }

  Player(request: QueryGetPlayerRequest): Promise<QueryGetPlayerResponse> {
    const data = QueryGetPlayerRequest.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Query', 'Player', data)
    return promise.then((data) => QueryGetPlayerResponse.decode(new Reader(data)))
  }

  PlayerAll(request: QueryAllPlayerRequest): Promise<QueryAllPlayerResponse> {
    const data = QueryAllPlayerRequest.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Query', 'PlayerAll', data)
    return promise.then((data) => QueryAllPlayerResponse.decode(new Reader(data)))
  }

  Aggregator(request: QueryGetAggregatorRequest): Promise<QueryGetAggregatorResponse> {
    const data = QueryGetAggregatorRequest.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Query', 'Aggregator', data)
    return promise.then((data) => QueryGetAggregatorResponse.decode(new Reader(data)))
  }

  Lem(request: QueryGetLemRequest): Promise<QueryGetLemResponse> {
    const data = QueryGetLemRequest.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Query', 'Lem', data)
    return promise.then((data) => QueryGetLemResponse.decode(new Reader(data)))
  }

  LemAll(request: QueryAllLemRequest): Promise<QueryAllLemResponse> {
    const data = QueryAllLemRequest.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.pm.pm.Query', 'LemAll', data)
    return promise.then((data) => QueryAllLemResponse.decode(new Reader(data)))
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
