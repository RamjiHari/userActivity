<?php
include './db_config.php';

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
    if(!empty($actId)){

$select = mysqli_query($con ,"UPDATE `user_activities` SET `end_time` = '$time' WHERE `user_activities`.`id` = '$actId';");
$getId= '';
    }else{
$select=mysqli_query($con,"INSERT INTO `user_activities`( `user_id`, `activity`,`cdate`, `start_time`) VALUES ($cust_id,'$activity','$curDate','$time')");

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

if($_REQUEST['request']=='collectActivityRecord'){
    $data = json_decode(file_get_contents('php://input'), true);
    $cust_id=$data["cust_id"];
    $status='failed';
    $sql = "SELECT * FROM `user_activities` order by id desc";

$result = mysqli_query($con,$sql);
$datas = [];
while($get = mysqli_fetch_assoc($result)){
    $datas[] = $get;
  }
echo json_encode($datas);
}


?>