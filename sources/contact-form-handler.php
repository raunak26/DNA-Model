<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Create the email content
    $to = "himay75@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $messageBody = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Attempt to send the email
    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Thank you for contacting us! We will get back to you soon.";
    } else {
        $errorMessage = "Error sending email. Check your server's error log for more details.";
        echo $errorMessage;
        error_log($errorMessage);
    }
} else {
    // Redirect to the contact form if accessed directly
    header("Location: contact_us.html");
    exit();
}
?>
