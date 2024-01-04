/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HeadlineInfoDto } from './HeadlineInfoDto';

export type UpdateClassDto = {
    name?: string;
    description?: string;
    classType?: UpdateClassDto.classType;
    category?: UpdateClassDto.category;
    earlyPrice?: number;
    normalPrice?: number;
    earlyDate?: string;
    startCourseDate?: string;
    endCourseDate?: string;
    address?: string;
    link?: string;
    banner?: Blob;
    quantity?: number;
    teacher?: Array<HeadlineInfoDto>;
    speaker?: Array<HeadlineInfoDto>;
    headline?: Array<HeadlineInfoDto>;
};

export namespace UpdateClassDto {

    export enum classType {
        ONLINE = 'online',
        PRESENT = 'present',
    }

    export enum category {
        HAMAYESH = 'hamayesh',
        HAMNESHAST = 'hamneshast',
        HAMAMOZ = 'hamamoz',
    }


}

