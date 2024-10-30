<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_input(INPUT_POST, 'fullName', FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_SPECIAL_CHARS);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);


    // Configura el email y el destinatario
    $to = "edwinandresherreragonzalez@gmail.com";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $subject = "Nuevo mensaje de contacto: $subject";
    $emailBody = "<p><strong>Nombre:</strong> $name</p>
                  <p><strong>Email:</strong> $email</p>
                  <p><strong>Asunto:</strong> $subject</p>
                  <p><strong>Mensaje:</strong><br>$message</p>";

    // Enviar el email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo '<div style="color: green; margin-top: 10px;">Mensaje enviado exitosamente.</div>';
    } else {
        echo 'Error al enviar el mensaje. Inténtalo de nuevo.';
    }
}

