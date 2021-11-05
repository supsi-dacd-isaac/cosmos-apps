/* eslint-disable */
import { Dso } from '../pm/dso'
import { Player } from '../pm/player'
import { Aggregator } from '../pm/aggregator'
import { Lem } from '../pm/lem'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'supsidacdisaac.pm.pm'

/** GenesisState defines the pm module's genesis state. */
export interface GenesisState {
  dso: Dso | undefined
  playerList: Player[]
  aggregator: Aggregator | undefined
  /** this line is used by starport scaffolding # genesis/proto/state */
  lemList: Lem[]
}

const baseGenesisState: object = {}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.dso !== undefined) {
      Dso.encode(message.dso, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.playerList) {
      Player.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    if (message.aggregator !== undefined) {
      Aggregator.encode(message.aggregator, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.lemList) {
      Lem.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.playerList = []
    message.lemList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.dso = Dso.decode(reader, reader.uint32())
          break
        case 2:
          message.playerList.push(Player.decode(reader, reader.uint32()))
          break
        case 3:
          message.aggregator = Aggregator.decode(reader, reader.uint32())
          break
        case 4:
          message.lemList.push(Lem.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.playerList = []
    message.lemList = []
    if (object.dso !== undefined && object.dso !== null) {
      message.dso = Dso.fromJSON(object.dso)
    } else {
      message.dso = undefined
    }
    if (object.playerList !== undefined && object.playerList !== null) {
      for (const e of object.playerList) {
        message.playerList.push(Player.fromJSON(e))
      }
    }
    if (object.aggregator !== undefined && object.aggregator !== null) {
      message.aggregator = Aggregator.fromJSON(object.aggregator)
    } else {
      message.aggregator = undefined
    }
    if (object.lemList !== undefined && object.lemList !== null) {
      for (const e of object.lemList) {
        message.lemList.push(Lem.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    message.dso !== undefined && (obj.dso = message.dso ? Dso.toJSON(message.dso) : undefined)
    if (message.playerList) {
      obj.playerList = message.playerList.map((e) => (e ? Player.toJSON(e) : undefined))
    } else {
      obj.playerList = []
    }
    message.aggregator !== undefined && (obj.aggregator = message.aggregator ? Aggregator.toJSON(message.aggregator) : undefined)
    if (message.lemList) {
      obj.lemList = message.lemList.map((e) => (e ? Lem.toJSON(e) : undefined))
    } else {
      obj.lemList = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.playerList = []
    message.lemList = []
    if (object.dso !== undefined && object.dso !== null) {
      message.dso = Dso.fromPartial(object.dso)
    } else {
      message.dso = undefined
    }
    if (object.playerList !== undefined && object.playerList !== null) {
      for (const e of object.playerList) {
        message.playerList.push(Player.fromPartial(e))
      }
    }
    if (object.aggregator !== undefined && object.aggregator !== null) {
      message.aggregator = Aggregator.fromPartial(object.aggregator)
    } else {
      message.aggregator = undefined
    }
    if (object.lemList !== undefined && object.lemList !== null) {
      for (const e of object.lemList) {
        message.lemList.push(Lem.fromPartial(e))
      }
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
