/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateHamtayabDto = {
    personType?: UpdateHamtayabDto.personType;
    firstName?: string;
    representatives?: Array<string>;
    lastName?: string;
    nationalCode?: string;
    companyName?: string;
    shenaseMelli?: string;
    codeSabt?: string;
    codeEghtesadi?: string;
    zipCode?: string;
    address?: string;
    pitchFilePath?: Blob;
    teamFilePath?: Blob;
    status: UpdateHamtayabDto.status;
};

export namespace UpdateHamtayabDto {

    export enum personType {
        HOGHOGHI = 'HOGHOGHI',
        HAGHIGHI = 'HAGHIGHI',
    }

    export enum status {
        PENDING = 'PENDING',
        REJECT = 'REJECT',
        ACCEPT = 'ACCEPT',
    }


}

