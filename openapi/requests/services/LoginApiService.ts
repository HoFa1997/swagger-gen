/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckOtpDto } from '../models/CheckOtpDto';
import type { GetOtpDto } from '../models/GetOtpDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LoginApiService {

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static authControllerGetOtp(
        requestBody: GetOtpDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/get-otp',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static authControllerCheckOtp(
        requestBody: CheckOtpDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/check-otp',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static authControllerLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/logout',
        });
    }

}
