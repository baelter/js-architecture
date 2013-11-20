define(function (require) {
    'use strict';
    var Backbone = require('Backbone'),
        someView = require('./SomeView');

    /**
     * Constructor
     *
     * This ViewController has only one View implementation
     */
    return function (options) {
        var model = options.model,
            someView;

        // Public events
        _.extend(this, Backbone.Events);

        this.getSomeView = function () {
            someView = someView || new SomeView({
                model: model
            });
            someView.on('update', function () {
                // This event could be interesting for other ViewControllers or the ModuleController
                this.trigger('update');
            });
            return someView;
        };
        return this;
    }
});
