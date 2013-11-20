define(function (require) {
    'use strict';
    var Backbone = require('Backbone'),
        someView = require('./SomeView'),
        eventBroker = _.extend({}, Backbone.Events);

    /**
     * Constructor
     *
     * This ViewController has only one View implementation
     */
    return function (options) {
        var model = options.model,
            someView;

        /**
         * The events...
         * @type {*}
         */
        this.on = eventBroker.on;

        this.getSomeView = function () {
            someView = someView || new SomeView({
                model: model
            });
            someView.on('update', function () {
                // This event could be interesting for other ViewControllers or the ModuleController
                eventBroker.trigger('update');
            });
            return someView;
        };
        return this;
    }
});
