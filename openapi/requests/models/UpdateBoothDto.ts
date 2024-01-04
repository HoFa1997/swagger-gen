/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateBoothDto = {
    typeOfParticipation?: string;
    type?: UpdateBoothDto.type;
    earlyPrice?: number;
    earlyDate?: string;
    normalPrice?: number;
    normalDate?: string;
    latePrice?: number;
    description?: string;
};

export namespace UpdateBoothDto {

    export enum type {
        NUMERICAL = 'numerical',
        METER = 'meter',
    }


}

