requirejs.config({
    enforceDefine: false,
    // paths become shortcut aliases
    paths : {
        jquery : '../../lib/jquery/jquery-1.9.1',
        Underscore : '../../lib/underscore/underscore-1.4.4',
        UnderscoreTemplateHelpers : '../../lib/underscore/underscore.template-helpers',
        Backbone : '../../lib/backbone/backbone-1.0.0',
        'Backbone.EventBroker' : '../../lib/backbone/backbone-eventbroker-1.1.0-amd',
        'Backbone.ModelBinder' : '../../lib/backbone/Backbone.ModelBinder',
        'Backbone.CollectionBinder' : '../../lib/backbone/Backbone.CollectionBinder',
        'Backbone.Validation' : '../../lib/backbone/backbone-validation-amd',
        'Backbone.ModelExtensions' : '../../lib/backbone/Backbone.ModelExtensions',
        'Backbone.Subviews' : '../../lib/backbone/backbone.subviews',
        i18n : '../../lib/require/i18n-2.0.2',
        text : '../../lib/require/text-2.0.5',
        domReady : '../../lib/require/domReady-2.0.1',
        template : '.',
        'jQuery.UI' : '../../lib/jquery/jquery-ui-1.10.3.custom',
        'jQuery.UI.DatePicker' : '../../lib/jquery/jquery.ui.datepicker',
        'jQuery.UI.DatePickerSV' : '../../lib/jquery/jquery.ui.datepicker-sv',
        'jQuery.UI.MonthPicker' : '../../lib/jquery/jquery.mtz.monthpicker',
        'jQuery.Cookie' : '../../lib/jquery/jquery.cookie-1.3.1',
        Bootstrap : '../../lib/bootstrap/bootstrap',
        Modernizr : '../../lib/modernizr.custom.99421',
        accounting : '../../lib/accounting',
        vitec : '../../lib/vitec/vitec',
        Webtrends : '../../lib/webtrends/Webtrends',
        JSON : '../../lib/json2',
        Placeholders : '../../lib/Placeholders.min',
        'Underscore.DeepExtend' : '../../lib/underscore/underscore.deepextend.mixin'
    },
    shim : {
        'Underscore' : {
            exports : '_'
        },
        'UnderscoreTemplateHelpers' :{
            deps : [ 'Underscore' ],
            exports : '_.template'
        },
        'Underscore.DeepExtend' : {
            deps : [ 'Underscore' ]
        },
        'Backbone' : {
            deps : [ 'Underscore', 'jQuery' ],
            exports : 'Backbone'
        },
        'Backbone.CollectionBinder' : {
            deps : [ 'Backbone', 'Underscore' ],
            exports : 'Backbone.CollectionBinder'
        },
        'Backbone.ModelExtensions' : {
            deps : [ 'Backbone', 'Underscore' ],
            exports : 'Backbone.ModelExtensions'
        },
        'Backbone.Subviews' : {
            deps : [ 'Backbone', 'Underscore' ],
            exports : 'Backbone.Subviews'
        },
        'Backbone.EventBroker' : {
            deps : [ 'Backbone', 'Underscore', 'jQuery' ],
            exports : 'Backbone.EventBroker'
        },
        'Bootstrap' : {
            deps : [ 'jQuery' ],
            exports : 'jQuery'
        },
        'jQuery.UI' : {
            deps : [ 'jQuery' ],
            exports : 'jQuery'
        },
        'jQuery.UI.DatePicker' : {
            deps : [ 'jQuery' ],
            exports : 'jQuery'
        },
        'jQuery.UI.DatePickerSV' : {
            deps : [ 'jQuery.UI.DatePicker' ],
            exports : 'jQuery'
        },
        'jQuery.UI.MonthPicker' : {
            deps : [ 'jQuery' ],
            exports : 'jQuery'
        },
        'Modernizr' : {
            exports : 'Modernizr'
        },
        'vitec' : {
            deps : ['jQuery.UI', 'Underscore'],
            init : function ($) {
                'use strict';
                return window.LF.vitec;
            }
        },
        'Webtrends' : {
            exports : 'Webtrends'
        }

    },
    map: {
        '*': {
            'backbone': 'Backbone',
            'underscore': 'Underscore',
            'jQuery' : 'jquery'
        }
    }
});

define(function (require) {
    'use strict';
    var domReady = require('domReady'),
        app = require('app');
    require('Placeholders');

    domReady(function () {
        app.initialize();
    });
});