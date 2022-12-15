const menuEmail = document.querySelector(".navbar-email")
const menuDesktop = document.querySelector(".desktop-menu")
const btnMenuMobile = document.querySelector(".menu")
const MenuMobile = document.querySelector(".mobile-menu")
const btnCar = document.querySelector(".navbar-shopping-cart")
const productDetail = document.querySelector(".product-detail")

const divCardsContainer = document.querySelector(".cards-container")
const fragmentContenedorCards = document.createDocumentFragment()

menuEmail.onclick = () => {
    if (!productDetail.classList.contains("inactive"))
        {
            productDetail.classList.add("inactive")
        }
    menuDesktop.classList.toggle("inactive")
}
btnMenuMobile.onclick = () => {
    if (!productDetail.classList.contains("inactive"))
        {
            productDetail.classList.add("inactive")
        }
    MenuMobile.classList.toggle("inactive")
}
btnCar.onclick = () => {
    if (!MenuMobile.classList.contains("inactive"))
        {
            MenuMobile.classList.add("inactive")
        }
    if (!menuDesktop.classList.contains("inactive"))
        {
            menuDesktop.classList.add("inactive")
        }

    productDetail.classList.toggle("inactive")
}

for (let i=0; i<9;i++)
{
    const productCard = document.createElement("div")
    const imgCards = document.createElement("img")
    const productInfo = document.createElement("div")
    const precio = document.createElement("div")
    const figure = document.createElement("figure")
    const imgFigure = document.createElement("img")
    const pProducto = document.createElement("p")
    const pPrecio = document.createElement("p")
    pProducto.innerText = "Bike"
    pPrecio.innerText = "$120,00"
    precio.appendChild(pPrecio)
    precio.appendChild(pProducto)
    imgFigure.src = "./icons/bt_add_to_cart.svg"
    figure.appendChild(imgFigure)
    productInfo.className = "product-info"
    productInfo.appendChild(precio)
    productInfo.appendChild(figure)
    imgCards.src = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    productCard.appendChild(imgCards)
    productCard.appendChild(productInfo)
    productCard.className = "product-card"
    fragmentContenedorCards.appendChild(productCard)
}

divCardsContainer.appendChild(fragmentContenedorCards)