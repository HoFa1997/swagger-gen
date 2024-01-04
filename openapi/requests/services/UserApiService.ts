/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { UpdateUserDto } from '../models/UpdateUserDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserApiService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static usersControllerExport(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/panel/users/export',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static usersControllerCreate(
        requestBody: CreateUserDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/panel/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param page
     * @param pageSize
     * @returns any
     * @throws ApiError
     */
    public static usersControllerFindAll(
        page: number,
        pageSize: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/panel/users',
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static usersControllerFindOne(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/panel/users/{id}',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static usersControllerUpdate(
        id: string,
        requestBody: UpdateUserDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/panel/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static usersControllerRemove(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/panel/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static usersControllerDashboard(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/panel/users/users/dashboard',
        });
    }

}
