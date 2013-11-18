define(function (require) {
    'use strict';
    var Backbone = require('Backbone'),
        templateUtils = require('module/infra/view/templateUtils'),
        template = require('text!./someView.html');

    return Backbone.View.extend({
        initialize: function (options) {
            return this;
        },
        render: function () {
            var args = {
                title : 'Sub1SomeView'
            };
            templateUtils.render(template, args, this.el);
            return this;
        },
        remove: function () {
            this.trigger('removed');
            this.constructor.__super__.remove();
            return this;
        },
        doStuff: function () {
            return this;
        }
    });
});
