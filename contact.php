<?php
$email_to = "culinaryshare@gmail.com";
$email_subject = $_POST['Subject'];
$name = $_POST['Name'];
$email = $_POST['Email'];
$question = $_POST['Question'];
$email_message = "Content: ".$question."\n\n";
$email_message = "Sender Name: ".$name."\n\n";
$email_message = "Sender Email: ".$email."\n\n";
?>
<h1>Thank You For Signing Up!</h1>
<p>Return to Our <a href="../index.html">Homepage</a></p>