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


import * as runtime from '../runtime';
import {
    MerkleStateInfoDTO,
    MerkleStateInfoDTOFromJSON,
    MerkleStateInfoDTOToJSON,
    ModelError,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    MosaicIds,
    MosaicIdsFromJSON,
    MosaicIdsToJSON,
    MosaicInfoDTO,
    MosaicInfoDTOFromJSON,
    MosaicInfoDTOToJSON,
    MosaicPage,
    MosaicPageFromJSON,
    MosaicPageToJSON,
    Order,
    OrderFromJSON,
    OrderToJSON,
} from '../models';

export interface GetMosaicRequest {
    mosaicId: string;
}

export interface GetMosaicMerkleRequest {
    mosaicId: string;
}

export interface GetMosaicsRequest {
    mosaicIds: MosaicIds;
}

export interface SearchMosaicsRequest {
    ownerAddress?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}

/**
 * 
 */
export class MosaicRoutesApi extends runtime.BaseAPI {

    /**
     * Gets the mosaic definition for a given mosaic identifier.
     * Get mosaic information
     */
    async getMosaicRaw(requestParameters: GetMosaicRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<MosaicInfoDTO>> {
        if (requestParameters.mosaicId === null || requestParameters.mosaicId === undefined) {
            throw new runtime.RequiredError('mosaicId','Required parameter requestParameters.mosaicId was null or undefined when calling getMosaic.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mosaics/{mosaicId}`.replace(`{${"mosaicId"}}`, encodeURIComponent(String(requestParameters.mosaicId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MosaicInfoDTOFromJSON(jsonValue));
    }

    /**
     * Gets the mosaic definition for a given mosaic identifier.
     * Get mosaic information
     */
    async getMosaic(requestParameters: GetMosaicRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<MosaicInfoDTO> {
        const response = await this.getMosaicRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets the mosaic definition merkle for a given mosaic identifier.
     * Get mosaic merkle information
     */
    async getMosaicMerkleRaw(requestParameters: GetMosaicMerkleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>> {
        if (requestParameters.mosaicId === null || requestParameters.mosaicId === undefined) {
            throw new runtime.RequiredError('mosaicId','Required parameter requestParameters.mosaicId was null or undefined when calling getMosaicMerkle.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mosaics/{mosaicId}/merkle`.replace(`{${"mosaicId"}}`, encodeURIComponent(String(requestParameters.mosaicId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }

    /**
     * Gets the mosaic definition merkle for a given mosaic identifier.
     * Get mosaic merkle information
     */
    async getMosaicMerkle(requestParameters: GetMosaicMerkleRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<MerkleStateInfoDTO> {
        const response = await this.getMosaicMerkleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets an array of mosaic definition.
     * Get mosaics information for an array of mosaics
     */
    async getMosaicsRaw(requestParameters: GetMosaicsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<MosaicInfoDTO>>> {
        if (requestParameters.mosaicIds === null || requestParameters.mosaicIds === undefined) {
            throw new runtime.RequiredError('mosaicIds','Required parameter requestParameters.mosaicIds was null or undefined when calling getMosaics.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/mosaics`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MosaicIdsToJSON(requestParameters.mosaicIds),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MosaicInfoDTOFromJSON));
    }

    /**
     * Gets an array of mosaic definition.
     * Get mosaics information for an array of mosaics
     */
    async getMosaics(requestParameters: GetMosaicsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<MosaicInfoDTO>> {
        const response = await this.getMosaicsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets an array of mosaics.
     * Search mosaics
     */
    async searchMosaicsRaw(requestParameters: SearchMosaicsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<MosaicPage>> {
        const queryParameters: any = {};

        if (requestParameters.ownerAddress !== undefined) {
            queryParameters['ownerAddress'] = requestParameters.ownerAddress;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.pageNumber !== undefined) {
            queryParameters['pageNumber'] = requestParameters.pageNumber;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/mosaics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MosaicPageFromJSON(jsonValue));
    }

    /**
     * Gets an array of mosaics.
     * Search mosaics
     */
    async searchMosaics(requestParameters: SearchMosaicsRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<MosaicPage> {
        const response = await this.searchMosaicsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
