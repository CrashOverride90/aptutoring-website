<?php


$name = $_GET['name'];

$email = $_GET['email'];

$phone = $_GET['phone'];

$subject = $_GET['subject'];
$message = stripslashes(trim($_GET['message']));

echo $email;
echo $name;
echo $phone;
echo $message;
echo $subject;

// PHP email 
$emailTo = 'contact@aptutoring.us'; //Put your own email address here
$websitename = "APTutoring.us"; //Put your website name here
	
$body = "Name: $name \n\nEmail: $email \n\nPhone: $phone \n\nSubject: $subject \n\nMessage:\n $message";
$headers = 'From: '.$websitename.' <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

mail($emailTo, $subject, $body, $headers);
$emailSent = true;
echo "email sent: ".$emailSent;

?>