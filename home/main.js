/**
 * =====================================================
 * POLITÉCNICO PROF. JOSÉ MERCEDES ALVINO - CEJOMA
 * JavaScript Global
 * =====================================================
 *
 * El menú principal está controlado directamente
 * por React en app.js.
 *
 * Este archivo queda reservado para comportamientos
 * globales que no necesitan manejar estado de React.
 */


document.addEventListener(
  "DOMContentLoaded",
  () => {


    // -------------------------------------------------
    // 1. Resaltado dinámico del enlace activo
    // -------------------------------------------------

    const rutaActual =
      window.location.pathname;


    const enlacesNav =
      document.querySelectorAll(
        "nav#nav-principal > a"
      );


    enlacesNav.forEach(
      (enlace) => {

        const href =
          enlace.getAttribute("href");


        if (!href) {

          return;

        }


        const hrefLimpio =
          href
            .split("?")[0]
            .split("#")[0];


        const esInicio =
          (
            rutaActual.endsWith("/") ||
            rutaActual.endsWith("/index.html")
          ) &&
          !rutaActual.includes("/nosotros/") &&
          !rutaActual.includes("/oferta_academica/") &&
          !rutaActual.includes("/contacto/") &&
          !rutaActual.includes("/tu_cejoma/");


        if (
          hrefLimpio === "index.html" &&
          esInicio
        ) {

          enlace.setAttribute(
            "aria-current",
            "page"
          );

          enlace.classList.add(
            "active"
          );

        }

        else if (
          hrefLimpio.includes("nosotros/") &&
          rutaActual.includes("/nosotros/")
        ) {

          enlace.setAttribute(
            "aria-current",
            "page"
          );

          enlace.classList.add(
            "active"
          );

        }

        else if (
          hrefLimpio.includes("oferta_academica/") &&
          rutaActual.includes("/oferta_academica/")
        ) {

          enlace.setAttribute(
            "aria-current",
            "page"
          );

          enlace.classList.add(
            "active"
          );

        }

        else if (
          hrefLimpio.includes("contacto/") &&
          rutaActual.includes("/contacto/")
        ) {

          enlace.setAttribute(
            "aria-current",
            "page"
          );

          enlace.classList.add(
            "active"
          );

        }

        else {

          enlace.removeAttribute(
            "aria-current"
          );


          if (
            hrefLimpio !== "index.html"
          ) {

            enlace.classList.remove(
              "active"
            );

          }

        }

      }
    );


    // -------------------------------------------------
    // 2. Seguridad de enlaces externos
    // -------------------------------------------------

    const enlacesExternos =
      document.querySelectorAll(
        'a[target="_blank"]'
      );


    enlacesExternos.forEach(
      (enlace) => {

        enlace.setAttribute(
          "rel",
          "noopener noreferrer"
        );

      }
    );

  }
);