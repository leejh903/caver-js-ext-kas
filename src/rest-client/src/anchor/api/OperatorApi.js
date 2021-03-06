/*
 * Anchor API
 * # Introduction This document discusses Klaytn API Service (KAS) Anchor API. Anchor API features functions for sending metadata to prove data reliability and ensuring the reliability of service chain data to the Klaytn main chain.     # Error Codes  ## 400: Bad Request   | Code | Messages |   | --- | --- |   | 1071010 | data don't exist 1071615 | its value is out of range; size 1072100 | same payload ID or payload was already anchored 1072101 | all configured accounts have insufficient funds |   # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient', '../model/ErrorResponse', '../model/Operator', '../model/Operators'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(
            require('../../ApiClient'),
            require('../model/ErrorResponse'),
            require('../model/Operator'),
            require('../model/Operators')
        )
    } else {
        // Browser globals (root is window)
        if (!root.AnchorApi) {
            root.AnchorApi = {}
        }
        root.AnchorApi.OperatorApi = factory(
            root.AnchorApi.ApiClient,
            root.AnchorApi.ErrorResponse,
            root.AnchorApi.Operator,
            root.AnchorApi.Operators
        )
    }
})(this, function(ApiClient, ErrorResponse, Operator, Operators) {
    /**
     * Operator service.
     * @class OperatorApi
     * @version 1.0
     */

    /**
     * Constructs a new OperatorApi.
     * @alias OperatorApi
     * @class
     * @param {ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link ApiClient#instance} if unspecified.
     */
    const OperatorApi = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance

        /**
         * Callback function to receive the result of the getOperator operation.
         * @callback OperatorApi~getOperatorCallback
         * @param {String} error Error message, if any.
         * @param {Operator} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * GetOperator
         * Search for the settings of a specific operator.
         * @param {String} xChainId Klaytn chain network ID (1001 or 8217)
         * @param {String} operatorId Operator account address
         * @param {OperatorApi~getOperatorCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link Operator}
         */
        this.getOperator = function(xChainId, operatorId, callback) {
            const postBody = null

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling getOperator")
            }

            // verify the required parameter 'operatorId' is set
            if (operatorId === undefined || operatorId === null) {
                throw new Error("Missing the required parameter 'operatorId' when calling getOperator")
            }

            const pathParams = {
                'operator-id': operatorId,
            }
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = Operator

            return this.apiClient.callApi(
                '/v1/operator/{operator-id}',
                'GET',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the retrieveOperators operation.
         * @callback OperatorApi~retrieveOperatorsCallback
         * @param {String} error Error message, if any.
         * @param {Operators} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * RetrieveOperators
         * Search for a list of created operators and the settings of each of them.<p></p>  ## Size<p></p>  * The `size` query parameter is optional (minimum = 1, maximum = 1000, default = 100).<br> * Submitting negative values result in errors.<br> * Submitting zero results in a query with `size=100`, which is the default value.<br> * Submitting values greater than 1000 result in queries with `size=1000`, which is the maximum value.<br>
         * @param {String} xChainId Klaytn chain network ID (1001 or 8217)
         * @param {Object} opts Optional parameters
         * @param {Number} opts.size Maximum size of account to search (default to 100)
         * @param {String} opts.cursor Information on last searched cursor
         * @param {Number} opts.fromTimestamp Timestamp of the start time to be searched (in seconds)
         * @param {Number} opts.toTimestamp Timestamp of the end time to be searched (in seconds)
         * @param {OperatorApi~retrieveOperatorsCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link Operators}
         */
        this.retrieveOperators = function(xChainId, opts, callback) {
            opts = opts || {}
            const postBody = null

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling retrieveOperators")
            }

            const pathParams = {}
            const queryParams = {
                size: opts.size,
                cursor: opts.cursor,
                'from-timestamp': opts.fromTimestamp,
                'to-timestamp': opts.toTimestamp,
            }
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = Operators

            return this.apiClient.callApi(
                '/v1/operator',
                'GET',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }
    }

    return OperatorApi
})
