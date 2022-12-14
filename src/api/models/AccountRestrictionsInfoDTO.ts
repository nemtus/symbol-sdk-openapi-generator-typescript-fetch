/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AccountRestrictionsDTO,
    AccountRestrictionsDTOFromJSON,
    AccountRestrictionsDTOFromJSONTyped,
    AccountRestrictionsDTOToJSON,
} from './AccountRestrictionsDTO';

/**
 * 
 * @export
 * @interface AccountRestrictionsInfoDTO
 */
export interface AccountRestrictionsInfoDTO {
    /**
     * 
     * @type {AccountRestrictionsDTO}
     * @memberof AccountRestrictionsInfoDTO
     */
    accountRestrictions: AccountRestrictionsDTO;
}

export function AccountRestrictionsInfoDTOFromJSON(json: any): AccountRestrictionsInfoDTO {
    return AccountRestrictionsInfoDTOFromJSONTyped(json, false);
}

export function AccountRestrictionsInfoDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRestrictionsInfoDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountRestrictions': AccountRestrictionsDTOFromJSON(json['accountRestrictions']),
    };
}

export function AccountRestrictionsInfoDTOToJSON(value?: AccountRestrictionsInfoDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountRestrictions': AccountRestrictionsDTOToJSON(value.accountRestrictions),
    };
}

