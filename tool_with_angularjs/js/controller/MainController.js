app.controller('JSONController', function($scope, $http, HttpService, ValidURL, Notice, Result, html){
    
    $scope.SubmitJson = function() {
        
        var url = $scope.input_url;
        var result, parsing;
        
        result = "";
        
        if(ValidURL(url) === true)
        {
            result_url = url;
            
            try{
                if(ValidURL(result_url) === true)
                {
                    Notice(200);
                    
                    HttpService("POST", result_url, "", function(clbk){
                        
                        try{
                            parsing = angular.fromJson(clbk);
                        }catch(e){
                            Notice(false);
                            return false;
                        }
          
                        res = JSON.stringify(parsing, undefined, 4);
                        html(Result(res));
                    });
                    
                    return true;
                
                }else{
                    Notice(false);
                }
                
            }catch(err){
                
                Notice(false);
            }
            
        }else{
            try{
                if(url === ""){
                    Notice(201);
                    return false;
                }else{
                    res = JSON.stringify(angular.fromJson(url), undefined, 4);
                    html(Result(res));
                }  
            }catch(err){
    
            }
            
            if(result !== ""){
                Notice(200);
            }else{
                Notice(202);
            }
        }

    };
    
});

app.controller('APIController', function($scope, $http, HttpService, ValidURL, Notice, Result, html){
    
    $scope.SubmitAPI = function() {
        
        var url = $scope.url;
        var param = $scope.param;
        
        var data =  $.param({
                        parameter : param
                    });
        
        if(url !== "" && param !== ""){
            if(ValidURL(url) === true)
            {
                HttpService("POST", url, data, function(clbk){
                    
                    res = JSON.stringify(angular.fromJson(clbk), undefined, 4);
                    html(Result(res));
        
                });
                
                Notice(200);
            
            } else {
                Notice(false);

            }
        } else {
            Notice(201);

        }
    };
    
});