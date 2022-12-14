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
    AccountKeyLinkNetworkPropertiesDTO,
    AccountKeyLinkNetworkPropertiesDTOFromJSON,
    AccountKeyLinkNetworkPropertiesDTOFromJSONTyped,
    AccountKeyLinkNetworkPropertiesDTOToJSON,
} from './AccountKeyLinkNetworkPropertiesDTO';
import {
    AccountRestrictionNetworkPropertiesDTO,
    AccountRestrictionNetworkPropertiesDTOFromJSON,
    AccountRestrictionNetworkPropertiesDTOFromJSONTyped,
    AccountRestrictionNetworkPropertiesDTOToJSON,
} from './AccountRestrictionNetworkPropertiesDTO';
import {
    AggregateNetworkPropertiesDTO,
    AggregateNetworkPropertiesDTOFromJSON,
    AggregateNetworkPropertiesDTOFromJSONTyped,
    AggregateNetworkPropertiesDTOToJSON,
} from './AggregateNetworkPropertiesDTO';
import {
    HashLockNetworkPropertiesDTO,
    HashLockNetworkPropertiesDTOFromJSON,
    HashLockNetworkPropertiesDTOFromJSONTyped,
    HashLockNetworkPropertiesDTOToJSON,
} from './HashLockNetworkPropertiesDTO';
import {
    MetadataNetworkPropertiesDTO,
    MetadataNetworkPropertiesDTOFromJSON,
    MetadataNetworkPropertiesDTOFromJSONTyped,
    MetadataNetworkPropertiesDTOToJSON,
} from './MetadataNetworkPropertiesDTO';
import {
    MosaicNetworkPropertiesDTO,
    MosaicNetworkPropertiesDTOFromJSON,
    MosaicNetworkPropertiesDTOFromJSONTyped,
    MosaicNetworkPropertiesDTOToJSON,
} from './MosaicNetworkPropertiesDTO';
import {
    MosaicRestrictionNetworkPropertiesDTO,
    MosaicRestrictionNetworkPropertiesDTOFromJSON,
    MosaicRestrictionNetworkPropertiesDTOFromJSONTyped,
    MosaicRestrictionNetworkPropertiesDTOToJSON,
} from './MosaicRestrictionNetworkPropertiesDTO';
import {
    MultisigNetworkPropertiesDTO,
    MultisigNetworkPropertiesDTOFromJSON,
    MultisigNetworkPropertiesDTOFromJSONTyped,
    MultisigNetworkPropertiesDTOToJSON,
} from './MultisigNetworkPropertiesDTO';
import {
    NamespaceNetworkPropertiesDTO,
    NamespaceNetworkPropertiesDTOFromJSON,
    NamespaceNetworkPropertiesDTOFromJSONTyped,
    NamespaceNetworkPropertiesDTOToJSON,
} from './NamespaceNetworkPropertiesDTO';
import {
    SecretLockNetworkPropertiesDTO,
    SecretLockNetworkPropertiesDTOFromJSON,
    SecretLockNetworkPropertiesDTOFromJSONTyped,
    SecretLockNetworkPropertiesDTOToJSON,
} from './SecretLockNetworkPropertiesDTO';
import {
    TransferNetworkPropertiesDTO,
    TransferNetworkPropertiesDTOFromJSON,
    TransferNetworkPropertiesDTOFromJSONTyped,
    TransferNetworkPropertiesDTOToJSON,
} from './TransferNetworkPropertiesDTO';

/**
 * Plugin related configuration properties.
 * @export
 * @interface PluginsPropertiesDTO
 */
export interface PluginsPropertiesDTO {
    /**
     * 
     * @type {AccountKeyLinkNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    accountlink?: AccountKeyLinkNetworkPropertiesDTO;
    /**
     * 
     * @type {AggregateNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    aggregate?: AggregateNetworkPropertiesDTO;
    /**
     * 
     * @type {HashLockNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    lockhash?: HashLockNetworkPropertiesDTO;
    /**
     * 
     * @type {SecretLockNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    locksecret?: SecretLockNetworkPropertiesDTO;
    /**
     * 
     * @type {MetadataNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    metadata?: MetadataNetworkPropertiesDTO;
    /**
     * 
     * @type {MosaicNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    mosaic?: MosaicNetworkPropertiesDTO;
    /**
     * 
     * @type {MultisigNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    multisig?: MultisigNetworkPropertiesDTO;
    /**
     * 
     * @type {NamespaceNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    namespace?: NamespaceNetworkPropertiesDTO;
    /**
     * 
     * @type {AccountRestrictionNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    restrictionaccount?: AccountRestrictionNetworkPropertiesDTO;
    /**
     * 
     * @type {MosaicRestrictionNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    restrictionmosaic?: MosaicRestrictionNetworkPropertiesDTO;
    /**
     * 
     * @type {TransferNetworkPropertiesDTO}
     * @memberof PluginsPropertiesDTO
     */
    transfer?: TransferNetworkPropertiesDTO;
}

export function PluginsPropertiesDTOFromJSON(json: any): PluginsPropertiesDTO {
    return PluginsPropertiesDTOFromJSONTyped(json, false);
}

export function PluginsPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PluginsPropertiesDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountlink': !exists(json, 'accountlink') ? undefined : AccountKeyLinkNetworkPropertiesDTOFromJSON(json['accountlink']),
        'aggregate': !exists(json, 'aggregate') ? undefined : AggregateNetworkPropertiesDTOFromJSON(json['aggregate']),
        'lockhash': !exists(json, 'lockhash') ? undefined : HashLockNetworkPropertiesDTOFromJSON(json['lockhash']),
        'locksecret': !exists(json, 'locksecret') ? undefined : SecretLockNetworkPropertiesDTOFromJSON(json['locksecret']),
        'metadata': !exists(json, 'metadata') ? undefined : MetadataNetworkPropertiesDTOFromJSON(json['metadata']),
        'mosaic': !exists(json, 'mosaic') ? undefined : MosaicNetworkPropertiesDTOFromJSON(json['mosaic']),
        'multisig': !exists(json, 'multisig') ? undefined : MultisigNetworkPropertiesDTOFromJSON(json['multisig']),
        'namespace': !exists(json, 'namespace') ? undefined : NamespaceNetworkPropertiesDTOFromJSON(json['namespace']),
        'restrictionaccount': !exists(json, 'restrictionaccount') ? undefined : AccountRestrictionNetworkPropertiesDTOFromJSON(json['restrictionaccount']),
        'restrictionmosaic': !exists(json, 'restrictionmosaic') ? undefined : MosaicRestrictionNetworkPropertiesDTOFromJSON(json['restrictionmosaic']),
        'transfer': !exists(json, 'transfer') ? undefined : TransferNetworkPropertiesDTOFromJSON(json['transfer']),
    };
}

export function PluginsPropertiesDTOToJSON(value?: PluginsPropertiesDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountlink': AccountKeyLinkNetworkPropertiesDTOToJSON(value.accountlink),
        'aggregate': AggregateNetworkPropertiesDTOToJSON(value.aggregate),
        'lockhash': HashLockNetworkPropertiesDTOToJSON(value.lockhash),
        'locksecret': SecretLockNetworkPropertiesDTOToJSON(value.locksecret),
        'metadata': MetadataNetworkPropertiesDTOToJSON(value.metadata),
        'mosaic': MosaicNetworkPropertiesDTOToJSON(value.mosaic),
        'multisig': MultisigNetworkPropertiesDTOToJSON(value.multisig),
        'namespace': NamespaceNetworkPropertiesDTOToJSON(value.namespace),
        'restrictionaccount': AccountRestrictionNetworkPropertiesDTOToJSON(value.restrictionaccount),
        'restrictionmosaic': MosaicRestrictionNetworkPropertiesDTOToJSON(value.restrictionmosaic),
        'transfer': TransferNetworkPropertiesDTOToJSON(value.transfer),
    };
}

