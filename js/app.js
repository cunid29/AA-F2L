angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
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
            .otherwise({
                redirectTo: '/home'
            });
    });