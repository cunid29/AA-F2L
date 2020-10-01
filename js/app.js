    // Single Page Application
    var app = angular.module('myApp', ['ngRoute'])
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../pages/home.html'
            })
            .when('/our-story', {
                templateUrl: '../pages/our-story.html'
            })
            .when('/investors', {
                templateUrl: '../pages/investors.html'
            })
            .when('/media', {
                templateUrl: '../pages/media.html'
            })
            .when('/contact', {
                templateUrl: '../pages/contact.html'
            })
            .when('/product', {
                templateUrl: '../pages/product.html'
            })
            .when('/career', {
                templateUrl: '../pages/career.html'
            })
            .when('/solution', {
                templateUrl: '../pages/solution.html'
            })
            .when('/member', {
                templateUrl: '../pages/member.html'
            })
            .when('/member/register', {
                templateUrl: '../pages/member-register.html',
            })
            .when('/investors/register', {
                templateUrl: '../pages/investors-register.html',
            })
            .otherwise({
                redirectTo: '/'
            });
    });
    //Filter String
    app.filter('cut', function() {
        return function(value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace !== -1) {
                    if (value.charAt(lastspace - 1) === '.' || value.charAt(lastspace - 1) === ',') {
                        lastspace = lastspace - 1;
                    }
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });