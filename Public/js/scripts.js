function mostrarMenu(){
    let menu = document.getElementById("menu-mobile");

    if(menu.classList.contains("ocultar")){
        menu.classList.remove("ocultar");
    }
    else{
        menu.classList.add("ocultar")
    }
}

function mostrarSlide(slideIndex) {
    let sliderItemActive = document.getElementsByClassName("slider-item active");
    sliderItemActive[0].classList.remove("active");
    let element = document.getElementById("slide" + slideIndex);
    element.classList.add("active");
}

//setInterval(setTimeout(mostrarSlide(6), 5000), 5000);


