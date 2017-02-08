var jq = $.noConflict();
app.controller('PressioneController', ['$scope', '$http', function ($scope, $http) {
        var vm = this;
        vm.test = 123;        
        var cancellaBtn = document.createElement("button");
        cancellaBtn.value = "delete";
        vm.init = function () {
            $http.get("http://localhost:9080/cariam/pressione/pa/dbconnect.php")
                    //$http.get("../../dbconnect.php")
                    .then(function (response) {
                        $scope.dati = [];
                        var temp1 = Object.values(response.data);
                        var temp2 = new Array();
                        for (var dato = 0; dato < temp1.length; dato++) {
                            temp2.push({
                                "datamisurazione": temp1[dato].datamisurazione, 
                                "sistolica": temp1[dato].sistolica, 
                                "diastolica": temp1[dato].diastolica, 
                                "pesocorporeo": temp1[dato].pesocorporeo
                            });
                            console.log(temp1[dato], temp2[dato]);
                        }
                        $scope.dati = temp2;
                        console.log(response.data, temp1, temp2, $scope.dati);
//                        $scope.gridOptions = 
//                                {   data: $scope.dati,
//                                    columnDefs: [
//                                        {name: 'datamisurazione', field: 'datamisurazione'},
//                                        {name: 'sistolica', field: 'sistolica'},
//                                        {name: 'diastolica', field: 'diastolica'},
//                                        {name: 'pesocorporeo', field: 'pesocorporeo'},
//                                        {name: 'cancella', cellTemplate: '<div><button>Click Here</button></div>'}
//                                ]};
                    });
        };
        vm.init();

    }]);


