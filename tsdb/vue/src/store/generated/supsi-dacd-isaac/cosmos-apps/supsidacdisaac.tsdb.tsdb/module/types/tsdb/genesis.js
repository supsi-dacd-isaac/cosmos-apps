/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Timeseries } from '../tsdb/timeseries';
import { Measure } from '../tsdb/measure';
export const protobufPackage = 'supsidacdisaac.tsdb.tsdb';
const baseGenesisState = { timeseriesCount: 0, measureCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.timeseriesList) {
            Timeseries.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.timeseriesCount !== 0) {
            writer.uint32(16).uint64(message.timeseriesCount);
        }
        for (const v of message.measureList) {
            Measure.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.measureCount !== 0) {
            writer.uint32(32).uint64(message.measureCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.timeseriesList = [];
        message.measureList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timeseriesList.push(Timeseries.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.timeseriesCount = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.measureList.push(Measure.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.measureCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.timeseriesList = [];
        message.measureList = [];
        if (object.timeseriesList !== undefined && object.timeseriesList !== null) {
            for (const e of object.timeseriesList) {
                message.timeseriesList.push(Timeseries.fromJSON(e));
            }
        }
        if (object.timeseriesCount !== undefined && object.timeseriesCount !== null) {
            message.timeseriesCount = Number(object.timeseriesCount);
        }
        else {
            message.timeseriesCount = 0;
        }
        if (object.measureList !== undefined && object.measureList !== null) {
            for (const e of object.measureList) {
                message.measureList.push(Measure.fromJSON(e));
            }
        }
        if (object.measureCount !== undefined && object.measureCount !== null) {
            message.measureCount = Number(object.measureCount);
        }
        else {
            message.measureCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.timeseriesList) {
            obj.timeseriesList = message.timeseriesList.map((e) => (e ? Timeseries.toJSON(e) : undefined));
        }
        else {
            obj.timeseriesList = [];
        }
        message.timeseriesCount !== undefined && (obj.timeseriesCount = message.timeseriesCount);
        if (message.measureList) {
            obj.measureList = message.measureList.map((e) => (e ? Measure.toJSON(e) : undefined));
        }
        else {
            obj.measureList = [];
        }
        message.measureCount !== undefined && (obj.measureCount = message.measureCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.timeseriesList = [];
        message.measureList = [];
        if (object.timeseriesList !== undefined && object.timeseriesList !== null) {
            for (const e of object.timeseriesList) {
                message.timeseriesList.push(Timeseries.fromPartial(e));
            }
        }
        if (object.timeseriesCount !== undefined && object.timeseriesCount !== null) {
            message.timeseriesCount = object.timeseriesCount;
        }
        else {
            message.timeseriesCount = 0;
        }
        if (object.measureList !== undefined && object.measureList !== null) {
            for (const e of object.measureList) {
                message.measureList.push(Measure.fromPartial(e));
            }
        }
        if (object.measureCount !== undefined && object.measureCount !== null) {
            message.measureCount = object.measureCount;
        }
        else {
            message.measureCount = 0;
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
