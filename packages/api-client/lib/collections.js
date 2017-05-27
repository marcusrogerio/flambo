'use strict';

/** @module collections */

/*    
 * This code were auto-generated
 * DO NOT EDIT!
 * 
 * generated on: Fri May 26 2017 11:08:31 GMT+0900 (JST)
 */
var builder = require('./builder');

module.exports = {
    /**
     * List collections
     *
     * @param {Object} [params]
     * @param {number} [params.page=1] - [pagination] The desired page (starts at 1).
     * @param {number} [params.per_page=10] - [pagination] The desired number of items per page (max 100).
     * @param {ClientOptions} [clientOptions] - The global client options
     */find: function find() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$page = _ref.page,
            page = _ref$page === undefined ? 1 : _ref$page,
            _ref$per_page = _ref.per_page,
            per_page = _ref$per_page === undefined ? 10 : _ref$per_page;

        var clientOptions = arguments[1];

        var req = builder.build(clientOptions, {
            path: '/collections',
            method: 'get',
            query: {
                page: page,
                per_page: per_page
            }
        });
        return fetch(req.url, req.options).then(function (res) {
            return res.json();
        });
    },
    /**
     * Get a collection
     *
     * @param {string} id - The collection ID
     * @param {ClientOptions} [clientOptions] - The global client options
     */get: function get(id, clientOptions) {
        var req = builder.build(clientOptions, {
            path: '/collections/{id}',
            method: 'get',
            params: {
                id: id
            }
        });
        return fetch(req.url, req.options).then(function (res) {
            return res.json();
        });
    },
    /**
     * Create a collection for the current user.
     *
     * @param {Object} collection - Properties of the collection to create
     * @param {string} collection.name - Collection name
     * @param {string} [collection.description] - Collection description
     * @param {boolean} collection.public - Defines if the collection will be publicly visible
     * @param {ClientOptions} [clientOptions] - The global client options
     */create: function create(collection, clientOptions) {
        var req = builder.build(clientOptions, {
            path: '/collections',
            method: 'post',
            body: JSON.stringify(collection)
        });
        return fetch(req.url, req.options).then(function (res) {
            return res.json();
        });
    },
    /**
     * Get a collection feed
     *
     * @param {string} id - The collection ID
     * @param {Object} [params]
     * @param {number} [params.page=1] - [pagination] The desired page (starts at 1).
     * @param {number} [params.per_page=10] - [pagination] The desired number of items per page (max 100).
     * @param {ClientOptions} [clientOptions] - The global client options
     */feed: function feed(id) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref2$page = _ref2.page,
            page = _ref2$page === undefined ? 1 : _ref2$page,
            _ref2$per_page = _ref2.per_page,
            per_page = _ref2$per_page === undefined ? 10 : _ref2$per_page;

        var clientOptions = arguments[2];

        var req = builder.build(clientOptions, {
            path: '/collections/{id}/feed',
            method: 'get',
            params: {
                id: id
            },
            query: {
                page: page,
                per_page: per_page
            }
        });
        return fetch(req.url, req.options).then(function (res) {
            return res.json();
        });
    },
    /**
     * Get a collection comments
     *
     * @param {string} id - The collection ID
     * @param {Object} [params]
     * @param {number} [params.page=1] - [pagination] The desired page (starts at 1).
     * @param {number} [params.per_page=10] - [pagination] The desired number of items per page (max 100).
     * @param {ClientOptions} [clientOptions] - The global client options
     */comments: function comments(id) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$page = _ref3.page,
            page = _ref3$page === undefined ? 1 : _ref3$page,
            _ref3$per_page = _ref3.per_page,
            per_page = _ref3$per_page === undefined ? 10 : _ref3$per_page;

        var clientOptions = arguments[2];

        var req = builder.build(clientOptions, {
            path: '/collections/{id}/comments',
            method: 'get',
            params: {
                id: id
            },
            query: {
                page: page,
                per_page: per_page
            }
        });
        return fetch(req.url, req.options).then(function (res) {
            return res.json();
        });
    },
    /**
     * Get a collection subscribers
     *
     * @param {string} id - The collection ID
     * @param {Object} [params]
     * @param {number} [params.page=1] - [pagination] The desired page (starts at 1).
     * @param {number} [params.per_page=10] - [pagination] The desired number of items per page (max 100).
     * @param {ClientOptions} [clientOptions] - The global client options
     */subscribers: function subscribers(id) {
        var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref4$page = _ref4.page,
            page = _ref4$page === undefined ? 1 : _ref4$page,
            _ref4$per_page = _ref4.per_page,
            per_page = _ref4$per_page === undefined ? 10 : _ref4$per_page;

        var clientOptions = arguments[2];

        var req = builder.build(clientOptions, {
            path: '/collections/{id}/subscribers',
            method: 'get',
            params: {
                id: id
            },
            query: {
                page: page,
                per_page: per_page
            }
        });
        return fetch(req.url, req.options).then(function (res) {
            return res.json();
        });
    }
};