/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateDiscountDto = {
    name?: string;
    quantity?: number;
    type?: UpdateDiscountDto.type;
    productType?: UpdateDiscountDto.productType;
    amount?: number;
};

export namespace UpdateDiscountDto {

    export enum type {
        PERCENTAGE = 'percentage',
        CONSTANT = 'constant',
    }

    export enum productType {
        HAMTASHOW = 'hamtashow',
        HAMTAPITCH = 'hamtapitch',
        HAMTAYAB = 'hamtayab',
        CLASS = 'class',
    }


}

