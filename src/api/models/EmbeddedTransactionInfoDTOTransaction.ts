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
    AccountRestrictionFlagsEnum,
    AccountRestrictionFlagsEnumFromJSON,
    AccountRestrictionFlagsEnumFromJSONTyped,
    AccountRestrictionFlagsEnumToJSON,
} from './AccountRestrictionFlagsEnum';
import {
    AliasActionEnum,
    AliasActionEnumFromJSON,
    AliasActionEnumFromJSONTyped,
    AliasActionEnumToJSON,
} from './AliasActionEnum';
import {
    EmbeddedAccountAddressRestrictionTransactionDTO,
    EmbeddedAccountAddressRestrictionTransactionDTOFromJSON,
    EmbeddedAccountAddressRestrictionTransactionDTOFromJSONTyped,
    EmbeddedAccountAddressRestrictionTransactionDTOToJSON,
} from './EmbeddedAccountAddressRestrictionTransactionDTO';
import {
    EmbeddedAccountKeyLinkTransactionDTO,
    EmbeddedAccountKeyLinkTransactionDTOFromJSON,
    EmbeddedAccountKeyLinkTransactionDTOFromJSONTyped,
    EmbeddedAccountKeyLinkTransactionDTOToJSON,
} from './EmbeddedAccountKeyLinkTransactionDTO';
import {
    EmbeddedAccountMetadataTransactionDTO,
    EmbeddedAccountMetadataTransactionDTOFromJSON,
    EmbeddedAccountMetadataTransactionDTOFromJSONTyped,
    EmbeddedAccountMetadataTransactionDTOToJSON,
} from './EmbeddedAccountMetadataTransactionDTO';
import {
    EmbeddedAccountMosaicRestrictionTransactionDTO,
    EmbeddedAccountMosaicRestrictionTransactionDTOFromJSON,
    EmbeddedAccountMosaicRestrictionTransactionDTOFromJSONTyped,
    EmbeddedAccountMosaicRestrictionTransactionDTOToJSON,
} from './EmbeddedAccountMosaicRestrictionTransactionDTO';
import {
    EmbeddedAccountOperationRestrictionTransactionDTO,
    EmbeddedAccountOperationRestrictionTransactionDTOFromJSON,
    EmbeddedAccountOperationRestrictionTransactionDTOFromJSONTyped,
    EmbeddedAccountOperationRestrictionTransactionDTOToJSON,
} from './EmbeddedAccountOperationRestrictionTransactionDTO';
import {
    EmbeddedAddressAliasTransactionDTO,
    EmbeddedAddressAliasTransactionDTOFromJSON,
    EmbeddedAddressAliasTransactionDTOFromJSONTyped,
    EmbeddedAddressAliasTransactionDTOToJSON,
} from './EmbeddedAddressAliasTransactionDTO';
import {
    EmbeddedHashLockTransactionDTO,
    EmbeddedHashLockTransactionDTOFromJSON,
    EmbeddedHashLockTransactionDTOFromJSONTyped,
    EmbeddedHashLockTransactionDTOToJSON,
} from './EmbeddedHashLockTransactionDTO';
import {
    EmbeddedMosaicAddressRestrictionTransactionDTO,
    EmbeddedMosaicAddressRestrictionTransactionDTOFromJSON,
    EmbeddedMosaicAddressRestrictionTransactionDTOFromJSONTyped,
    EmbeddedMosaicAddressRestrictionTransactionDTOToJSON,
} from './EmbeddedMosaicAddressRestrictionTransactionDTO';
import {
    EmbeddedMosaicAliasTransactionDTO,
    EmbeddedMosaicAliasTransactionDTOFromJSON,
    EmbeddedMosaicAliasTransactionDTOFromJSONTyped,
    EmbeddedMosaicAliasTransactionDTOToJSON,
} from './EmbeddedMosaicAliasTransactionDTO';
import {
    EmbeddedMosaicDefinitionTransactionDTO,
    EmbeddedMosaicDefinitionTransactionDTOFromJSON,
    EmbeddedMosaicDefinitionTransactionDTOFromJSONTyped,
    EmbeddedMosaicDefinitionTransactionDTOToJSON,
} from './EmbeddedMosaicDefinitionTransactionDTO';
import {
    EmbeddedMosaicGlobalRestrictionTransactionDTO,
    EmbeddedMosaicGlobalRestrictionTransactionDTOFromJSON,
    EmbeddedMosaicGlobalRestrictionTransactionDTOFromJSONTyped,
    EmbeddedMosaicGlobalRestrictionTransactionDTOToJSON,
} from './EmbeddedMosaicGlobalRestrictionTransactionDTO';
import {
    EmbeddedMosaicMetadataTransactionDTO,
    EmbeddedMosaicMetadataTransactionDTOFromJSON,
    EmbeddedMosaicMetadataTransactionDTOFromJSONTyped,
    EmbeddedMosaicMetadataTransactionDTOToJSON,
} from './EmbeddedMosaicMetadataTransactionDTO';
import {
    EmbeddedMosaicSupplyChangeTransactionDTO,
    EmbeddedMosaicSupplyChangeTransactionDTOFromJSON,
    EmbeddedMosaicSupplyChangeTransactionDTOFromJSONTyped,
    EmbeddedMosaicSupplyChangeTransactionDTOToJSON,
} from './EmbeddedMosaicSupplyChangeTransactionDTO';
import {
    EmbeddedMosaicSupplyRevocationTransactionDTO,
    EmbeddedMosaicSupplyRevocationTransactionDTOFromJSON,
    EmbeddedMosaicSupplyRevocationTransactionDTOFromJSONTyped,
    EmbeddedMosaicSupplyRevocationTransactionDTOToJSON,
} from './EmbeddedMosaicSupplyRevocationTransactionDTO';
import {
    EmbeddedMultisigAccountModificationTransactionDTO,
    EmbeddedMultisigAccountModificationTransactionDTOFromJSON,
    EmbeddedMultisigAccountModificationTransactionDTOFromJSONTyped,
    EmbeddedMultisigAccountModificationTransactionDTOToJSON,
} from './EmbeddedMultisigAccountModificationTransactionDTO';
import {
    EmbeddedNamespaceMetadataTransactionDTO,
    EmbeddedNamespaceMetadataTransactionDTOFromJSON,
    EmbeddedNamespaceMetadataTransactionDTOFromJSONTyped,
    EmbeddedNamespaceMetadataTransactionDTOToJSON,
} from './EmbeddedNamespaceMetadataTransactionDTO';
import {
    EmbeddedNamespaceRegistrationTransactionDTO,
    EmbeddedNamespaceRegistrationTransactionDTOFromJSON,
    EmbeddedNamespaceRegistrationTransactionDTOFromJSONTyped,
    EmbeddedNamespaceRegistrationTransactionDTOToJSON,
} from './EmbeddedNamespaceRegistrationTransactionDTO';
import {
    EmbeddedNodeKeyLinkTransactionDTO,
    EmbeddedNodeKeyLinkTransactionDTOFromJSON,
    EmbeddedNodeKeyLinkTransactionDTOFromJSONTyped,
    EmbeddedNodeKeyLinkTransactionDTOToJSON,
} from './EmbeddedNodeKeyLinkTransactionDTO';
import {
    EmbeddedSecretLockTransactionDTO,
    EmbeddedSecretLockTransactionDTOFromJSON,
    EmbeddedSecretLockTransactionDTOFromJSONTyped,
    EmbeddedSecretLockTransactionDTOToJSON,
} from './EmbeddedSecretLockTransactionDTO';
import {
    EmbeddedSecretProofTransactionDTO,
    EmbeddedSecretProofTransactionDTOFromJSON,
    EmbeddedSecretProofTransactionDTOFromJSONTyped,
    EmbeddedSecretProofTransactionDTOToJSON,
} from './EmbeddedSecretProofTransactionDTO';
import {
    EmbeddedTransferTransactionDTO,
    EmbeddedTransferTransactionDTOFromJSON,
    EmbeddedTransferTransactionDTOFromJSONTyped,
    EmbeddedTransferTransactionDTOToJSON,
} from './EmbeddedTransferTransactionDTO';
import {
    EmbeddedVotingKeyLinkTransactionDTO,
    EmbeddedVotingKeyLinkTransactionDTOFromJSON,
    EmbeddedVotingKeyLinkTransactionDTOFromJSONTyped,
    EmbeddedVotingKeyLinkTransactionDTOToJSON,
} from './EmbeddedVotingKeyLinkTransactionDTO';
import {
    EmbeddedVrfKeyLinkTransactionDTO,
    EmbeddedVrfKeyLinkTransactionDTOFromJSON,
    EmbeddedVrfKeyLinkTransactionDTOFromJSONTyped,
    EmbeddedVrfKeyLinkTransactionDTOToJSON,
} from './EmbeddedVrfKeyLinkTransactionDTO';
import {
    LinkActionEnum,
    LinkActionEnumFromJSON,
    LinkActionEnumFromJSONTyped,
    LinkActionEnumToJSON,
} from './LinkActionEnum';
import {
    LockHashAlgorithmEnum,
    LockHashAlgorithmEnumFromJSON,
    LockHashAlgorithmEnumFromJSONTyped,
    LockHashAlgorithmEnumToJSON,
} from './LockHashAlgorithmEnum';
import {
    MosaicRestrictionTypeEnum,
    MosaicRestrictionTypeEnumFromJSON,
    MosaicRestrictionTypeEnumFromJSONTyped,
    MosaicRestrictionTypeEnumToJSON,
} from './MosaicRestrictionTypeEnum';
import {
    MosaicSupplyChangeActionEnum,
    MosaicSupplyChangeActionEnumFromJSON,
    MosaicSupplyChangeActionEnumFromJSONTyped,
    MosaicSupplyChangeActionEnumToJSON,
} from './MosaicSupplyChangeActionEnum';
import {
    NamespaceRegistrationTypeEnum,
    NamespaceRegistrationTypeEnumFromJSON,
    NamespaceRegistrationTypeEnumFromJSONTyped,
    NamespaceRegistrationTypeEnumToJSON,
} from './NamespaceRegistrationTypeEnum';
import {
    NetworkTypeEnum,
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';
import {
    TransactionTypeEnum,
    TransactionTypeEnumFromJSON,
    TransactionTypeEnumFromJSONTyped,
    TransactionTypeEnumToJSON,
} from './TransactionTypeEnum';
import {
    UnresolvedMosaic,
    UnresolvedMosaicFromJSON,
    UnresolvedMosaicFromJSONTyped,
    UnresolvedMosaicToJSON,
} from './UnresolvedMosaic';

/**
 * 
 * @export
 * @interface EmbeddedTransactionInfoDTOTransaction
 */
export interface EmbeddedTransactionInfoDTOTransaction {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    type: number;
    /**
     * 32 bytes voting public key.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    linkedPublicKey: string;
    /**
     * 
     * @type {LinkActionEnum}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    linkAction: LinkActionEnum;
    /**
     * Finalization Epoch
     * @type {number}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    startEpoch: number;
    /**
     * Finalization Epoch
     * @type {number}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    endEpoch: number;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    amount: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    duration: string;
    /**
     * 
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    hash: string;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    recipientAddress: string;
    /**
     * 
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    secret: string;
    /**
     * 
     * @type {LockHashAlgorithmEnum}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    hashAlgorithm: LockHashAlgorithmEnum;
    /**
     * Original random set of bytes.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    proof: string;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    targetAddress: string;
    /**
     * Metadata key scoped to source, target and type expressed.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    scopedMetadataKey: string;
    /**
     * Change in value size in bytes.
     * @type {number}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    valueSizeDelta: number;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    valueSize: number;
    /**
     * Metadata value. If embedded in a transaction, this is calculated as xor(previous-value, value).
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    value: string;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    targetMosaicId: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    targetNamespaceId?: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    id: string;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    nonce: number;
    /**
     * - 0x00 (none) - No flags present.
     * - 0x01 (supplyMutable) - Mosaic supports supply changes even when mosaic owner owns partial supply.
     * - 0x02 (transferable) - Mosaic supports transfers between arbitrary accounts. When not set, mosaic can only be transferred to and from mosaic owner.
     * - 0x04 (restrictable) - Mosaic supports custom restrictions configured by mosaic owner.
     * - 0x08 (revokable) - Mosaic allows creator to revoke balances from another user.
     * @type {number}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    flags: number;
    /**
     * Determines up to what decimal place the mosaic can be divided.
     * Divisibility of 3 means that a mosaic can be divided into smallest parts of 0.001 mosaics.
     * The divisibility must be in the range of 0 and 6.
     * @type {number}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    divisibility: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    delta: string;
    /**
     * 
     * @type {MosaicSupplyChangeActionEnum}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    action: MosaicSupplyChangeActionEnum;
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    sourceAddress: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    parentId?: string;
    /**
     * 
     * @type {NamespaceRegistrationTypeEnum}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    registrationType: NamespaceRegistrationTypeEnum;
    /**
     * Namespace name.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    name: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    namespaceId: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    address: string;
    /**
     * 
     * @type {AliasActionEnum}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    aliasAction: AliasActionEnum;
    /**
     * Number of signatures needed to remove a cosignatory.
     * If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories.
     * @type {number}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    minRemovalDelta: number;
    /**
     * Number of signatures needed to approve a transaction.
     * If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories.
     * @type {number}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    minApprovalDelta: number;
    /**
     * Array of cosignatory accounts to add.
     * @type {Array<string>}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    addressAdditions: Array<string>;
    /**
     * Array of cosignatory accounts to delete.
     * @type {Array<string>}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    addressDeletions: Array<string>;
    /**
     * 
     * @type {AccountRestrictionFlagsEnum}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    restrictionFlags: AccountRestrictionFlagsEnum;
    /**
     * Account restriction additions.
     * @type {Array<TransactionTypeEnum>}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    restrictionAdditions: Array<TransactionTypeEnum>;
    /**
     * Account restriction deletions.
     * @type {Array<TransactionTypeEnum>}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    restrictionDeletions: Array<TransactionTypeEnum>;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    referenceMosaicId: string;
    /**
     * Restriction key.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    restrictionKey: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    previousRestrictionValue: string;
    /**
     * Restriction value.
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    newRestrictionValue: string;
    /**
     * 
     * @type {MosaicRestrictionTypeEnum}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    previousRestrictionType: MosaicRestrictionTypeEnum;
    /**
     * 
     * @type {MosaicRestrictionTypeEnum}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    newRestrictionType: MosaicRestrictionTypeEnum;
    /**
     * Array of mosaics sent to the recipient.
     * @type {Array<UnresolvedMosaic>}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    mosaics: Array<UnresolvedMosaic>;
    /**
     * Transfer transaction message
     * @type {string}
     * @memberof EmbeddedTransactionInfoDTOTransaction
     */
    message?: string;
}

export function EmbeddedTransactionInfoDTOTransactionFromJSON(json: any): EmbeddedTransactionInfoDTOTransaction {
    return EmbeddedTransactionInfoDTOTransactionFromJSONTyped(json, false);
}

export function EmbeddedTransactionInfoDTOTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedTransactionInfoDTOTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'linkedPublicKey': json['linkedPublicKey'],
        'linkAction': LinkActionEnumFromJSON(json['linkAction']),
        'startEpoch': json['startEpoch'],
        'endEpoch': json['endEpoch'],
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
        'duration': json['duration'],
        'hash': json['hash'],
        'recipientAddress': json['recipientAddress'],
        'secret': json['secret'],
        'hashAlgorithm': LockHashAlgorithmEnumFromJSON(json['hashAlgorithm']),
        'proof': json['proof'],
        'targetAddress': json['targetAddress'],
        'scopedMetadataKey': json['scopedMetadataKey'],
        'valueSizeDelta': json['valueSizeDelta'],
        'valueSize': json['valueSize'],
        'value': json['value'],
        'targetMosaicId': json['targetMosaicId'],
        'targetNamespaceId': !exists(json, 'targetNamespaceId') ? undefined : json['targetNamespaceId'],
        'id': json['id'],
        'nonce': json['nonce'],
        'flags': json['flags'],
        'divisibility': json['divisibility'],
        'delta': json['delta'],
        'action': MosaicSupplyChangeActionEnumFromJSON(json['action']),
        'sourceAddress': json['sourceAddress'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'registrationType': NamespaceRegistrationTypeEnumFromJSON(json['registrationType']),
        'name': json['name'],
        'namespaceId': json['namespaceId'],
        'address': json['address'],
        'aliasAction': AliasActionEnumFromJSON(json['aliasAction']),
        'minRemovalDelta': json['minRemovalDelta'],
        'minApprovalDelta': json['minApprovalDelta'],
        'addressAdditions': json['addressAdditions'],
        'addressDeletions': json['addressDeletions'],
        'restrictionFlags': AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
        'restrictionAdditions': ((json['restrictionAdditions'] as Array<any>).map(TransactionTypeEnumFromJSON)),
        'restrictionDeletions': ((json['restrictionDeletions'] as Array<any>).map(TransactionTypeEnumFromJSON)),
        'referenceMosaicId': json['referenceMosaicId'],
        'restrictionKey': json['restrictionKey'],
        'previousRestrictionValue': json['previousRestrictionValue'],
        'newRestrictionValue': json['newRestrictionValue'],
        'previousRestrictionType': MosaicRestrictionTypeEnumFromJSON(json['previousRestrictionType']),
        'newRestrictionType': MosaicRestrictionTypeEnumFromJSON(json['newRestrictionType']),
        'mosaics': ((json['mosaics'] as Array<any>).map(UnresolvedMosaicFromJSON)),
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function EmbeddedTransactionInfoDTOTransactionToJSON(value?: EmbeddedTransactionInfoDTOTransaction | null): any {
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
        'linkedPublicKey': value.linkedPublicKey,
        'linkAction': LinkActionEnumToJSON(value.linkAction),
        'startEpoch': value.startEpoch,
        'endEpoch': value.endEpoch,
        'mosaicId': value.mosaicId,
        'amount': value.amount,
        'duration': value.duration,
        'hash': value.hash,
        'recipientAddress': value.recipientAddress,
        'secret': value.secret,
        'hashAlgorithm': LockHashAlgorithmEnumToJSON(value.hashAlgorithm),
        'proof': value.proof,
        'targetAddress': value.targetAddress,
        'scopedMetadataKey': value.scopedMetadataKey,
        'valueSizeDelta': value.valueSizeDelta,
        'valueSize': value.valueSize,
        'value': value.value,
        'targetMosaicId': value.targetMosaicId,
        'targetNamespaceId': value.targetNamespaceId,
        'id': value.id,
        'nonce': value.nonce,
        'flags': value.flags,
        'divisibility': value.divisibility,
        'delta': value.delta,
        'action': MosaicSupplyChangeActionEnumToJSON(value.action),
        'sourceAddress': value.sourceAddress,
        'parentId': value.parentId,
        'registrationType': NamespaceRegistrationTypeEnumToJSON(value.registrationType),
        'name': value.name,
        'namespaceId': value.namespaceId,
        'address': value.address,
        'aliasAction': AliasActionEnumToJSON(value.aliasAction),
        'minRemovalDelta': value.minRemovalDelta,
        'minApprovalDelta': value.minApprovalDelta,
        'addressAdditions': value.addressAdditions,
        'addressDeletions': value.addressDeletions,
        'restrictionFlags': AccountRestrictionFlagsEnumToJSON(value.restrictionFlags),
        'restrictionAdditions': ((value.restrictionAdditions as Array<any>).map(TransactionTypeEnumToJSON)),
        'restrictionDeletions': ((value.restrictionDeletions as Array<any>).map(TransactionTypeEnumToJSON)),
        'referenceMosaicId': value.referenceMosaicId,
        'restrictionKey': value.restrictionKey,
        'previousRestrictionValue': value.previousRestrictionValue,
        'newRestrictionValue': value.newRestrictionValue,
        'previousRestrictionType': MosaicRestrictionTypeEnumToJSON(value.previousRestrictionType),
        'newRestrictionType': MosaicRestrictionTypeEnumToJSON(value.newRestrictionType),
        'mosaics': ((value.mosaics as Array<any>).map(UnresolvedMosaicToJSON)),
        'message': value.message,
    };
}

