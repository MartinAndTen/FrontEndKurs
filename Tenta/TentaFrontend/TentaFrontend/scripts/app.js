var app = angular.module('MyApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: "/views/partials/NewGenre.html",
            controller: "NewGenreController"
        })
        .when('/List',
        {
            templateUrl: "/views/partials/ListGenres.html",
            controller: "ListGenresController"
        });
});

app.controller('NewGenreController', NewGenreController).controller('ListGenresController', ListGenresController);