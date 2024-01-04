/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateHamtashowDto = {
    status: UpdateHamtashowDto.status;
    documentLink: {
        name?: string;
        link?: string;
    };
};

export namespace UpdateHamtashowDto {

    export enum status {
        PENDING = 'PENDING',
        UNPAID = 'UNPAID',
        REJECT = 'REJECT',
        PAID = 'PAID',
    }


}

