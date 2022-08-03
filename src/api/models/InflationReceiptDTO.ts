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
    InflationReceiptDTOAllOf,
    InflationReceiptDTOAllOfFromJSON,
    InflationReceiptDTOAllOfFromJSONTyped,
    InflationReceiptDTOAllOfToJSON,
} from './InflationReceiptDTOAllOf';
import {
    ReceiptDTO,
    ReceiptDTOFromJSON,
    ReceiptDTOFromJSONTyped,
    ReceiptDTOToJSON,
} from './ReceiptDTO';
import {
    ReceiptTypeEnum,
    ReceiptTypeEnumFromJSON,
    ReceiptTypeEnumFromJSONTyped,
    ReceiptTypeEnumToJSON,
} from './ReceiptTypeEnum';

/**
 * Receipt stored when network currency mosaics were created due to inflation.
 * @export
 * @interface InflationReceiptDTO
 */
export interface InflationReceiptDTO {
    /**
     * Version of the receipt.
     * @type {number}
     * @memberof InflationReceiptDTO
     */
    version: number;
    /**
     * 
     * @type {ReceiptTypeEnum}
     * @memberof InflationReceiptDTO
     */
    type: ReceiptTypeEnum;
    /**
     * Mosaic identifier.
     * @type {string}
     * @memberof InflationReceiptDTO
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof InflationReceiptDTO
     */
    amount: string;
}

export function InflationReceiptDTOFromJSON(json: any): InflationReceiptDTO {
    return InflationReceiptDTOFromJSONTyped(json, false);
}

export function InflationReceiptDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): InflationReceiptDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'type': ReceiptTypeEnumFromJSON(json['type']),
        'mosaicId': json['mosaicId'],
        'amount': json['amount'],
    };
}

export function InflationReceiptDTOToJSON(value?: InflationReceiptDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'type': ReceiptTypeEnumToJSON(value.type),
        'mosaicId': value.mosaicId,
        'amount': value.amount,
    };
}

