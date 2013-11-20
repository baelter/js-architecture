define(function (require) {
    'use strict';
    var _ = require('Underscore'),
        Backbone = require('Backbone'),
        viewAppAPIUtils = require('module/infra/view/viewAppAPIUtils'),
        SomeModel = require('./SomeModel'),
        Sub1ViewController = require('./sub1/ViewController'),
        Sub2ViewController = require('./sub2/ViewController');

    /**
     * Constructor
     */
    return function () {
        var model = new SomeModel(),
            sub1ViewController,
            sub2ViewController;

        // Public events
        _.extend(this, Backbone.Events);

        sub1ViewController.on('update', function (args) {
            // This event could be interesting for the app composer
            this.trigger('update');

            // The ModuleController is responsible for wiring Views together
            sub2ViewController.update(args);
        });

        /**
         * Get a instance of Sub1SomeView
         * @return Sub1SomeView
         */
        this.getSub1SomeView = function () {
            sub1ViewController = sub1ViewController || new Sub1ViewController({
                model: model
            });
            return viewAppAPIUtils.reduceAPI(sub1ViewController.getSomeView())
        };

        /**
         * Get a instance of Sub2SomeView
         * @return Sub2SomeView
         */
        this.getSub2SomeView = function () {
            sub2ViewController = sub2ViewController || new Sub2ViewController({
                model: model
            });
            return viewAppAPIUtils.reduceAPI(sub2ViewController.getSomeView())
        };

        /**
         * Get a instance of Sub2OtherView
         * @return Sub2OtherView
         */
        this.getSub2OtherView = function () {
            sub2ViewController = sub2ViewController || new Sub2ViewController({
                model: model
            });
            return viewAppAPIUtils.reduceAPI(sub2ViewController.getOtherView())
        };
        return this;
    }
});
