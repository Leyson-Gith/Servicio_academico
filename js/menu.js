//===========================================
// MENÚ RESPONSIVE
//===========================================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

    });

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");

        });

    });

    document.addEventListener("click", (e) => {

        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");

        }

    });

}

//===========================================
// BOTÓN VOLVER ARRIBA
//===========================================

const btnTop = document.createElement("button");

btnTop.innerHTML = "↑";

btnTop.className = "btn-top";

document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        btnTop.classList.add("show");

    } else {

        btnTop.classList.remove("show");

    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

//===========================================
// EFECTO SCROLL EN HEADER
//===========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#0F4C81";

        header.style.boxShadow = "0 10px 20px rgba(0,0,0,.15)";

    } else {

        header.style.background = "rgba(15,76,129,.95)";

        header.style.boxShadow = "none";

    }

});

//===========================================
// ANIMACIÓN DE TARJETAS
//===========================================

const cards = document.querySelectorAll(".card-blog,.card-category");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .15

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = ".7s";

    observer.observe(card);

});

//===========================================
// FECHA ACTUAL
//===========================================

const fecha = document.getElementById("fechaActual");

if (fecha) {

    const hoy = new Date();

    fecha.innerHTML = hoy.toLocaleDateString("es-CO", {

        weekday: "long",

        year: "numeric",

        month: "long",

        day: "numeric"

    });

}

//===========================================
// MENSAJE BIENVENIDA
//===========================================

window.addEventListener("load", () => {

    console.log("Campus Virtual cargado correctamente.");

});

//===========================================
// FORMULARIO DE CONTACTO
//===========================================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Mensaje enviado correctamente.");

        form.reset();

    });

}

//===========================================
// EFECTO BOTONES
//===========================================

document.querySelectorAll(".btn-contacto").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

//===========================================
// RELOJ DIGITAL
//===========================================

const reloj = document.getElementById("reloj");

function actualizarHora() {

    if (!reloj) return;

    const ahora = new Date();

    reloj.innerHTML = ahora.toLocaleTimeString();

}

setInterval(actualizarHora, 1000);

actualizarHora();