app.controller('PressioneController', ['$scope', '$http', function ($scope, $http) {
        var vm = this;
        vm.percorso = "http://localhost:9080/cariam/pressione/pa/dbconnect.php";        
        vm.init = function () {
            $http.get(vm.percorso).then(function (response) {
                        vm.resetMisurazione();
                        $scope.dati = Object.values(response.data);
                    });
        };
        
        vm.resetMisurazione = function () {
            $scope.newMisurazione = {
                sistolica: "",
                diastolica: "",
                pesocorporeo: "",
                datamisurazione: new Date()
            };
        }
        
        vm.deleteMisurazione = function (id) {
            $http.get(vm.percorso + "?act=del&id=" + id)
                    .then(function (response) {
                        $scope.dati = response.data;
                    });
        };
        vm.addMisurazione = function () {

            $http.post(vm.percorso + "?act=new", $scope.newMisurazione)
//            $http({
//                url: "http://localhost/pressionefrontend/dbconnect.php?act=new",
//                method: "POST",
//                header: {"Content-Type": "application/json"},
//                data: $scope.newRecord })
            .then(function (response) {
                $scope.dati = response.data;
            });

            vm.resetMisurazione();
        };
        vm.init();

    }]);


