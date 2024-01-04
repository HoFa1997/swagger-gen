/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateProfileDto } from '../models/UpdateProfileDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProfileApiService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static profileControllerProfile(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/profile',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static profileControllerUpdateProfile(
        requestBody: UpdateProfileDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/profile',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
