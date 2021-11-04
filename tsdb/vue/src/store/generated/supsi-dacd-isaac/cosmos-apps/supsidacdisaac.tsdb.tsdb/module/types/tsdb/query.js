/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Timeseries } from '../tsdb/timeseries';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Measure } from '../tsdb/measure';
export const protobufPackage = 'supsidacdisaac.tsdb.tsdb';
const baseQueryGetTimeseriesRequest = { id: 0 };
export const QueryGetTimeseriesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTimeseriesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTimeseriesRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTimeseriesRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetTimeseriesResponse = {};
export const QueryGetTimeseriesResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Timeseries !== undefined) {
            Timeseries.encode(message.Timeseries, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTimeseriesResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Timeseries = Timeseries.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTimeseriesResponse };
        if (object.Timeseries !== undefined && object.Timeseries !== null) {
            message.Timeseries = Timeseries.fromJSON(object.Timeseries);
        }
        else {
            message.Timeseries = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Timeseries !== undefined && (obj.Timeseries = message.Timeseries ? Timeseries.toJSON(message.Timeseries) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTimeseriesResponse };
        if (object.Timeseries !== undefined && object.Timeseries !== null) {
            message.Timeseries = Timeseries.fromPartial(object.Timeseries);
        }
        else {
            message.Timeseries = undefined;
        }
        return message;
    }
};
const baseQueryAllTimeseriesRequest = {};
export const QueryAllTimeseriesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTimeseriesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllTimeseriesRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTimeseriesRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllTimeseriesResponse = {};
export const QueryAllTimeseriesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Timeseries) {
            Timeseries.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTimeseriesResponse };
        message.Timeseries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Timeseries.push(Timeseries.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllTimeseriesResponse };
        message.Timeseries = [];
        if (object.Timeseries !== undefined && object.Timeseries !== null) {
            for (const e of object.Timeseries) {
                message.Timeseries.push(Timeseries.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Timeseries) {
            obj.Timeseries = message.Timeseries.map((e) => (e ? Timeseries.toJSON(e) : undefined));
        }
        else {
            obj.Timeseries = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTimeseriesResponse };
        message.Timeseries = [];
        if (object.Timeseries !== undefined && object.Timeseries !== null) {
            for (const e of object.Timeseries) {
                message.Timeseries.push(Timeseries.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetMeasureRequest = { id: 0 };
export const QueryGetMeasureRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMeasureRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetMeasureRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMeasureRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetMeasureResponse = {};
export const QueryGetMeasureResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Measure !== undefined) {
            Measure.encode(message.Measure, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMeasureResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Measure = Measure.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetMeasureResponse };
        if (object.Measure !== undefined && object.Measure !== null) {
            message.Measure = Measure.fromJSON(object.Measure);
        }
        else {
            message.Measure = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Measure !== undefined && (obj.Measure = message.Measure ? Measure.toJSON(message.Measure) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMeasureResponse };
        if (object.Measure !== undefined && object.Measure !== null) {
            message.Measure = Measure.fromPartial(object.Measure);
        }
        else {
            message.Measure = undefined;
        }
        return message;
    }
};
const baseQueryAllMeasureRequest = {};
export const QueryAllMeasureRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMeasureRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllMeasureRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMeasureRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllMeasureResponse = {};
export const QueryAllMeasureResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Measure) {
            Measure.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMeasureResponse };
        message.Measure = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Measure.push(Measure.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllMeasureResponse };
        message.Measure = [];
        if (object.Measure !== undefined && object.Measure !== null) {
            for (const e of object.Measure) {
                message.Measure.push(Measure.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Measure) {
            obj.Measure = message.Measure.map((e) => (e ? Measure.toJSON(e) : undefined));
        }
        else {
            obj.Measure = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMeasureResponse };
        message.Measure = [];
        if (object.Measure !== undefined && object.Measure !== null) {
            for (const e of object.Measure) {
                message.Measure.push(Measure.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Timeseries(request) {
        const data = QueryGetTimeseriesRequest.encode(request).finish();
        const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Query', 'Timeseries', data);
        return promise.then((data) => QueryGetTimeseriesResponse.decode(new Reader(data)));
    }
    TimeseriesAll(request) {
        const data = QueryAllTimeseriesRequest.encode(request).finish();
        const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Query', 'TimeseriesAll', data);
        return promise.then((data) => QueryAllTimeseriesResponse.decode(new Reader(data)));
    }
    Measure(request) {
        const data = QueryGetMeasureRequest.encode(request).finish();
        const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Query', 'Measure', data);
        return promise.then((data) => QueryGetMeasureResponse.decode(new Reader(data)));
    }
    MeasureAll(request) {
        const data = QueryAllMeasureRequest.encode(request).finish();
        const promise = this.rpc.request('supsidacdisaac.tsdb.tsdb.Query', 'MeasureAll', data);
        return promise.then((data) => QueryAllMeasureResponse.decode(new Reader(data)));
    }
}
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
