'use strict';

var users = require('./usersInfo.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(users, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return users;
    }
};
