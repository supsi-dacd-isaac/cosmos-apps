/* eslint-disable */
import { Dso } from "../pm/dso";
import { Aggregator } from "../pm/aggregator";
import { Player } from "../pm/player";
import { Lem } from "../pm/lem";
import { LemMeasure } from "../pm/lem_measure";
import { Sla } from "../pm/sla";
import { Kpi } from "../pm/kpi";
import { KpiMeasure } from "../pm/kpi_measure";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.pm.pm";

/** GenesisState defines the pm module's genesis state. */
export interface GenesisState {
  dso: Dso | undefined;
  aggregator: Aggregator | undefined;
  playerList: Player[];
  lemList: Lem[];
  lemMeasureList: LemMeasure[];
  slaList: Sla[];
  kpiList: Kpi[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  kpiMeasureList: KpiMeasure[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.dso !== undefined) {
      Dso.encode(message.dso, writer.uint32(10).fork()).ldelim();
    }
    if (message.aggregator !== undefined) {
      Aggregator.encode(message.aggregator, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.playerList) {
      Player.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.lemList) {
      Lem.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.lemMeasureList) {
      LemMeasure.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.slaList) {
      Sla.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.kpiList) {
      Kpi.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.kpiMeasureList) {
      KpiMeasure.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.playerList = [];
    message.lemList = [];
    message.lemMeasureList = [];
    message.slaList = [];
    message.kpiList = [];
    message.kpiMeasureList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dso = Dso.decode(reader, reader.uint32());
          break;
        case 2:
          message.aggregator = Aggregator.decode(reader, reader.uint32());
          break;
        case 3:
          message.playerList.push(Player.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lemList.push(Lem.decode(reader, reader.uint32()));
          break;
        case 5:
          message.lemMeasureList.push(
            LemMeasure.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.slaList.push(Sla.decode(reader, reader.uint32()));
          break;
        case 7:
          message.kpiList.push(Kpi.decode(reader, reader.uint32()));
          break;
        case 8:
          message.kpiMeasureList.push(
            KpiMeasure.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.playerList = [];
    message.lemList = [];
    message.lemMeasureList = [];
    message.slaList = [];
    message.kpiList = [];
    message.kpiMeasureList = [];
    if (object.dso !== undefined && object.dso !== null) {
      message.dso = Dso.fromJSON(object.dso);
    } else {
      message.dso = undefined;
    }
    if (object.aggregator !== undefined && object.aggregator !== null) {
      message.aggregator = Aggregator.fromJSON(object.aggregator);
    } else {
      message.aggregator = undefined;
    }
    if (object.playerList !== undefined && object.playerList !== null) {
      for (const e of object.playerList) {
        message.playerList.push(Player.fromJSON(e));
      }
    }
    if (object.lemList !== undefined && object.lemList !== null) {
      for (const e of object.lemList) {
        message.lemList.push(Lem.fromJSON(e));
      }
    }
    if (object.lemMeasureList !== undefined && object.lemMeasureList !== null) {
      for (const e of object.lemMeasureList) {
        message.lemMeasureList.push(LemMeasure.fromJSON(e));
      }
    }
    if (object.slaList !== undefined && object.slaList !== null) {
      for (const e of object.slaList) {
        message.slaList.push(Sla.fromJSON(e));
      }
    }
    if (object.kpiList !== undefined && object.kpiList !== null) {
      for (const e of object.kpiList) {
        message.kpiList.push(Kpi.fromJSON(e));
      }
    }
    if (object.kpiMeasureList !== undefined && object.kpiMeasureList !== null) {
      for (const e of object.kpiMeasureList) {
        message.kpiMeasureList.push(KpiMeasure.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.dso !== undefined &&
      (obj.dso = message.dso ? Dso.toJSON(message.dso) : undefined);
    message.aggregator !== undefined &&
      (obj.aggregator = message.aggregator
        ? Aggregator.toJSON(message.aggregator)
        : undefined);
    if (message.playerList) {
      obj.playerList = message.playerList.map((e) =>
        e ? Player.toJSON(e) : undefined
      );
    } else {
      obj.playerList = [];
    }
    if (message.lemList) {
      obj.lemList = message.lemList.map((e) => (e ? Lem.toJSON(e) : undefined));
    } else {
      obj.lemList = [];
    }
    if (message.lemMeasureList) {
      obj.lemMeasureList = message.lemMeasureList.map((e) =>
        e ? LemMeasure.toJSON(e) : undefined
      );
    } else {
      obj.lemMeasureList = [];
    }
    if (message.slaList) {
      obj.slaList = message.slaList.map((e) => (e ? Sla.toJSON(e) : undefined));
    } else {
      obj.slaList = [];
    }
    if (message.kpiList) {
      obj.kpiList = message.kpiList.map((e) => (e ? Kpi.toJSON(e) : undefined));
    } else {
      obj.kpiList = [];
    }
    if (message.kpiMeasureList) {
      obj.kpiMeasureList = message.kpiMeasureList.map((e) =>
        e ? KpiMeasure.toJSON(e) : undefined
      );
    } else {
      obj.kpiMeasureList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.playerList = [];
    message.lemList = [];
    message.lemMeasureList = [];
    message.slaList = [];
    message.kpiList = [];
    message.kpiMeasureList = [];
    if (object.dso !== undefined && object.dso !== null) {
      message.dso = Dso.fromPartial(object.dso);
    } else {
      message.dso = undefined;
    }
    if (object.aggregator !== undefined && object.aggregator !== null) {
      message.aggregator = Aggregator.fromPartial(object.aggregator);
    } else {
      message.aggregator = undefined;
    }
    if (object.playerList !== undefined && object.playerList !== null) {
      for (const e of object.playerList) {
        message.playerList.push(Player.fromPartial(e));
      }
    }
    if (object.lemList !== undefined && object.lemList !== null) {
      for (const e of object.lemList) {
        message.lemList.push(Lem.fromPartial(e));
      }
    }
    if (object.lemMeasureList !== undefined && object.lemMeasureList !== null) {
      for (const e of object.lemMeasureList) {
        message.lemMeasureList.push(LemMeasure.fromPartial(e));
      }
    }
    if (object.slaList !== undefined && object.slaList !== null) {
      for (const e of object.slaList) {
        message.slaList.push(Sla.fromPartial(e));
      }
    }
    if (object.kpiList !== undefined && object.kpiList !== null) {
      for (const e of object.kpiList) {
        message.kpiList.push(Kpi.fromPartial(e));
      }
    }
    if (object.kpiMeasureList !== undefined && object.kpiMeasureList !== null) {
      for (const e of object.kpiMeasureList) {
        message.kpiMeasureList.push(KpiMeasure.fromPartial(e));
      }
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
