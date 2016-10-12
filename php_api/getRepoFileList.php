<?php
/**
 * Created by PhpStorm.
 * User: subtainishfaq
 * Date: 10/12/16
 * Time: 10:16 PM
 */
$directories = glob("../" . '/repository*' , GLOB_ONLYDIR);
$jsonvar=array();


foreach ($directories as $value)
{
    array_push($jsonvar,substr($value,4));

}

echo json_encode($jsonvar);

?>