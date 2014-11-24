function ListCustomersController($scope, $http) {
    console.log("In the List customer controller");
    $http.get("/odata/Customers")
        .success(function (data, status) {
            $scope.Customers = data.value;
        });
}

function DeleteCustomerController($scope, $http) {
    console.log("In new Customers delete controller");
    $scope.DeleteCustomer = function (CustomerID) {
        $http.delete("/odata/Customers(" + CustomerID + ")")
            .success(function () {
                console.log(customer.ContactName + " was deleted");
                console.log("Deleted customer successfully");
            });
    }
}