function DeleteCustomerController($scope, $http) {
    console.log("In the Delete customer controller");
    $scope.DeleteCustomer = function (CustomerID) {
        $http.delete("/odata/Customer(" + CustomerID + ")")
            .success(function () {
                console.log(CustomerID + " was deleted");
            });
    }
}