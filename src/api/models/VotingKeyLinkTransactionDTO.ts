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
    LinkActionEnum,
    LinkActionEnumFromJSON,
    LinkActionEnumFromJSONTyped,
    LinkActionEnumToJSON,
} from './LinkActionEnum';
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
import {
    VotingKeyLinkTransactionBodyDTO,
    VotingKeyLinkTransactionBodyDTOFromJSON,
    VotingKeyLinkTransactionBodyDTOFromJSONTyped,
    VotingKeyLinkTransactionBodyDTOToJSON,
} from './VotingKeyLinkTransactionBodyDTO';

/**
 * Transaction to associate a BLS public key with an account.
 * Required for node operators willing to vote finalized blocks.
 * @export
 * @interface VotingKeyLinkTransactionDTO
 */
export interface VotingKeyLinkTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof VotingKeyLinkTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof VotingKeyLinkTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof VotingKeyLinkTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof VotingKeyLinkTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof VotingKeyLinkTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof VotingKeyLinkTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof VotingKeyLinkTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof VotingKeyLinkTransactionDTO
     */
    deadline: string;
    /**
     * 32 bytes voting public key.
     * @type {string}
     * @memberof VotingKeyLinkTransactionDTO
     */
    linkedPublicKey: string;
    /**
     * Finalization Epoch
     * @type {number}
     * @memberof VotingKeyLinkTransactionDTO
     */
    startEpoch: number;
    /**
     * Finalization Epoch
     * @type {number}
     * @memberof VotingKeyLinkTransactionDTO
     */
    endEpoch: number;
    /**
     * 
     * @type {LinkActionEnum}
     * @memberof VotingKeyLinkTransactionDTO
     */
    linkAction: LinkActionEnum;
}

export function VotingKeyLinkTransactionDTOFromJSON(json: any): VotingKeyLinkTransactionDTO {
    return VotingKeyLinkTransactionDTOFromJSONTyped(json, false);
}

export function VotingKeyLinkTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): VotingKeyLinkTransactionDTO {
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
        'linkedPublicKey': json['linkedPublicKey'],
        'startEpoch': json['startEpoch'],
        'endEpoch': json['endEpoch'],
        'linkAction': LinkActionEnumFromJSON(json['linkAction']),
    };
}

export function VotingKeyLinkTransactionDTOToJSON(value?: VotingKeyLinkTransactionDTO | null): any {
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
        'linkedPublicKey': value.linkedPublicKey,
        'startEpoch': value.startEpoch,
        'endEpoch': value.endEpoch,
        'linkAction': LinkActionEnumToJSON(value.linkAction),
    };
}
