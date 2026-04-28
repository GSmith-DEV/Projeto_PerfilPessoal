let macarrao = document.querySelector("#macarrao")
let explosao = document.querySelector("#explosion")
let som = document.querySelector("#som")
let texto = document.querySelector("#texto")

let jogo = document.querySelector(".jogos img")
let centro = false

macarrao.addEventListener("click", () => {
    explosao.style.display = "block";
    macarrao.style.display = "none"
    som.play();
    texto.textContent = "Eita Porra!"
    setTimeout(() =>{
        explosao.style.opacity = 0;
    }, 1700)
    setTimeout(() => {
        texto.textContent = "Precisava disso?!"
    }, 2100)
})

jogo.addEventListener("click", () => {
    if (centro===false) {
        jogo.style.position = "absolute"
        jogo.style.scale = 1.4
    }
})