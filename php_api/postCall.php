<?php
/**
 * Created by PhpStorm.
 * User: subtainishfaq
 * Date: 10/11/16
 * Time: 12:32 PM
 */

/*$uploads_dir = '../repository2';
foreach ($_FILES["Picture"]["error"] as $key => $error) {
    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["Picture"]["tmp_name"][$key];
        // basename() may prevent filesystem traversal attacks;
        // further validation/sanitation of the filename may be appropriate
        $name = basename("test.png");
        move_uploaded_file($tmp_name, "$uploads_dir/$name");
    }
}*/

$move = "../repository2/";

if (move_uploaded_file($_FILES['file']['tmp_name'], $move . "test.png")) {
    echo "Uploaded";
} else {
    echo "File was not uploaded";
}
?>