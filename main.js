const dado = document.querySelector(".dado");
const boton = document.querySelector("a");
const clases = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];

const circulo = () => {
let circulo = document.createElement("div");
circulo.className = "circulo";
return circulo;
}

function pintarDado(){// creamos esta funcion para que cuando se recarge siempre haya un numero en el dado
    dado.innerHTML = "";
    dado.className = "dado";
    let numeroAzar = Math.floor(Math.random()*6);
    dado.classList.add(clases[numeroAzar],"girando");

    for(let i = 0; i<= numeroAzar; i++){
        dado.appendChild(circulo());
    }
    setTimeout(() => dado.classList.remove("girando"), 800);
}
pintarDado();

boton.addEventListener("click", function(evento){
    evento.preventDefault();
    pintarDado();
});
