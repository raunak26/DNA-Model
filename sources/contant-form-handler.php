<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $to = "himay75@gmail.com";
    $email_subject = "New Form Submission";

    $email_body = "User Name:". $name ."\n".
                    "User Email:". $visitor_email "\n".
                        "User Message:". $message."\n";
    

    $headers = "From: $to"." \r\n";

    $headers = "Reply-To: $visitor_email"."\r\n";

    if($_POST['submit']){
        mail($to, $email_subject, $email_body, $headers);
        $feedback = 'Thank you for your message, we will get back to you shortly.';
        }

?>