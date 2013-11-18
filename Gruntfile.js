module.exports = function (grunt) {
    'use strict';

    // Middleware for directory listing
    var mountFolder = function (connect, point) {
        var path = require('path');
        console.log(path.resolve(point));
        return connect['static'](path.resolve(point));
    };

    // Project configuration
    grunt.initConfig({
        connect: {
            options: {
                port: 9009,
                // change this to '0.0.0.0' to listen to all interfaces
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect, options) {
                        return [
                            require('connect-livereload')({
                                port: 33390
                            }),
                            mountFolder(connect, options.base)
                        ];
                    }
                }
            }
        },
        open: {
            connect: {
                path: 'http://localhost:9009'
            }
        },
        watch: {
            options: {
                debounceDelay: 200
            },
            src: {
                files: ['src/**/*', '*.html'],
                options: {
                    livereload: 33390
                }
            },
            test: {
                files: ['src/**/*', 'test/**/*'],
                tasks: ['jshint', 'jasmine:requirejs']
            },
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['jshint:gruntfile']
            }
        },
        jshint : {
            files : ['src/**/*.js', 'test/**/*.js' ],
            gruntfile: ['Gruntfile.js'],
            options : {
                jshintrc: '.jshintrc'
            }
        },
        jasmine: {
            requirejs: {
                src: 'src/js/**/*.js',
                options: {
                    specs: 'test/js/**/*Spec.js',
                    keepRunner: false,
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfigFile: 'src/js/main.js',
                        requireConfig: {
                            baseUrl: 'src/js/'
                        }
                    }
                }
            }
        },
        requirejs: {
            compile: {
                options: require('./requirejs-options')
            }
        }
    });

    // load all grunt tasks matching the `grunt-*` pattern, exclude `grunt-template-jasmine-requirejs`
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', '!grunt-template-jasmine-requirejs']});

    grunt.registerTask('default', [
        'jshint',
        //'jasmine:requirejs',
        'connect:livereload',
        'open',
        'watch'
    ]);
};