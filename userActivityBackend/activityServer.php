<?php
include './db_config.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
// echo $_REQUEST['request'];die;

if($_REQUEST['request']=='loginUser'){
    $data = json_decode(file_get_contents('php://input'), true);
    $login_user=$data["username"];
    $login_pass=$data["password"];
    // echo $data['dataTime'];
    $status='failed';
$select=mysqli_query($con,"SELECT * FROM `user` WHERE `name`='$login_user' AND `password`='$login_pass'");
 $row=mysqli_fetch_assoc($select);
if(mysqli_num_rows($select)>0){
    $status='success';
}else{
    $status='failed';
}
$response = [
    "status" => $status,
    "user" =>  $row
  ];

 echo json_encode($response);
}

if($_REQUEST['request']=='registerUser'){
    $data = json_decode(file_get_contents('php://input'), true);
    $login_user=$data["username"];
    $login_pass=$data["password"];
    $status='failed';
    $inserts=mysqli_query($con,"INSERT INTO `user` (`name`, `email`, `password`) VALUES ('$login_user', '$login_user', '$login_pass')");
        if($inserts){
           $status='success';
       }
$response = [
    "status" => $status
  ];

 echo json_encode($response);
}

if($_REQUEST['request']=='insertActivity'){
    $data = json_decode(file_get_contents('php://input'), true);
    $cust_id=$data["cust_id"];
    $activity=$data["activity"];
    $time=$data["time"];
    $curDate=$data["curDate"];
    $actId =$data["actId"];
    $cust_email =$data["email"];
    $status='failed';
    $start_time='';
    $create_date='';
    $end_time='';
    if(!empty($actId)){
        

        $select = mysqli_query($con ,"UPDATE `user_activities` SET `end_time` = '$time' WHERE `user_activities`.`id` = '$actId'");
        
       $check = mysqli_query($con,"SELECT `cdate`, `start_time`, `end_time` FROM `user_activities` WHERE `id`='$actId'"); 
       if(mysqli_num_rows($check)>0){
       $row = mysqli_fetch_assoc($check);
        $create_date = $row['cdate'];
        $start_time = $row['start_time'];
        $end_time = $row['end_time'];
       }
        $getId= '';
         if($check){
            $mail = new PHPMailer(true);
            $message = '<html><body>';
            $message .= '<h1 style="color:#f40;">Hi '.$cust_email.'!</h1>';
            $message .= '<p style="color:#080;font-size:18px;">You have finished your '.$activity.' Activity</p>';
            $message .= '</body></html>';
            $subject = 'Activity APP';
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.dreamhost.com';                    // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'contact@allskills.in';                  // SMTP username
            $mail->Password   ='e6p3vwtY';                           // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;                                    // TCP port to connect to
            $mail->setFrom('contact@allskills.in', 'All Skills | Learn and grow');
            $mail->addAddress($cust_email);     // Add a recipient
            $mail->addReplyTo('contact@allskills.in', 'All Skills | Learn and grow');
            
            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = $subject;
            $mail->Body    = $message;
            
            $mail->send();
            $getId= '';
            }
    }else{
    $check=mysqli_query($con,"INSERT INTO `user_activities`( `user_id`, `activity`,`cdate`, `start_time`) VALUES ($cust_id,'$activity','$curDate','$time')");
    $getId= mysqli_insert_id($con);
    }

if($check){
    $status='success';
}else{
    $status='failed';
}
$response = [
    "status" => $status,
    "startTime" => $start_time,
    "createDate" => $create_date,
    "endTime" =>  $end_time,
    "actId" => $getId
  ];

 echo json_encode($response);
}

if($_REQUEST['request']=='collectActivityRecord'){
    $data = json_decode(file_get_contents('php://input'), true);
    $cust_id=$data["cust_id"];
    $status='failed';
    $sql = "SELECT * FROM `user_activities` WHERE `user_id`='$cust_id' order by id desc";

$result = mysqli_query($con,$sql);
$datas = [];
while($get = mysqli_fetch_assoc($result)){
    $datas[] = $get;
  }
echo json_encode($datas);
}


?>