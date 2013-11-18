define(function (require) {
    'use strict';
    var $ = require('jQuery'),
        _ = require('Underscore');

	return {
		/**
        * Render content to template and insert compiled template into element.
        * @param template html template structure
        * @param content a object containing data
        * @param el element selector for jQuery
        */
		render: function (template, content, el) {
			var templateCompiled = _.template(template, content);
            $(el).html(templateCompiled);
		}
	};
});