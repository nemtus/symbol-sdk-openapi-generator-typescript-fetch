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
    NamespaceInfoDTO,
    NamespaceInfoDTOFromJSON,
    NamespaceInfoDTOFromJSONTyped,
    NamespaceInfoDTOToJSON,
} from './NamespaceInfoDTO';
import {
    Pagination,
    PaginationFromJSON,
    PaginationFromJSONTyped,
    PaginationToJSON,
} from './Pagination';

/**
 * 
 * @export
 * @interface NamespacePage
 */
export interface NamespacePage {
    /**
     * Array of namespaces.
     * @type {Array<NamespaceInfoDTO>}
     * @memberof NamespacePage
     */
    data: Array<NamespaceInfoDTO>;
    /**
     * 
     * @type {Pagination}
     * @memberof NamespacePage
     */
    pagination: Pagination;
}

export function NamespacePageFromJSON(json: any): NamespacePage {
    return NamespacePageFromJSONTyped(json, false);
}

export function NamespacePageFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespacePage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(NamespaceInfoDTOFromJSON)),
        'pagination': PaginationFromJSON(json['pagination']),
    };
}

export function NamespacePageToJSON(value?: NamespacePage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(NamespaceInfoDTOToJSON)),
        'pagination': PaginationToJSON(value.pagination),
    };
}

