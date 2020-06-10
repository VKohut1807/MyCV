<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];

// Формирование самого письма
$title = "From My Site";
$body = "
<h2>New message</h2>
<b>Name:</b> $name<br>
<b>From:</b> $email<br><br>
<b>Message:</b><br>$msg";

// Настройки
$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->Host = 'smtp.gmail.com';  
$mail->CharSet = "UTF-8";
$mail->SMTPAuth = true;                      
$mail->Username = '******'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = '******'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('VKohut1807@gmail.com'); // Ваш Email
$mail->addAddress('vasylkohut1991@gmail.com'); // Email получателя

// Письмо
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'success';
}
?>