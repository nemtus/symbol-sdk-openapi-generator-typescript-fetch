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
    MosaicGlobalRestrictionEntryDTO,
    MosaicGlobalRestrictionEntryDTOFromJSON,
    MosaicGlobalRestrictionEntryDTOFromJSONTyped,
    MosaicGlobalRestrictionEntryDTOToJSON,
} from './MosaicGlobalRestrictionEntryDTO';
import {
    MosaicRestrictionEntryTypeEnum,
    MosaicRestrictionEntryTypeEnumFromJSON,
    MosaicRestrictionEntryTypeEnumFromJSONTyped,
    MosaicRestrictionEntryTypeEnumToJSON,
} from './MosaicRestrictionEntryTypeEnum';

/**
 * 
 * @export
 * @interface MosaicGlobalRestrictionEntryWrapperDTO
 */
export interface MosaicGlobalRestrictionEntryWrapperDTO {
    /**
     * The version of the state
     * @type {number}
     * @memberof MosaicGlobalRestrictionEntryWrapperDTO
     */
    version: number;
    /**
     * 
     * @type {string}
     * @memberof MosaicGlobalRestrictionEntryWrapperDTO
     */
    compositeHash: string;
    /**
     * 
     * @type {MosaicRestrictionEntryTypeEnum}
     * @memberof MosaicGlobalRestrictionEntryWrapperDTO
     */
    entryType: MosaicRestrictionEntryTypeEnum;
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof MosaicGlobalRestrictionEntryWrapperDTO
     */
    mosaicId: string;
    /**
     * 
     * @type {Array<MosaicGlobalRestrictionEntryDTO>}
     * @memberof MosaicGlobalRestrictionEntryWrapperDTO
     */
    restrictions: Array<MosaicGlobalRestrictionEntryDTO>;
}

export function MosaicGlobalRestrictionEntryWrapperDTOFromJSON(json: any): MosaicGlobalRestrictionEntryWrapperDTO {
    return MosaicGlobalRestrictionEntryWrapperDTOFromJSONTyped(json, false);
}

export function MosaicGlobalRestrictionEntryWrapperDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MosaicGlobalRestrictionEntryWrapperDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'compositeHash': json['compositeHash'],
        'entryType': MosaicRestrictionEntryTypeEnumFromJSON(json['entryType']),
        'mosaicId': json['mosaicId'],
        'restrictions': ((json['restrictions'] as Array<any>).map(MosaicGlobalRestrictionEntryDTOFromJSON)),
    };
}

export function MosaicGlobalRestrictionEntryWrapperDTOToJSON(value?: MosaicGlobalRestrictionEntryWrapperDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'compositeHash': value.compositeHash,
        'entryType': MosaicRestrictionEntryTypeEnumToJSON(value.entryType),
        'mosaicId': value.mosaicId,
        'restrictions': ((value.restrictions as Array<any>).map(MosaicGlobalRestrictionEntryDTOToJSON)),
    };
}

