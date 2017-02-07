app.controller('PressioneController', ['$scope','$http', function($scope,$http) {
    var vm = this;
    vm.test = 123;
    
    vm.init= function(){
        $http.get("http://localhost/pressionefrontend/dbconnect.php")
        //$http.get("../../dbconnect.php")
        .then(function(response) {
        $scope.dati = response.data;
        });
    };    
     vm.init();
    
}]);


