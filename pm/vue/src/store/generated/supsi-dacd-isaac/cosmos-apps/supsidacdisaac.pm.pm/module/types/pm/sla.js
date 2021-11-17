/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "supsidacdisaac.pm.pm";
const baseSla = { index: "", start: 0, end: 0, creator: "" };
export const Sla = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.start !== 0) {
            writer.uint32(16).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(24).int32(message.end);
        }
        if (message.creator !== "") {
            writer.uint32(34).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSla };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.start = reader.int32();
                    break;
                case 3:
                    message.end = reader.int32();
                    break;
                case 4:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSla };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.start !== undefined && object.start !== null) {
            message.start = Number(object.start);
        }
        else {
            message.start = 0;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = Number(object.end);
        }
        else {
            message.end = 0;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.start !== undefined && (obj.start = message.start);
        message.end !== undefined && (obj.end = message.end);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSla };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.start !== undefined && object.start !== null) {
            message.start = object.start;
        }
        else {
            message.start = 0;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = object.end;
        }
        else {
            message.end = 0;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
