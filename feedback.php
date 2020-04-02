<?php

include('dbConnect.php');
$client_name = $_GET['client_name'];

$tutor_name = $_GET['tutor_name'];

$subject = $_GET['subject'];

$feedback = $_GET['feedback'];

echo $client_name."\n";
echo $tutor_name."\n";
echo $subject."\n";
echo $feedback."\n";

$con = mysql_connect("$host", "$username", "$password")or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB");
$sql="insert into FEEDBACK values(0,'$client_name', '$tutor_name', '$subject', '$feedback')";
mysql_query($sql, $con);
mysql_close($con);


echo mysql_error($con);


?>