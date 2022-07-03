function mostrarMenu(){
let menu = document.getElementById("menu-mobile");

if(menu.classList.contains("ocultar")){
    menu.classList.remove("ocultar");
}
else{
    menu.classList.add("ocultar")
}
}