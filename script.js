const $boton1 = document.getElementById("btn1");
const $boton2 = document.getElementById("btn2");
const $boton3 = document.getElementById("btn3");
const $boton4 = document.getElementById("btn4");
const $boton5 = document.getElementById("btn5");
const $send = document.getElementById("btn-submit");
const $container = document.getElementById("container");
const $template = document.getElementById("template").content;

$boton1.addEventListener("click", () => {
    $send.addEventListener("click", () => {
        createTemplate($boton1.value)
    })
})
$boton2.addEventListener("click", () => {
    $send.addEventListener("click", () => {
        createTemplate($boton2.value)
    })
})
$boton3.addEventListener("click", () => {
    $send.addEventListener("click", () => {
        createTemplate($boton3.value)
    })
})
$boton4.addEventListener("click", () => {
    $send.addEventListener("click", () => {
        createTemplate($boton4.value)
    })
})
$boton5.addEventListener("click", () => {
    $send.addEventListener("click", () => {
        createTemplate($boton5.value)
    })
})

const createTemplate = (value) => {
    $container.style.display = "none";
    $template.querySelector("div").classList.add("active");
    $template.querySelector("div").style.display = "flex";
    $template.querySelector("input").style.color = "hsl(25, 97%, 53%)";
    $template.querySelector("input").value = "You selected " + value + " out of 5";
    document.querySelector("#app").appendChild($template);
}
