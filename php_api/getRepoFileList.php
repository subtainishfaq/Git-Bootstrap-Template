<?php
/**
 * Created by PhpStorm.
 * User: subtainishfaq
 * Date: 10/12/16
 * Time: 10:16 PM
 */
$move = "../".$_GET['repo'];
$jsonvar=array();
$index=0;

foreach(glob($move.'/*.png') as $file)
{
    //"http://$_SERVER[HTTP_HOST]

    $post_data = array('id' => 'p'+$index,
        'title' => basename($file),
        'src' => "http://$_SERVER[HTTP_HOST]/upload/".$_GET['repo']."/".basename($file));
    array_push($jsonvar,$post_data);
    $index++;
}
print  json_encode($jsonvar);
?>