/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateNewsDto } from '../models/CreateNewsDto';
import type { UpdateNewsDto } from '../models/UpdateNewsDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NewsApiService {

    /**
     * @param formData
     * @returns any
     * @throws ApiError
     */
    public static newsControllerCreate(
        formData: CreateNewsDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/news',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static newsControllerFindAll(): CancelablePromise<Array<Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/news',
        });
    }

    /**
     * @param slug
     * @returns any
     * @throws ApiError
     */
    public static newsControllerFindOne(
        slug: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/news/{slug}',
            path: {
                'slug': slug,
            },
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static newsControllerSoftDelete(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/news/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param formData
     * @returns any
     * @throws ApiError
     */
    public static newsControllerUpdate(
        id: string,
        formData: UpdateNewsDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/news/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
