/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateClassDto } from '../models/CreateClassDto';
import type { UpdateClassDto } from '../models/UpdateClassDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClassApiService {

    /**
     * @param formData
     * @returns any
     * @throws ApiError
     */
    public static classControllerCreate(
        formData: CreateClassDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/panel/class',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static classControllerFindAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/panel/class',
        });
    }

    /**
     * @param categoryName
     * @returns any
     * @throws ApiError
     */
    public static classControllerFindClassByCategoryName(
        categoryName: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/panel/class/{categoryName}',
            path: {
                'categoryName': categoryName,
            },
        });
    }

    /**
     * @param classId
     * @returns any
     * @throws ApiError
     */
    public static classControllerGetUsersByClass(
        classId: string,
    ): CancelablePromise<Array<Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/panel/class/class-users/{classId}',
            path: {
                'classId': classId,
            },
        });
    }

    /**
     * @param classId
     * @returns any
     * @throws ApiError
     */
    public static classControllerGetUsersExcelByClass(
        classId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/panel/class/class-users/excel/{classId}',
            path: {
                'classId': classId,
            },
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static classControllerFindOne(
        id: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/panel/class/single/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static classControllerUpdate(
        id: any,
        requestBody: UpdateClassDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/panel/class/{id}',
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
    public static classControllerRemove(
        id: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/panel/class/{id}',
            path: {
                'id': id,
            },
        });
    }

}
