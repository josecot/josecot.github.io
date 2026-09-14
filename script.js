
document.addEventListener("DOMContentLoaded", () => {

    // Activar iconos de Lucide
    lucide.createIcons();


    // Menú móvil
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Cerrar menú al seleccionar una opción
        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });

        });

    }


    // Año automático del footer
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});


