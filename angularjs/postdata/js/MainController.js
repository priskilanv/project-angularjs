app.controller('NewsController', function($scope, $http) {
    $scope.SendData = function() {
        var data = $.param({
            title : $scope.title,
            category : $scope.category,
            synopsis : $scope.synopsis,
            news : $scope.news,
            tag : $scope.tag
        });
        
        var config = {
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };
        
        $http.post('http://192.168.0.253:81/priskila/angularjs/postdata/php/index.php', data, config)
        .then(
            function(response){
                console.log(response);
            }, 
            function(response){
                console.log(response);
            }
        );
    };
});