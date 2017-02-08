app.controller('HomeController', ['$scope', function (){
    var vm = this;   
    vm.config = function () {
            $http.get(vm.percorso).then(function (response) {
                        vm.resetMisurazione();
                        $scope.dati = Object.values(response.data);
                    });
        };
        
        
}]);