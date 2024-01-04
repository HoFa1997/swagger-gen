/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoothInfo } from './BoothInfo';

export type CreateHamtashowDto = {
    personType: CreateHamtashowDto.personType;
    activityGroups: Array<string>;
    representatives: Array<string>;
    boothArray: Array<BoothInfo>;
    firstName?: string;
    lastName?: string;
    nationalCode?: string;
    companyName?: string;
    shenaseMelli?: string;
    codeSabt?: string;
    codeEghtesadi?: string;
    zipCode?: string;
    address?: string;
    path: Blob;
};

export namespace CreateHamtashowDto {

    export enum personType {
        HOGHOGHI = 'HOGHOGHI',
        HAGHIGHI = 'HAGHIGHI',
    }


}

