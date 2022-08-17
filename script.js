'use strict'
document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("tituloP").addEventListener('click',toggleDisplay);
    document.getElementById("tituloDOT").addEventListener('click',toggleDisplay);
    


});

function toggleDisplay(e){
    var proyecto = e.target.parentNode.children[1];
    if(proyecto.classList.contains("hide")){
        proyecto.classList.remove("hide");
        proyecto.classList.add("showFlex");
    }else{
        proyecto.classList.remove("showFlex");
        proyecto.classList.add("hide");
    }
}