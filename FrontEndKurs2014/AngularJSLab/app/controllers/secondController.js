app.controller('secondController', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
        $scope.author = $routeParams.test;
    }
]);