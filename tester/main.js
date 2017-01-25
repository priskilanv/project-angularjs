(function()
{
    form = document.getElementById("myForm");
    btn = document.getElementById("btn");
    btn_add = document.getElementById("btn_add");
    
    /*btn.addEventListener('click', function()
    {
        var data = {};
        Array.prototype.forEach.call(form, function(item)
        {
            var temp;
            if (item === btn) return;
            if (item.name.match(/[[]]/))
            {
                temp = item.name.replace(/[[]]/g, '');
                if(!data[temp]) data[temp] = [];
                data[temp].push(item.value);
                return;
            }
            data[item.name] = item.value;
        });
        
        console.log(data);
    },false);*/
    var myArray = [];
    
    btn.addEventListener('click', function(){

        myArray[document.getElementsByClassName("txt_name")[0].value] = document.getElementsByClassName("txt_value")[0].value;
       
        console.log(myArray);
        
        document.getElementsByClassName("txt_name")[0].value = '';
        document.getElementsByClassName("txt_value")[0].value = '';
       
    });
    
}());

/*var data = [];

function add_element(){

    data[document.getElementById('t1').value] = document.getElementById('t2').value;
    
    console.log(data);
    
    document.getElementById('t1').value='';
    document.getElementById('t2').value='';
    
}*/


