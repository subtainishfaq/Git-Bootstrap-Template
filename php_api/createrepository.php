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


$res=array();

$move = "../repository".$_GET['index'];
if (!file_exists($move)) {
    mkdir($move, 0777, true);
    $post_data = array('created' => true,
        'index' => intval($_GET['index'])
        );
    echo json_encode($post_data);
}
else
{
    $post_data = array('created' => false,
        'index' => intval($_GET['index'])
    );
    echo json_encode($post_data);
}
?>