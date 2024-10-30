document.addEventListener('DOMContentLoaded', (e) => {
    const cookieBox = document.querySelector(".wrapper");
    const acceptBtn = cookieBox.querySelector("#acceptCookies");
    const rechazotBtn = cookieBox.querySelector("#rechazoCookies");
    const optionBtn = cookieBox.querySelector("#opcionesBtn");
    const cookieOption = document.getElementById("cookieSettings");

    let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal");
    if(checkCookie != -1){
        // Ocultar el aviso de cookies si ya se han aceptado
        cookieBox.style.display = 'none';
    } else {
        // Mostrar el overlay y el aviso de cookies
        document.body.classList.add('cookie-visible');
    }

    acceptBtn.onclick = () => {
        // Establecer la cookie de consentimiento
        document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;

        // Verificar si la cookie se ha establecido correctamente
        if (document.cookie.indexOf("CookieBy=CodingNepal") != -1) {
            // Ocultar el aviso de cookies y el overlay
            document.body.classList.remove('cookie-visible');
        } else {
            alert("¡No se pueden configurar cookies! Desbloquee este sitio desde la configuración de cookies de su navegador.");
        }
    
    }
    rechazotBtn.onclick = () => {
        document.cookie = "CookieBy=CodingNepal; max-age=0; path=/";
        document.body.classList.remove('cookie-visible');
    }
    optionBtn.onclick = () => {
        document.body.classList.add('cookie-visible');
        cookieBox.classList.add("d-none");
        cookieOption.classList.remove("d-none");
    }

});
//Acordion de politicas de cookies
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
      const accordionContent = this.nextElementSibling;
      
      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      }
  
      // Cambiar la flecha hacia arriba o hacia abajo
      const arrow = this.querySelector('.arrow');
      arrow.textContent = arrow.textContent === '▼' ? '▲' : '▼';
    });
  });

//Eleccion del usuario en Configuraciones
document.getElementById('confirmSettings').addEventListener('click', function() {

    var opcionPreferencias = document.querySelector('input[name="cookiesPersonalizacion"]:checked').value;
    var opcionAnlitica = document.querySelector('input[name="cookiesAnalitica"]:checked').value;
    var opcionPublicidad = document.querySelector('input[name="cookiesPublicidad"]:checked').value;

    //Cookie de Preferncias
    if(opcionPreferencias == "Permitir"){
        document.cookie = "personalization=enabled; path=/; max-age=31536000";
    } else{
        document.cookie = "personalization=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    //Cookie de Analitica
    if(opcionAnlitica == "Permitir"){
        document.cookie = "performance=enabled; path=/; max-age=31536000";
    }else{
        document.cookie = "performance=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    //Cookie de Publicidad 
    if(opcionPublicidad =="Permitir"){
        document.cookie = "advertising=enabled; path=/; max-age=31536000"; 
    }else{
        document.cookie = "advertising=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;

    //Esto hace que quite tanto la card pequeña como la grande es decir los avisos
    document.body.classList.remove('cookie-visible');
    cookieOption.classList.add("d-none");
});
//Eleccion del usuario en Deacuerdo en todas
document.getElementById("deacuerdoAll").addEventListener('click', function(){
    document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;
    document.cookie = "personalization=enabled; path=/; max-age=31536000";
    document.cookie = "performance=enabled; path=/; max-age=31536000";
    document.cookie = "advertising=enabled; path=/; max-age=31536000";

    //Esto hace que quite tanto la card pequeña como la grande es decir los avisos
    document.body.classList.remove('cookie-visible');
    cookieOption.classList.add("d-none");


});

//Eleccion del usuario en Rechazar todas
document.getElementById("rechazatAll").addEventListener('click', function(){
    document.cookie = "CookieBy=CodingNepal; max-age=0; path=/";
    document.cookie = "personalization=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "performance=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "advertising=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    //Esto hace que quite tanto la card pequeña como la grande es decir los avisos
    document.body.classList.remove('cookie-visible');
    cookieOption.classList.add("d-none");

});

