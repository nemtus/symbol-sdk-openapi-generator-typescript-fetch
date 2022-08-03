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
    LockHashAlgorithmEnum,
    LockHashAlgorithmEnumFromJSON,
    LockHashAlgorithmEnumFromJSONTyped,
    LockHashAlgorithmEnumToJSON,
} from './LockHashAlgorithmEnum';
import {
    NetworkTypeEnum,
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';
import {
    SecretLockTransactionBodyDTO,
    SecretLockTransactionBodyDTOFromJSON,
    SecretLockTransactionBodyDTOFromJSONTyped,
    SecretLockTransactionBodyDTOToJSON,
} from './SecretLockTransactionBodyDTO';
import {
    TransactionDTO,
    TransactionDTOFromJSON,
    TransactionDTOFromJSONTyped,
    TransactionDTOToJSON,
} from './TransactionDTO';

/**
 * Transaction to sends mosaics to a recipient if the proof used is revealed. If the duration is reached, the locked funds go back to the sender of the transaction.
 * @export
 * @interface SecretLockTransactionDTO
 */
export interface SecretLockTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof SecretLockTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof SecretLockTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof SecretLockTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof SecretLockTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof SecretLockTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof SecretLockTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof SecretLockTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof SecretLockTransactionDTO
     */
    deadline: string;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof SecretLockTransactionDTO
     */
    recipientAddress: string;
    /**
     * 
     * @type {string}
     * @memberof SecretLockTransactionDTO
     */
    secret: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof SecretLockTransactionDTO
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof SecretLockTransactionDTO
     */
    amount: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof SecretLockTransactionDTO
     */
    duration: string;
    /**
     * 
     * @type {LockHashAlgorithmEnum}
     * @memberof SecretLockTransactionDTO
     */
    hashAlgorithm: LockHashAlgorithmEnum;
}

export function SecretLockTransactionDTOFromJSON(json: any): SecretLockTransactionDTO {
    return SecretLockTransactionDTOFromJSONTyped(json, false);
}

export function SecretLockTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretLockTransactionDTO {
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
        'recipientAddress': json['recipientAddress'],
        'secret': json['secret'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'duration': json['duration'],
        'hashAlgorithm': LockHashAlgorithmEnumFromJSON(json['hashAlgorithm']),
    };
}

export function SecretLockTransactionDTOToJSON(value?: SecretLockTransactionDTO | null): any {
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
        'recipientAddress': value.recipientAddress,
        'secret': value.secret,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'duration': value.duration,
        'hashAlgorithm': LockHashAlgorithmEnumToJSON(value.hashAlgorithm),
    };
}

