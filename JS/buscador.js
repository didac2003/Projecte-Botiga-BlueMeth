let buscador = document.getElementById("hol")
let search = document.getElementById("boto")

search.addEventListener('click', buscar)

function buscar(){
    if (buscador.value = "hombre")
        window.location = "hombre.html"
}
document.onkeydown = function buscarIntro(e){
    if(e.keyCode == 13){
        buscar()
    }
}
