/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateHamtashowDto } from '../models/CreateHamtashowDto';
import type { UpdateHamtashowDto } from '../models/UpdateHamtashowDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventsApiHamtashowService {

    /**
     * @param formData
     * @returns any
     * @throws ApiError
     */
    public static hamtashowControllerCreate(
        formData: CreateHamtashowDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event/hamtashow',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static hamtashowControllerFindAll(): CancelablePromise<Array<Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event/hamtashow',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static hamtashowControllerUpdate(
        id: any,
        requestBody: UpdateHamtashowDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/event/hamtashow/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static hamtashowControllerExport(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event/hamtashow/export',
        });
    }

}
