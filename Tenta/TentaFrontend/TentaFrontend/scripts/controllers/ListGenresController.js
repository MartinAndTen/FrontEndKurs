function ListGenresController($scope, $http) {
    $http.get("/odata/Genres")
        .success(function (data, status) {
            $scope.Genres = data.value;
        });
}