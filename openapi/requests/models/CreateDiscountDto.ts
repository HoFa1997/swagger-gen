/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateDiscountDto = {
    name: string;
    quantity: number;
    type: CreateDiscountDto.type;
    productType: CreateDiscountDto.productType;
    amount: number;
};

export namespace CreateDiscountDto {

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

