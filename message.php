<?php
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$website = htmlspecialchars($_POST['website']);
$message = htmlspecialchars($_POST['message']);

if (!empty($email) && !empty($message)) {
    if (filter_var($email,FILTER_VALIDATE_EMAIL)) {
      $receiver="eliasprovincia3@gmail.com";
      $subject="From: $name<$email>";
      
      $body="Nombre: $name\nEmail: $email\nPhone:$phone\nWebSite:$website\nMessage:$message\nRegards,\n$name";

       $sender="From: $email";
      if (mail($receiver,$subject,$body,$sender)) {
        # code...
        echo "Su mensaje se envio";
      } else {
        # code...
        echo "Lo sentimos, fallo su mensaje";
      }
      

    }else {
      echo "Email es invalido!";
    }
}else {
  echo "Faltan datos";
}
?>