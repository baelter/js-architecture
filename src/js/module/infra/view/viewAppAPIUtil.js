define(function (require) {
    'use strict';

    return {
        /**
         * Reduces a Backbone.View API to $el, promise, render() and remove()
         * @param view Backbone.View
         * @return {Object}
         */
        reduceAPI: function (view) {
            return {
                /**
                 * jQuery object of this views DOM node
                 */
                $el: view.$el,
                /**
                 * Renders this view
                 */
                render: function () {
                    view.render();
                },
                /**
                 * Removes this view from the DOM and triggers 'removed' event
                 */
                remove: function () {
                    view.remove();
                },
                promise: view.promise
            }
        }
    };
});
