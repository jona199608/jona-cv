<?php
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$text = $_POST['text'];

$mensaje = "este mensaje fue enciado por " . $email . ",\r\n";
$mensaje .= "asunto  " . $asunto . "\r\n";
$mensaje .= "text " . $_POST['text'] . "\r\n";
$mensaje .= "enviado el  " . date('d/m/y',time());


$para ='subjona@gmail.com';
$asunto = 'este email fue enviado desde el cv';


mail($para , $asunto, utf8_decode($mensaje),$header);

header('Localition:exito.html');

?>



