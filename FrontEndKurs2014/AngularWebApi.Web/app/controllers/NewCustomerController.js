function NewCustomerController($scope, $http) {
    console.log("In new Customers controller");
    $scope.SaveNewCustomer = function () {
        $http.post("/odata/Customers", $scope.NewCustomer)
            .success(function () {
                console.log($scope.NewCustomer.ContactName + " was saved");
            });
        console.log("Saved customer successfully");
    }
}