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

foreach(glob($log_directory.'/*.png') as $file)
{
    //"http://$_SERVER[HTTP_HOST]
    $post_data = array('id' => 'p'+$index,
        'title' => $file,
        'src' => "http://$_SERVER[HTTP_HOST]/".$_GET['repo']."/".$file);
    array_push($jsonvar,$post_data);
    $index++;
}
echo  json_encode($jsonvar);
?>