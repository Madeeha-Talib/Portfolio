<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';
require_once __DIR__ . '/PHPMailer/Exception.php';

header('Content-Type: application/json');

function response($success, $message)
{
    echo json_encode([
        "success" => $success,
        "message" => $message
    ]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    response(false, "Invalid request.");
}

/*
Spam Protection
Bots usually fill hidden fields
*/
if (!empty($_POST["website"])) {
    response(false, "Spam detected.");
}

/*
Get Form Data
*/
$name = trim($_POST["name"] ?? '');
$email = trim($_POST["email"] ?? '');
$subject = trim($_POST["subject"] ?? '');
$message = trim($_POST["message"] ?? '');

if (!$name) {
    response(false, "Please enter your name.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    response(false, "Please enter a valid email.");
}

if (!$subject) {
    response(false, "Please enter subject.");
}

if (!$message) {
    response(false, "Please enter your message.");
}

/*
Save backup locally
*/
$logData = date("Y-m-d H:i:s") . "\n";
$logData .= "Name: $name\n";
$logData .= "Email: $email\n";
$logData .= "Subject: $subject\n";
$logData .= "Message: $message\n";
$logData .= "---------------------------\n";

file_put_contents("contact_log.txt", $logData, FILE_APPEND);

try {

    $mail = new PHPMailer(true);

    $mail->isSMTP();

    /*
    Replace these with your Gmail
    */
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;

    $mail->Username = 'madihatalib92@gmail.com';
    $mail->Password = 'npezedwhmwvwwebr';

    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    /*
    Sender
    */
    $mail->setFrom('madihatalib92@gmail.com', 'Portfolio Contact');

    /*
    Receiver
    */
    $mail->addAddress('madihatalib92@gmail.com', 'Madeeha Talib');

    /*
    Reply To User
    */
    $mail->addReplyTo($email, $name);

    /*
    Email Content
    */
    $mail->isHTML(true);

    $mail->Subject = $subject;

    $mail->Body = "
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> $name</p>

        <p><strong>Email:</strong> $email</p>

        <p><strong>Subject:</strong> $subject</p>

        <p><strong>Message:</strong><br>$message</p>
    ";

    $mail->send();

    response(true, "Message sent successfully!");

} catch (Exception $e) {

    response(false, "Email sending failed.");

}