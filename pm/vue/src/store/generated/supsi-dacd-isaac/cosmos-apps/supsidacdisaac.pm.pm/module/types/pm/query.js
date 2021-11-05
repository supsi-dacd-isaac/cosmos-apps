/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { Dso } from '../pm/dso';
import { Player } from '../pm/player';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Aggregator } from '../pm/aggregator';
import { Lem } from '../pm/lem';
export const protobufPackage = 'supsidacdisaac.pm.pm';
const baseQueryGetDsoRequest = {};
export const QueryGetDsoRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetDsoRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseQueryGetDsoRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryGetDsoRequest };
        return message;
    }
};
const baseQueryGetDsoResponse = {};
export const QueryGetDsoResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Dso !== undefined) {
            Dso.encode(message.Dso, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetDsoResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Dso = Dso.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetDsoResponse };
        if (object.Dso !== undefined && object.Dso !== null) {
            message.Dso = Dso.fromJSON(object.Dso);
        }
        else {
            message.Dso = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Dso !== undefined && (obj.Dso = message.Dso ? Dso.toJSON(message.Dso) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetDsoResponse };
        if (object.Dso !== undefined && object.Dso !== null) {
            message.Dso = Dso.fromPartial(object.Dso);
        }
        else {
            message.Dso = undefined;
        }
        return message;
    }
};
const baseQueryGetPlayerRequest = { index: '' };
export const QueryGetPlayerRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPlayerRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPlayerRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPlayerRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetPlayerResponse = {};
export const QueryGetPlayerResponse = {
    encode(message, writer = Writer.create()) {
        if (message.player !== undefined) {
            Player.encode(message.player, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPlayerResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.player = Player.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPlayerResponse };
        if (object.player !== undefined && object.player !== null) {
            message.player = Player.fromJSON(object.player);
        }
        else {
            message.player = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.player !== undefined && (obj.player = message.player ? Player.toJSON(message.player) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPlayerResponse };
        if (object.player !== undefined && object.player !== null) {
            message.player = Player.fromPartial(object.player);
        }
        else {
            message.player = undefined;
        }
        return message;
    }
};
const baseQueryAllPlayerRequest = {};
export const QueryAllPlayerRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPlayerRequest };
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
        const message = { ...baseQueryAllPlayerRequest };
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
        const message = { ...baseQueryAllPlayerRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllPlayerResponse = {};
export const QueryAllPlayerResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.player) {
            Player.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPlayerResponse };
        message.player = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.player.push(Player.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllPlayerResponse };
        message.player = [];
        if (object.player !== undefined && object.player !== null) {
            for (const e of object.player) {
                message.player.push(Player.fromJSON(e));
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
        if (message.player) {
            obj.player = message.player.map((e) => (e ? Player.toJSON(e) : undefined));
        }
        else {
            obj.player = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPlayerResponse };
        message.player = [];
        if (object.player !== undefined && object.player !== null) {
            for (const e of object.player) {
                message.player.push(Player.fromPartial(e));
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
const baseQueryGetAggregatorRequest = {};
export const QueryGetAggregatorRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAggregatorRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseQueryGetAggregatorRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryGetAggregatorRequest };
        return message;
    }
};
const baseQueryGetAggregatorResponse = {};
export const QueryGetAggregatorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Aggregator !== undefined) {
            Aggregator.encode(message.Aggregator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAggregatorResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Aggregator = Aggregator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetAggregatorResponse };
        if (object.Aggregator !== undefined && object.Aggregator !== null) {
            message.Aggregator = Aggregator.fromJSON(object.Aggregator);
        }
        else {
            message.Aggregator = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Aggregator !== undefined && (obj.Aggregator = message.Aggregator ? Aggregator.toJSON(message.Aggregator) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAggregatorResponse };
        if (object.Aggregator !== undefined && object.Aggregator !== null) {
            message.Aggregator = Aggregator.fromPartial(object.Aggregator);
        }
        else {
            message.Aggregator = undefined;
        }
        return message;
    }
};
const baseQueryGetLemRequest = { index: '' };
export const QueryGetLemRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetLemRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetLemRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetLemRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetLemResponse = {};
export const QueryGetLemResponse = {
    encode(message, writer = Writer.create()) {
        if (message.lem !== undefined) {
            Lem.encode(message.lem, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetLemResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lem = Lem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetLemResponse };
        if (object.lem !== undefined && object.lem !== null) {
            message.lem = Lem.fromJSON(object.lem);
        }
        else {
            message.lem = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lem !== undefined && (obj.lem = message.lem ? Lem.toJSON(message.lem) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetLemResponse };
        if (object.lem !== undefined && object.lem !== null) {
            message.lem = Lem.fromPartial(object.lem);
        }
        else {
            message.lem = undefined;
        }
        return message;
    }
};
const baseQueryAllLemRequest = {};
export const QueryAllLemRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllLemRequest };
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
        const message = { ...baseQueryAllLemRequest };
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
        const message = { ...baseQueryAllLemRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllLemResponse = {};
export const QueryAllLemResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.lem) {
            Lem.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllLemResponse };
        message.lem = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lem.push(Lem.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllLemResponse };
        message.lem = [];
        if (object.lem !== undefined && object.lem !== null) {
            for (const e of object.lem) {
                message.lem.push(Lem.fromJSON(e));
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
        if (message.lem) {
            obj.lem = message.lem.map((e) => (e ? Lem.toJSON(e) : undefined));
        }
        else {
            obj.lem = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllLemResponse };
        message.lem = [];
        if (object.lem !== undefined && object.lem !== null) {
            for (const e of object.lem) {
                message.lem.push(Lem.fromPartial(e));
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
    Dso(request) {
        const data = QueryGetDsoRequest.encode(request).finish();
        const promise = this.rpc.request('supsidacdisaac.pm.pm.Query', 'Dso', data);
        return promise.then((data) => QueryGetDsoResponse.decode(new Reader(data)));
    }
    Player(request) {
        const data = QueryGetPlayerRequest.encode(request).finish();
        const promise = this.rpc.request('supsidacdisaac.pm.pm.Query', 'Player', data);
        return promise.then((data) => QueryGetPlayerResponse.decode(new Reader(data)));
    }
    PlayerAll(request) {
        const data = QueryAllPlayerRequest.encode(request).finish();
        const promise = this.rpc.request('supsidacdisaac.pm.pm.Query', 'PlayerAll', data);
        return promise.then((data) => QueryAllPlayerResponse.decode(new Reader(data)));
    }
    Aggregator(request) {
        const data = QueryGetAggregatorRequest.encode(request).finish();
        const promise = this.rpc.request('supsidacdisaac.pm.pm.Query', 'Aggregator', data);
        return promise.then((data) => QueryGetAggregatorResponse.decode(new Reader(data)));
    }
    Lem(request) {
        const data = QueryGetLemRequest.encode(request).finish();
        const promise = this.rpc.request('supsidacdisaac.pm.pm.Query', 'Lem', data);
        return promise.then((data) => QueryGetLemResponse.decode(new Reader(data)));
    }
    LemAll(request) {
        const data = QueryAllLemRequest.encode(request).finish();
        const promise = this.rpc.request('supsidacdisaac.pm.pm.Query', 'LemAll', data);
        return promise.then((data) => QueryAllLemResponse.decode(new Reader(data)));
    }
}
