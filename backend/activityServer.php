<?php
include './db_config.php';



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

if($_REQUEST['request']=='insertActivity'){
    $data = json_decode(file_get_contents('php://input'), true);
    $cust_id=$data["cust_id"];
    $activity=$data["activity"];
    $time=$data["time"];
    $actId =$data["actId"];
    $status='failed';
    if(!empty($actId)){
$select = mysqli_query($con ,"UPDATE `user_activity` SET `end_time` = '$time' WHERE `user_activity`.`id` = '$actId';");
$getId= '';
    }else{
$select=mysqli_query($con,"INSERT INTO `user_activity`( `user_id`, `activity`, `start_time`) VALUES ($cust_id,'$activity','$time')");
$getId= mysqli_insert_id($con);
    }

if($select){

    $status='success';
}else{
    $status='failed';
}
$response = [
    "status" => $status,
    "actId" => $getId
  ];

 echo json_encode($response);
}


?>