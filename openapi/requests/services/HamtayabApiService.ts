/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateHamtayabDto } from '../models/CreateHamtayabDto';
import type { UpdateHamtayabDto } from '../models/UpdateHamtayabDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HamtayabApiService {

    /**
     * @param formData
     * @returns any
     * @throws ApiError
     */
    public static hamtayabControllerCreate(
        formData: CreateHamtayabDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event/hamtayab',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static hamtayabControllerFindAll(): CancelablePromise<Array<Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event/hamtayab',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static hamtayabControllerExport(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event/hamtayab/export',
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static hamtayabControllerFindOne(
        id: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event/hamtayab/{id}',
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
    public static hamtayabControllerUpdate(
        id: string,
        requestBody: UpdateHamtayabDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/event/hamtayab/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
