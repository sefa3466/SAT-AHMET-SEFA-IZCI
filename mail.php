<?php

$adsoyad = $_POST["adsoyad"];
$email   = $_POST["email"];
$konu    = $_POST["konu"];
$mesaj   = $_POST["mesaj"];

// BURAYI KENDİ MAIL ADRESİN YAP
$to = "SENINMAILIN@example.com";

$body = "
Ad Soyad: $adsoyad
E-mail: $email
Konu: $konu

Mesaj:
$mesaj
";

$headers = "From: $email";

mail($to, "İletişim Formu: $konu", $body, $headers);

// Gönderim sonrası popup için:
header("Location: iletisim.html?ok=1");
exit;

?>
