/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ObjectId } from './ObjectId';

export type CreateFactorDto = {
    productId: ObjectId;
    productType: CreateFactorDto.productType;
    discount?: string;
    callback_url: string;
};

export namespace CreateFactorDto {

    export enum productType {
        HAMTASHOW = 'hamtashow',
        HAMTAPITCH = 'hamtapitch',
        HAMTAYAB = 'hamtayab',
        CLASS = 'class',
    }


}

