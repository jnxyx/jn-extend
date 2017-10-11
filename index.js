/*!
 * jn-extend <https://github.com/jnxyx/jn-extend>
 *
 * Copyright (c) 2016-2017, Yun Xiang Xu.
 * Licensed under the MIT License.
 */
var each = require('jn-each')
module.exports = function jnExtend(obj) {

    var objClone = {};

    each(obj, function (value, key) {
        if (obj.hasOwnProperty(key)) {
            objClone[key] = value;
        }
    });

    return objClone;
}