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
    MosaicDefinitionTransactionBodyDTO,
    MosaicDefinitionTransactionBodyDTOFromJSON,
    MosaicDefinitionTransactionBodyDTOFromJSONTyped,
    MosaicDefinitionTransactionBodyDTOToJSON,
} from './MosaicDefinitionTransactionBodyDTO';
import {
    NetworkTypeEnum,
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';
import {
    TransactionDTO,
    TransactionDTOFromJSON,
    TransactionDTOFromJSONTyped,
    TransactionDTOToJSON,
} from './TransactionDTO';

/**
 * Transaction to create a new mosaic.
 * @export
 * @interface MosaicDefinitionTransactionDTO
 */
export interface MosaicDefinitionTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof MosaicDefinitionTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof MosaicDefinitionTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof MosaicDefinitionTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof MosaicDefinitionTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof MosaicDefinitionTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof MosaicDefinitionTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof MosaicDefinitionTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof MosaicDefinitionTransactionDTO
     */
    deadline: string;
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof MosaicDefinitionTransactionDTO
     */
    id: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof MosaicDefinitionTransactionDTO
     */
    duration: string;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof MosaicDefinitionTransactionDTO
     */
    nonce: number;
    /**
     * - 0x00 (none) - No flags present.
     * - 0x01 (supplyMutable) - Mosaic supports supply changes even when mosaic owner owns partial supply.
     * - 0x02 (transferable) - Mosaic supports transfers between arbitrary accounts. When not set, mosaic can only be transferred to and from mosaic owner.
     * - 0x04 (restrictable) - Mosaic supports custom restrictions configured by mosaic owner.
     * - 0x08 (revokable) - Mosaic allows creator to revoke balances from another user.
     * @type {number}
     * @memberof MosaicDefinitionTransactionDTO
     */
    flags: number;
    /**
     * Determines up to what decimal place the mosaic can be divided.
     * Divisibility of 3 means that a mosaic can be divided into smallest parts of 0.001 mosaics.
     * The divisibility must be in the range of 0 and 6.
     * @type {number}
     * @memberof MosaicDefinitionTransactionDTO
     */
    divisibility: number;
}

export function MosaicDefinitionTransactionDTOFromJSON(json: any): MosaicDefinitionTransactionDTO {
    return MosaicDefinitionTransactionDTOFromJSONTyped(json, false);
}

export function MosaicDefinitionTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicDefinitionTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'id': json['id'],
        'duration': json['duration'],
        'nonce': json['nonce'],
        'flags': json['flags'],
        'divisibility': json['divisibility'],
    };
}

export function MosaicDefinitionTransactionDTOToJSON(value?: MosaicDefinitionTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'id': value.id,
        'duration': value.duration,
        'nonce': value.nonce,
        'flags': value.flags,
        'divisibility': value.divisibility,
    };
}

