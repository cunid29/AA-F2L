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
            .when('/investors', {
                templateUrl: '../pages/investors.html'
            })
            .when('/member', {
                templateUrl: '../pages/member.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });