document.addEventListener('DOMContentLoaded',()=>{
    /* verificarZise(desktop); */
})

const navbar = document.getElementById('navbar');
function quitarNavbar(){
    navbar.classList.toggle('active');
}


function verificarZise(item){
    if(item.matches){

    }else{

    }
}

let desktop = window.matchMedia("(max-width: 992px)");
/* verificarZise(desktop); */
desktop.addListener(verificarZise);