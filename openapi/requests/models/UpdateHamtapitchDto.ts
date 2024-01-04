/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateHamtapitchDto = {
    status: UpdateHamtapitchDto.status;
    documentLink: {
        name?: string;
        link?: string;
    };
};

export namespace UpdateHamtapitchDto {

    export enum status {
        PENDING = 'PENDING',
        REJECT = 'REJECT',
        ACCEPT = 'ACCEPT',
    }


}

