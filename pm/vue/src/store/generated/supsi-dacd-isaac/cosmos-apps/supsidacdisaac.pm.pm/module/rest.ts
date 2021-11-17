/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface PmAggregator {
  idx?: string;
  address?: string;
  creator?: string;
}

export interface PmDso {
  idx?: string;
  address?: string;
  creator?: string;
}

export interface PmKpi {
  index?: string;
  sla?: string;
  rule?: string;
  limit?: string;
  mu?: string;

  /** @format int32 */
  penalty?: number;
  creator?: string;
}

export interface PmKpiMeasure {
  index?: string;
  kpi?: string;
  player?: string;

  /** @format int32 */
  timestamp?: number;
  value?: string;
  mu?: string;
  creator?: string;
}

export interface PmLem {
  index?: string;

  /** @format int32 */
  start?: number;

  /** @format int32 */
  end?: number;
  params?: string[];
  players?: string[];
  creator?: string;
}

export interface PmLemMeasure {
  index?: string;
  player?: string;
  signal?: string;

  /** @format int32 */
  timestamp?: number;
  value?: string;
  mu?: string;
  creator?: string;
}

export type PmMsgCreateAggregatorResponse = object;

export type PmMsgCreateDsoResponse = object;

export type PmMsgCreateKpiMeasureResponse = object;

export type PmMsgCreateKpiResponse = object;

export type PmMsgCreateLemMeasureResponse = object;

export type PmMsgCreateLemResponse = object;

export type PmMsgCreatePlayerResponse = object;

export type PmMsgCreateSlaResponse = object;

export type PmMsgDeleteAggregatorResponse = object;

export type PmMsgDeleteDsoResponse = object;

export type PmMsgDeleteKpiMeasureResponse = object;

export type PmMsgDeleteKpiResponse = object;

export type PmMsgDeleteLemMeasureResponse = object;

export type PmMsgDeleteLemResponse = object;

export type PmMsgDeletePlayerResponse = object;

export type PmMsgDeleteSlaResponse = object;

export type PmMsgUpdateAggregatorResponse = object;

export type PmMsgUpdateDsoResponse = object;

export type PmMsgUpdateKpiMeasureResponse = object;

export type PmMsgUpdateKpiResponse = object;

export type PmMsgUpdateLemMeasureResponse = object;

export type PmMsgUpdateLemResponse = object;

export type PmMsgUpdatePlayerResponse = object;

export type PmMsgUpdateSlaResponse = object;

export interface PmPlayer {
  index?: string;
  idx?: string;
  address?: string;
  role?: string;
  creator?: string;
}

export interface PmQueryAllKpiMeasureResponse {
  kpiMeasure?: PmKpiMeasure[];

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

export interface PmQueryAllKpiResponse {
  kpi?: PmKpi[];

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

export interface PmQueryAllLemMeasureResponse {
  lemMeasure?: PmLemMeasure[];

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

export interface PmQueryAllSlaResponse {
  sla?: PmSla[];

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

export interface PmQueryGetKpiMeasureResponse {
  kpiMeasure?: PmKpiMeasure;
}

export interface PmQueryGetKpiResponse {
  kpi?: PmKpi;
}

export interface PmQueryGetLemMeasureResponse {
  lemMeasure?: PmLemMeasure;
}

export interface PmQueryGetLemResponse {
  lem?: PmLem;
}

export interface PmQueryGetPlayerResponse {
  player?: PmPlayer;
}

export interface PmQueryGetSlaResponse {
  sla?: PmSla;
}

export interface PmSla {
  index?: string;

  /** @format int32 */
  start?: number;

  /** @format int32 */
  end?: number;
  creator?: string;
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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title pm/aggregator.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAggregator
   * @summary Queries a aggregator by index.
   * @request GET:/supsi-dacd-isaac/pm/pm/aggregator
   */
  queryAggregator = (params: RequestParams = {}) =>
    this.request<PmQueryGetAggregatorResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/aggregator`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDso
   * @summary Queries a dso by index.
   * @request GET:/supsi-dacd-isaac/pm/pm/dso
   */
  queryDso = (params: RequestParams = {}) =>
    this.request<PmQueryGetDsoResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/dso`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryKpiAll
   * @summary Queries a list of kpi items.
   * @request GET:/supsi-dacd-isaac/pm/pm/kpi
   */
  queryKpiAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PmQueryAllKpiResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/kpi`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryKpi
   * @summary Queries a kpi by index.
   * @request GET:/supsi-dacd-isaac/pm/pm/kpi/{index}
   */
  queryKpi = (index: string, params: RequestParams = {}) =>
    this.request<PmQueryGetKpiResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/kpi/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryKpiMeasureAll
   * @summary Queries a list of kpiMeasure items.
   * @request GET:/supsi-dacd-isaac/pm/pm/kpiMeasure
   */
  queryKpiMeasureAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PmQueryAllKpiMeasureResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/kpiMeasure`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryKpiMeasure
   * @summary Queries a kpiMeasure by index.
   * @request GET:/supsi-dacd-isaac/pm/pm/kpiMeasure/{index}
   */
  queryKpiMeasure = (index: string, params: RequestParams = {}) =>
    this.request<PmQueryGetKpiMeasureResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/kpiMeasure/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLemAll
   * @summary Queries a list of lem items.
   * @request GET:/supsi-dacd-isaac/pm/pm/lem
   */
  queryLemAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PmQueryAllLemResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/lem`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLem
   * @summary Queries a lem by index.
   * @request GET:/supsi-dacd-isaac/pm/pm/lem/{index}
   */
  queryLem = (index: string, params: RequestParams = {}) =>
    this.request<PmQueryGetLemResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/lem/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLemMeasureAll
   * @summary Queries a list of lemMeasure items.
   * @request GET:/supsi-dacd-isaac/pm/pm/lemMeasure
   */
  queryLemMeasureAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PmQueryAllLemMeasureResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/lemMeasure`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLemMeasure
   * @summary Queries a lemMeasure by index.
   * @request GET:/supsi-dacd-isaac/pm/pm/lemMeasure/{index}
   */
  queryLemMeasure = (index: string, params: RequestParams = {}) =>
    this.request<PmQueryGetLemMeasureResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/lemMeasure/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPlayerAll
   * @summary Queries a list of player items.
   * @request GET:/supsi-dacd-isaac/pm/pm/player
   */
  queryPlayerAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PmQueryAllPlayerResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/player`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPlayer
   * @summary Queries a player by index.
   * @request GET:/supsi-dacd-isaac/pm/pm/player/{index}
   */
  queryPlayer = (index: string, params: RequestParams = {}) =>
    this.request<PmQueryGetPlayerResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/player/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySlaAll
   * @summary Queries a list of sla items.
   * @request GET:/supsi-dacd-isaac/pm/pm/sla
   */
  querySlaAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PmQueryAllSlaResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/sla`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySla
   * @summary Queries a sla by index.
   * @request GET:/supsi-dacd-isaac/pm/pm/sla/{index}
   */
  querySla = (index: string, params: RequestParams = {}) =>
    this.request<PmQueryGetSlaResponse, RpcStatus>({
      path: `/supsi-dacd-isaac/pm/pm/sla/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
