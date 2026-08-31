// =====================================================
// POLITÉCNICO PROF. JOSÉ MERCEDES ALVINO - CEJOMA
// Página Principal
// =====================================================


// -----------------------------------------------------
// Barra Superior Informativa
// -----------------------------------------------------

function BarraSuperior() {

  return (

    <div className="barra_principal">

      <span>

        <i className="fas fa-phone-alt"></i>

        (809) 570-6598

      </span>


      <span>

        <i className="fas fa-envelope"></i>

        info@cejoma.edu.do

      </span>


      <span>

        <i className="fas fa-map-marker-alt"></i>

        Santiago, República Dominicana

      </span>

    </div>

  );

}


// -----------------------------------------------------
// Navegación Principal
// -----------------------------------------------------

function Navegacion() {

  const [menuAbierto, setMenuAbierto] =
    React.useState(false);


  const toggleMenu = () => {

    setMenuAbierto(
      !menuAbierto
    );

  };


  const cerrarMenu = () => {

    setMenuAbierto(
      false
    );

  };


  React.useEffect(
    () => {

      const manejarEscape =
        (event) => {

          if (
            event.key ===
            "Escape"
          ) {

            setMenuAbierto(
              false
            );

          }

        };


      document.addEventListener(
        "keydown",
        manejarEscape
      );


      return () => {

        document.removeEventListener(
          "keydown",
          manejarEscape
        );

      };

    },
    []
  );


  return (

    <header
      className="encabezado"
      role="banner"
    >

      <a
        href="index.html"
        className="marca"
        aria-label="Inicio - Politécnico Prof. José Mercedes Alvino"
      >

        <img
          src="img/cejoma_logo.png"
          alt="Logotipo Politécnico Prof. José Mercedes Alvino"
        />


        <div className="marca-texto">

          <h1>
            Politécnico Prof. José Mercedes Alvino
          </h1>

          <h2>
            Formando con Amor Seres Justos y Competentes.
          </h2>

        </div>

      </a>


      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label={
          menuAbierto
            ? "Cerrar menú de navegación"
            : "Abrir menú de navegación"
        }
        aria-expanded={
          menuAbierto
        }
        aria-controls="nav-principal"
      >

        <i
          className={
            `fas ${
              menuAbierto
                ? "fa-times"
                : "fa-bars"
            }`
          }
        ></i>

      </button>


      <nav
        id="nav-principal"
        className={
          menuAbierto
            ? "mostrar"
            : ""
        }
        role="navigation"
        aria-label="Navegación principal"
      >

        <a
          href="index.html"
          className="active"
          onClick={cerrarMenu}
        >
          Inicio
        </a>


        <a
          href="nosotros/index.html"
          onClick={cerrarMenu}
        >
          Nosotros
        </a>


        <a
          href="oferta_academica/index.html"
          onClick={cerrarMenu}
        >
          Oferta Académica
        </a>


        <a
          href="contacto/index.html"
          onClick={cerrarMenu}
        >
          Contacto
        </a>


        {/*
        <a
          href="tu_cejoma/index.html"
          className="btn-admision"
          onClick={cerrarMenu}
        >
          Tu CEJOMA
        </a>

        <a
          href="#"
          className="btn-admision"
          onClick={cerrarMenu}
        >
          Admisión
        </a>
        */}


        <div
          className="nav-redes"
          aria-label="Redes sociales de CEJOMA"
        >

          <a
            href="https://www.facebook.com/profile.php?id=100009640831152"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de CEJOMA"
            title="Facebook de CEJOMA"
          >

            <i className="fab fa-facebook-f"></i>

          </a>


          <a
            href="https://www.instagram.com/jose_mercedes_alvino/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de CEJOMA"
            title="Instagram de CEJOMA"
          >

            <i className="fab fa-instagram"></i>

          </a>


          <a
            href="https://www.youtube.com/@politecnicoprofesorjosemer7603"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Canal de YouTube de CEJOMA"
            title="YouTube de CEJOMA"
          >

            <i className="fab fa-youtube"></i>

          </a>

        </div>

      </nav>

    </header>

  );

}


// -----------------------------------------------------
// Hero
// -----------------------------------------------------

function Hero() {

  return (

    <section
      className="hero position-relative text-white"
      aria-label="Bienvenida al Año Escolar 2026-2027"
    >

      <div
        className="hero-background"
        style={{
          backgroundImage:
            "url('img/edificiocejoma.jpeg')"
        }}
      ></div>


      <div className="hero-overlay"></div>


      <div className="hero-container container position-relative py-5">

        <div className="row">

          <div className="col-lg-8">

            <span
              className="
                badge
                bg-warning
                text-dark
                font-weight-bold
                text-uppercase
                px-3
                py-2
                mb-3
                rounded-pill
              "
            >

              <i className="fas fa-graduation-cap me-2"></i>

              Año Escolar 2026 - 2027

            </span>


            <h2 className="modern-title display-4 fw-bold">

              Educación que

              <span>
                inspira y transforma.
              </span>

            </h2>


            <p className="lead mt-3 text-light">

              Damos la bienvenida a toda nuestra comunidad educativa
              a este año escolar 2026 - 2027.

              En el Politécnico Prof. José Mercedes Alvino (CEJOMA),
              educamos con vocación, valores, calidad técnica y compromiso.

            </p>


            <div className="mt-4 d-flex gap-3 flex-wrap">

              <a
                href="oferta_academica/index.html"
                className="btn btn-success btn-lg px-4 fw-bold shadow"
              >
                Explorar Oferta Técnica
              </a>


              <a
                href="nosotros/index.html"
                className="btn btn-outline-light btn-lg px-4"
              >
                Conócenos
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}


// -----------------------------------------------------
// Datos de Noticias
// -----------------------------------------------------

const noticias =
  window.CEJOMA_NOTICIAS || [];


// -----------------------------------------------------
// Compartir Noticia
// -----------------------------------------------------

function compartirNoticia(
  noticia
) {

  const url =
    `${window.location.origin}/noticias/index.html#${noticia.id}`;


  const datosCompartir = {

    title:
      noticia.titulo,

    text:
      `${noticia.titulo} - CEJOMA`,

    url:
      url

  };


  if (
    navigator.share
  ) {

    navigator
      .share(
        datosCompartir
      )
      .catch(
        (error) => {

          if (
            error.name !==
            "AbortError"
          ) {

            console.error(
              "No fue posible compartir la noticia:",
              error
            );

          }

        }
      );


    return;

  }


  const textoWhatsApp =
    encodeURIComponent(
      `${noticia.titulo}\n\n${noticia.resumen}\n\n${url}`
    );


  window.open(
    `https://wa.me/?text=${textoWhatsApp}`,
    "_blank",
    "noopener,noreferrer"
  );

}


// -----------------------------------------------------
// Tarjeta de Noticia
// -----------------------------------------------------

function NoticiaCard({
  noticia,
  destacada = false
}) {

  const [abierta, setAbierta] =
    React.useState(false);


  return (

    <div
      className={
        destacada
          ? "col-12"
          : "col-12 col-lg-8 mx-auto"
      }
    >

      <article
        id={noticia.id}
        className={`
          noticia-card
          ${
            destacada
              ? "noticia-card-destacada"
              : "noticia-card-reciente"
          }
          h-100
          border
          rounded
          shadow-sm
          overflow-hidden
          d-flex
          flex-column
        `}
      >

        <img
          src={noticia.imagen}
          alt={noticia.altImagen}
          className="noticia-imagen"
          loading="lazy"
        />


        <div className="p-4 d-flex flex-column flex-grow-1">

          <div className="text-muted small mb-2">

            <i className="far fa-calendar-alt me-1"></i>

            {noticia.fecha}

            <span aria-hidden="true">
              {" · "}
            </span>

            {noticia.categoria}

          </div>


          <h3 className="h4 fw-bold text-success mb-3">

            {noticia.titulo}

          </h3>


          <p className="text-secondary">

            {noticia.resumen}

          </p>


          {abierta && (

            <div className="noticia-contenido-completo">

              {noticia.imagenSecundaria && (

                <figure className="noticia-foto-documental">

                  <img
                    src={noticia.imagenSecundaria}
                    alt={
                      noticia.altImagenSecundaria ||
                      "Fotografía documental de la actividad"
                    }
                    loading="lazy"
                  />


                  {noticia.pieImagenSecundaria && (

                    <figcaption>

                      <strong>
                        {
                          noticia
                            .pieImagenSecundaria
                            .nombre
                        }
                      </strong>

                      <span>
                        {
                          noticia
                            .pieImagenSecundaria
                            .descripcion
                        }
                      </span>

                    </figcaption>

                  )}

                </figure>

              )}


              {noticia.contenido.map(
                (
                  parrafo,
                  indice
                ) => (

                  <p
                    key={indice}
                    className="text-secondary"
                  >

                    {parrafo}

                  </p>

                )
              )}

            </div>

          )}


          <div className="noticia-acciones mt-auto pt-3">

            <button
              type="button"
              className="btn btn-outline-success"
              onClick={
                () =>
                  setAbierta(
                    !abierta
                  )
              }
              aria-expanded={
                abierta
              }
            >

              <i
                className={
                  abierta
                    ? "fas fa-chevron-up me-2"
                    : "fas fa-book-open me-2"
                }
              ></i>

              {
                abierta
                  ? "Cerrar noticia"
                  : "Leer noticia"
              }

            </button>


            <button
              type="button"
              className="btn btn-success"
              onClick={
                () =>
                  compartirNoticia(
                    noticia
                  )
              }
            >

              <i className="fas fa-share-alt me-2"></i>

              Compartir

            </button>

          </div>


          <div className="mt-3 pt-3 border-top">

            <span
              className={
                `badge ${noticia.claseEstado}`
              }
            >

              {noticia.estado}

            </span>

          </div>

        </div>

      </article>

    </div>

  );

}


// -----------------------------------------------------
// Sección de Noticias
// -----------------------------------------------------

function Noticias() {

  /*
   * La portada muestra únicamente
   * las dos noticias más recientes.
   */

  const noticiasPortada =
    noticias.slice(
      0,
      2
    );


  return (

    <section className="noticias-seccion py-5 bg-white">

      <div className="container">

        <div className="text-center mb-5">

          <span className="text-success fw-bold text-uppercase tracking-wider">

            Novedades Institucionales

          </span>


          <h2 className="titulo-seccion fw-bold">

            Noticias y Avisos Recientes

          </h2>


          <p className="text-secondary mt-3 mx-auto noticias-introduccion">

            Conoce las principales actividades, informaciones y acontecimientos
            de nuestra comunidad educativa.

          </p>

        </div>


        <div className="noticias-container row g-4">

          {noticiasPortada.map(
            (
              noticia,
              indice
            ) => (

              <NoticiaCard
                key={noticia.id}
                noticia={noticia}
                destacada={
                  indice === 0
                }
              />

            )
          )}

        </div>


        <div className="text-center mt-5">

          <a
            href="noticias/index.html"
            className="btn btn-outline-success btn-lg px-4 noticias-ver-todas"
          >

            <i className="far fa-newspaper me-2"></i>

            Ver todas las noticias

          </a>

        </div>

      </div>

    </section>

  );

}


// -----------------------------------------------------
// Pie de Página
// -----------------------------------------------------

function PiePagina() {

  return (

    <footer
      role="contentinfo"
      className="footer-cejoma"
    >

      <div className="container">

        <div className="footer-contenido">

          <div className="footer-identidad">

            <img
              src="img/cejoma_logo.png"
              alt="Logo CEJOMA"
              className="footer-logo"
            />


            <div>

              <h3>
                CEJOMA
              </h3>

              <p>
                Politécnico Prof. José Mercedes Alvino
              </p>

              <small>
                Formando con Amor Seres Justos y Competentes.
              </small>

            </div>

          </div>


          <div className="footer-redes">

            <h4>
              Síguenos
            </h4>


            <div className="footer-redes-iconos">

              <a
                href="https://www.facebook.com/profile.php?id=100009640831152"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de CEJOMA"
                title="Facebook de CEJOMA"
              >

                <i className="fab fa-facebook-f"></i>

              </a>


              <a
                href="https://www.instagram.com/jose_mercedes_alvino/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de CEJOMA"
                title="Instagram de CEJOMA"
              >

                <i className="fab fa-instagram"></i>

              </a>


              <a
                href="https://www.youtube.com/@politecnicoprofesorjosemer7603"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal de YouTube de CEJOMA"
                title="YouTube de CEJOMA"
              >

                <i className="fab fa-youtube"></i>

              </a>

            </div>

          </div>

        </div>


        <div className="footer-divider"></div>


        <p className="footer-copyright">

          © 2026{" "}

          <span>
            Politécnico Prof. José Mercedes Alvino (CEJOMA)
          </span>.

          {" "}Todos los derechos reservados.

        </p>

      </div>

    </footer>

  );

}


// -----------------------------------------------------
// Aplicación Principal
// -----------------------------------------------------

function App() {

  return (

    <div>

      <BarraSuperior />

      <Navegacion />


      <main id="contenido-principal">

        <Hero />

        <Noticias />

      </main>


      <PiePagina />

    </div>

  );

}


// -----------------------------------------------------
// Render React 18
// -----------------------------------------------------

const container =
  document.getElementById(
    "react-root"
  );


if (container) {

  const root =
    ReactDOM.createRoot(
      container
    );


  root.render(
    <App />
  );

}