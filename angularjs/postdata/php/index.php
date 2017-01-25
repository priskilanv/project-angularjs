<?php

$data = ProcessForm();

$result = array("data"	=> $data);

header('Content-type: application/json;charset=utf-8');
echo utf8_encode(json_encode($result));
  
$hasil = json_encode($result);
  
function ProcessForm()
{
    $category = $_POST['category'];
    $title = $_POST['title'];
    $synopsis = $_POST['synopsis'];
    $news = $_POST['news'];
    $tag = $_POST['tag'];
    
    /*$uploadir = 'http://192.168.0.253:81/priskila/angularjs/postdata/php/';
    $uploadfile = $uploadir. basename($_FILES['userfile']['name']);
    
    $upload = move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile);
    if($upload)
    {
        echo "Yeah! File Uploaded";
        
    }else{
        echo "Sorry, File Was Not Upload";
    }*/
    
    $data[] = array("category" => $category,
                    "title"    => $title,
                    "synopsis" => $synopsis,
                    "news"     => $news,
                    //"image"    => $uploadfile,
                    "tag"      => $tag
                    );
    
    return $data;
     
}

?>