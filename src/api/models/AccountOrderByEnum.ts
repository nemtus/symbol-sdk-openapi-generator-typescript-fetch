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


/**
 * 
 * @export
 */
export const AccountOrderByEnum = {
    Id: 'id',
    Balance: 'balance'
} as const;
export type AccountOrderByEnum = typeof AccountOrderByEnum[keyof typeof AccountOrderByEnum];


export function AccountOrderByEnumFromJSON(json: any): AccountOrderByEnum {
    return AccountOrderByEnumFromJSONTyped(json, false);
}

export function AccountOrderByEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOrderByEnum {
    return json as AccountOrderByEnum;
}

export function AccountOrderByEnumToJSON(value?: AccountOrderByEnum | null): any {
    return value as any;
}

