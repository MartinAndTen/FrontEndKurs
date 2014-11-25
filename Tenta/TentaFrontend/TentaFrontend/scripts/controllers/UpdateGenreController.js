function UpdateGenreController($scope, $http, $routeParams) {
    $scope.param = $routeParams.param;
    $scope.EditGenre = function (GenreId) {
        console.log("in the click function for put");
        $http.put("/odata/Genres(" + GenreId + ")", $scope.UpdateGenre)
            .success(function () {
                console.log("Genre with id " + GenreId + " was updated");
            });
    };
}