<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_DATABASE', 'activity_record');

// define('DB_SERVER', 'mysql.greatapps.xyz');
// define('DB_USERNAME', 'quizme_ngaze');
// define('DB_PASSWORD', '8fj&jf[-2kuIkg^hfs');
// define('DB_DATABASE', 'quizme');

$con = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);


// Check connection
if (mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
?>
