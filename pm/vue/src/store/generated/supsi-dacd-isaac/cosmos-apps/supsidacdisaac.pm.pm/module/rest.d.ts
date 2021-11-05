export interface PmAggregator {
    index?: string;
    address?: string;
    creator?: string;
}
export interface PmDso {
    index?: string;
    address?: string;
    creator?: string;
}
export interface PmLem {
    index?: string;
    indexEnd?: string;
    params?: string[];
    players?: string[];
    creator?: string;
}
export declare type PmMsgCreateAggregatorResponse = object;
export declare type PmMsgCreateDsoResponse = object;
export declare type PmMsgCreateLemResponse = object;
export declare type PmMsgCreatePlayerResponse = object;
export declare type PmMsgDeleteAggregatorResponse = object;
export declare type PmMsgDeleteDsoResponse = object;
export declare type PmMsgDeleteLemResponse = object;
export declare type PmMsgDeletePlayerResponse = object;
export declare type PmMsgUpdateAggregatorResponse = object;
export declare type PmMsgUpdateDsoResponse = object;
export declare type PmMsgUpdateLemResponse = object;
export declare type PmMsgUpdatePlayerResponse = object;
export interface PmPlayer {
    index?: string;
    address?: string;
    role?: string;
    creator?: string;
}
export interface PmQueryAllLemResponse {
    lem?: PmLem[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PmQueryAllPlayerResponse {
    player?: PmPlayer[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PmQueryGetAggregatorResponse {
    Aggregator?: PmAggregator;
}
export interface PmQueryGetDsoResponse {
    Dso?: PmDso;
}
export interface PmQueryGetLemResponse {
    lem?: PmLem;
}
export interface PmQueryGetPlayerResponse {
    player?: PmPlayer;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
    /** reverse is set to true if results are to be returned in the descending order. */
    reverse?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title pm/aggregator.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryAggregator
     * @summary Queries a aggregator by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/aggregator
     */
    queryAggregator: (params?: RequestParams) => Promise<HttpResponse<PmQueryGetAggregatorResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDso
     * @summary Queries a dso by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/dso
     */
    queryDso: (params?: RequestParams) => Promise<HttpResponse<PmQueryGetDsoResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryLemAll
     * @summary Queries a list of lem items.
     * @request GET:/supsi-dacd-isaac/pm/pm/lem
     */
    queryLemAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PmQueryAllLemResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryLem
     * @summary Queries a lem by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/lem/{index}
     */
    queryLem: (index: string, params?: RequestParams) => Promise<HttpResponse<PmQueryGetLemResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPlayerAll
     * @summary Queries a list of player items.
     * @request GET:/supsi-dacd-isaac/pm/pm/player
     */
    queryPlayerAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PmQueryAllPlayerResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPlayer
     * @summary Queries a player by index.
     * @request GET:/supsi-dacd-isaac/pm/pm/player/{index}
     */
    queryPlayer: (index: string, params?: RequestParams) => Promise<HttpResponse<PmQueryGetPlayerResponse, RpcStatus>>;
}
export {};
