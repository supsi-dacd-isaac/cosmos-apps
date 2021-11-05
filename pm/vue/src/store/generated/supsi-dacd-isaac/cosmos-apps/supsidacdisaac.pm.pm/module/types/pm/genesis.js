/* eslint-disable */
import { Dso } from '../pm/dso';
import { Player } from '../pm/player';
import { Aggregator } from '../pm/aggregator';
import { Lem } from '../pm/lem';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'supsidacdisaac.pm.pm';
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.dso !== undefined) {
            Dso.encode(message.dso, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.playerList) {
            Player.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.aggregator !== undefined) {
            Aggregator.encode(message.aggregator, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.lemList) {
            Lem.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.playerList = [];
        message.lemList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dso = Dso.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.playerList.push(Player.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.aggregator = Aggregator.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.lemList.push(Lem.decode(reader, reader.uint32()));
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
        message.playerList = [];
        message.lemList = [];
        if (object.dso !== undefined && object.dso !== null) {
            message.dso = Dso.fromJSON(object.dso);
        }
        else {
            message.dso = undefined;
        }
        if (object.playerList !== undefined && object.playerList !== null) {
            for (const e of object.playerList) {
                message.playerList.push(Player.fromJSON(e));
            }
        }
        if (object.aggregator !== undefined && object.aggregator !== null) {
            message.aggregator = Aggregator.fromJSON(object.aggregator);
        }
        else {
            message.aggregator = undefined;
        }
        if (object.lemList !== undefined && object.lemList !== null) {
            for (const e of object.lemList) {
                message.lemList.push(Lem.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dso !== undefined && (obj.dso = message.dso ? Dso.toJSON(message.dso) : undefined);
        if (message.playerList) {
            obj.playerList = message.playerList.map((e) => (e ? Player.toJSON(e) : undefined));
        }
        else {
            obj.playerList = [];
        }
        message.aggregator !== undefined && (obj.aggregator = message.aggregator ? Aggregator.toJSON(message.aggregator) : undefined);
        if (message.lemList) {
            obj.lemList = message.lemList.map((e) => (e ? Lem.toJSON(e) : undefined));
        }
        else {
            obj.lemList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.playerList = [];
        message.lemList = [];
        if (object.dso !== undefined && object.dso !== null) {
            message.dso = Dso.fromPartial(object.dso);
        }
        else {
            message.dso = undefined;
        }
        if (object.playerList !== undefined && object.playerList !== null) {
            for (const e of object.playerList) {
                message.playerList.push(Player.fromPartial(e));
            }
        }
        if (object.aggregator !== undefined && object.aggregator !== null) {
            message.aggregator = Aggregator.fromPartial(object.aggregator);
        }
        else {
            message.aggregator = undefined;
        }
        if (object.lemList !== undefined && object.lemList !== null) {
            for (const e of object.lemList) {
                message.lemList.push(Lem.fromPartial(e));
            }
        }
        return message;
    }
};
