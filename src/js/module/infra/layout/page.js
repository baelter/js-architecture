define(function (require) {
    'use strict';
    var $ = require('jQuery'),
        _ = require('Underscore');

    // Since Single Page Application, return Singleton
	return (function (el, currentLayout) {
        return {
            setLayout: function (layout) {
                var compiledLayout = null;
                if (layout !== currentLayout) {
                    currentLayout = layout;
                    compiledLayout = _.template(currentLayout);
                    $(el).html(compiledLayout);
                }
                return this;
            },
            setView: function (selector, view) {
                var theHtml = view.render().el;
                $(selector).html(theHtml);
                return this;
            },
            appendView: function (selector, view) {
                var theHtml = view.render().el;
                $(selector).append(theHtml);
                return this;
            },
            clearView: function (selector) {
                $(selector).html('');
                return this;
            }
        };
    }('#app', null));
});