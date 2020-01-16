<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$msg = $_POST['msg'];

$to = "vasylkohut1991@gmail.com"; /* Адрес, куда отправляем письма*/
$subject = "Письмо с обратной связи"; /*Тема письма*/
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $mail\r\n";/*ОТ КОГО*/

/*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
$message .= "Имя пользователя: ".$name."\n";
$message .= "Почта: ".$mail."\n";
$message .= "Сообщение: ".$msg."\n";

$send = mail($to, $subject, $message, $headers);
if ($send == "true"){
    echo "Ваше сообщение отправлено. Мы ответим вам в ближайшее время.\r\n";
}
/*ЕСЛИ ПИСЬМО НЕ УДАЛОСЬ ОТПРАВИТЬ ВЫВОДИМ СООБЩЕНИЕ ОБ ОШИБКЕ*/
else{
    echo "Не удалось отправить, попробуйте снова!";
}






// $subject = "=@utf-8?B?".base64_encode("soobszczenieje z sajta")."?="
// $headers = "From: $mail\r\nReply-to: $mail\r\nContent-type: text/html; charset=utf-8\r\n";

// $success = mail('vasylkohut1991@gmail.com', $subject, $headers, $name, $mail, $msg);
// echo $success;
?>