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
    EmbeddedTransactionDTO,
    EmbeddedTransactionDTOFromJSON,
    EmbeddedTransactionDTOFromJSONTyped,
    EmbeddedTransactionDTOToJSON,
} from './EmbeddedTransactionDTO';
import {
    NamespaceMetadataTransactionBodyDTO,
    NamespaceMetadataTransactionBodyDTOFromJSON,
    NamespaceMetadataTransactionBodyDTOFromJSONTyped,
    NamespaceMetadataTransactionBodyDTOToJSON,
} from './NamespaceMetadataTransactionBodyDTO';
import {
    NetworkTypeEnum,
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';

/**
 * 
 * @export
 * @interface EmbeddedNamespaceMetadataTransactionDTO
 */
export interface EmbeddedNamespaceMetadataTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedNamespaceMetadataTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedNamespaceMetadataTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedNamespaceMetadataTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EmbeddedNamespaceMetadataTransactionDTO
     */
    type: number;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof EmbeddedNamespaceMetadataTransactionDTO
     */
    targetAddress: string;
    /**
     * Metadata key scoped to source, target and type expressed.
     * @type {string}
     * @memberof EmbeddedNamespaceMetadataTransactionDTO
     */
    scopedMetadataKey: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof EmbeddedNamespaceMetadataTransactionDTO
     */
    targetNamespaceId?: string;
    /**
     * Change in value size in bytes.
     * @type {number}
     * @memberof EmbeddedNamespaceMetadataTransactionDTO
     */
    valueSizeDelta: number;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof EmbeddedNamespaceMetadataTransactionDTO
     */
    valueSize: number;
    /**
     * Metadata value. If embedded in a transaction, this is calculated as xor(previous-value, value).
     * @type {string}
     * @memberof EmbeddedNamespaceMetadataTransactionDTO
     */
    value: string;
}

export function EmbeddedNamespaceMetadataTransactionDTOFromJSON(json: any): EmbeddedNamespaceMetadataTransactionDTO {
    return EmbeddedNamespaceMetadataTransactionDTOFromJSONTyped(json, false);
}

export function EmbeddedNamespaceMetadataTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedNamespaceMetadataTransactionDTO {
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
        'targetNamespaceId': !exists(json, 'targetNamespaceId') ? undefined : json['targetNamespaceId'],
        'valueSizeDelta': json['valueSizeDelta'],
        'valueSize': json['valueSize'],
        'value': json['value'],
    };
}

export function EmbeddedNamespaceMetadataTransactionDTOToJSON(value?: EmbeddedNamespaceMetadataTransactionDTO | null): any {
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
        'targetNamespaceId': value.targetNamespaceId,
        'valueSizeDelta': value.valueSizeDelta,
        'valueSize': value.valueSize,
        'value': value.value,
    };
}

