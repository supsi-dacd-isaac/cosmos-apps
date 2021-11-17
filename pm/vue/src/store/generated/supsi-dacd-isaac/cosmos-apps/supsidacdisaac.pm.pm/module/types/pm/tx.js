/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "supsidacdisaac.pm.pm";
const baseMsgCreateDso = { creator: "", idx: "", address: "" };
export const MsgCreateDso = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.idx !== "") {
            writer.uint32(26).string(message.idx);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDso };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.idx = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateDso };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.idx !== undefined && (obj.idx = message.idx);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateDso };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
};
const baseMsgCreateDsoResponse = {};
export const MsgCreateDsoResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDsoResponse };
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
        const message = { ...baseMsgCreateDsoResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateDsoResponse };
        return message;
    },
};
const baseMsgUpdateDso = { creator: "", idx: "", address: "" };
export const MsgUpdateDso = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.idx !== "") {
            writer.uint32(26).string(message.idx);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDso };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.idx = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateDso };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.idx !== undefined && (obj.idx = message.idx);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateDso };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
};
const baseMsgUpdateDsoResponse = {};
export const MsgUpdateDsoResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDsoResponse };
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
        const message = { ...baseMsgUpdateDsoResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateDsoResponse };
        return message;
    },
};
const baseMsgDeleteDso = { creator: "" };
export const MsgDeleteDso = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteDso };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = { ...baseMsgDeleteDso };
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
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteDso };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseMsgDeleteDsoResponse = {};
export const MsgDeleteDsoResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteDsoResponse };
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
        const message = { ...baseMsgDeleteDsoResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteDsoResponse };
        return message;
    },
};
const baseMsgCreateAggregator = { creator: "", idx: "", address: "" };
export const MsgCreateAggregator = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.idx !== "") {
            writer.uint32(26).string(message.idx);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateAggregator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.idx = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateAggregator };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.idx !== undefined && (obj.idx = message.idx);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateAggregator };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
};
const baseMsgCreateAggregatorResponse = {};
export const MsgCreateAggregatorResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateAggregatorResponse,
        };
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
        const message = {
            ...baseMsgCreateAggregatorResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCreateAggregatorResponse,
        };
        return message;
    },
};
const baseMsgUpdateAggregator = { creator: "", idx: "", address: "" };
export const MsgUpdateAggregator = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.idx !== "") {
            writer.uint32(26).string(message.idx);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateAggregator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.idx = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateAggregator };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.idx !== undefined && (obj.idx = message.idx);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateAggregator };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
};
const baseMsgUpdateAggregatorResponse = {};
export const MsgUpdateAggregatorResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateAggregatorResponse,
        };
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
        const message = {
            ...baseMsgUpdateAggregatorResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateAggregatorResponse,
        };
        return message;
    },
};
const baseMsgDeleteAggregator = { creator: "" };
export const MsgDeleteAggregator = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteAggregator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = { ...baseMsgDeleteAggregator };
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
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteAggregator };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseMsgDeleteAggregatorResponse = {};
export const MsgDeleteAggregatorResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteAggregatorResponse,
        };
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
        const message = {
            ...baseMsgDeleteAggregatorResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteAggregatorResponse,
        };
        return message;
    },
};
const baseMsgCreatePlayer = {
    creator: "",
    index: "",
    idx: "",
    address: "",
    role: "",
};
export const MsgCreatePlayer = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.idx !== "") {
            writer.uint32(26).string(message.idx);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        if (message.role !== "") {
            writer.uint32(42).string(message.role);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePlayer };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.idx = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                case 5:
                    message.role = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePlayer };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
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
        if (object.role !== undefined && object.role !== null) {
            message.role = String(object.role);
        }
        else {
            message.role = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.idx !== undefined && (obj.idx = message.idx);
        message.address !== undefined && (obj.address = message.address);
        message.role !== undefined && (obj.role = message.role);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePlayer };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
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
        if (object.role !== undefined && object.role !== null) {
            message.role = object.role;
        }
        else {
            message.role = "";
        }
        return message;
    },
};
const baseMsgCreatePlayerResponse = {};
export const MsgCreatePlayerResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreatePlayerResponse,
        };
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
        const message = {
            ...baseMsgCreatePlayerResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCreatePlayerResponse,
        };
        return message;
    },
};
const baseMsgUpdatePlayer = {
    creator: "",
    index: "",
    idx: "",
    address: "",
    role: "",
};
export const MsgUpdatePlayer = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.idx !== "") {
            writer.uint32(26).string(message.idx);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        if (message.role !== "") {
            writer.uint32(42).string(message.role);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePlayer };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.idx = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                case 5:
                    message.role = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdatePlayer };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
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
        if (object.role !== undefined && object.role !== null) {
            message.role = String(object.role);
        }
        else {
            message.role = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.idx !== undefined && (obj.idx = message.idx);
        message.address !== undefined && (obj.address = message.address);
        message.role !== undefined && (obj.role = message.role);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePlayer };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
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
        if (object.role !== undefined && object.role !== null) {
            message.role = object.role;
        }
        else {
            message.role = "";
        }
        return message;
    },
};
const baseMsgUpdatePlayerResponse = {};
export const MsgUpdatePlayerResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdatePlayerResponse,
        };
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
        const message = {
            ...baseMsgUpdatePlayerResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdatePlayerResponse,
        };
        return message;
    },
};
const baseMsgDeletePlayer = { creator: "", index: "" };
export const MsgDeletePlayer = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePlayer };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeletePlayer };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeletePlayer };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseMsgDeletePlayerResponse = {};
export const MsgDeletePlayerResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeletePlayerResponse,
        };
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
        const message = {
            ...baseMsgDeletePlayerResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeletePlayerResponse,
        };
        return message;
    },
};
const baseMsgCreateLem = {
    creator: "",
    index: "",
    start: 0,
    end: 0,
    params: "",
    players: "",
};
export const MsgCreateLem = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.start !== 0) {
            writer.uint32(24).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        for (const v of message.params) {
            writer.uint32(42).string(v);
        }
        for (const v of message.players) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateLem };
        message.params = [];
        message.players = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.start = reader.int32();
                    break;
                case 4:
                    message.end = reader.int32();
                    break;
                case 5:
                    message.params.push(reader.string());
                    break;
                case 6:
                    message.players.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateLem };
        message.params = [];
        message.players = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        if (object.params !== undefined && object.params !== null) {
            for (const e of object.params) {
                message.params.push(String(e));
            }
        }
        if (object.players !== undefined && object.players !== null) {
            for (const e of object.players) {
                message.players.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.start !== undefined && (obj.start = message.start);
        message.end !== undefined && (obj.end = message.end);
        if (message.params) {
            obj.params = message.params.map((e) => e);
        }
        else {
            obj.params = [];
        }
        if (message.players) {
            obj.players = message.players.map((e) => e);
        }
        else {
            obj.players = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateLem };
        message.params = [];
        message.players = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
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
        if (object.params !== undefined && object.params !== null) {
            for (const e of object.params) {
                message.params.push(e);
            }
        }
        if (object.players !== undefined && object.players !== null) {
            for (const e of object.players) {
                message.players.push(e);
            }
        }
        return message;
    },
};
const baseMsgCreateLemResponse = {};
export const MsgCreateLemResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateLemResponse };
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
        const message = { ...baseMsgCreateLemResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateLemResponse };
        return message;
    },
};
const baseMsgUpdateLem = {
    creator: "",
    index: "",
    start: 0,
    end: 0,
    params: "",
    players: "",
};
export const MsgUpdateLem = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.start !== 0) {
            writer.uint32(24).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        for (const v of message.params) {
            writer.uint32(42).string(v);
        }
        for (const v of message.players) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateLem };
        message.params = [];
        message.players = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.start = reader.int32();
                    break;
                case 4:
                    message.end = reader.int32();
                    break;
                case 5:
                    message.params.push(reader.string());
                    break;
                case 6:
                    message.players.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateLem };
        message.params = [];
        message.players = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        if (object.params !== undefined && object.params !== null) {
            for (const e of object.params) {
                message.params.push(String(e));
            }
        }
        if (object.players !== undefined && object.players !== null) {
            for (const e of object.players) {
                message.players.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.start !== undefined && (obj.start = message.start);
        message.end !== undefined && (obj.end = message.end);
        if (message.params) {
            obj.params = message.params.map((e) => e);
        }
        else {
            obj.params = [];
        }
        if (message.players) {
            obj.players = message.players.map((e) => e);
        }
        else {
            obj.players = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateLem };
        message.params = [];
        message.players = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
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
        if (object.params !== undefined && object.params !== null) {
            for (const e of object.params) {
                message.params.push(e);
            }
        }
        if (object.players !== undefined && object.players !== null) {
            for (const e of object.players) {
                message.players.push(e);
            }
        }
        return message;
    },
};
const baseMsgUpdateLemResponse = {};
export const MsgUpdateLemResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateLemResponse };
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
        const message = { ...baseMsgUpdateLemResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateLemResponse };
        return message;
    },
};
const baseMsgDeleteLem = { creator: "", index: "" };
export const MsgDeleteLem = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteLem };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteLem };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteLem };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseMsgDeleteLemResponse = {};
export const MsgDeleteLemResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteLemResponse };
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
        const message = { ...baseMsgDeleteLemResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteLemResponse };
        return message;
    },
};
const baseMsgCreateLemMeasure = {
    creator: "",
    index: "",
    player: "",
    signal: "",
    timestamp: 0,
    value: "",
    mu: "",
};
export const MsgCreateLemMeasure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.player !== "") {
            writer.uint32(26).string(message.player);
        }
        if (message.signal !== "") {
            writer.uint32(34).string(message.signal);
        }
        if (message.timestamp !== 0) {
            writer.uint32(40).int32(message.timestamp);
        }
        if (message.value !== "") {
            writer.uint32(50).string(message.value);
        }
        if (message.mu !== "") {
            writer.uint32(58).string(message.mu);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateLemMeasure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.player = reader.string();
                    break;
                case 4:
                    message.signal = reader.string();
                    break;
                case 5:
                    message.timestamp = reader.int32();
                    break;
                case 6:
                    message.value = reader.string();
                    break;
                case 7:
                    message.mu = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateLemMeasure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.player !== undefined && object.player !== null) {
            message.player = String(object.player);
        }
        else {
            message.player = "";
        }
        if (object.signal !== undefined && object.signal !== null) {
            message.signal = String(object.signal);
        }
        else {
            message.signal = "";
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = Number(object.timestamp);
        }
        else {
            message.timestamp = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        if (object.mu !== undefined && object.mu !== null) {
            message.mu = String(object.mu);
        }
        else {
            message.mu = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.player !== undefined && (obj.player = message.player);
        message.signal !== undefined && (obj.signal = message.signal);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.value !== undefined && (obj.value = message.value);
        message.mu !== undefined && (obj.mu = message.mu);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateLemMeasure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.player !== undefined && object.player !== null) {
            message.player = object.player;
        }
        else {
            message.player = "";
        }
        if (object.signal !== undefined && object.signal !== null) {
            message.signal = object.signal;
        }
        else {
            message.signal = "";
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        if (object.mu !== undefined && object.mu !== null) {
            message.mu = object.mu;
        }
        else {
            message.mu = "";
        }
        return message;
    },
};
const baseMsgCreateLemMeasureResponse = {};
export const MsgCreateLemMeasureResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateLemMeasureResponse,
        };
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
        const message = {
            ...baseMsgCreateLemMeasureResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCreateLemMeasureResponse,
        };
        return message;
    },
};
const baseMsgUpdateLemMeasure = {
    creator: "",
    index: "",
    player: "",
    signal: "",
    timestamp: 0,
    value: "",
    mu: "",
};
export const MsgUpdateLemMeasure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.player !== "") {
            writer.uint32(26).string(message.player);
        }
        if (message.signal !== "") {
            writer.uint32(34).string(message.signal);
        }
        if (message.timestamp !== 0) {
            writer.uint32(40).int32(message.timestamp);
        }
        if (message.value !== "") {
            writer.uint32(50).string(message.value);
        }
        if (message.mu !== "") {
            writer.uint32(58).string(message.mu);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateLemMeasure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.player = reader.string();
                    break;
                case 4:
                    message.signal = reader.string();
                    break;
                case 5:
                    message.timestamp = reader.int32();
                    break;
                case 6:
                    message.value = reader.string();
                    break;
                case 7:
                    message.mu = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateLemMeasure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.player !== undefined && object.player !== null) {
            message.player = String(object.player);
        }
        else {
            message.player = "";
        }
        if (object.signal !== undefined && object.signal !== null) {
            message.signal = String(object.signal);
        }
        else {
            message.signal = "";
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = Number(object.timestamp);
        }
        else {
            message.timestamp = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        if (object.mu !== undefined && object.mu !== null) {
            message.mu = String(object.mu);
        }
        else {
            message.mu = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.player !== undefined && (obj.player = message.player);
        message.signal !== undefined && (obj.signal = message.signal);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.value !== undefined && (obj.value = message.value);
        message.mu !== undefined && (obj.mu = message.mu);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateLemMeasure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.player !== undefined && object.player !== null) {
            message.player = object.player;
        }
        else {
            message.player = "";
        }
        if (object.signal !== undefined && object.signal !== null) {
            message.signal = object.signal;
        }
        else {
            message.signal = "";
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        if (object.mu !== undefined && object.mu !== null) {
            message.mu = object.mu;
        }
        else {
            message.mu = "";
        }
        return message;
    },
};
const baseMsgUpdateLemMeasureResponse = {};
export const MsgUpdateLemMeasureResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateLemMeasureResponse,
        };
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
        const message = {
            ...baseMsgUpdateLemMeasureResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateLemMeasureResponse,
        };
        return message;
    },
};
const baseMsgDeleteLemMeasure = { creator: "", index: "" };
export const MsgDeleteLemMeasure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteLemMeasure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteLemMeasure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteLemMeasure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseMsgDeleteLemMeasureResponse = {};
export const MsgDeleteLemMeasureResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteLemMeasureResponse,
        };
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
        const message = {
            ...baseMsgDeleteLemMeasureResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteLemMeasureResponse,
        };
        return message;
    },
};
const baseMsgCreateSla = { creator: "", index: "", start: 0, end: 0 };
export const MsgCreateSla = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.start !== 0) {
            writer.uint32(24).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSla };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.start = reader.int32();
                    break;
                case 4:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateSla };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.start !== undefined && (obj.start = message.start);
        message.end !== undefined && (obj.end = message.end);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSla };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
};
const baseMsgCreateSlaResponse = {};
export const MsgCreateSlaResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSlaResponse };
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
        const message = { ...baseMsgCreateSlaResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateSlaResponse };
        return message;
    },
};
const baseMsgUpdateSla = { creator: "", index: "", start: 0, end: 0 };
export const MsgUpdateSla = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.start !== 0) {
            writer.uint32(24).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSla };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.start = reader.int32();
                    break;
                case 4:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateSla };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.start !== undefined && (obj.start = message.start);
        message.end !== undefined && (obj.end = message.end);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateSla };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
};
const baseMsgUpdateSlaResponse = {};
export const MsgUpdateSlaResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSlaResponse };
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
        const message = { ...baseMsgUpdateSlaResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateSlaResponse };
        return message;
    },
};
const baseMsgDeleteSla = { creator: "", index: "" };
export const MsgDeleteSla = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSla };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteSla };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteSla };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseMsgDeleteSlaResponse = {};
export const MsgDeleteSlaResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSlaResponse };
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
        const message = { ...baseMsgDeleteSlaResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteSlaResponse };
        return message;
    },
};
const baseMsgCreateKpi = {
    creator: "",
    index: "",
    sla: "",
    rule: "",
    limit: "",
    mu: "",
    penalty: 0,
};
export const MsgCreateKpi = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.sla !== "") {
            writer.uint32(26).string(message.sla);
        }
        if (message.rule !== "") {
            writer.uint32(34).string(message.rule);
        }
        if (message.limit !== "") {
            writer.uint32(42).string(message.limit);
        }
        if (message.mu !== "") {
            writer.uint32(50).string(message.mu);
        }
        if (message.penalty !== 0) {
            writer.uint32(56).int32(message.penalty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateKpi };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.sla = reader.string();
                    break;
                case 4:
                    message.rule = reader.string();
                    break;
                case 5:
                    message.limit = reader.string();
                    break;
                case 6:
                    message.mu = reader.string();
                    break;
                case 7:
                    message.penalty = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateKpi };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.sla !== undefined && object.sla !== null) {
            message.sla = String(object.sla);
        }
        else {
            message.sla = "";
        }
        if (object.rule !== undefined && object.rule !== null) {
            message.rule = String(object.rule);
        }
        else {
            message.rule = "";
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = String(object.limit);
        }
        else {
            message.limit = "";
        }
        if (object.mu !== undefined && object.mu !== null) {
            message.mu = String(object.mu);
        }
        else {
            message.mu = "";
        }
        if (object.penalty !== undefined && object.penalty !== null) {
            message.penalty = Number(object.penalty);
        }
        else {
            message.penalty = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.sla !== undefined && (obj.sla = message.sla);
        message.rule !== undefined && (obj.rule = message.rule);
        message.limit !== undefined && (obj.limit = message.limit);
        message.mu !== undefined && (obj.mu = message.mu);
        message.penalty !== undefined && (obj.penalty = message.penalty);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateKpi };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.sla !== undefined && object.sla !== null) {
            message.sla = object.sla;
        }
        else {
            message.sla = "";
        }
        if (object.rule !== undefined && object.rule !== null) {
            message.rule = object.rule;
        }
        else {
            message.rule = "";
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        else {
            message.limit = "";
        }
        if (object.mu !== undefined && object.mu !== null) {
            message.mu = object.mu;
        }
        else {
            message.mu = "";
        }
        if (object.penalty !== undefined && object.penalty !== null) {
            message.penalty = object.penalty;
        }
        else {
            message.penalty = 0;
        }
        return message;
    },
};
const baseMsgCreateKpiResponse = {};
export const MsgCreateKpiResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateKpiResponse };
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
        const message = { ...baseMsgCreateKpiResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateKpiResponse };
        return message;
    },
};
const baseMsgUpdateKpi = {
    creator: "",
    index: "",
    sla: "",
    rule: "",
    limit: "",
    mu: "",
    penalty: 0,
};
export const MsgUpdateKpi = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.sla !== "") {
            writer.uint32(26).string(message.sla);
        }
        if (message.rule !== "") {
            writer.uint32(34).string(message.rule);
        }
        if (message.limit !== "") {
            writer.uint32(42).string(message.limit);
        }
        if (message.mu !== "") {
            writer.uint32(50).string(message.mu);
        }
        if (message.penalty !== 0) {
            writer.uint32(56).int32(message.penalty);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateKpi };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.sla = reader.string();
                    break;
                case 4:
                    message.rule = reader.string();
                    break;
                case 5:
                    message.limit = reader.string();
                    break;
                case 6:
                    message.mu = reader.string();
                    break;
                case 7:
                    message.penalty = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateKpi };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.sla !== undefined && object.sla !== null) {
            message.sla = String(object.sla);
        }
        else {
            message.sla = "";
        }
        if (object.rule !== undefined && object.rule !== null) {
            message.rule = String(object.rule);
        }
        else {
            message.rule = "";
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = String(object.limit);
        }
        else {
            message.limit = "";
        }
        if (object.mu !== undefined && object.mu !== null) {
            message.mu = String(object.mu);
        }
        else {
            message.mu = "";
        }
        if (object.penalty !== undefined && object.penalty !== null) {
            message.penalty = Number(object.penalty);
        }
        else {
            message.penalty = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.sla !== undefined && (obj.sla = message.sla);
        message.rule !== undefined && (obj.rule = message.rule);
        message.limit !== undefined && (obj.limit = message.limit);
        message.mu !== undefined && (obj.mu = message.mu);
        message.penalty !== undefined && (obj.penalty = message.penalty);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateKpi };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.sla !== undefined && object.sla !== null) {
            message.sla = object.sla;
        }
        else {
            message.sla = "";
        }
        if (object.rule !== undefined && object.rule !== null) {
            message.rule = object.rule;
        }
        else {
            message.rule = "";
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        else {
            message.limit = "";
        }
        if (object.mu !== undefined && object.mu !== null) {
            message.mu = object.mu;
        }
        else {
            message.mu = "";
        }
        if (object.penalty !== undefined && object.penalty !== null) {
            message.penalty = object.penalty;
        }
        else {
            message.penalty = 0;
        }
        return message;
    },
};
const baseMsgUpdateKpiResponse = {};
export const MsgUpdateKpiResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateKpiResponse };
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
        const message = { ...baseMsgUpdateKpiResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateKpiResponse };
        return message;
    },
};
const baseMsgDeleteKpi = { creator: "", index: "" };
export const MsgDeleteKpi = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteKpi };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteKpi };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteKpi };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseMsgDeleteKpiResponse = {};
export const MsgDeleteKpiResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteKpiResponse };
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
        const message = { ...baseMsgDeleteKpiResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteKpiResponse };
        return message;
    },
};
const baseMsgCreateKpiMeasure = {
    creator: "",
    index: "",
    kpi: "",
    player: "",
    timestamp: 0,
    value: "",
    mu: "",
};
export const MsgCreateKpiMeasure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.kpi !== "") {
            writer.uint32(26).string(message.kpi);
        }
        if (message.player !== "") {
            writer.uint32(34).string(message.player);
        }
        if (message.timestamp !== 0) {
            writer.uint32(40).int32(message.timestamp);
        }
        if (message.value !== "") {
            writer.uint32(50).string(message.value);
        }
        if (message.mu !== "") {
            writer.uint32(58).string(message.mu);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateKpiMeasure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.kpi = reader.string();
                    break;
                case 4:
                    message.player = reader.string();
                    break;
                case 5:
                    message.timestamp = reader.int32();
                    break;
                case 6:
                    message.value = reader.string();
                    break;
                case 7:
                    message.mu = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateKpiMeasure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.kpi !== undefined && object.kpi !== null) {
            message.kpi = String(object.kpi);
        }
        else {
            message.kpi = "";
        }
        if (object.player !== undefined && object.player !== null) {
            message.player = String(object.player);
        }
        else {
            message.player = "";
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = Number(object.timestamp);
        }
        else {
            message.timestamp = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        if (object.mu !== undefined && object.mu !== null) {
            message.mu = String(object.mu);
        }
        else {
            message.mu = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.kpi !== undefined && (obj.kpi = message.kpi);
        message.player !== undefined && (obj.player = message.player);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.value !== undefined && (obj.value = message.value);
        message.mu !== undefined && (obj.mu = message.mu);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateKpiMeasure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.kpi !== undefined && object.kpi !== null) {
            message.kpi = object.kpi;
        }
        else {
            message.kpi = "";
        }
        if (object.player !== undefined && object.player !== null) {
            message.player = object.player;
        }
        else {
            message.player = "";
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        if (object.mu !== undefined && object.mu !== null) {
            message.mu = object.mu;
        }
        else {
            message.mu = "";
        }
        return message;
    },
};
const baseMsgCreateKpiMeasureResponse = {};
export const MsgCreateKpiMeasureResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateKpiMeasureResponse,
        };
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
        const message = {
            ...baseMsgCreateKpiMeasureResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCreateKpiMeasureResponse,
        };
        return message;
    },
};
const baseMsgUpdateKpiMeasure = {
    creator: "",
    index: "",
    kpi: "",
    player: "",
    timestamp: 0,
    value: "",
    mu: "",
};
export const MsgUpdateKpiMeasure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.kpi !== "") {
            writer.uint32(26).string(message.kpi);
        }
        if (message.player !== "") {
            writer.uint32(34).string(message.player);
        }
        if (message.timestamp !== 0) {
            writer.uint32(40).int32(message.timestamp);
        }
        if (message.value !== "") {
            writer.uint32(50).string(message.value);
        }
        if (message.mu !== "") {
            writer.uint32(58).string(message.mu);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateKpiMeasure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.kpi = reader.string();
                    break;
                case 4:
                    message.player = reader.string();
                    break;
                case 5:
                    message.timestamp = reader.int32();
                    break;
                case 6:
                    message.value = reader.string();
                    break;
                case 7:
                    message.mu = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateKpiMeasure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.kpi !== undefined && object.kpi !== null) {
            message.kpi = String(object.kpi);
        }
        else {
            message.kpi = "";
        }
        if (object.player !== undefined && object.player !== null) {
            message.player = String(object.player);
        }
        else {
            message.player = "";
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = Number(object.timestamp);
        }
        else {
            message.timestamp = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        if (object.mu !== undefined && object.mu !== null) {
            message.mu = String(object.mu);
        }
        else {
            message.mu = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.kpi !== undefined && (obj.kpi = message.kpi);
        message.player !== undefined && (obj.player = message.player);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.value !== undefined && (obj.value = message.value);
        message.mu !== undefined && (obj.mu = message.mu);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateKpiMeasure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.kpi !== undefined && object.kpi !== null) {
            message.kpi = object.kpi;
        }
        else {
            message.kpi = "";
        }
        if (object.player !== undefined && object.player !== null) {
            message.player = object.player;
        }
        else {
            message.player = "";
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        if (object.mu !== undefined && object.mu !== null) {
            message.mu = object.mu;
        }
        else {
            message.mu = "";
        }
        return message;
    },
};
const baseMsgUpdateKpiMeasureResponse = {};
export const MsgUpdateKpiMeasureResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateKpiMeasureResponse,
        };
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
        const message = {
            ...baseMsgUpdateKpiMeasureResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateKpiMeasureResponse,
        };
        return message;
    },
};
const baseMsgDeleteKpiMeasure = { creator: "", index: "" };
export const MsgDeleteKpiMeasure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteKpiMeasure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteKpiMeasure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteKpiMeasure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseMsgDeleteKpiMeasureResponse = {};
export const MsgDeleteKpiMeasureResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteKpiMeasureResponse,
        };
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
        const message = {
            ...baseMsgDeleteKpiMeasureResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteKpiMeasureResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateDso(request) {
        const data = MsgCreateDso.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "CreateDso", data);
        return promise.then((data) => MsgCreateDsoResponse.decode(new Reader(data)));
    }
    UpdateDso(request) {
        const data = MsgUpdateDso.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "UpdateDso", data);
        return promise.then((data) => MsgUpdateDsoResponse.decode(new Reader(data)));
    }
    DeleteDso(request) {
        const data = MsgDeleteDso.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "DeleteDso", data);
        return promise.then((data) => MsgDeleteDsoResponse.decode(new Reader(data)));
    }
    CreateAggregator(request) {
        const data = MsgCreateAggregator.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "CreateAggregator", data);
        return promise.then((data) => MsgCreateAggregatorResponse.decode(new Reader(data)));
    }
    UpdateAggregator(request) {
        const data = MsgUpdateAggregator.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "UpdateAggregator", data);
        return promise.then((data) => MsgUpdateAggregatorResponse.decode(new Reader(data)));
    }
    DeleteAggregator(request) {
        const data = MsgDeleteAggregator.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "DeleteAggregator", data);
        return promise.then((data) => MsgDeleteAggregatorResponse.decode(new Reader(data)));
    }
    CreatePlayer(request) {
        const data = MsgCreatePlayer.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "CreatePlayer", data);
        return promise.then((data) => MsgCreatePlayerResponse.decode(new Reader(data)));
    }
    UpdatePlayer(request) {
        const data = MsgUpdatePlayer.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "UpdatePlayer", data);
        return promise.then((data) => MsgUpdatePlayerResponse.decode(new Reader(data)));
    }
    DeletePlayer(request) {
        const data = MsgDeletePlayer.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "DeletePlayer", data);
        return promise.then((data) => MsgDeletePlayerResponse.decode(new Reader(data)));
    }
    CreateLem(request) {
        const data = MsgCreateLem.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "CreateLem", data);
        return promise.then((data) => MsgCreateLemResponse.decode(new Reader(data)));
    }
    UpdateLem(request) {
        const data = MsgUpdateLem.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "UpdateLem", data);
        return promise.then((data) => MsgUpdateLemResponse.decode(new Reader(data)));
    }
    DeleteLem(request) {
        const data = MsgDeleteLem.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "DeleteLem", data);
        return promise.then((data) => MsgDeleteLemResponse.decode(new Reader(data)));
    }
    CreateLemMeasure(request) {
        const data = MsgCreateLemMeasure.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "CreateLemMeasure", data);
        return promise.then((data) => MsgCreateLemMeasureResponse.decode(new Reader(data)));
    }
    UpdateLemMeasure(request) {
        const data = MsgUpdateLemMeasure.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "UpdateLemMeasure", data);
        return promise.then((data) => MsgUpdateLemMeasureResponse.decode(new Reader(data)));
    }
    DeleteLemMeasure(request) {
        const data = MsgDeleteLemMeasure.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "DeleteLemMeasure", data);
        return promise.then((data) => MsgDeleteLemMeasureResponse.decode(new Reader(data)));
    }
    CreateSla(request) {
        const data = MsgCreateSla.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "CreateSla", data);
        return promise.then((data) => MsgCreateSlaResponse.decode(new Reader(data)));
    }
    UpdateSla(request) {
        const data = MsgUpdateSla.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "UpdateSla", data);
        return promise.then((data) => MsgUpdateSlaResponse.decode(new Reader(data)));
    }
    DeleteSla(request) {
        const data = MsgDeleteSla.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "DeleteSla", data);
        return promise.then((data) => MsgDeleteSlaResponse.decode(new Reader(data)));
    }
    CreateKpi(request) {
        const data = MsgCreateKpi.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "CreateKpi", data);
        return promise.then((data) => MsgCreateKpiResponse.decode(new Reader(data)));
    }
    UpdateKpi(request) {
        const data = MsgUpdateKpi.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "UpdateKpi", data);
        return promise.then((data) => MsgUpdateKpiResponse.decode(new Reader(data)));
    }
    DeleteKpi(request) {
        const data = MsgDeleteKpi.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "DeleteKpi", data);
        return promise.then((data) => MsgDeleteKpiResponse.decode(new Reader(data)));
    }
    CreateKpiMeasure(request) {
        const data = MsgCreateKpiMeasure.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "CreateKpiMeasure", data);
        return promise.then((data) => MsgCreateKpiMeasureResponse.decode(new Reader(data)));
    }
    UpdateKpiMeasure(request) {
        const data = MsgUpdateKpiMeasure.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "UpdateKpiMeasure", data);
        return promise.then((data) => MsgUpdateKpiMeasureResponse.decode(new Reader(data)));
    }
    DeleteKpiMeasure(request) {
        const data = MsgDeleteKpiMeasure.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Msg", "DeleteKpiMeasure", data);
        return promise.then((data) => MsgDeleteKpiMeasureResponse.decode(new Reader(data)));
    }
}
