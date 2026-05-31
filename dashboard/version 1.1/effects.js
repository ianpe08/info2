const sidebtn = document.querySelector("#btn");
const sidebar = document.querySelector(".sidebar");
const dashboard = document.querySelector(".dashboard");
const shortcuts = document.querySelector(".shortcuts");

sidebtn.addEventListener("click", () => {
    sidebar.classList.toggle("oculta");
    dashboard.classList.toggle("oculta-sidebar");
    shortcuts.classList.toggle("oculta");
});

const btnreloj = document.querySelector("#btn-reloj");
const btnclima = document.querySelector("#btn-clima");
const reloj = document.querySelector(".reloj");
const clima = document.querySelector(".clima");
const btnrelojenv = document.querySelector(".btn-reloj");
const btnclimaenv = document.querySelector(".btn-clima");

reloj.classList.add("activa");
btnclimaenv.classList.add("activa");

btnreloj.addEventListener("click", () => {
    clima.classList.remove("activa");
    reloj.classList.add("activa");
    btnrelojenv.classList.remove("activa");
    btnclimaenv.classList.add("activa");
});

btnclima.addEventListener("click", () => {
    reloj.classList.remove("activa");
    clima.classList.add("activa");
    btnclimaenv.classList.remove("activa");
    btnrelojenv.classList.add("activa");
});