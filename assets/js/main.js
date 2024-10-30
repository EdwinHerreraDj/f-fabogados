const menu = document.getElementById('menu');
const cookies = document.getElementById('cookies');
const footer = document.getElementById('footer');
const articulosInteres = document.getElementById('articulos-interes');
menu.innerHTML = DOMPurify.sanitize(`
<!-- Top Bar Start -->
<div class="top-bar">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-8">
                <div class="top-left d-i-block">
                    <ul>
                        <li><a href="tel:+34958194663"><i class="flaticon-call"></i></a> 958 194 663</li>
                        <li><a href="#"><i class="flaticon-envelope"></i></a> abogadosyasesoresgranada@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-4">
                <div class="top-right d-i-block text-right">
                    <ul>
                        <li><a target="_blank" href="https://www.facebook.com/abogadosyasesoresgranada/"><i
                                    class="flaticon-facebook-app-symbol"></i></a>
                        </li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/abogadosyasesoresgranada/"><i
                                    class="flaticon-linkedin"></i></a>
                        </li>
                        <li><a target="_blank" href="https://www.instagram.com/abogadosengranada/"><i
                                    class="flaticon-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Top Bar End -->
<!-- Header Menu Start -->
<div class="header-menu">
    <div id="menu-ancho" class="container">
        <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2 col-md-7">
                <div class="menu-logo">
                    <a href="/index.html">
                        <img src="/assets/img/logo.webp" alt="logo del bufete de abogados de granada Robledillo & Herrera" width="400" height="100">
                    </a>
                </div>
                <div class="responsive-menu"></div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-2">
                <div class="main-menu">
                    <ul id="mobilemenu">
                        <li><a href="/index.html">Inicio</a>
                        </li>
                        <li class="menu-icon"><a href="/articulos/abogado-penalista.html">Abogado Penalista <span style="display: inline-block;">▼</span></a>
                            <ul class="submenu">
                                <li><a href="/articulos/delitos-contra-patrimonio.html"><i
                                            class="flaticon-double-right-arrows-angles"></i>Delitos contra el
                                        patrimonio y económicos</a>
                                </li>
                                <li><a href="/articulos/delitos-contra-persona.html"><i
                                            class="flaticon-double-right-arrows-angles"></i>Delitos contra las
                                        personas</a>
                                </li>
                                <li><a href="/articulos/delitos-salud-publica.html"><i
                                            class="flaticon-double-right-arrows-angles"></i>Delitos contra la salud
                                        publica</a>
                                </li>
                                <li><a href="/articulos/delitos-seguridad-vial.html"><i
                                            class="flaticon-double-right-arrows-angles"></i>Delitos contra la
                                        seguridad vial</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-icon"><a href="/articulos/reclamaciones-bancarias.html">Reclamaciones <span style="display: inline-block; ">▼</span></a>
                            <ul class="submenu">
                                <li><a href="/articulos/reclamaciones-bancarias.html"><i
                                            class="flaticon-double-right-arrows-angles"></i>Reclamaciones
                                        bancarias</a>
                                </li>
                                <li><a href="/articulos/reclamaciones-deudas-morosas.html"><i
                                            class="flaticon-double-right-arrows-angles"></i>Reclamaciones deudas de
                                        Morosos</a>
                                </li>
                                <li><a href="/articulos/reclamaciones-negligencias-medicas.html"><i
                                            class="flaticon-double-right-arrows-angles"></i>Negligencias Médicas</a>
                                </li>
                                <li><a href="/articulos/reclamaciones-accidentes-trafico.html"><i
                                            class="flaticon-double-right-arrows-angles"></i>Accidentes de
                                        Tráfico</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-icon"><a href="/articulos/abogado-civil.html">Civil & Familia <span style="display: inline-block;">▼</span></a>
                            <ul class="submenu">
                                <li><a href="/articulos/derecho-familia.html"><i
                                            class="flaticon-double-right-arrows-angles"></i>Derecho de Familia</a>
                                </li>
                                <li><a href="/articulos/derecho-herencias.html"><i
                                            class="flaticon-double-right-arrows-angles"></i>Herencias</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-icon"><a href="/derecho-administrativo.html">Derecho Administrativo</a>
                        </li>
                        </li>
                        <li class="menu-icon"><a href="/blog.html">Blog</a>
                        </li>
                        <li class="menu-icon"><a href="/contacto.html">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-1 col-lg-1 col-md-3">
                <div class="menu-icon">
                    <ul class="d-flex">
                        <li>
                            <div class="hamburger-icon"> <i class="flaticon-menu"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Hamburger Menu Start -->
    <div class="hamburger-popup">
        <div class="hamburger-close-btn"> <i class="flaticon-close"></i>
        </div>
        <div class="menu-box">
            <div class="menu-logo">
                <a href="index.html">
                    <img src="/assets/img/logo.webp" alt="Logo de Abogados y Asesores en Andalucia Granada" width="400" height="100">
                </a>
                <p class="pt-30 texto-hamburguesa">Robledillo y Herrera abogados y asesores granada, contamos con profesionales
                    experimentados y comprometidos que están dispuestos a luchar por ti, protegiendo tus derechos
                    con experiencia y compromiso.</p>
            </div>
            <div class="contact-info pt-30">
                <h3 class="mb-25">Contacto Info</h3>
                <div class="contact-box"> <i class="flaticon-call"></i>958 194 663</div>
                <div class="contact-box"> <i class="flaticon-envelope"></i>abogadosyasesoresgranada@gmail.com</div>
                <div class="contact-box"> <i class="flaticon-placeholder"></i> Avenida de la Constitución 4 4º
                    Dcha., 18012, Granada</div>
            </div>
            <div class="follow-us pt-30">
                <h3 class="mb-25">Síguenos en:</h3>
                <div class="widget social-icon d-i-block">
                    <ul class="footer-social">
                        <li><a href="https://www.facebook.com/abogadosyasesoresgranada/"><i
                                    class="flaticon-facebook-app-symbol"></i></a>
                        </li>
                        <li><a href="https://www.instagram.com/abogadosengranada/"><i
                                    class="flaticon-instagram"></i></a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/abogadosyasesoresgranada/"><i
                                    class="flaticon-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="hamburger-overlay"></div>
    <!-- Hamburger Menu Start -->
</div>
<!-- Header Menu End -->
`);


footer.innerHTML = DOMPurify.sanitize(`
<!-- Footer Area Start  -->
<div class="footer-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 md-mb-30">
                <div class="footer-widget">
                    <h3>Despacho de Abogados Líder en Granada</h3>
                    <div class="widget about-info">
                        <p>Somos un despacho líder en Granada, ofreciendo asesoramiento jurídico de alta calidad.
                            Nuestros abogados experimentados proporcionan un servicio transparente, rápido y eficaz.
                        </p>
                    </div>
                    <div class="widget social-icon">
                        <ul class="footer-social">
                            <li><a href="https://www.facebook.com/abogadosyasesoresgranada/"><i class="flaticon-facebook-app-symbol"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/in/abogadosyasesoresgranada/"><i class="flaticon-linkedin"></i></a>
                            </li>
                            <li><a href="https://www.instagram.com/abogadosengranada/"><i class="flaticon-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="footer-widget">
                    <h3>Noticias Recientes</h3>
                    <div class="widget blog-widget">
                        <ul>
                            <li>
                                <a href="/articulos/blog-compra-venta.html">
                                    <img src="/assets/img/fb-1.png" alt="Abogados y asesores Granada Andalucia">
                                </a>
                                <h4><a href="/articulos/blog-compra-venta.html">Guía para la compra y venta</a></h4>
                                <i class="flaticon-date"></i><span>17 Abr 2024</span>
                            </li>
                            <li>
                                <a href="/articulos/blog-subvenciones.html">
                                    <img src="/assets/img/fb-2.png" alt="">
                                </a>
                                <h4><a href="/articulos/blog-subvenciones.html">Cómo solicitar ayudas y subvenciones</a></h4>
                                <i class="flaticon-date"></i><span>10 Abril 2024</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-6 sm-mt-30 sm-mb-30">
                <div class="footer-widget">
                    <h3>Enlaces</h3>
                    <div class="widget footer-menu">
                        <ul>
                            <li><a href="index.html"><i class="flaticon-double-right-arrows-angles"></i> Inicio</a>
                            </li>
                            <li><a href="/articulos/abogado-penalista.html"><i class="flaticon-double-right-arrows-angles"></i> Abogado Penalista</a>
                            </li>
                            <li><a href="/articulos/reclamaciones-deudas-morosas.html"><i class="flaticon-double-right-arrows-angles"></i> Reclamaciones</a>
                            </li>
                            <li><a href="/articulos/derecho-familia.html"><i class="flaticon-double-right-arrows-angles"></i> Civil & Familia</a>
                            </li>
                            <li><a href="contacto.html"><i class="flaticon-double-right-arrows-angles"></i> Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6">
                <div class="footer-widget">
                    <h3>Información</h3>
                    <div class="widget basic-info">
                        <ul>
                            <li><i class="flaticon-placeholder"></i>C. Torre de Machuca, 4, local 1, Zaidín, 18007 Granada</li>
                            <li><i class="flaticon-call"></i>958 194 663</li>
                            <li><i class="flaticon-envelope"></i>abogadosyasesoresgranada@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Footer Area End -->
<!-- Copyright Area Start -->
<div class="footer-copyright">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12">
                <div class="copyright-content">
                    <p>© <span id="currentYear"></span> Robledillo & Herrera</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Copyright Area End -->
`);

/* ================================Modulos del los Articulos================================ */

if (articulosInteres) {
    articulosInteres.innerHTML = DOMPurify.sanitize(`
        <div class="side-widget blog-cat">
                            <h3>Casos de éxito</h3>
                            <div class="cat-list">
                                <ul>
                                    <li><a target="_blank" href="/pdf/ADMINISTRATIVO - REVOCACION CONDENA EXPULSION TERRITORIO ESPAÑOL EXTRANJERO CON CONDENA PENAL.pdf">➢ Revocación de  condena expulsión<br> del territorio Español</a>
                                    </li>
                                    <li><a target="_blank" href="/pdf/CIVIL - RESOLUCION ESTIMATORIA CAMBIO DE NOMBRE ESTER.pdf">➢ Resolución estimatoria cambio de nombre</a>
                                    <li><a target="_blank" href="/pdf/CIVIL- extincion pension compensatoria.pdf">➢ Extinción pensión compensatoria</a>
                                    <li><a target="_blank" href="/pdf/LABORAL - auto 8 de marzo de 2023 social 4 indemnizacion improcedente y salarios de tramitacion.pdf">➢ Indemnización improcedente y salarios de tramitación</a>
                                    <li><a target="_blank" href="/pdf/PENAL - sentencia defraudacion de fluido electrico ABSOLUTORIA.pdf">➢ Sentencia defraudación de fluido eléctrico</a>
                                </ul>
                            </div>
                        </div>
        `);
}



if(cookies){
cookies.innerHTML = DOMPurify.sanitize(`
    <div class="overlay" id="cookieConsentOverlay">
	
	<!-- Wrapper del mensaje de consentimiento de cookies -->
	<div class="wrapper">
	  <img src="assets/img/cookie.webp" alt="galleta cookie" width="500" height="500">
	  <div class="content">
		<strong>Cookies Consentimiento</strong>
		<p>Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.</p>
		<div class="buttons">
		  <button class="item" id="acceptCookies">Estoy de acuerdo</button>
		  <button class="item" id="rechazoCookies">Rechazar</button>
		  <button id="opcionesBtn">Mas Opciones</button>
		</div>
	  </div>
	</div>
	<!-- Fin del Wrapper -->

	<!--PERMISOS OPCIONES DE COOKIES-->
	<div class="d-none" id="cookieSettings">
		<h1 class="text-center">Panel de configuración de cookies</h1>
		<p>Este es el configurador avanzado de cookies propias y de terceros. Aquí puedes modificar parámetros que
			afectarán directamente a tu experiencia de navegación en esta web.</p>

		<!--Primer elemento-->
		<div class="container">
			<h2 class="titulo-opciones">Cookies de personalización</h2>
			<p>Estas cookies están relacionadas con características generales como, por ejemplo, el navegador que
				utilizas.
				Gracias a ellas el contenido se ajusta a tu uso.</p>
			<form class="miFormulario">

				<input type="radio" id="switch-personalizacion-permitir" name="cookiesPersonalizacion" value="Permitir">
				<label for="switch-necesario-permitir">Permitir</label><br>

				<input type="radio" id="switch-personalizacion-rechazar" name="cookiesPersonalizacion" value="Rechazar">
				<label for="switch-necesario-rechazar">Rechazar</label><br>

			</form>


			<div class="accordion">
				<div class="accordion-header">
					<span>Mostrar más información</span>
					<span class="arrow">&#9660;</span>
				</div>
				<div class="accordion-content">
					<p>Las cookies de personalización se emplean para hacer que tu experiencia en nuestro sitio web sea
						más agradable y adaptada a tus gustos y preferencias. Gracias a estas cookies, podemos recordar
						detalles como tu navegador y ajustes generales para asegurarnos de que nuestro contenido se vea
						de la mejor manera posible para ti. Por ejemplo, estas cookies nos permiten mostrarte nuestro
						sitio en el idioma que prefieras o sugerirte opciones que sean más relevantes para ti, basadas
						en tus visitas anteriores. ¡Queremos que tu visita sea lo más cómoda y personalizada posible!
					</p>
				</div>
			</div>
		</div>
		<!--Segundo elemento-->
		<div class="container">
			<h2 class="titulo-opciones">Cookies de analítica y rendimiento</h2>
			<p>Permiten que el contenido que te mostramos tenga relación con los productos y servicios que visitas.
				Gracias
				a estas cookies no verás anuncios que no te interesen.</p>
			<form class="miFormulario">

				<input type="radio" id="switch-analitica-permitir" name="cookiesAnalitica" value="Permitir">
				<label for="switch-necesario-permitir">Permitir</label><br>

				<input type="radio" id="switch-analitica-rechazar" name="cookiesAnalitica" value="Rechazar">
				<label for="switch-necesario-rechazar">Rechazar</label><br>

			</form>
			<div class="accordion">
				<div class="accordion-header">
					<span>Mostrar más información</span>
					<span class="arrow">&#9660;</span>
				</div>
				<div class="accordion-content">
					<p>Las cookies de análisis y rendimiento nos ayudan a entender cómo interactúas con nuestro sitio
						web. Al analizar esta información, podemos mejorar tu experiencia, asegurándonos de que nuestro
						sitio sea fácil y agradable de usar. Además, estas cookies nos permiten mostrarte anuncios que
						realmente podrían interesarte, alineados con tus preferencias y tu historial de navegación,
						evitando así que veas publicidad que no sea de tu interés. ¡Queremos que tu visita a nuestro
						sitio sea lo más relevante y eficiente posible!</p>
				</div>
			</div>
		</div>
		<!--Tercer elemento-->
		<div class="container">
			<h2 class="titulo-opciones">Cookies de Publicidad personalizada</h2>
			<p>Permiten que la publicidad que te mostramos en otras webs y apps fuera de los canales sea
				personalizada y relevante para ti. Gracias a estas cookies no verás anuncios que no te interesen.</p>
			<form class="miFormulario">

				<input type="radio" id="switch-Publicidad-permitir" name="cookiesPublicidad" value="Permitir">
				<label for="switch-necesario-permitir">Permitir</label><br>

				<input type="radio" id="switch-Publicidad-rechazar" name="cookiesPublicidad" value="Rechazar">
				<label for="switch-necesario-rechazar">Rechazar</label><br>

			</form>
			<div class="accordion">
				<div class="accordion-header">
					<span>Mostrar más información</span>
					<span class="arrow">&#9660;</span>
				</div>
				<div class="accordion-content">
					<p>Las cookies de publicidad personalizada se utilizan para mostrarte anuncios que realmente te
						interesan, siguiendo tu actividad en diferentes sitios y aplicaciones. Su objetivo es asegurarse
						de que los anuncios que ves en otros lugares, fuera de nuestro sitio, coincidan con tus gustos e
						intereses. Esto significa que es menos probable que te encuentres con publicidad que no te
						resulte relevante. ¡Queremos que tu experiencia publicitaria en la web sea tan atractiva y
						acorde a ti como sea posible!</p>
				</div>
			</div>
		</div>

		<!-- Más opciones aquí si son necesarias -->

		<div class="actions">
			<button id="deacuerdoAll">Permitir todas</button>
			<button id="rechazatAll">Rechazar todas</button>
			<button id="confirmSettings">Confirmar ajustes</button>
		</div>
	</div>

	<!--PERMISOS OPCIONES DE COOKIES FINAL-->

</div>`);
};






