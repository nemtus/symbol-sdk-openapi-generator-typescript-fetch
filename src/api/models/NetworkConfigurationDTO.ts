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
    ChainPropertiesDTO,
    ChainPropertiesDTOFromJSON,
    ChainPropertiesDTOFromJSONTyped,
    ChainPropertiesDTOToJSON,
} from './ChainPropertiesDTO';
import {
    NetworkPropertiesDTO,
    NetworkPropertiesDTOFromJSON,
    NetworkPropertiesDTOFromJSONTyped,
    NetworkPropertiesDTOToJSON,
} from './NetworkPropertiesDTO';
import {
    PluginsPropertiesDTO,
    PluginsPropertiesDTOFromJSON,
    PluginsPropertiesDTOFromJSONTyped,
    PluginsPropertiesDTOToJSON,
} from './PluginsPropertiesDTO';

/**
 * 
 * @export
 * @interface NetworkConfigurationDTO
 */
export interface NetworkConfigurationDTO {
    /**
     * 
     * @type {NetworkPropertiesDTO}
     * @memberof NetworkConfigurationDTO
     */
    network: NetworkPropertiesDTO;
    /**
     * 
     * @type {ChainPropertiesDTO}
     * @memberof NetworkConfigurationDTO
     */
    chain: ChainPropertiesDTO;
    /**
     * 
     * @type {PluginsPropertiesDTO}
     * @memberof NetworkConfigurationDTO
     */
    plugins: PluginsPropertiesDTO;
}

export function NetworkConfigurationDTOFromJSON(json: any): NetworkConfigurationDTO {
    return NetworkConfigurationDTOFromJSONTyped(json, false);
}

export function NetworkConfigurationDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkConfigurationDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'network': NetworkPropertiesDTOFromJSON(json['network']),
        'chain': ChainPropertiesDTOFromJSON(json['chain']),
        'plugins': PluginsPropertiesDTOFromJSON(json['plugins']),
    };
}

export function NetworkConfigurationDTOToJSON(value?: NetworkConfigurationDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'network': NetworkPropertiesDTOToJSON(value.network),
        'chain': ChainPropertiesDTOToJSON(value.chain),
        'plugins': PluginsPropertiesDTOToJSON(value.plugins),
    };
}

