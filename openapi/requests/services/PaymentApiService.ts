/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFactorDto } from '../models/CreateFactorDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaymentApiService {

    /**
     * @param productType
     * @param productId
     * @param discount
     * @returns any Returns the payment factor
     * @throws ApiError
     */
    public static paymentControllerGetFactor(
        productType: 'hamtashow' | 'hamtapitch' | 'hamtayab' | 'class',
        productId: string = '',
        discount: string = '',
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment/factor',
            query: {
                'productType': productType,
                'productId': productId,
                'discount': discount,
            },
        });
    }

    /**
     * @param status
     * @returns any Returns all payment factors
     * @throws ApiError
     */
    public static paymentControllerGetAllFactor(
        status?: 'paid' | 'unpaid',
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment/all-factor',
            query: {
                'status': status,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any Requests payment
     * @throws ApiError
     */
    public static paymentControllerRequestPayment(
        requestBody: CreateFactorDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment/checkout',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param authority
     * @returns any Returns payment response
     * @throws ApiError
     */
    public static paymentControllerPaymentResponse(
        authority: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment/response',
            query: {
                'Authority': authority,
            },
        });
    }

}
