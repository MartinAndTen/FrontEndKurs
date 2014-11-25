function ListGenresController($scope, $http) {
    $http.get("/odata/Genres")
        .success(function (data, status) {
            $scope.Genres = data.value;
        });
    $scope.DeleteGenre = function (GenreId) {
        console.log("in the click function for Delete");
        $http.delete("/odata/Genres(" + GenreId + ")")
            .success(function () {
                console.log("Genre with id " + GenreId + " was deleted");
            });
    };
}