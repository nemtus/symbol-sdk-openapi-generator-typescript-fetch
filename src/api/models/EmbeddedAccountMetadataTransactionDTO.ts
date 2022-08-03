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
    AccountMetadataTransactionBodyDTO,
    AccountMetadataTransactionBodyDTOFromJSON,
    AccountMetadataTransactionBodyDTOFromJSONTyped,
    AccountMetadataTransactionBodyDTOToJSON,
} from './AccountMetadataTransactionBodyDTO';
import {
    EmbeddedTransactionDTO,
    EmbeddedTransactionDTOFromJSON,
    EmbeddedTransactionDTOFromJSONTyped,
    EmbeddedTransactionDTOToJSON,
} from './EmbeddedTransactionDTO';
import {
    NetworkTypeEnum,
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';

/**
 * 
 * @export
 * @interface EmbeddedAccountMetadataTransactionDTO
 */
export interface EmbeddedAccountMetadataTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    type: number;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    targetAddress: string;
    /**
     * Metadata key scoped to source, target and type expressed.
     * @type {string}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    scopedMetadataKey: string;
    /**
     * Change in value size in bytes.
     * @type {number}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    valueSizeDelta: number;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    valueSize: number;
    /**
     * Metadata value. If embedded in a transaction, this is calculated as xor(previous-value, value).
     * @type {string}
     * @memberof EmbeddedAccountMetadataTransactionDTO
     */
    value: string;
}

export function EmbeddedAccountMetadataTransactionDTOFromJSON(json: any): EmbeddedAccountMetadataTransactionDTO {
    return EmbeddedAccountMetadataTransactionDTOFromJSONTyped(json, false);
}

export function EmbeddedAccountMetadataTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedAccountMetadataTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'targetAddress': json['targetAddress'],
        'scopedMetadataKey': json['scopedMetadataKey'],
        'valueSizeDelta': json['valueSizeDelta'],
        'valueSize': json['valueSize'],
        'value': json['value'],
    };
}

export function EmbeddedAccountMetadataTransactionDTOToJSON(value?: EmbeddedAccountMetadataTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'targetAddress': value.targetAddress,
        'scopedMetadataKey': value.scopedMetadataKey,
        'valueSizeDelta': value.valueSizeDelta,
        'valueSize': value.valueSize,
        'value': value.value,
    };
}
