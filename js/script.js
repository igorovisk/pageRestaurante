var app = angular.module("App", ["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider
    
        .when("/", {
            templateUrl: "./template/home.html"
        })
        .when("/menu", {
            templateUrl: "./template/menu.html"
        })
        .when("/organic", {
            templateUrl: "./template/organic.html"
        })
        .when("/about-us", {
            templateUrl: "./template/about-us.html"
        })
        .when("/reservation", {
            templateUrl: "./template/reservation.html"
        })
       
       
    .otherwise({ redirectTo: './template/home.html' })
})
