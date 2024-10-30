document.addEventListener("DOMContentLoaded", function() {
    function generateCaptcha() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const question = `Cuánto es ${num1} + ${num2}?`;
        const answer = num1 + num2;

        // Establece el placeholder en el mismo campo donde el usuario ingresará la respuesta
        document.getElementById("captchaAnswer").placeholder = question;
        return answer;
    }

    let captchaAnswer = generateCaptcha();

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario para hacer la validación primero

        const userAnswer = parseInt(document.getElementById("captchaAnswer").value, 10);
        if (userAnswer !== captchaAnswer) {
            alert("Respuesta de captcha incorrecta. Inténtelo de nuevo.");
            document.getElementById("captchaAnswer").value = "";
            captchaAnswer = generateCaptcha(); // Generar nueva pregunta captcha
        } else {
            // Si el captcha es correcto, enviar el formulario usando AJAX
            const formData = new FormData(this);
            fetch('assets/php/submit_form.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                const responseDiv = document.getElementById("formResponse");
                responseDiv.style.display = "block";
                responseDiv.innerHTML = data;
                // Limpiar el formulario después de enviarlo
                document.getElementById("contactForm").reset();
                captchaAnswer = generateCaptcha(); // Generar nueva pregunta captcha
                // Ocultar el mensaje después de 3 segundos
                setTimeout(() => {
                    responseDiv.style.display = "none";
                }, 3000);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
});


