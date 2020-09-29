angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '../pages/home.html'
            })
            .when('/contact', {
                templateUrl: '../pages/contact.html'
            })
            .when('/media', {
                templateUrl: '../pages/media.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });