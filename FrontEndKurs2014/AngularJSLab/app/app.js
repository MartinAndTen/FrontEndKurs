var app = angular.module('MyApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when("/first", {
        controller: "firstController",
        templateUrl: "/app/partials/first.html"
    })
    .when("/second:test", {
        controller: "secondController",
        templateUrl: "/app/partials/second.html"
    });
    $routeProvider.otherwise({ redirectTo: "/first" });
});