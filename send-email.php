<?php
// Alternative send-email.php for testing
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    // Save to file instead of sending email
    $data = date('Y-m-d H:i:s') . "\n";
    $data .= "Name: $name\n";
    $data .= "Email: $email\n";
    $data .= "Subject: $subject\n";
    $data .= "Message: $message\n";
    $data .= "------------------------\n";
    
    file_put_contents('contact_log.txt', $data, FILE_APPEND);
    
    echo "success";
}
?>