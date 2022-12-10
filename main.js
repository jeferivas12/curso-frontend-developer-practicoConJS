const menuEmail = document.querySelector(".navbar-email")
const menuDesktop = document.querySelector(".desktop-menu")

menuEmail.onclick = () => menuDesktop.classList.toggle("inactive")