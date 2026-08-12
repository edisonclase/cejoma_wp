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

  const [menuAbierto, setMenuAbierto] = React.useState(false);


  const toggleMenu = () => {

    setMenuAbierto(!menuAbierto);

  };


  const cerrarMenu = () => {

    setMenuAbierto(false);

  };


  React.useEffect(() => {

    const manejarEscape = (event) => {

      if (event.key === "Escape") {

        setMenuAbierto(false);

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

  }, []);


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
        aria-expanded={menuAbierto}
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
// Noticias
// -----------------------------------------------------

function Noticias() {

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

        </div>


        <div className="noticias-container row g-4">


          {/* Noticia 1 */}

          <div className="col-md-6">

            <article
              className="
                noticia-card
                h-100
                border
                rounded
                shadow-sm
                overflow-hidden
                d-flex
                flex-column
              "
            >

              <img
                src="img/oficina.png"
                alt="Oficina de registro y gestión académica"
                className="noticia-imagen"
              />


              <div className="p-4 d-flex flex-column flex-grow-1">

                <div className="text-muted small mb-2">

                  <i className="far fa-calendar-alt me-1"></i>

                  Comunicado de Dirección y Registro

                </div>


                <h3 className="h4 fw-bold text-success mb-3">

                  Conclusión del Proceso de Admisión para
                  Nuevo Ingreso (2.º, 3.º y 4.º Grado)

                </h3>


                <p className="text-secondary flex-grow-1">

                  Informamos a toda la comunidad educativa y a las
                  familias postulantes que ha concluido satisfactoriamente
                  el proceso de registro, evaluación, entrevistas y asignación
                  de cupos para los estudiantes de nuevo ingreso correspondientes
                  a 2.º, 3.º y 4.º grado de secundaria.

                  Agradecemos la alta acogida y la confianza depositada
                  en nuestro centro educativo.

                </p>


                <div className="mt-3 pt-3 border-top">

                  <span className="badge bg-secondary">

                    Admisiones Finalizadas

                  </span>

                </div>

              </div>

            </article>

          </div>


          {/* Noticia 2 */}

          <div className="col-md-6">

            <article
              className="
                noticia-card
                h-100
                border
                rounded
                shadow-sm
                overflow-hidden
                d-flex
                flex-column
              "
            >

              <img
                src="img/aula.png"
                alt="Aula preparada para la jornada de capacitación docente"
                className="noticia-imagen"
              />


              <div className="p-4 d-flex flex-column flex-grow-1">

                <div className="text-muted small mb-2">

                  <i className="far fa-calendar-alt me-1"></i>

                  Gestión Pedagógica

                </div>


                <h3 className="h4 fw-bold text-success mb-3">

                  Reintegración y Capacitación del Cuerpo
                  Docente tras el Período Vacacional

                </h3>


                <p className="text-secondary flex-grow-1">

                  Con gran entusiasmo y compromiso, nuestro equipo
                  de profesores se reincorpora a las instalaciones
                  del politécnico tras sus merecidas vacaciones.

                  Actualmente nos encontramos inmersos en la jornada
                  de verano correspondiente al año escolar 2026 - 2027.
                  Además, estamos preparando todo lo relacionado con el inicio
                  del nuevo año escolar, incluyendo la planificación de clases,
                  la actualización de contenidos y la implementación de nuevas
                  estrategias pedagógicas para garantizar una educación
                  de calidad.

                </p>


                <div className="mt-3 pt-3 border-top">

                  <span className="badge bg-success">

                    Equipo Docente Activo

                  </span>

                </div>

              </div>

            </article>

          </div>

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
          <span>Politécnico Prof. José Mercedes Alvino (CEJOMA)</span>.
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
  document.getElementById("react-root");


if (container) {

  const root =
    ReactDOM.createRoot(container);

  root.render(<App />);

}