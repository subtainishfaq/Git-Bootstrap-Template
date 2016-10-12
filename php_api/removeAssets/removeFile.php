<?php
/**
 * Created by PhpStorm.
 * User: subtainishfaq
 * Date: 10/12/16
 * Time: 3:05 AM
 */

$fileArray = array(
    "../repository2/test.png",

);

foreach ($fileArray as $value) {
    if (file_exists($value)) {
        unlink($value);
        echo "removed";
    } else {
        // code when file not found
    }
}