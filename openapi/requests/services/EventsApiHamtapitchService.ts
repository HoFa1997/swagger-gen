/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateHamtapitchDto } from '../models/CreateHamtapitchDto';
import type { UpdateHamtapitchDto } from '../models/UpdateHamtapitchDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventsApiHamtapitchService {

    /**
     * @param formData
     * @returns any
     * @throws ApiError
     */
    public static hamtapitchControllerCreate(
        formData: CreateHamtapitchDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event/hamtapitch',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static hamtapitchControllerFindAll(): CancelablePromise<Array<Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event/hamtapitch',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static hamtapitchControllerExport(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event/hamtapitch/export',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static hamtapitchControllerUpdate(
        id: any,
        requestBody: UpdateHamtapitchDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/event/hamtapitch/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
