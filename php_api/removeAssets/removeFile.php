<?php
/**
 * Created by PhpStorm.
 * User: subtainishfaq
 * Date: 10/12/16
 * Time: 3:05 AM
 */

$fileArray = "../../".$_GET['repo']."/".$_GET['file'];



    if (file_exists($fileArray)) {
        unlink($value);
        echo "removed";
    } else {
        // code when file not found
    }
