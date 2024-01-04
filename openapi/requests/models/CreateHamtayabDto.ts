/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateHamtayabDto = {
    personType: CreateHamtayabDto.personType;
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

export namespace CreateHamtayabDto {

    export enum personType {
        HOGHOGHI = 'HOGHOGHI',
        HAGHIGHI = 'HAGHIGHI',
    }


}

