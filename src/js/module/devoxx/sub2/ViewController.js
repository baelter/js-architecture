define(function (require) {
    'use strict';
    var _ = require('Underscore'),
        Backbone = require('Backbone'),
        SomeView = require('./SomeView'),
        OtherView = require('./OtherView'),
        MyModel = require('./MyModel');

    /**
     * Constructor
     *
     * This ViewController has two implementations of its View
     */
    return function (options) {
        var model = options.model,
            // I handle my own private model
            myModel = new MyModel(),
            views,
            eventBroker = _.extend({}, Backbone.Events);

        /**
         * No events
         */
        this.on = eventBroker.on;

        this.update = function (args) {
            _.each(views, function (view) {
                view.doStuff();
                // Could also go myModel.doStuff(); ...
            })
        };

        this.getSomeView = function () {
            var view = new SomeView({
                model: myModel
            });
            views.push(view);
            view.on('update', function () {
                // This event does not trigger anything to the ModuleController, it is local
                myModel.fetch();
            });
            return view;
        };

        this.getOtherView = function () {
            var view = new OtherView({
                model: myModel
            });
            views.push(view);
            view.on('update', function () {
                // This event does not trigger anything to the ModuleController, it is local
                myModel.fetch();
            });
            return view;
        };

        return this;
    }
});
