let boton=document.getElementById("boton");
boton.addEventListener("click",function(event){
    event.preventDefault();

    let nuevoid=document.createElement("div");
    nuevoid.innerHTML="DIV Creado";
    nuevoid.classList.add("borde-negro");
    let contenido=document.getElementById("ResultadoDIV");
    contenido.appendChild(nuevoid);
})