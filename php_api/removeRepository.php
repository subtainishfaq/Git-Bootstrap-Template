<?php
/**
 * Created by PhpStorm.
 * User: subtainishfaq
 * Date: 10/12/16
 * Time: 4:30 PM
 */

$move = "../repository".$_GET['index'];
if(Delete($move))
    echo "Deleted\n";
else
    echo "Not Deleted";


function Delete($path)
{
    if (is_dir($path) === true)
    {
        $files = array_diff(scandir($path), array('.', '..'));

        foreach ($files as $file)
        {
            Delete(realpath($path) . '/' . $file);
        }

        return rmdir($path);
    }

    else if (is_file($path) === true)
    {
        return unlink($path);
    }

    return false;
}

?>