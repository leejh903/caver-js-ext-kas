/*
 * Token History API
 * # Introduction  Token History API는 KLAY, FT (KIP-7, Labeled ERC-20), NFT (KIP-17, Labeled ERC-721) 토큰 정보, 이들 토큰을 주고받은 기록을 조회하는 기능을 제공합니다. 여러분은 특정 EOA가 KLAY를 주고받은 기록을 확인하거나 EOA가 가지고 있는 NFT 정보를 불러오는 등 Token History API를 다양하게 활용할 수 있습니다.   Token History API 사용에 관한 자세한 내용은 [튜토리얼](https://klaytn.com)을 확인하십시오.   이 문서 혹은 KAS에 관한 문의는 [개발자 포럼](https://forum.klaytn.com/)을 방문해 도움을 받으십시오
 *
 * OpenAPI spec version: 0.7.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient', '../model/TransferItem'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'), require('./TransferItem'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.Transfers = factory(root.TokenHistoryApi.ApiClient, root.TokenHistoryApi.TransferItem)
    }
})(this, function(ApiClient, TransferItem) {
    /**
     * The Transfers model module.
     * @module model/Transfers
     * @version 0.7.0
     */

    /**
     * Constructs a new <code>Transfers</code>.
     * @alias module:model/Transfers
     * @class
     * @param items {Array.<module:model/TransferItem>}
     */
    const Transfers = function(items) {
        this.items = items
    }

    /**
     * Constructs a <code>Transfers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transfers} obj Optional instance to populate.
     * @return {module:model/Transfers} The populated <code>Transfers</code> instance.
     */
    Transfers.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new Transfers()
            if (data.hasOwnProperty('items')) obj.items = ApiClient.convertToType(data.items, [TransferItem])
        }
        return obj
    }

    /**
     * @member {Array.<module:model/TransferItem>} items
     */
    Transfers.prototype.items = undefined

    return Transfers
})
