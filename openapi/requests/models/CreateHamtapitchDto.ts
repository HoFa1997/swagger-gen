/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateHamtapitchDto = {
    personType: CreateHamtapitchDto.personType;
    firstName?: string;
    representatives: Array<string>;
    lastName?: string;
    nationalCode?: string;
    companyName?: string;
    shenaseMelli?: string;
    codeSabt?: string;
    codeEghtesadi?: string;
    zipCode?: string;
    address?: string;
    pitchFilePath: Blob;
    teamFilePath: Blob;
};

export namespace CreateHamtapitchDto {

    export enum personType {
        HOGHOGHI = 'HOGHOGHI',
        HAGHIGHI = 'HAGHIGHI',
    }


}

