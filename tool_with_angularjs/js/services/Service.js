app.service('HttpService', ['$http', function($http) {
    
    return function doXhr(method, url, data, cb) {
		$http({
            method 	: method,
            url 	: url,
            data 	: data,
        	headers	: { 'Content-Type': 'application/x-www-form-urlencoded' },
        	transformRequest: angular.identity
        }).then(function(response){
            
            cb(response.data);
        	return response;
            
        }, function(err){
        	console.log(err);
        });
	};
    
}]);

app.service('ValidURL', function() {
    
    return function ValidURL(str){
        var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if(!regex .test(str)) {
          return false;
        }else{
          return true;
        }
    };
    
});

app.service('Notice', function() {
    
    return function Notice(status) {
        var alert = document.getElementsByClassName("alert")[0];
        if(status === 200)
        {
            alert.style.display = 'block';
            alert.className = "alert-success";
            alert.innerHTML = '<div class="alt">VALID JSON</div>';    
            setTimeout(function(){ alert.style.display = "none"; }, 6000);
        }else if(status === 201){
            alert.style.display = 'block';
            alert.className = 'alert-danger';
            alert.innerHTML = '<div class="alt">INVALID JSON : isi url/json data dengan teliti</div>';
            setTimeout(function(){ alert.style.display = "none"; }, 6000);
        }else if(status === 202){
            alert.display = 'block';
            alert.className = 'alert-danger';
            alert.innerHTML = '<div class="alt">INVALID JSON : json data harus berupa array bukan string</div>';
            setTimeout(function(){ alert.style.display = "none"; }, 6000);
        }else{
            alert.style.display = 'block';
            alert.className = 'alert-danger';
            alert.innerHTML = '<div class="alt">INVALID JSON : URL tidak valid</div>';
            setTimeout(function(){ alert.style.display = "none"; }, 6000);
        }
    };
    
});

app.service('Result', function() {
    
    return function syntaxHighlight(json) {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    };
});

app.service('html', function() {
    
    return function output(hsl){
        document.querySelectorAll(".tool-title .result-title")[0].style.display = "block";
        document.body.appendChild(document.createElement('pre')).innerHTML = hsl;
    };
    
});