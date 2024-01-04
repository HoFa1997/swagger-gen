/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateUserDto = {
    phone?: string;
    firstName?: string;
    lastName?: string;
    role?: UpdateUserDto.role;
};

export namespace UpdateUserDto {

    export enum role {
        ADMIN = 'ADMIN',
        MEMBER = 'MEMBER',
        HAMTA_SHOW_ADMIN = 'HAMTA_SHOW_ADMIN',
        HAMTA_PITCH_ADMIN = 'HAMTA_PITCH_ADMIN',
        HAMTA_YAB_ADMIN = 'HAMTA_YAB_ADMIN',
        HAMTA_CLASS_ADMIN = 'HAMTA_CLASS_ADMIN',
        NEWS_ADMIN = 'NEWS_ADMIN',
    }


}

