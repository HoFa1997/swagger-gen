/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDiscountDto } from '../models/CreateDiscountDto';
import type { UpdateDiscountDto } from '../models/UpdateDiscountDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DiscountApiService {

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static discountControllerCreate(
        requestBody: CreateDiscountDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/discount',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static discountControllerFindAll(): CancelablePromise<Array<Record<string, any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/discount',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static discountControllerUpdate(
        requestBody: UpdateDiscountDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/discount/{id}',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static discountControllerRemove(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/discount/{id}',
            path: {
                'id': id,
            },
        });
    }

}
