define(function (require) {
    'use strict';
    var SomeView = require('./SomeView');

    /**
     * Constructor
     *
     * This ViewController has only one View implementation
     */
    return function (options) {
        var model = options.model,
            eventBroker = options.eventBroker,
            someView;

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
