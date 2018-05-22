<?php

$recepient = "magicwindowby@gmail.com";
$sitename = "aquacompaniby";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name\nТелефон: $phone ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");