// generated with @7nohe/openapi-react-query-codegen@0.5.2
import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseQueryOptions,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { UpdateUserDto } from "../requests/models/UpdateUserDto";
import { UpdateProfileDto } from "../requests/models/UpdateProfileDto";
import { UpdateNewsDto } from "../requests/models/UpdateNewsDto";
import { UpdateHamtayabDto } from "../requests/models/UpdateHamtayabDto";
import { UpdateHamtashowDto } from "../requests/models/UpdateHamtashowDto";
import { UpdateHamtapitchDto } from "../requests/models/UpdateHamtapitchDto";
import { UpdateDiscountDto } from "../requests/models/UpdateDiscountDto";
import { UpdateClassDto } from "../requests/models/UpdateClassDto";
import { UpdateBoothDto } from "../requests/models/UpdateBoothDto";
import { ObjectId } from "../requests/models/ObjectId";
import { HeadlineInfoDto } from "../requests/models/HeadlineInfoDto";
import { GetOtpDto } from "../requests/models/GetOtpDto";
import { CreateUserDto } from "../requests/models/CreateUserDto";
import { CreateNewsDto } from "../requests/models/CreateNewsDto";
import { CreateHamtayabDto } from "../requests/models/CreateHamtayabDto";
import { CreateHamtashowDto } from "../requests/models/CreateHamtashowDto";
import { CreateHamtapitchDto } from "../requests/models/CreateHamtapitchDto";
import { CreateFactorDto } from "../requests/models/CreateFactorDto";
import { CreateDiscountDto } from "../requests/models/CreateDiscountDto";
import { CreateClassDto } from "../requests/models/CreateClassDto";
import { CreateBoothDto } from "../requests/models/CreateBoothDto";
import { CheckOtpDto } from "../requests/models/CheckOtpDto";
import { BoothInfo } from "../requests/models/BoothInfo";
import { UserApiService } from "../requests/services/UserApiService";
import { ProfileApiService } from "../requests/services/ProfileApiService";
import { PaymentApiService } from "../requests/services/PaymentApiService";
import { NewsApiService } from "../requests/services/NewsApiService";
import { LoginApiService } from "../requests/services/LoginApiService";
import { HamtayabApiService } from "../requests/services/HamtayabApiService";
import { EventsApiHamtashowService } from "../requests/services/EventsApiHamtashowService";
import { EventsApiHamtapitchService } from "../requests/services/EventsApiHamtapitchService";
import { DiscountApiService } from "../requests/services/DiscountApiService";
import { DefaultService } from "../requests/services/DefaultService";
import { ClassApiService } from "../requests/services/ClassApiService";
import { BoothApiService } from "../requests/services/BoothApiService";
export type UserApiServiceUsersControllerExportDefaultResponse = Awaited<
  ReturnType<typeof UserApiService.usersControllerExport>
>;
export type UserApiServiceUsersControllerExportQueryResult<
  TData = UserApiServiceUsersControllerExportDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useUserApiServiceUsersControllerExportKey =
  "UserApiServiceUsersControllerExport";
export const useUserApiServiceUsersControllerExport = <
  TData = UserApiServiceUsersControllerExportDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [useUserApiServiceUsersControllerExportKey, ...(queryKey ?? [])],
    queryFn: () => UserApiService.usersControllerExport() as TData,
    ...options,
  });
export type UserApiServiceusersControllerCreateMutationResult = Awaited<
  ReturnType<typeof UserApiService.usersControllerCreate>
>;

export const useUserApiServiceUsersControllerCreate = <
  TData = UserApiServiceusersControllerCreateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: CreateUserDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: CreateUserDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      UserApiService.usersControllerCreate(
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type UserApiServiceUsersControllerFindAllDefaultResponse = Awaited<
  ReturnType<typeof UserApiService.usersControllerFindAll>
>;
export type UserApiServiceUsersControllerFindAllQueryResult<
  TData = UserApiServiceUsersControllerFindAllDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useUserApiServiceUsersControllerFindAllKey =
  "UserApiServiceUsersControllerFindAll";
export const useUserApiServiceUsersControllerFindAll = <
  TData = UserApiServiceUsersControllerFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    page,
    pageSize,
  }: {
    page: number;
    pageSize: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useUserApiServiceUsersControllerFindAllKey,
      ...(queryKey ?? [{ page, pageSize }]),
    ],
    queryFn: () =>
      UserApiService.usersControllerFindAll(page, pageSize) as TData,
    ...options,
  });
export type UserApiServiceUsersControllerFindOneDefaultResponse = Awaited<
  ReturnType<typeof UserApiService.usersControllerFindOne>
>;
export type UserApiServiceUsersControllerFindOneQueryResult<
  TData = UserApiServiceUsersControllerFindOneDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useUserApiServiceUsersControllerFindOneKey =
  "UserApiServiceUsersControllerFindOne";
export const useUserApiServiceUsersControllerFindOne = <
  TData = UserApiServiceUsersControllerFindOneDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [useUserApiServiceUsersControllerFindOneKey, ...(queryKey ?? [])],
    queryFn: () => UserApiService.usersControllerFindOne() as TData,
    ...options,
  });
export type UserApiServiceusersControllerUpdateMutationResult = Awaited<
  ReturnType<typeof UserApiService.usersControllerUpdate>
>;
export const useUserApiServiceUsersControllerUpdate = <
  TData = UserApiServiceusersControllerUpdateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
        requestBody: UpdateUserDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
      requestBody: UpdateUserDto;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      UserApiService.usersControllerUpdate(
        id,
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type UserApiServiceusersControllerRemoveMutationResult = Awaited<
  ReturnType<typeof UserApiService.usersControllerRemove>
>;
export const useUserApiServiceUsersControllerRemove = <
  TData = UserApiServiceusersControllerRemoveMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      UserApiService.usersControllerRemove(id) as unknown as Promise<TData>,
    ...options,
  });
export type UserApiServiceUsersControllerDashboardDefaultResponse = Awaited<
  ReturnType<typeof UserApiService.usersControllerDashboard>
>;
export type UserApiServiceUsersControllerDashboardQueryResult<
  TData = UserApiServiceUsersControllerDashboardDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useUserApiServiceUsersControllerDashboardKey =
  "UserApiServiceUsersControllerDashboard";
export const useUserApiServiceUsersControllerDashboard = <
  TData = UserApiServiceUsersControllerDashboardDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useUserApiServiceUsersControllerDashboardKey,
      ...(queryKey ?? []),
    ],
    queryFn: () => UserApiService.usersControllerDashboard() as TData,
    ...options,
  });
export type ProfileApiServiceProfileControllerProfileDefaultResponse = Awaited<
  ReturnType<typeof ProfileApiService.profileControllerProfile>
>;
export type ProfileApiServiceProfileControllerProfileQueryResult<
  TData = ProfileApiServiceProfileControllerProfileDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useProfileApiServiceProfileControllerProfileKey =
  "ProfileApiServiceProfileControllerProfile";
export const useProfileApiServiceProfileControllerProfile = <
  TData = ProfileApiServiceProfileControllerProfileDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useProfileApiServiceProfileControllerProfileKey,
      ...(queryKey ?? []),
    ],
    queryFn: () => ProfileApiService.profileControllerProfile() as TData,
    ...options,
  });
export type ProfileApiServiceprofileControllerUpdateProfileMutationResult =
  Awaited<ReturnType<typeof ProfileApiService.profileControllerUpdateProfile>>;
export const useProfileApiServiceProfileControllerUpdateProfile = <
  TData = ProfileApiServiceprofileControllerUpdateProfileMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: UpdateProfileDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: UpdateProfileDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      ProfileApiService.profileControllerUpdateProfile(
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type PaymentApiServicePaymentControllerGetFactorDefaultResponse =
  Awaited<ReturnType<typeof PaymentApiService.paymentControllerGetFactor>>;
export type PaymentApiServicePaymentControllerGetFactorQueryResult<
  TData = PaymentApiServicePaymentControllerGetFactorDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const usePaymentApiServicePaymentControllerGetFactorKey =
  "PaymentApiServicePaymentControllerGetFactor";
export const usePaymentApiServicePaymentControllerGetFactor = <
  TData = PaymentApiServicePaymentControllerGetFactorDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    productType,
    productId,
    discount,
  }: {
    productType: "hamtashow" | "hamtapitch" | "hamtayab" | "class";
    productId?: string;
    discount?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      usePaymentApiServicePaymentControllerGetFactorKey,
      ...(queryKey ?? [{ productType, productId, discount }]),
    ],
    queryFn: () =>
      PaymentApiService.paymentControllerGetFactor(
        productType,
        productId,
        discount
      ) as TData,
    ...options,
  });
export type PaymentApiServicePaymentControllerGetAllFactorDefaultResponse =
  Awaited<ReturnType<typeof PaymentApiService.paymentControllerGetAllFactor>>;
export type PaymentApiServicePaymentControllerGetAllFactorQueryResult<
  TData = PaymentApiServicePaymentControllerGetAllFactorDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const usePaymentApiServicePaymentControllerGetAllFactorKey =
  "PaymentApiServicePaymentControllerGetAllFactor";
export const usePaymentApiServicePaymentControllerGetAllFactor = <
  TData = PaymentApiServicePaymentControllerGetAllFactorDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    status,
  }: {
    status?: "paid" | "unpaid";
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      usePaymentApiServicePaymentControllerGetAllFactorKey,
      ...(queryKey ?? [{ status }]),
    ],
    queryFn: () =>
      PaymentApiService.paymentControllerGetAllFactor(status) as TData,
    ...options,
  });
export type PaymentApiServicepaymentControllerRequestPaymentMutationResult =
  Awaited<ReturnType<typeof PaymentApiService.paymentControllerRequestPayment>>;
export const usePaymentApiServicePaymentControllerRequestPayment = <
  TData = PaymentApiServicepaymentControllerRequestPaymentMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: CreateFactorDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: CreateFactorDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      PaymentApiService.paymentControllerRequestPayment(
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type PaymentApiServicePaymentControllerPaymentResponseDefaultResponse =
  Awaited<
    ReturnType<typeof PaymentApiService.paymentControllerPaymentResponse>
  >;
export type PaymentApiServicePaymentControllerPaymentResponseQueryResult<
  TData = PaymentApiServicePaymentControllerPaymentResponseDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const usePaymentApiServicePaymentControllerPaymentResponseKey =
  "PaymentApiServicePaymentControllerPaymentResponse";
export const usePaymentApiServicePaymentControllerPaymentResponse = <
  TData = PaymentApiServicePaymentControllerPaymentResponseDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    authority,
  }: {
    authority: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      usePaymentApiServicePaymentControllerPaymentResponseKey,
      ...(queryKey ?? [{ authority }]),
    ],
    queryFn: () =>
      PaymentApiService.paymentControllerPaymentResponse(authority) as TData,
    ...options,
  });
export type NewsApiServicenewsControllerCreateMutationResult = Awaited<
  ReturnType<typeof NewsApiService.newsControllerCreate>
>;
export const useNewsApiServiceNewsControllerCreate = <
  TData = NewsApiServicenewsControllerCreateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        formData: CreateNewsDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      formData: CreateNewsDto;
    },
    TContext
  >({
    mutationFn: ({ formData }) =>
      NewsApiService.newsControllerCreate(
        formData
      ) as unknown as Promise<TData>,
    ...options,
  });
export type NewsApiServiceNewsControllerFindAllDefaultResponse = Awaited<
  ReturnType<typeof NewsApiService.newsControllerFindAll>
>;
export type NewsApiServiceNewsControllerFindAllQueryResult<
  TData = NewsApiServiceNewsControllerFindAllDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useNewsApiServiceNewsControllerFindAllKey =
  "NewsApiServiceNewsControllerFindAll";
export const useNewsApiServiceNewsControllerFindAll = <
  TData = NewsApiServiceNewsControllerFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [useNewsApiServiceNewsControllerFindAllKey, ...(queryKey ?? [])],
    queryFn: () => NewsApiService.newsControllerFindAll() as TData,
    ...options,
  });
export type NewsApiServiceNewsControllerFindOneDefaultResponse = Awaited<
  ReturnType<typeof NewsApiService.newsControllerFindOne>
>;
export type NewsApiServiceNewsControllerFindOneQueryResult<
  TData = NewsApiServiceNewsControllerFindOneDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useNewsApiServiceNewsControllerFindOneKey =
  "NewsApiServiceNewsControllerFindOne";
export const useNewsApiServiceNewsControllerFindOne = <
  TData = NewsApiServiceNewsControllerFindOneDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    slug,
  }: {
    slug: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useNewsApiServiceNewsControllerFindOneKey,
      ...(queryKey ?? [{ slug }]),
    ],
    queryFn: () => NewsApiService.newsControllerFindOne(slug) as TData,
    ...options,
  });
export type NewsApiServicenewsControllerSoftDeleteMutationResult = Awaited<
  ReturnType<typeof NewsApiService.newsControllerSoftDelete>
>;
export const useNewsApiServiceNewsControllerSoftDelete = <
  TData = NewsApiServicenewsControllerSoftDeleteMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      NewsApiService.newsControllerSoftDelete(id) as unknown as Promise<TData>,
    ...options,
  });
export type NewsApiServicenewsControllerUpdateMutationResult = Awaited<
  ReturnType<typeof NewsApiService.newsControllerUpdate>
>;
export const useNewsApiServiceNewsControllerUpdate = <
  TData = NewsApiServicenewsControllerUpdateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
        formData: UpdateNewsDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
      formData: UpdateNewsDto;
    },
    TContext
  >({
    mutationFn: ({ id, formData }) =>
      NewsApiService.newsControllerUpdate(
        id,
        formData
      ) as unknown as Promise<TData>,
    ...options,
  });
export type LoginApiServiceauthControllerGetOtpMutationResult = Awaited<
  ReturnType<typeof LoginApiService.authControllerGetOtp>
>;
export const useLoginApiServiceAuthControllerGetOtp = <
  TData = LoginApiServiceauthControllerGetOtpMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: GetOtpDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: GetOtpDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      LoginApiService.authControllerGetOtp(
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type LoginApiServiceauthControllerCheckOtpMutationResult = Awaited<
  ReturnType<typeof LoginApiService.authControllerCheckOtp>
>;
export const useLoginApiServiceAuthControllerCheckOtp = <
  TData = LoginApiServiceauthControllerCheckOtpMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: CheckOtpDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: CheckOtpDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      LoginApiService.authControllerCheckOtp(
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type LoginApiServiceauthControllerLogoutMutationResult = Awaited<
  ReturnType<typeof LoginApiService.authControllerLogout>
>;
export const useLoginApiServiceAuthControllerLogout = <
  TData = LoginApiServiceauthControllerLogoutMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<TData, TError, void, TContext>,
    "mutationFn"
  >
) =>
  useMutation<TData, TError, void, TContext>({
    mutationFn: () =>
      LoginApiService.authControllerLogout() as unknown as Promise<TData>,
    ...options,
  });
export type HamtayabApiServicehamtayabControllerCreateMutationResult = Awaited<
  ReturnType<typeof HamtayabApiService.hamtayabControllerCreate>
>;
export const useHamtayabApiServiceHamtayabControllerCreate = <
  TData = HamtayabApiServicehamtayabControllerCreateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        formData: CreateHamtayabDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      formData: CreateHamtayabDto;
    },
    TContext
  >({
    mutationFn: ({ formData }) =>
      HamtayabApiService.hamtayabControllerCreate(
        formData
      ) as unknown as Promise<TData>,
    ...options,
  });
export type HamtayabApiServiceHamtayabControllerFindAllDefaultResponse =
  Awaited<ReturnType<typeof HamtayabApiService.hamtayabControllerFindAll>>;
export type HamtayabApiServiceHamtayabControllerFindAllQueryResult<
  TData = HamtayabApiServiceHamtayabControllerFindAllDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useHamtayabApiServiceHamtayabControllerFindAllKey =
  "HamtayabApiServiceHamtayabControllerFindAll";
export const useHamtayabApiServiceHamtayabControllerFindAll = <
  TData = HamtayabApiServiceHamtayabControllerFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useHamtayabApiServiceHamtayabControllerFindAllKey,
      ...(queryKey ?? []),
    ],
    queryFn: () => HamtayabApiService.hamtayabControllerFindAll() as TData,
    ...options,
  });
export type HamtayabApiServiceHamtayabControllerExportDefaultResponse = Awaited<
  ReturnType<typeof HamtayabApiService.hamtayabControllerExport>
>;
export type HamtayabApiServiceHamtayabControllerExportQueryResult<
  TData = HamtayabApiServiceHamtayabControllerExportDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useHamtayabApiServiceHamtayabControllerExportKey =
  "HamtayabApiServiceHamtayabControllerExport";
export const useHamtayabApiServiceHamtayabControllerExport = <
  TData = HamtayabApiServiceHamtayabControllerExportDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useHamtayabApiServiceHamtayabControllerExportKey,
      ...(queryKey ?? []),
    ],
    queryFn: () => HamtayabApiService.hamtayabControllerExport() as TData,
    ...options,
  });
export type HamtayabApiServiceHamtayabControllerFindOneDefaultResponse =
  Awaited<ReturnType<typeof HamtayabApiService.hamtayabControllerFindOne>>;
export type HamtayabApiServiceHamtayabControllerFindOneQueryResult<
  TData = HamtayabApiServiceHamtayabControllerFindOneDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useHamtayabApiServiceHamtayabControllerFindOneKey =
  "HamtayabApiServiceHamtayabControllerFindOne";
export const useHamtayabApiServiceHamtayabControllerFindOne = <
  TData = HamtayabApiServiceHamtayabControllerFindOneDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    id,
  }: {
    id: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useHamtayabApiServiceHamtayabControllerFindOneKey,
      ...(queryKey ?? [{ id }]),
    ],
    queryFn: () => HamtayabApiService.hamtayabControllerFindOne(id) as TData,
    ...options,
  });
export type HamtayabApiServicehamtayabControllerUpdateMutationResult = Awaited<
  ReturnType<typeof HamtayabApiService.hamtayabControllerUpdate>
>;
export const useHamtayabApiServiceHamtayabControllerUpdate = <
  TData = HamtayabApiServicehamtayabControllerUpdateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
        requestBody: UpdateHamtayabDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
      requestBody: UpdateHamtayabDto;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      HamtayabApiService.hamtayabControllerUpdate(
        id,
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type EventsApiHamtashowServicehamtashowControllerCreateMutationResult =
  Awaited<
    ReturnType<typeof EventsApiHamtashowService.hamtashowControllerCreate>
  >;
export const useEventsApiHamtashowServiceHamtashowControllerCreate = <
  TData = EventsApiHamtashowServicehamtashowControllerCreateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        formData: CreateHamtashowDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      formData: CreateHamtashowDto;
    },
    TContext
  >({
    mutationFn: ({ formData }) =>
      EventsApiHamtashowService.hamtashowControllerCreate(
        formData
      ) as unknown as Promise<TData>,
    ...options,
  });
export type EventsApiHamtashowServiceHamtashowControllerFindAllDefaultResponse =
  Awaited<
    ReturnType<typeof EventsApiHamtashowService.hamtashowControllerFindAll>
  >;
export type EventsApiHamtashowServiceHamtashowControllerFindAllQueryResult<
  TData = EventsApiHamtashowServiceHamtashowControllerFindAllDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useEventsApiHamtashowServiceHamtashowControllerFindAllKey =
  "EventsApiHamtashowServiceHamtashowControllerFindAll";
export const useEventsApiHamtashowServiceHamtashowControllerFindAll = <
  TData = EventsApiHamtashowServiceHamtashowControllerFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useEventsApiHamtashowServiceHamtashowControllerFindAllKey,
      ...(queryKey ?? []),
    ],
    queryFn: () =>
      EventsApiHamtashowService.hamtashowControllerFindAll() as TData,
    ...options,
  });
export type EventsApiHamtashowServicehamtashowControllerUpdateMutationResult =
  Awaited<
    ReturnType<typeof EventsApiHamtashowService.hamtashowControllerUpdate>
  >;
export const useEventsApiHamtashowServiceHamtashowControllerUpdate = <
  TData = EventsApiHamtashowServicehamtashowControllerUpdateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: any;
        requestBody: UpdateHamtashowDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: any;
      requestBody: UpdateHamtashowDto;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      EventsApiHamtashowService.hamtashowControllerUpdate(
        id,
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type EventsApiHamtashowServiceHamtashowControllerExportDefaultResponse =
  Awaited<
    ReturnType<typeof EventsApiHamtashowService.hamtashowControllerExport>
  >;
export type EventsApiHamtashowServiceHamtashowControllerExportQueryResult<
  TData = EventsApiHamtashowServiceHamtashowControllerExportDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useEventsApiHamtashowServiceHamtashowControllerExportKey =
  "EventsApiHamtashowServiceHamtashowControllerExport";
export const useEventsApiHamtashowServiceHamtashowControllerExport = <
  TData = EventsApiHamtashowServiceHamtashowControllerExportDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useEventsApiHamtashowServiceHamtashowControllerExportKey,
      ...(queryKey ?? []),
    ],
    queryFn: () =>
      EventsApiHamtashowService.hamtashowControllerExport() as TData,
    ...options,
  });
export type EventsApiHamtapitchServicehamtapitchControllerCreateMutationResult =
  Awaited<
    ReturnType<typeof EventsApiHamtapitchService.hamtapitchControllerCreate>
  >;
export const useEventsApiHamtapitchServiceHamtapitchControllerCreate = <
  TData = EventsApiHamtapitchServicehamtapitchControllerCreateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        formData: CreateHamtapitchDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      formData: CreateHamtapitchDto;
    },
    TContext
  >({
    mutationFn: ({ formData }) =>
      EventsApiHamtapitchService.hamtapitchControllerCreate(
        formData
      ) as unknown as Promise<TData>,
    ...options,
  });
export type EventsApiHamtapitchServiceHamtapitchControllerFindAllDefaultResponse =
  Awaited<
    ReturnType<typeof EventsApiHamtapitchService.hamtapitchControllerFindAll>
  >;
export type EventsApiHamtapitchServiceHamtapitchControllerFindAllQueryResult<
  TData = EventsApiHamtapitchServiceHamtapitchControllerFindAllDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useEventsApiHamtapitchServiceHamtapitchControllerFindAllKey =
  "EventsApiHamtapitchServiceHamtapitchControllerFindAll";
export const useEventsApiHamtapitchServiceHamtapitchControllerFindAll = <
  TData = EventsApiHamtapitchServiceHamtapitchControllerFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useEventsApiHamtapitchServiceHamtapitchControllerFindAllKey,
      ...(queryKey ?? []),
    ],
    queryFn: () =>
      EventsApiHamtapitchService.hamtapitchControllerFindAll() as TData,
    ...options,
  });
export type EventsApiHamtapitchServiceHamtapitchControllerExportDefaultResponse =
  Awaited<
    ReturnType<typeof EventsApiHamtapitchService.hamtapitchControllerExport>
  >;
export type EventsApiHamtapitchServiceHamtapitchControllerExportQueryResult<
  TData = EventsApiHamtapitchServiceHamtapitchControllerExportDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useEventsApiHamtapitchServiceHamtapitchControllerExportKey =
  "EventsApiHamtapitchServiceHamtapitchControllerExport";
export const useEventsApiHamtapitchServiceHamtapitchControllerExport = <
  TData = EventsApiHamtapitchServiceHamtapitchControllerExportDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useEventsApiHamtapitchServiceHamtapitchControllerExportKey,
      ...(queryKey ?? []),
    ],
    queryFn: () =>
      EventsApiHamtapitchService.hamtapitchControllerExport() as TData,
    ...options,
  });
export type EventsApiHamtapitchServicehamtapitchControllerUpdateMutationResult =
  Awaited<
    ReturnType<typeof EventsApiHamtapitchService.hamtapitchControllerUpdate>
  >;
export const useEventsApiHamtapitchServiceHamtapitchControllerUpdate = <
  TData = EventsApiHamtapitchServicehamtapitchControllerUpdateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: any;
        requestBody: UpdateHamtapitchDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: any;
      requestBody: UpdateHamtapitchDto;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      EventsApiHamtapitchService.hamtapitchControllerUpdate(
        id,
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type DiscountApiServicediscountControllerCreateMutationResult = Awaited<
  ReturnType<typeof DiscountApiService.discountControllerCreate>
>;
export const useDiscountApiServiceDiscountControllerCreate = <
  TData = DiscountApiServicediscountControllerCreateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: CreateDiscountDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: CreateDiscountDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      DiscountApiService.discountControllerCreate(
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type DiscountApiServiceDiscountControllerFindAllDefaultResponse =
  Awaited<ReturnType<typeof DiscountApiService.discountControllerFindAll>>;
export type DiscountApiServiceDiscountControllerFindAllQueryResult<
  TData = DiscountApiServiceDiscountControllerFindAllDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useDiscountApiServiceDiscountControllerFindAllKey =
  "DiscountApiServiceDiscountControllerFindAll";
export const useDiscountApiServiceDiscountControllerFindAll = <
  TData = DiscountApiServiceDiscountControllerFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useDiscountApiServiceDiscountControllerFindAllKey,
      ...(queryKey ?? []),
    ],
    queryFn: () => DiscountApiService.discountControllerFindAll() as TData,
    ...options,
  });
export type DiscountApiServicediscountControllerUpdateMutationResult = Awaited<
  ReturnType<typeof DiscountApiService.discountControllerUpdate>
>;
export const useDiscountApiServiceDiscountControllerUpdate = <
  TData = DiscountApiServicediscountControllerUpdateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: UpdateDiscountDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: UpdateDiscountDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      DiscountApiService.discountControllerUpdate(
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type DiscountApiServicediscountControllerRemoveMutationResult = Awaited<
  ReturnType<typeof DiscountApiService.discountControllerRemove>
>;
export const useDiscountApiServiceDiscountControllerRemove = <
  TData = DiscountApiServicediscountControllerRemoveMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: string;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      DiscountApiService.discountControllerRemove(
        id
      ) as unknown as Promise<TData>,
    ...options,
  });
export type DefaultServiceAppControllerGetVersionDefaultResponse = Awaited<
  ReturnType<typeof DefaultService.appControllerGetVersion>
>;
export type DefaultServiceAppControllerGetVersionQueryResult<
  TData = DefaultServiceAppControllerGetVersionDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useDefaultServiceAppControllerGetVersionKey =
  "DefaultServiceAppControllerGetVersion";
export const useDefaultServiceAppControllerGetVersion = <
  TData = DefaultServiceAppControllerGetVersionDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useDefaultServiceAppControllerGetVersionKey,
      ...(queryKey ?? []),
    ],
    queryFn: () => DefaultService.appControllerGetVersion() as TData,
    ...options,
  });
export type ClassApiServiceclassControllerCreateMutationResult = Awaited<
  ReturnType<typeof ClassApiService.classControllerCreate>
>;
export const useClassApiServiceClassControllerCreate = <
  TData = ClassApiServiceclassControllerCreateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        formData: CreateClassDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      formData: CreateClassDto;
    },
    TContext
  >({
    mutationFn: ({ formData }) =>
      ClassApiService.classControllerCreate(
        formData
      ) as unknown as Promise<TData>,
    ...options,
  });
export type ClassApiServiceClassControllerFindAllDefaultResponse = Awaited<
  ReturnType<typeof ClassApiService.classControllerFindAll>
>;
export type ClassApiServiceClassControllerFindAllQueryResult<
  TData = ClassApiServiceClassControllerFindAllDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useClassApiServiceClassControllerFindAllKey =
  "ClassApiServiceClassControllerFindAll";
export const useClassApiServiceClassControllerFindAll = <
  TData = ClassApiServiceClassControllerFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useClassApiServiceClassControllerFindAllKey,
      ...(queryKey ?? []),
    ],
    queryFn: () => ClassApiService.classControllerFindAll() as TData,
    ...options,
  });
export type ClassApiServiceClassControllerFindClassByCategoryNameDefaultResponse =
  Awaited<
    ReturnType<typeof ClassApiService.classControllerFindClassByCategoryName>
  >;
export type ClassApiServiceClassControllerFindClassByCategoryNameQueryResult<
  TData = ClassApiServiceClassControllerFindClassByCategoryNameDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useClassApiServiceClassControllerFindClassByCategoryNameKey =
  "ClassApiServiceClassControllerFindClassByCategoryName";
export const useClassApiServiceClassControllerFindClassByCategoryName = <
  TData = ClassApiServiceClassControllerFindClassByCategoryNameDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    categoryName,
  }: {
    categoryName: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useClassApiServiceClassControllerFindClassByCategoryNameKey,
      ...(queryKey ?? [{ categoryName }]),
    ],
    queryFn: () =>
      ClassApiService.classControllerFindClassByCategoryName(
        categoryName
      ) as TData,
    ...options,
  });
export type ClassApiServiceClassControllerGetUsersByClassDefaultResponse =
  Awaited<ReturnType<typeof ClassApiService.classControllerGetUsersByClass>>;
export type ClassApiServiceClassControllerGetUsersByClassQueryResult<
  TData = ClassApiServiceClassControllerGetUsersByClassDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useClassApiServiceClassControllerGetUsersByClassKey =
  "ClassApiServiceClassControllerGetUsersByClass";
export const useClassApiServiceClassControllerGetUsersByClass = <
  TData = ClassApiServiceClassControllerGetUsersByClassDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    classId,
  }: {
    classId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useClassApiServiceClassControllerGetUsersByClassKey,
      ...(queryKey ?? [{ classId }]),
    ],
    queryFn: () =>
      ClassApiService.classControllerGetUsersByClass(classId) as TData,
    ...options,
  });
export type ClassApiServiceClassControllerGetUsersExcelByClassDefaultResponse =
  Awaited<
    ReturnType<typeof ClassApiService.classControllerGetUsersExcelByClass>
  >;
export type ClassApiServiceClassControllerGetUsersExcelByClassQueryResult<
  TData = ClassApiServiceClassControllerGetUsersExcelByClassDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useClassApiServiceClassControllerGetUsersExcelByClassKey =
  "ClassApiServiceClassControllerGetUsersExcelByClass";
export const useClassApiServiceClassControllerGetUsersExcelByClass = <
  TData = ClassApiServiceClassControllerGetUsersExcelByClassDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    classId,
  }: {
    classId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useClassApiServiceClassControllerGetUsersExcelByClassKey,
      ...(queryKey ?? [{ classId }]),
    ],
    queryFn: () =>
      ClassApiService.classControllerGetUsersExcelByClass(classId) as TData,
    ...options,
  });
export type ClassApiServiceClassControllerFindOneDefaultResponse = Awaited<
  ReturnType<typeof ClassApiService.classControllerFindOne>
>;
export type ClassApiServiceClassControllerFindOneQueryResult<
  TData = ClassApiServiceClassControllerFindOneDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useClassApiServiceClassControllerFindOneKey =
  "ClassApiServiceClassControllerFindOne";
export const useClassApiServiceClassControllerFindOne = <
  TData = ClassApiServiceClassControllerFindOneDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    id,
  }: {
    id: any;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useClassApiServiceClassControllerFindOneKey,
      ...(queryKey ?? [{ id }]),
    ],
    queryFn: () => ClassApiService.classControllerFindOne(id) as TData,
    ...options,
  });
export type ClassApiServiceclassControllerUpdateMutationResult = Awaited<
  ReturnType<typeof ClassApiService.classControllerUpdate>
>;
export const useClassApiServiceClassControllerUpdate = <
  TData = ClassApiServiceclassControllerUpdateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: any;
        requestBody: UpdateClassDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: any;
      requestBody: UpdateClassDto;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      ClassApiService.classControllerUpdate(
        id,
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type ClassApiServiceclassControllerRemoveMutationResult = Awaited<
  ReturnType<typeof ClassApiService.classControllerRemove>
>;
export const useClassApiServiceClassControllerRemove = <
  TData = ClassApiServiceclassControllerRemoveMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: any;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: any;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      ClassApiService.classControllerRemove(id) as unknown as Promise<TData>,
    ...options,
  });
export type BoothApiServicepanelControllerCreateMutationResult = Awaited<
  ReturnType<typeof BoothApiService.panelControllerCreate>
>;
export const useBoothApiServicePanelControllerCreate = <
  TData = BoothApiServicepanelControllerCreateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody: CreateBoothDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody: CreateBoothDto;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      BoothApiService.panelControllerCreate(
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type BoothApiServicePanelControllerFindAllDefaultResponse = Awaited<
  ReturnType<typeof BoothApiService.panelControllerFindAll>
>;
export type BoothApiServicePanelControllerFindAllQueryResult<
  TData = BoothApiServicePanelControllerFindAllDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useBoothApiServicePanelControllerFindAllKey =
  "BoothApiServicePanelControllerFindAll";
export const useBoothApiServicePanelControllerFindAll = <
  TData = BoothApiServicePanelControllerFindAllDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [
      useBoothApiServicePanelControllerFindAllKey,
      ...(queryKey ?? []),
    ],
    queryFn: () => BoothApiService.panelControllerFindAll() as TData,
    ...options,
  });
export type BoothApiServicePanelControllerExportDefaultResponse = Awaited<
  ReturnType<typeof BoothApiService.panelControllerExport>
>;
export type BoothApiServicePanelControllerExportQueryResult<
  TData = BoothApiServicePanelControllerExportDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useBoothApiServicePanelControllerExportKey =
  "BoothApiServicePanelControllerExport";
export const useBoothApiServicePanelControllerExport = <
  TData = BoothApiServicePanelControllerExportDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  >
) =>
  useQuery<TData, TError>({
    queryKey: [useBoothApiServicePanelControllerExportKey, ...(queryKey ?? [])],
    queryFn: () => BoothApiService.panelControllerExport() as TData,
    ...options,
  });
export type BoothApiServicepanelControllerUpdateMutationResult = Awaited<
  ReturnType<typeof BoothApiService.panelControllerUpdate>
>;
export const useBoothApiServicePanelControllerUpdate = <
  TData = BoothApiServicepanelControllerUpdateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: any;
        requestBody: UpdateBoothDto;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: any;
      requestBody: UpdateBoothDto;
    },
    TContext
  >({
    mutationFn: ({ id, requestBody }) =>
      BoothApiService.panelControllerUpdate(
        id,
        requestBody
      ) as unknown as Promise<TData>,
    ...options,
  });
export type BoothApiServicepanelControllerRemoveMutationResult = Awaited<
  ReturnType<typeof BoothApiService.panelControllerRemove>
>;
export const useBoothApiServicePanelControllerRemove = <
  TData = BoothApiServicepanelControllerRemoveMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        id: any;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      id: any;
    },
    TContext
  >({
    mutationFn: ({ id }) =>
      BoothApiService.panelControllerRemove(id) as unknown as Promise<TData>,
    ...options,
  });
