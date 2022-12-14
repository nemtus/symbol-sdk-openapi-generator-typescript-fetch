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
    AccountLinkVotingKeyDTO,
    AccountLinkVotingKeyDTOFromJSON,
    AccountLinkVotingKeyDTOFromJSONTyped,
    AccountLinkVotingKeyDTOToJSON,
} from './AccountLinkVotingKeyDTO';

/**
 * 
 * @export
 * @interface AccountLinkVotingKeysDTO
 */
export interface AccountLinkVotingKeysDTO {
    /**
     * 
     * @type {Array<AccountLinkVotingKeyDTO>}
     * @memberof AccountLinkVotingKeysDTO
     */
    publicKeys: Array<AccountLinkVotingKeyDTO>;
}

export function AccountLinkVotingKeysDTOFromJSON(json: any): AccountLinkVotingKeysDTO {
    return AccountLinkVotingKeysDTOFromJSONTyped(json, false);
}

export function AccountLinkVotingKeysDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountLinkVotingKeysDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'publicKeys': ((json['publicKeys'] as Array<any>).map(AccountLinkVotingKeyDTOFromJSON)),
    };
}

export function AccountLinkVotingKeysDTOToJSON(value?: AccountLinkVotingKeysDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'publicKeys': ((value.publicKeys as Array<any>).map(AccountLinkVotingKeyDTOToJSON)),
    };
}

