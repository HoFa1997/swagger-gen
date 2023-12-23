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

export interface GetOtpDto {
  /** @default "09122244463" */
  phone: string;
}

export interface CheckOtpDto {
  /** @default "09122244463" */
  phone: string;
  /** @default "224466" */
  confirmPhone: string;
}

export interface CreateBoothDto {
  /** @default "سالن جنب تالار اصلی برج میلاد" */
  typeOfParticipation: string;
  /** @default "meter" */
  type: "numerical" | "meter";
  /** @default 5960000 */
  earlyPrice: number;
  /**
   * @format date-time
   * @default "2023-12-23T18:47:16.669Z"
   */
  earlyDate: string;
  /** @default 6940000 */
  normalPrice: number;
  /**
   * @format date-time
   * @default "2023-12-23T18:47:16.669Z"
   */
  normalDate: string;
  /** @default 7940000 */
  latePrice: number;
  /** @default "هر متر مربع )م.م.( بهرهبرداری غرفههای رده A بدون غرفهسازی" */
  description: string;
}

export interface UpdateBoothDto {
  /** @default "سالن جنب تالار اصلی برج میلاد" */
  typeOfParticipation?: string;
  /** @default "meter" */
  type?: "numerical" | "meter";
  /** @default 5960000 */
  earlyPrice?: number;
  /**
   * @format date-time
   * @default "2023-12-23T18:47:16.669Z"
   */
  earlyDate?: string;
  /** @default 6940000 */
  normalPrice?: number;
  /**
   * @format date-time
   * @default "2023-12-23T18:47:16.669Z"
   */
  normalDate?: string;
  /** @default 7940000 */
  latePrice?: number;
  /** @default "هر متر مربع )م.م.( بهرهبرداری غرفههای رده A بدون غرفهسازی" */
  description?: string;
}

export interface BoothInfo {
  /** @example "64f4d70411e45c0556a023e9" */
  id: string;
  /** @example "5" */
  count: string;
}

export interface CreateHamtashowDto {
  personType: "HOGHOGHI" | "HAGHIGHI";
  activityGroups: string[];
  representatives: string[];
  boothArray: BoothInfo[];
  /** @default "علی" */
  firstName?: string;
  /** @default "علی پور" */
  lastName?: string;
  /** @default "000000" */
  nationalCode?: string;
  /** @default "دال" */
  companyName?: string;
  /** @default "000000" */
  shenaseMelli?: string;
  /** @default "000000" */
  codeSabt?: string;
  /** @default "000000" */
  codeEghtesadi?: string;
  /** @default "000000" */
  zipCode?: string;
  /** @default "تهران - نیاوران" */
  address?: string;
  /** @format binary */
  path: File;
}

export interface UpdateHamtashowDto {
  status: "PENDING" | "UNPAID" | "REJECT" | "PAID";
  documentLink: {
    name: string;
    link: string;
  };
}

export interface CreateHamtapitchDto {
  personType: "HOGHOGHI" | "HAGHIGHI";
  /** @default "علی" */
  firstName?: string;
  representatives: string[];
  /** @default "علی پور" */
  lastName?: string;
  /** @default "000000" */
  nationalCode?: string;
  /** @default "دال" */
  companyName?: string;
  /** @default "000000" */
  shenaseMelli?: string;
  /** @default "000000" */
  codeSabt?: string;
  /** @default "000000" */
  codeEghtesadi?: string;
  /** @default "000000" */
  zipCode?: string;
  /** @default "تهران - نیاوران" */
  address?: string;
  /** @format binary */
  pitchFilePath: File;
  /** @format binary */
  teamFilePath: File;
}

export interface UpdateHamtapitchDto {
  status: "PENDING" | "REJECT" | "ACCEPT";
  documentLink: {
    name: string;
    link: string;
  };
}

export interface CreateUserDto {
  /** @default "09123456789" */
  phone: string;
  /** @default "حسین" */
  firstName: string;
  /** @default "خسروی" */
  lastName: string;
  /** @default "MEMBER" */
  role:
    | "ADMIN"
    | "MEMBER"
    | "HAMTA_SHOW_ADMIN"
    | "HAMTA_PITCH_ADMIN"
    | "HAMTA_YAB_ADMIN"
    | "HAMTA_CLASS_ADMIN"
    | "NEWS_ADMIN";
}

export interface UpdateUserDto {
  /** @default "09123456789" */
  phone?: string;
  /** @default "حسین" */
  firstName?: string;
  /** @default "خسروی" */
  lastName?: string;
  /** @default "MEMBER" */
  role?:
    | "ADMIN"
    | "MEMBER"
    | "HAMTA_SHOW_ADMIN"
    | "HAMTA_PITCH_ADMIN"
    | "HAMTA_YAB_ADMIN"
    | "HAMTA_CLASS_ADMIN"
    | "NEWS_ADMIN";
}

export interface UpdateProfileDto {
  /** @default "حسین" */
  firstName: string;
  /** @default "خسروی" */
  lastName: string;
  /** @default "hossein@gmail.com" */
  email: string;
}

export type ObjectId = object;

export interface CreateFactorDto {
  /** @default "" */
  productId: ObjectId;
  productType: "hamtashow" | "hamtapitch" | "hamtayab" | "class";
  /** @default null */
  discount?: string;
  /** @default "http://localhost:3002/payment/response" */
  callback_url: string;
}

export interface CreateHamtayabDto {
  personType: "HOGHOGHI" | "HAGHIGHI";
  /** @default "علی" */
  firstName?: string;
  representatives: string[];
  /** @default "علی پور" */
  lastName?: string;
  /** @default "000000" */
  nationalCode?: string;
  /** @default "دال" */
  companyName?: string;
  /** @default "000000" */
  shenaseMelli?: string;
  /** @default "000000" */
  codeSabt?: string;
  /** @default "000000" */
  codeEghtesadi?: string;
  /** @default "000000" */
  zipCode?: string;
  /** @default "تهران - نیاوران" */
  address?: string;
  /** @format binary */
  pitchFilePath: File;
  /** @format binary */
  teamFilePath: File;
}

export interface UpdateHamtayabDto {
  personType?: "HOGHOGHI" | "HAGHIGHI";
  /** @default "علی" */
  firstName?: string;
  representatives?: string[];
  /** @default "علی پور" */
  lastName?: string;
  /** @default "000000" */
  nationalCode?: string;
  /** @default "دال" */
  companyName?: string;
  /** @default "000000" */
  shenaseMelli?: string;
  /** @default "000000" */
  codeSabt?: string;
  /** @default "000000" */
  codeEghtesadi?: string;
  /** @default "000000" */
  zipCode?: string;
  /** @default "تهران - نیاوران" */
  address?: string;
  /** @format binary */
  pitchFilePath?: File;
  /** @format binary */
  teamFilePath?: File;
  status: "PENDING" | "REJECT" | "ACCEPT";
}

export interface HeadlineInfoDto {
  /** @default "title1" */
  title: string;
  /** @default "description1" */
  description: string;
}

export interface CreateClassDto {
  /** @default "name 1" */
  name: string;
  /** @default "description 1" */
  description: string;
  /** @default "present" */
  classType: "online" | "present";
  /** @default "hamamoz" */
  category: "hamayesh" | "hamneshast" | "hamamoz";
  /** @default 10000 */
  earlyPrice: number;
  /** @default 20000 */
  normalPrice: number;
  /**
   * @format date-time
   * @default "2023-12-23T18:47:16.807Z"
   */
  earlyDate: string;
  /**
   * @format date-time
   * @default "2023-12-23T18:47:16.807Z"
   */
  startCourseDate: string;
  /**
   * @format date-time
   * @default "2023-12-23T18:47:16.807Z"
   */
  endCourseDate: string;
  /** @default "address Tehran" */
  address: string;
  /** @default "https://google.com" */
  link?: string;
  /** @format binary */
  banner: File;
  /** @default 50 */
  quantity: number;
  /** @default [{"title":"title1","description":"description1"}] */
  teacher: HeadlineInfoDto[];
  /** @default [{"title":"title1","description":"description1"}] */
  speaker: HeadlineInfoDto[];
  /** @default [{"title":"title1","description":"description1"}] */
  headline: HeadlineInfoDto[];
}

export interface UpdateClassDto {
  /** @default "name 1" */
  name?: string;
  /** @default "description 1" */
  description?: string;
  /** @default "present" */
  classType?: "online" | "present";
  /** @default "hamamoz" */
  category?: "hamayesh" | "hamneshast" | "hamamoz";
  /** @default 10000 */
  earlyPrice?: number;
  /** @default 20000 */
  normalPrice?: number;
  /**
   * @format date-time
   * @default "2023-12-23T18:47:16.807Z"
   */
  earlyDate?: string;
  /**
   * @format date-time
   * @default "2023-12-23T18:47:16.807Z"
   */
  startCourseDate?: string;
  /**
   * @format date-time
   * @default "2023-12-23T18:47:16.807Z"
   */
  endCourseDate?: string;
  /** @default "address Tehran" */
  address?: string;
  /** @default "https://google.com" */
  link?: string;
  /** @format binary */
  banner?: File;
  /** @default 50 */
  quantity?: number;
  /** @default [{"title":"title1","description":"description1"}] */
  teacher?: HeadlineInfoDto[];
  /** @default [{"title":"title1","description":"description1"}] */
  speaker?: HeadlineInfoDto[];
  /** @default [{"title":"title1","description":"description1"}] */
  headline?: HeadlineInfoDto[];
}

export interface CreateDiscountDto {
  /** @default "kopon12" */
  name: string;
  /** @default 10 */
  quantity: number;
  type: "percentage" | "constant";
  productType: "hamtashow" | "hamtapitch" | "hamtayab" | "class";
  /** @default 70 */
  amount: number;
}

export interface UpdateDiscountDto {
  /** @default "kopon12" */
  name?: string;
  /** @default 10 */
  quantity?: number;
  type?: "percentage" | "constant";
  productType?: "hamtashow" | "hamtapitch" | "hamtayab" | "class";
  /** @default 70 */
  amount?: number;
}

export interface CreateNewsDto {
  /** @example "هوش مصنوعی" */
  title: string;
  /** @example "ai-content" */
  slug: string;
  /** @example "["ASD","ASD"]" */
  links: string;
  /** @format binary */
  image: File;
  /** @example "محتوا درباره هوش مصنوعی" */
  content: string;
}

export interface UpdateNewsDto {
  /** @example "هوش مصنوعی" */
  title?: string;
  /** @example "ai-content" */
  slug?: string;
  /** @example "["ASD","ASD"]" */
  links?: string;
  /** @format binary */
  image?: File;
  /** @example "محتوا درباره هوش مصنوعی" */
  content?: string;
  isDeleted: boolean;
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
  format?: ResponseFormat;
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
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
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
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
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

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
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

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
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
 * @title HoFa API
 * @version 0.0.1
 * @contact
 *
 * The HoFa API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name AppControllerGetVersion
   * @request GET:/
   */
  appControllerGetVersion = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      ...params,
    });

  auth = {
    /**
     * No description
     *
     * @tags Login API
     * @name AuthControllerGetOtp
     * @request POST:/auth/get-otp
     */
    authControllerGetOtp: (data: GetOtpDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/get-otp`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login API
     * @name AuthControllerCheckOtp
     * @request POST:/auth/check-otp
     */
    authControllerCheckOtp: (data: CheckOtpDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/check-otp`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login API
     * @name AuthControllerLogout
     * @request POST:/auth/logout
     */
    authControllerLogout: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/logout`,
        method: "POST",
        ...params,
      }),
  };
  panel = {
    /**
     * No description
     *
     * @tags Booth API
     * @name PanelControllerCreate
     * @request POST:/panel/booth
     * @secure
     */
    panelControllerCreate: (data: CreateBoothDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/booth`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booth API
     * @name PanelControllerFindAll
     * @request GET:/panel/booth
     * @secure
     */
    panelControllerFindAll: (params: RequestParams = {}) =>
      this.request<object[], any>({
        path: `/panel/booth`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booth API
     * @name PanelControllerExport
     * @request GET:/panel/booth/export
     * @secure
     */
    panelControllerExport: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/booth/export`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booth API
     * @name PanelControllerUpdate
     * @request PATCH:/panel/booth/{id}
     * @secure
     */
    panelControllerUpdate: (id: any, data: UpdateBoothDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/booth/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booth API
     * @name PanelControllerRemove
     * @request DELETE:/panel/booth/{id}
     * @secure
     */
    panelControllerRemove: (id: any, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/booth/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User API
     * @name UsersControllerExport
     * @request GET:/panel/users/export
     * @secure
     */
    usersControllerExport: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/users/export`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User API
     * @name UsersControllerCreate
     * @request POST:/panel/users
     * @secure
     */
    usersControllerCreate: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User API
     * @name UsersControllerFindAll
     * @request GET:/panel/users
     * @secure
     */
    usersControllerFindAll: (
      query: {
        page: number;
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/panel/users`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User API
     * @name UsersControllerFindOne
     * @request GET:/panel/users/{id}
     * @secure
     */
    usersControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<ObjectId, any>({
        path: `/panel/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User API
     * @name UsersControllerUpdate
     * @request PATCH:/panel/users/{id}
     * @secure
     */
    usersControllerUpdate: (id: string, data: UpdateUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User API
     * @name UsersControllerRemove
     * @request DELETE:/panel/users/{id}
     * @secure
     */
    usersControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/users/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User API
     * @name UsersControllerDashboard
     * @request GET:/panel/users/users/dashboard
     * @secure
     */
    usersControllerDashboard: (params: RequestParams = {}) =>
      this.request<ObjectId, any>({
        path: `/panel/users/users/dashboard`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Class API
     * @name ClassControllerCreate
     * @request POST:/panel/class
     * @secure
     */
    classControllerCreate: (data: CreateClassDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/class`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Class API
     * @name ClassControllerFindAll
     * @request GET:/panel/class
     * @secure
     */
    classControllerFindAll: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/class`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Class API
     * @name ClassControllerFindClassByCategoryName
     * @request GET:/panel/class/{categoryName}
     * @secure
     */
    classControllerFindClassByCategoryName: (categoryName: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/class/${categoryName}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Class API
     * @name ClassControllerGetUsersByClass
     * @request GET:/panel/class/class-users/{classId}
     * @secure
     */
    classControllerGetUsersByClass: (classId: string, params: RequestParams = {}) =>
      this.request<object[], any>({
        path: `/panel/class/class-users/${classId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Class API
     * @name ClassControllerGetUsersExcelByClass
     * @request GET:/panel/class/class-users/excel/{classId}
     * @secure
     */
    classControllerGetUsersExcelByClass: (classId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/class/class-users/excel/${classId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Class API
     * @name ClassControllerFindOne
     * @request GET:/panel/class/single/{id}
     * @secure
     */
    classControllerFindOne: (id: any, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/class/single/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Class API
     * @name ClassControllerUpdate
     * @request PATCH:/panel/class/{id}
     * @secure
     */
    classControllerUpdate: (id: any, data: UpdateClassDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/class/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Class API
     * @name ClassControllerRemove
     * @request DELETE:/panel/class/{id}
     * @secure
     */
    classControllerRemove: (id: any, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/panel/class/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  event = {
    /**
     * No description
     *
     * @tags Events API (Hamtashow)
     * @name HamtashowControllerCreate
     * @request POST:/event/hamtashow
     * @secure
     */
    hamtashowControllerCreate: (data: CreateHamtashowDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/event/hamtashow`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events API (Hamtashow)
     * @name HamtashowControllerFindAll
     * @request GET:/event/hamtashow
     * @secure
     */
    hamtashowControllerFindAll: (params: RequestParams = {}) =>
      this.request<object[], any>({
        path: `/event/hamtashow`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events API (Hamtashow)
     * @name HamtashowControllerUpdate
     * @request PATCH:/event/hamtashow/{id}
     * @secure
     */
    hamtashowControllerUpdate: (id: any, data: UpdateHamtashowDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/event/hamtashow/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events API (Hamtashow)
     * @name HamtashowControllerExport
     * @request GET:/event/hamtashow/export
     * @secure
     */
    hamtashowControllerExport: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/event/hamtashow/export`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events API (Hamtapitch)
     * @name HamtapitchControllerCreate
     * @request POST:/event/hamtapitch
     * @secure
     */
    hamtapitchControllerCreate: (data: CreateHamtapitchDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/event/hamtapitch`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events API (Hamtapitch)
     * @name HamtapitchControllerFindAll
     * @request GET:/event/hamtapitch
     * @secure
     */
    hamtapitchControllerFindAll: (params: RequestParams = {}) =>
      this.request<object[], any>({
        path: `/event/hamtapitch`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events API (Hamtapitch)
     * @name HamtapitchControllerExport
     * @request GET:/event/hamtapitch/export
     * @secure
     */
    hamtapitchControllerExport: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/event/hamtapitch/export`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events API (Hamtapitch)
     * @name HamtapitchControllerUpdate
     * @request PATCH:/event/hamtapitch/{id}
     * @secure
     */
    hamtapitchControllerUpdate: (id: any, data: UpdateHamtapitchDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/event/hamtapitch/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Hamtayab API
     * @name HamtayabControllerCreate
     * @request POST:/event/hamtayab
     * @secure
     */
    hamtayabControllerCreate: (data: CreateHamtayabDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/event/hamtayab`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Hamtayab API
     * @name HamtayabControllerFindAll
     * @request GET:/event/hamtayab
     * @secure
     */
    hamtayabControllerFindAll: (params: RequestParams = {}) =>
      this.request<object[], any>({
        path: `/event/hamtayab`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Hamtayab API
     * @name HamtayabControllerExport
     * @request GET:/event/hamtayab/export
     * @secure
     */
    hamtayabControllerExport: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/event/hamtayab/export`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Hamtayab API
     * @name HamtayabControllerFindOne
     * @request GET:/event/hamtayab/{id}
     * @secure
     */
    hamtayabControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<ObjectId, any>({
        path: `/event/hamtayab/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Hamtayab API
     * @name HamtayabControllerUpdate
     * @request PATCH:/event/hamtayab/{id}
     * @secure
     */
    hamtayabControllerUpdate: (id: string, data: UpdateHamtayabDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/event/hamtayab/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  profile = {
    /**
     * No description
     *
     * @tags Profile API
     * @name ProfileControllerProfile
     * @request GET:/profile
     * @secure
     */
    profileControllerProfile: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/profile`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile API
     * @name ProfileControllerUpdateProfile
     * @request PATCH:/profile
     * @secure
     */
    profileControllerUpdateProfile: (data: UpdateProfileDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/profile`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  payment = {
    /**
     * No description
     *
     * @tags Payment API
     * @name PaymentControllerGetFactor
     * @request GET:/payment/factor
     * @secure
     */
    paymentControllerGetFactor: (
      query: {
        productType: "hamtashow" | "hamtapitch" | "hamtayab" | "class";
        /** @default "" */
        productId: string;
        /** @default "" */
        discount?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/payment/factor`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment API
     * @name PaymentControllerGetAllFactor
     * @request GET:/payment/all-factor
     * @secure
     */
    paymentControllerGetAllFactor: (
      query?: {
        status?: "paid" | "unpaid";
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/payment/all-factor`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment API
     * @name PaymentControllerRequestPayment
     * @request POST:/payment/checkout
     * @secure
     */
    paymentControllerRequestPayment: (data: CreateFactorDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/payment/checkout`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment API
     * @name PaymentControllerPaymentResponse
     * @request GET:/payment/response
     * @secure
     */
    paymentControllerPaymentResponse: (
      query: {
        Authority: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/payment/response`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  discount = {
    /**
     * No description
     *
     * @tags Discount API
     * @name DiscountControllerCreate
     * @request POST:/discount
     * @secure
     */
    discountControllerCreate: (data: CreateDiscountDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/discount`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Discount API
     * @name DiscountControllerFindAll
     * @request GET:/discount
     * @secure
     */
    discountControllerFindAll: (params: RequestParams = {}) =>
      this.request<object[], any>({
        path: `/discount`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Discount API
     * @name DiscountControllerUpdate
     * @request PATCH:/discount/{id}
     * @secure
     */
    discountControllerUpdate: (id: string, data: UpdateDiscountDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/discount/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Discount API
     * @name DiscountControllerRemove
     * @request DELETE:/discount/{id}
     * @secure
     */
    discountControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/discount/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  news = {
    /**
     * No description
     *
     * @tags News API
     * @name NewsControllerCreate
     * @request POST:/news
     * @secure
     */
    newsControllerCreate: (data: CreateNewsDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/news`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags News API
     * @name NewsControllerFindAll
     * @request GET:/news
     * @secure
     */
    newsControllerFindAll: (params: RequestParams = {}) =>
      this.request<object[], any>({
        path: `/news`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News API
     * @name NewsControllerFindOne
     * @request GET:/news/{slug}
     * @secure
     */
    newsControllerFindOne: (slug: string, params: RequestParams = {}) =>
      this.request<ObjectId, any>({
        path: `/news/${slug}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags News API
     * @name NewsControllerSoftDelete
     * @request DELETE:/news/{id}
     * @secure
     */
    newsControllerSoftDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/news/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags News API
     * @name NewsControllerUpdate
     * @request PATCH:/news/{id}
     * @secure
     */
    newsControllerUpdate: (id: string, data: UpdateNewsDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/news/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
}
