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
    MetadataInfoDTO,
    MetadataInfoDTOFromJSON,
    MetadataInfoDTOFromJSONTyped,
    MetadataInfoDTOToJSON,
} from './MetadataInfoDTO';
import {
    Pagination,
    PaginationFromJSON,
    PaginationFromJSONTyped,
    PaginationToJSON,
} from './Pagination';

/**
 * 
 * @export
 * @interface MetadataPage
 */
export interface MetadataPage {
    /**
     * Array of metadata entries.
     * @type {Array<MetadataInfoDTO>}
     * @memberof MetadataPage
     */
    data: Array<MetadataInfoDTO>;
    /**
     * 
     * @type {Pagination}
     * @memberof MetadataPage
     */
    pagination: Pagination;
}

export function MetadataPageFromJSON(json: any): MetadataPage {
    return MetadataPageFromJSONTyped(json, false);
}

export function MetadataPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataPage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(MetadataInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}

export function MetadataPageToJSON(value?: MetadataPage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(MetadataInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}
