var interval = 1;
var slider = document.getElementById('juan-slider');
var submenuSelected = '';

function mostrarMenuMobile(){
    let menu = document.getElementById("menu-mobile");

    if(menu.classList.contains("ocultar")){
        menu.classList.remove("ocultar");
    }
    else{
        menu.classList.add("ocultar")
    }
}

function mostrarSlide(slideIndex) {
    if(slideIndex == -1 && interval != 1) slideIndex = interval-1;
    if(slideIndex == 0  && interval != 1) slideIndex = interval+1;
    if(slideIndex <= 1) slideIndex = 1;
    if(slideIndex > 6) slideIndex = 6;
    let sliderItemActive = document.getElementsByClassName("slider-item active");
    let element = document.getElementById("slide" + slideIndex);
    let element_ = document.getElementById("slide_" + slideIndex);

    sliderItemActive[0].classList.remove("active");
    sliderItemActive[0].classList.remove("active");
    element.classList.add("active");
    element_.classList.add("active");
    interval = slideIndex;
}

if(slider != null) {
    setInterval(function(){
        if(interval >= 6) interval = 0;
        interval++;
        mostrarSlide(interval);
    }, 5000);
}

function mostrarMenu(menu) {
    if(menu != submenuSelected) {
        if(submenuSelected.length >0) {
            document.getElementById(submenuSelected).classList.remove('show-submenu');
        }
        submenuSelected = menu;
        document.getElementById(menu).classList.add('show-submenu');
    }
    else {
        document.getElementById(menu).classList.remove('show-submenu');
        submenuSelected = '';
    }
}