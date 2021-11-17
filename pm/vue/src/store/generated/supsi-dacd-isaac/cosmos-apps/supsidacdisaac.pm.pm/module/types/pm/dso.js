/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "supsidacdisaac.pm.pm";
const baseDso = { idx: "", address: "", creator: "" };
export const Dso = {
    encode(message, writer = Writer.create()) {
        if (message.idx !== "") {
            writer.uint32(10).string(message.idx);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.creator !== "") {
            writer.uint32(26).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDso };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idx = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
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
        const message = { ...baseDso };
        if (object.idx !== undefined && object.idx !== null) {
            message.idx = String(object.idx);
        }
        else {
            message.idx = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
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
        message.idx !== undefined && (obj.idx = message.idx);
        message.address !== undefined && (obj.address = message.address);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDso };
        if (object.idx !== undefined && object.idx !== null) {
            message.idx = object.idx;
        }
        else {
            message.idx = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
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
