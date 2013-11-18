define(function (require) {
    'use strict';
    var Backbone = require('Backbone');
    return Backbone.Model.extend({
        initialize: function (options) {
            this.set('value', 'initial Value');
        }
    });
});