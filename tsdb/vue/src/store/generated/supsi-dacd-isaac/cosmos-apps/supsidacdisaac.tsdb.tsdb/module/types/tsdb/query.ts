/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Timeseries } from '../tsdb/timeseries'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Measure } from '../tsdb/measure'

export const protobufPackage = 'supsidacdisaac.tsdb.tsdb'

export interface QueryGetTimeseriesRequest {
  id: number
}

export interface QueryGetTimeseriesResponse {
  Timeseries: Timeseries | undefined
}

export interface QueryAllTimeseriesRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllTimeseriesResponse {
  Timeseries: Timeseries[]
  pagination: PageResponse | undefined
}

export interface QueryGetMeasureRequest {
  id: number
}

export interface QueryGetMeasureResponse {
  Measure: Measure | undefined
}

export interface QueryAllMeasureRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllMeasureResponse {
  Measure: Measure[]
  pagination: PageResponse | undefined
}

const baseQueryGetTimeseriesRequest: object = { id: 0 }

export const QueryGetTimeseriesRequest = {
  encode(message: QueryGetTimeseriesRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTimeseriesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetTimeseriesRequest } as QueryGetTimeseriesRequest
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

  fromJSON(object: any): QueryGetTimeseriesRequest {
    const message = { ...baseQueryGetTimeseriesRequest } as QueryGetTimeseriesRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetTimeseriesRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetTimeseriesRequest>): QueryGetTimeseriesRequest {
    const message = { ...baseQueryGetTimeseriesRequest } as QueryGetTimeseriesRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetTimeseriesResponse: object = {}

export const QueryGetTimeseriesResponse = {
  encode(message: QueryGetTimeseriesResponse, writer: Writer = Writer.create()): Writer {
    if (message.Timeseries !== undefined) {
      Timeseries.encode(message.Timeseries, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTimeseriesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetTimeseriesResponse } as QueryGetTimeseriesResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Timeseries = Timeseries.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetTimeseriesResponse {
    const message = { ...baseQueryGetTimeseriesResponse } as QueryGetTimeseriesResponse
    if (object.Timeseries !== undefined && object.Timeseries !== null) {
      message.Timeseries = Timeseries.fromJSON(object.Timeseries)
    } else {
      message.Timeseries = undefined
    }
    return message
  },

  toJSON(message: QueryGetTimeseriesResponse): unknown {
    const obj: any = {}
    message.Timeseries !== undefined && (obj.Timeseries = message.Timeseries ? Timeseries.toJSON(message.Timeseries) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetTimeseriesResponse>): QueryGetTimeseriesResponse {
    const message = { ...baseQueryGetTimeseriesResponse } as QueryGetTimeseriesResponse
    if (object.Timeseries !== undefined && object.Timeseries !== null) {
      message.Timeseries = Timeseries.fromPartial(object.Timeseries)
    } else {
      message.Timeseries = undefined
    }
    return message
  }
}

const baseQueryAllTimeseriesRequest: object = {}

export const QueryAllTimeseriesRequest = {
  encode(message: QueryAllTimeseriesRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTimeseriesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllTimeseriesRequest } as QueryAllTimeseriesRequest
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

  fromJSON(object: any): QueryAllTimeseriesRequest {
    const message = { ...baseQueryAllTimeseriesRequest } as QueryAllTimeseriesRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllTimeseriesRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllTimeseriesRequest>): QueryAllTimeseriesRequest {
    const message = { ...baseQueryAllTimeseriesRequest } as QueryAllTimeseriesRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllTimeseriesResponse: object = {}

export const QueryAllTimeseriesResponse = {
  encode(message: QueryAllTimeseriesResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Timeseries) {
      Timeseries.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTimeseriesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllTimeseriesResponse } as QueryAllTimeseriesResponse
    message.Timeseries = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Timeseries.push(Timeseries.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllTimeseriesResponse {
    const message = { ...baseQueryAllTimeseriesResponse } as QueryAllTimeseriesResponse
    message.Timeseries = []
    if (object.Timeseries !== undefined && object.Timeseries !== null) {
      for (const e of object.Timeseries) {
        message.Timeseries.push(Timeseries.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllTimeseriesResponse): unknown {
    const obj: any = {}
    if (message.Timeseries) {
      obj.Timeseries = message.Timeseries.map((e) => (e ? Timeseries.toJSON(e) : undefined))
    } else {
      obj.Timeseries = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllTimeseriesResponse>): QueryAllTimeseriesResponse {
    const message = { ...baseQueryAllTimeseriesResponse } as QueryAllTimeseriesResponse
    message.Timeseries = []
    if (object.Timeseries !== undefined && object.Timeseries !== null) {
      for (const e of object.Timeseries) {
        message.Timeseries.push(Timeseries.fromPartial(e))
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

const baseQueryGetMeasureRequest: object = { id: 0 }

export const QueryGetMeasureRequest = {
  encode(message: QueryGetMeasureRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMeasureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetMeasureRequest } as QueryGetMeasureRequest
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

  fromJSON(object: any): QueryGetMeasureRequest {
    const message = { ...baseQueryGetMeasureRequest } as QueryGetMeasureRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetMeasureRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetMeasureRequest>): QueryGetMeasureRequest {
    const message = { ...baseQueryGetMeasureRequest } as QueryGetMeasureRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetMeasureResponse: object = {}

export const QueryGetMeasureResponse = {
  encode(message: QueryGetMeasureResponse, writer: Writer = Writer.create()): Writer {
    if (message.Measure !== undefined) {
      Measure.encode(message.Measure, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetMeasureResponse } as QueryGetMeasureResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Measure = Measure.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetMeasureResponse {
    const message = { ...baseQueryGetMeasureResponse } as QueryGetMeasureResponse
    if (object.Measure !== undefined && object.Measure !== null) {
      message.Measure = Measure.fromJSON(object.Measure)
    } else {
      message.Measure = undefined
    }
    return message
  },

  toJSON(message: QueryGetMeasureResponse): unknown {
    const obj: any = {}
    message.Measure !== undefined && (obj.Measure = message.Measure ? Measure.toJSON(message.Measure) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetMeasureResponse>): QueryGetMeasureResponse {
    const message = { ...baseQueryGetMeasureResponse } as QueryGetMeasureResponse
    if (object.Measure !== undefined && object.Measure !== null) {
      message.Measure = Measure.fromPartial(object.Measure)
    } else {
      message.Measure = undefined
    }
    return message
  }
}

const baseQueryAllMeasureRequest: object = {}

export const QueryAllMeasureRequest = {
  encode(message: QueryAllMeasureRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMeasureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllMeasureRequest } as QueryAllMeasureRequest
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

  fromJSON(object: any): QueryAllMeasureRequest {
    const message = { ...baseQueryAllMeasureRequest } as QueryAllMeasureRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllMeasureRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllMeasureRequest>): QueryAllMeasureRequest {
    const message = { ...baseQueryAllMeasureRequest } as QueryAllMeasureRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllMeasureResponse: object = {}

export const QueryAllMeasureResponse = {
  encode(message: QueryAllMeasureResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Measure) {
      Measure.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllMeasureResponse } as QueryAllMeasureResponse
    message.Measure = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Measure.push(Measure.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllMeasureResponse {
    const message = { ...baseQueryAllMeasureResponse } as QueryAllMeasureResponse
    message.Measure = []
    if (object.Measure !== undefined && object.Measure !== null) {
      for (const e of object.Measure) {
        message.Measure.push(Measure.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllMeasureResponse): unknown {
    const obj: any = {}
    if (message.Measure) {
      obj.Measure = message.Measure.map((e) => (e ? Measure.toJSON(e) : undefined))
    } else {
      obj.Measure = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllMeasureResponse>): QueryAllMeasureResponse {
    const message = { ...baseQueryAllMeasureResponse } as QueryAllMeasureResponse
    message.Measure = []
    if (object.Measure !== undefined && object.Measure !== null) {
      for (const e of object.Measure) {
        message.Measure.push(Measure.fromPartial(e))
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
  /** Queries a timeseries by id. */
  Timeseries(request: QueryGetTimeseriesRequest): Promise<QueryGetTimeseriesResponse>
  /** Queries a list of timeseries items. */
  TimeseriesAll(request: QueryAllTimeseriesRequest): Promise<QueryAllTimeseriesResponse>
  /** Queries a measure by id. */
  Measure(request: QueryGetMeasureRequest): Promise<QueryGetMeasureResponse>
  /** Queries a list of measure items. */
  MeasureAll(request: QueryAllMeasureRequest): Promise<QueryAllMeasureResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Timeseries(request: QueryGetTimeseriesRequest): Promise<QueryGetTimeseriesResponse> {
    const data = QueryGetTimeseriesRequest.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Query', 'Timeseries', data)
    return promise.then((data) => QueryGetTimeseriesResponse.decode(new Reader(data)))
  }

  TimeseriesAll(request: QueryAllTimeseriesRequest): Promise<QueryAllTimeseriesResponse> {
    const data = QueryAllTimeseriesRequest.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Query', 'TimeseriesAll', data)
    return promise.then((data) => QueryAllTimeseriesResponse.decode(new Reader(data)))
  }

  Measure(request: QueryGetMeasureRequest): Promise<QueryGetMeasureResponse> {
    const data = QueryGetMeasureRequest.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Query', 'Measure', data)
    return promise.then((data) => QueryGetMeasureResponse.decode(new Reader(data)))
  }

  MeasureAll(request: QueryAllMeasureRequest): Promise<QueryAllMeasureResponse> {
    const data = QueryAllMeasureRequest.encode(request).finish()
    const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Query', 'MeasureAll', data)
    return promise.then((data) => QueryAllMeasureResponse.decode(new Reader(data)))
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
