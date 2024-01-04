/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateBoothDto = {
    typeOfParticipation: string;
    type: CreateBoothDto.type;
    earlyPrice: number;
    earlyDate: string;
    normalPrice: number;
    normalDate: string;
    latePrice: number;
    description: string;
};

export namespace CreateBoothDto {

    export enum type {
        NUMERICAL = 'numerical',
        METER = 'meter',
    }


}

