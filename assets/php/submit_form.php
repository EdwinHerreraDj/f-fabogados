<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validar y sanitizar datos
    $name = trim(filter_input(INPUT_POST, 'fullName', FILTER_SANITIZE_STRING));
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $subject = trim(filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING));
    $message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING));

    // Configurar el email
    $to = "info@abogadosyasesoresgranada.es"; 
    $headers = "From: info@abogadosyasesoresgranada.es\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $subject = "Nuevo mensaje de contacto: " . htmlspecialchars($subject);
    $emailBody = "
        <html>
        <head><title>Nuevo mensaje de contacto</title></head>
        <body>
            <p><strong>Nombre:</strong> " . htmlspecialchars($name) . "</p>
            <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
            <p><strong>Asunto:</strong> " . htmlspecialchars($subject) . "</p>
            <p><strong>Mensaje:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
        </body>
        </html>";

    // Enviar el email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo '<div style="color: green; margin-top: 10px;">Mensaje enviado exitosamente.</div>';
    } else {
        echo '<div style="color: red; margin-top: 10px;">Error al enviar el mensaje. Inténtalo de nuevo.</div>';
    }
}


