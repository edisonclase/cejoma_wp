// =====================================================
// CEJOMA
// Archivo Histórico de Noticias
// =====================================================


document.addEventListener(
  "DOMContentLoaded",
  () => {

    const noticias =
      window.CEJOMA_NOTICIAS || [];


    const lista =
      document.getElementById(
        "lista-noticias"
      );


    const filtrosContenedor =
      document.getElementById(
        "filtros-noticias"
      );


    const buscador =
      document.getElementById(
        "buscar-noticias"
      );


    const sinResultados =
      document.getElementById(
        "sin-resultados"
      );


    if (
      !lista ||
      !filtrosContenedor ||
      !buscador ||
      !sinResultados
    ) {

      console.error(
        "No fue posible inicializar el archivo de noticias."
      );

      return;

    }


    let categoriaActiva =
      "Todas";


    let busquedaActual =
      "";


    // =================================================
    // CATEGORÍAS
    // =================================================

    const categorias = [

      "Todas",

      ...new Set(
        noticias.map(
          noticia =>
            noticia.categoria
        )
      )

    ];


    categorias.forEach(
      categoria => {

        const boton =
          document.createElement(
            "button"
          );


        boton.type =
          "button";


        boton.className =
          categoria === "Todas"
            ? "filtro-btn activo"
            : "filtro-btn";


        boton.textContent =
          categoria;


        boton.addEventListener(
          "click",
          () => {

            categoriaActiva =
              categoria;


            document
              .querySelectorAll(
                ".filtro-btn"
              )
              .forEach(
                item => {

                  item.classList.remove(
                    "activo"
                  );

                }
              );


            boton.classList.add(
              "activo"
            );


            renderizarNoticias();

          }
        );


        filtrosContenedor.appendChild(
          boton
        );

      }
    );


    // =================================================
    // BUSCADOR
    // =================================================

    buscador.addEventListener(
      "input",
      event => {

        busquedaActual =
          event
            .target
            .value
            .trim()
            .toLowerCase();


        renderizarNoticias();

      }
    );


    // =================================================
    // RENDERIZAR
    // =================================================

    function renderizarNoticias() {

      lista.innerHTML =
        "";


      const filtradas =
        noticias.filter(
          noticia => {

            const coincideCategoria =
              categoriaActiva ===
                "Todas" ||
              noticia.categoria ===
                categoriaActiva;


            const textoCompleto =
              [
                noticia.titulo,
                noticia.resumen,
                noticia.categoria,
                noticia.fecha,
                ...(noticia.contenido || [])
              ]
                .join(" ")
                .toLowerCase();


            const coincideBusqueda =
              !busquedaActual ||
              textoCompleto.includes(
                busquedaActual
              );


            return (
              coincideCategoria &&
              coincideBusqueda
            );

          }
        );


      sinResultados.hidden =
        filtradas.length > 0;


      filtradas.forEach(
        noticia => {

          const elemento =
            crearNoticia(
              noticia
            );


          lista.appendChild(
            elemento
          );

        }
      );


      abrirNoticiaDesdeHash();

    }


    // =================================================
    // CREAR NOTICIA
    // =================================================

    function crearNoticia(
      noticia
    ) {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "archivo-noticia";


      article.id =
        noticia.id;


      const imagen =
        normalizarRutaImagen(
          noticia.imagen
        );


      article.innerHTML = `

        <div class="archivo-noticia-imagen">

          <img
            src="${imagen}"
            alt="${escaparHTML(
              noticia.altImagen
            )}"
            loading="lazy"
          >

        </div>


        <div class="archivo-noticia-contenido">

          <div class="noticia-meta">

            <span>

              <i class="far fa-calendar-alt"></i>

              ${escaparHTML(
                noticia.fecha
              )}

            </span>


            <span>

              <i class="far fa-folder-open"></i>

              ${escaparHTML(
                noticia.categoria
              )}

            </span>

          </div>


          <h3>

            ${escaparHTML(
              noticia.titulo
            )}

          </h3>


          <p class="noticia-resumen">

            ${escaparHTML(
              noticia.resumen
            )}

          </p>


          <div
            class="noticia-completa"
            hidden
          ></div>


          <div class="noticia-botones">

            <button
              type="button"
              class="btn-leer"
            >

              <i class="fas fa-book-open"></i>

              Leer noticia

            </button>


            <button
              type="button"
              class="btn-compartir"
            >

              <i class="fas fa-share-alt"></i>

              Compartir

            </button>

          </div>

        </div>

      `;


      const contenido =
        article.querySelector(
          ".noticia-completa"
        );


      construirContenidoCompleto(
        contenido,
        noticia
      );


      const botonLeer =
        article.querySelector(
          ".btn-leer"
        );


      botonLeer.addEventListener(
        "click",
        () => {

          const estaAbierta =
            !contenido.hidden;


          contenido.hidden =
            estaAbierta;


          botonLeer.innerHTML =
            estaAbierta
              ? `
                  <i class="fas fa-book-open"></i>
                  Leer noticia
                `
              : `
                  <i class="fas fa-chevron-up"></i>
                  Cerrar noticia
                `;


          if (
            !estaAbierta
          ) {

            history.replaceState(
              null,
              "",
              `#${noticia.id}`
            );

          }

        }
      );


      const botonCompartir =
        article.querySelector(
          ".btn-compartir"
        );


      botonCompartir.addEventListener(
        "click",
        () => {

          compartirNoticia(
            noticia
          );

        }
      );


      return article;

    }


    // =================================================
    // CONTENIDO COMPLETO
    // =================================================

    function construirContenidoCompleto(
      contenedor,
      noticia
    ) {

      if (
        noticia.imagenSecundaria
      ) {

        const figura =
          document.createElement(
            "figure"
          );


        figura.className =
          "foto-documental";


        const pie =
          noticia
            .pieImagenSecundaria;


        figura.innerHTML = `

          <img
            src="${normalizarRutaImagen(
              noticia.imagenSecundaria
            )}"
            alt="${escaparHTML(
              noticia.altImagenSecundaria ||
              "Fotografía de la actividad"
            )}"
            loading="lazy"
          >

          ${
            pie
              ? `
                  <figcaption>

                    <strong>
                      ${escaparHTML(
                        pie.nombre
                      )}
                    </strong>

                    <span>
                      ${escaparHTML(
                        pie.descripcion
                      )}
                    </span>

                  </figcaption>
                `
              : ""
          }

        `;


        contenedor.appendChild(
          figura
        );

      }


      (
        noticia.contenido ||
        []
      )
        .forEach(
          parrafo => {

            const p =
              document.createElement(
                "p"
              );


            p.textContent =
              parrafo;


            contenedor.appendChild(
              p
            );

          }
        );

    }


    // =================================================
    // COMPARTIR
    // =================================================

    function compartirNoticia(
      noticia
    ) {

      const url =
        `${window.location.origin}${window.location.pathname}#${noticia.id}`;


      const datos =
        {

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
            datos
          )
          .catch(
            error => {

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


      const texto =
        encodeURIComponent(
          `${noticia.titulo}\n\n${noticia.resumen}\n\n${url}`
        );


      window.open(
        `https://wa.me/?text=${texto}`,
        "_blank",
        "noopener,noreferrer"
      );

    }


    // =================================================
    // ABRIR NOTICIA DESDE HASH
    // =================================================

    function abrirNoticiaDesdeHash() {

      const id =
        window
          .location
          .hash
          .replace(
            "#",
            ""
          );


      if (
        !id
      ) {

        return;

      }


      const noticia =
        document.getElementById(
          id
        );


      if (
        !noticia
      ) {

        return;

      }


      const contenido =
        noticia.querySelector(
          ".noticia-completa"
        );


      const boton =
        noticia.querySelector(
          ".btn-leer"
        );


      if (
        contenido
      ) {

        contenido.hidden =
          false;

      }


      if (
        boton
      ) {

        boton.innerHTML = `
          <i class="fas fa-chevron-up"></i>
          Cerrar noticia
        `;

      }


      setTimeout(
        () => {

          noticia.scrollIntoView(
            {
              behavior:
                "smooth",

              block:
                "start"
            }
          );

        },
        150
      );

    }


    // =================================================
    // RUTAS DE IMÁGENES
    // =================================================

    function normalizarRutaImagen(
      ruta
    ) {

      if (
        !ruta
      ) {

        return "";

      }


      if (
        ruta.startsWith(
          "img/"
        )
      ) {

        return (
          "../" +
          ruta
        );

      }


      return ruta;

    }


    // =================================================
    // ESCAPAR HTML
    // =================================================

    function escaparHTML(
      texto
    ) {

      const div =
        document.createElement(
          "div"
        );


      div.textContent =
        texto || "";


      return div.innerHTML;

    }


    // =================================================
    // INICIAR
    // =================================================

    renderizarNoticias();

  }
);