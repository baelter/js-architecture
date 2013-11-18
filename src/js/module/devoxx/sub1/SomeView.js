define(function (require) {
    'use strict';
    var Backbone = require('Backbone'),
        templateUtils = require('module/infra/view/templateUtils'),
        template = require('text!./someView.html');
    require('Backbone.ModelBinder');
    require('Backbone.Validation');

    return Backbone.View.extend((function () {
        // Private instance variables
        var modelBinder = new Backbone.ModelBinder();

        // Return the object literal that is the argument to Backbone.View.extend
        return {
            initialize: function (options) {
                Backbone.Validation.bind(this);
                return this;
            },
            render: function () {
                var args = {
                    title : 'Sub1SomeView',
                    modelValue : this.model.get('value')
                };
                templateUtils.render(template, args, this.el);
                modelBinder.bind(this.model, this.el);
                return this;
            },
            events: {
                'click .btn' : 'buttonClickHandler'
            },
            remove: function () {
                this.trigger('removed');
                this.constructor.__super__.remove();
                return this;
            },
            buttonClickHandler: function (event) {
                // Events can be sent on the view since we reduce the API before returning views from the ModuleController
                this.trigger('update');
            }
        }
    }()));
});
