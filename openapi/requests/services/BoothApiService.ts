/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBoothDto } from '../models/CreateBoothDto';
import type { UpdateBoothDto } from '../models/UpdateBoothDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BoothApiService {

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static panelControllerCreate(
        requestBody: CreateBoothDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/panel/booth',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static panelControllerFindAll(): CancelablePromise<Array<Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/panel/booth',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static panelControllerExport(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/panel/booth/export',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static panelControllerUpdate(
        id: any,
        requestBody: UpdateBoothDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/panel/booth/{id}',
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
    public static panelControllerRemove(
        id: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/panel/booth/{id}',
            path: {
                'id': id,
            },
        });
    }

}
