/**
 * =====================================================
 * POLITÉCNICO PROF. JOSÉ MERCEDES ALVINO - CEJOMA
 * JavaScript Global
 * =====================================================
 *
 * Funciones:
 * 1. Menú responsivo para páginas HTML estáticas.
 * 2. Cierre del menú con ESC.
 * 3. Cierre del menú al seleccionar una opción.
 * 4. Resaltado del enlace activo.
 * 5. Seguridad para enlaces externos.
 *
 * Nota:
 * La página principal utiliza React para controlar
 * su navegación. Este archivo detecta esa situación
 * automáticamente y no interfiere con React.
 */


document.addEventListener("DOMContentLoaded", () => {


  /* ===================================================
     1. MENÚ RESPONSIVO DE PÁGINAS HTML ESTÁTICAS
  =================================================== */

  const btnMenu =
    document.getElementById("btn-menu");

  const navMenu =
    document.getElementById("nav-principal");


  /*
   * En la página principal el botón del menú
   * está controlado por React y no utiliza
   * el ID "btn-menu".
   *
   * Por eso esta lógica solo se activa en
   * páginas HTML estáticas.
   */

  if (btnMenu && navMenu) {


    const iconoMenu =
      btnMenu.querySelector("i");


    /**
     * Abre el menú móvil.
     */
    const abrirMenu = () => {

      navMenu.classList.add("mostrar");

      btnMenu.setAttribute(
        "aria-expanded",
        "true"
      );

      btnMenu.setAttribute(
        "aria-label",
        "Cerrar menú de navegación"
      );


      if (iconoMenu) {

        iconoMenu.classList.remove(
          "fa-bars"
        );

        iconoMenu.classList.add(
          "fa-times"
        );

      }

    };


    /**
     * Cierra el menú móvil.
     */
    const cerrarMenu = () => {

      navMenu.classList.remove("mostrar");

      btnMenu.setAttribute(
        "aria-expanded",
        "false"
      );

      btnMenu.setAttribute(
        "aria-label",
        "Abrir menú de navegación"
      );


      if (iconoMenu) {

        iconoMenu.classList.remove(
          "fa-times"
        );

        iconoMenu.classList.add(
          "fa-bars"
        );

      }

    };


    /**
     * Alterna entre abierto y cerrado.
     */
    const alternarMenu = () => {

      const estaAbierto =
        navMenu.classList.contains(
          "mostrar"
        );


      if (estaAbierto) {

        cerrarMenu();

      } else {

        abrirMenu();

      }

    };


    /* Botón hamburguesa */

    btnMenu.addEventListener(
      "click",
      alternarMenu
    );


    /* ===============================================
       CERRAR CON ESC
    =============================================== */

    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          navMenu.classList.contains(
            "mostrar"
          )
        ) {

          cerrarMenu();

          btnMenu.focus();

        }

      }
    );


    /* ===============================================
       CERRAR AL SELECCIONAR UNA OPCIÓN
    =============================================== */

    const enlacesPrincipales =
      navMenu.querySelectorAll(
        ":scope > a"
      );


    enlacesPrincipales.forEach(
      (enlace) => {

        enlace.addEventListener(
          "click",
          () => {

            if (
              window.innerWidth <= 768
            ) {

              cerrarMenu();

            }

          }
        );

      }
    );


    /* ===============================================
       CERRAR AL CAMBIAR A ESCRITORIO
    =============================================== */

    window.addEventListener(
      "resize",
      () => {

        if (
          window.innerWidth > 768 &&
          navMenu.classList.contains(
            "mostrar"
          )
        ) {

          cerrarMenu();

        }

      }
    );

  }


  /* ===================================================
     2. RESALTADO DEL ENLACE ACTIVO
  =================================================== */

  const enlacesNavegacion =
    document.querySelectorAll(
      "#nav-principal > a"
    );


  if (enlacesNavegacion.length > 0) {


    const rutaActual =
      normalizarRuta(
        window.location.pathname
      );


    enlacesNavegacion.forEach(
      (enlace) => {

        const href =
          enlace.getAttribute("href");


        if (
          !href ||
          href.startsWith("#") ||
          href.startsWith("http://") ||
          href.startsWith("https://")
        ) {

          return;

        }


        let urlDestino;


        try {

          urlDestino =
            new URL(
              href,
              window.location.href
            );

        } catch (error) {

          return;

        }


        const rutaDestino =
          normalizarRuta(
            urlDestino.pathname
          );


        const esActivo =
          determinarEnlaceActivo(
            rutaActual,
            rutaDestino
          );


        if (esActivo) {

          enlace.setAttribute(
            "aria-current",
            "page"
          );

          enlace.classList.add(
            "active"
          );

        } else {

          /*
           * No eliminamos aria-current cuando viene
           * definido correctamente por el HTML de una
           * página de programa que pertenece a
           * Oferta Académica.
           */

          const pertenecePrograma =
            rutaActual.includes(
              "/programs/"
            ) &&
            rutaDestino.includes(
              "/oferta_academica"
            );


          if (pertenecePrograma) {

            enlace.setAttribute(
              "aria-current",
              "page"
            );

            enlace.classList.add(
              "active"
            );

          } else {

            enlace.removeAttribute(
              "aria-current"
            );

            enlace.classList.remove(
              "active"
            );

          }

        }

      }
    );

  }


  /* ===================================================
     3. SEGURIDAD DE ENLACES EXTERNOS
  =================================================== */

  const enlacesExternos =
    document.querySelectorAll(
      'a[target="_blank"]'
    );


  enlacesExternos.forEach(
    (enlace) => {

      const relActual =
        enlace
          .getAttribute("rel")
          ?.split(/\s+/)
          .filter(Boolean) || [];


      if (
        !relActual.includes(
          "noopener"
        )
      ) {

        relActual.push(
          "noopener"
        );

      }


      if (
        !relActual.includes(
          "noreferrer"
        )
      ) {

        relActual.push(
          "noreferrer"
        );

      }


      enlace.setAttribute(
        "rel",
        relActual.join(" ")
      );

    }
  );

});


/* =====================================================
   FUNCIONES AUXILIARES
===================================================== */


/**
 * Normaliza una ruta para comparar URLs.
 *
 * Ejemplos:
 *
 * /nosotros/
 * /nosotros/index.html
 *
 * se convierten en:
 *
 * /nosotros
 */

function normalizarRuta(ruta) {

  if (!ruta) {

    return "/";

  }


  let rutaNormalizada =
    decodeURIComponent(ruta)
      .replace(/\\/g, "/")
      .replace(/\/+/g, "/");


  /*
   * Eliminar index.html del final.
   */

  rutaNormalizada =
    rutaNormalizada.replace(
      /\/index\.html$/i,
      ""
    );


  /*
   * Eliminar slash final,
   * excepto cuando sea raíz.
   */

  if (
    rutaNormalizada.length > 1 &&
    rutaNormalizada.endsWith("/")
  ) {

    rutaNormalizada =
      rutaNormalizada.slice(
        0,
        -1
      );

  }


  /*
   * La raíz vacía debe ser "/".
   */

  if (
    rutaNormalizada === ""
  ) {

    rutaNormalizada = "/";

  }


  return rutaNormalizada;

}


/**
 * Determina si un enlace corresponde
 * a la página actual.
 */

function determinarEnlaceActivo(
  rutaActual,
  rutaDestino
) {

  /*
   * Coincidencia exacta.
   */

  if (
    rutaActual === rutaDestino
  ) {

    return true;

  }


  /*
   * Página principal.
   */

  if (
    rutaActual === "/" &&
    rutaDestino === "/"
  ) {

    return true;

  }


  /*
   * Las páginas dentro de /programs/
   * pertenecen a Oferta Académica.
   */

  if (
    rutaActual.includes("/programs/") &&
    rutaDestino.includes(
      "/oferta_academica"
    )
  ) {

    return true;

  }


  return false;

}