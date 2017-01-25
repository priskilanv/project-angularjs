(function(){
    var app = angular.module("myApp", []);

    app.controller("myController", function($scope, $http, $httpParamSerializerJQLike) {
        
        $scope.processForm = function (){
            $scope.inputurl = $scope.url;
            $scope.inputparam = $scope.param;
            
            var data = {
                param : $scope.inputparam
            };
            
            $scope.parsing = angular.fromJson(data);
            
            $http({
                method : "POST",
                data : $httpParamSerializerJQLike($scope.parsing),
                url : $scope.inputurl,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            }).then(function mySucces(response) {
                //$scope.myWelcome = response.data;
                //console.log($scope.myWelcome);
                
                $scope.result = response.data;
                /*$scope.pre = document.createElement("pre");
                $scope.tes = angular.element(document.getElementsByTagName('body')).append($scope.pre);*/
                
            }, function myError(response) {
                $scope.myWelcome = response.statusText;
                console.log($scope.myWelcome);
            });
        };
        
    });
    
}());