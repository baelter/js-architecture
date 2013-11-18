define(function (require) {
    'use strict';
    var Backbone = require('Backbone'),
        page = require('module/infra/layout/page'),
        layout = require('text!module/infra/layout/someLayout.html'),
        DevoxxModuleController = require('module/devoxx/ModuleController');

    return Backbone.Router.extend((function () {
        // Private instance variables
        var devoxxModuleController = new DevoxxModuleController();

        // Return object literal to Backbone.router.extends
        return {
            initialize: function () {

                // The app layer is interested in devoxx modules public event 'update'
                devoxxModuleController.on('update', function () {
                    page.setView('#contentAreaB', devoxxModuleController.getSub2OtherView())
                });

                return this;
            },
            routes : {
                '' : 'startDevoxx'
            },
            startDevoxx: function () {
                page.setLayout(layout)
                    .setView('#contentAreaA', devoxxModuleController.getSub1SomeView())
                    .setView('#contentAreaB', devoxxModuleController.getSub2SomeView());
            }
        }
    }()));
});
