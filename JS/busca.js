let buscador = document.getElementById("buscar")
let paraula = ""
let si = 0

buscador.addEventListener('keydown', clicBoto)

function clicBoto(e){
    let titols = document.querySelectorAll(".item-title")
    
    paraula+=e.key
    
    if(paraula.includes('Shift')){
        let borrarShift = paraula.replace('Shift', '')
        paraula = borrarShift
    } 

    if (e.key == "Backspace") {
        let borrarBackspace = paraula.replace('Backspace', '')
        let eliminarUltim = borrarBackspace.substring(0, borrarBackspace.length -1)
        paraula = eliminarUltim
    }

    if (e.key == "Enter") {
        let borrarEnter = paraula.replace('Enter', '')
        paraula = borrarEnter
    }

    if (e.key == "Alt"){
        let borrarAlt = paraula.replace('Alt', '')
        paraula = borrarAlt 
    }

    if (e.key == "Tab"){
        let borrarTab = paraula.replace('Tab', '')
        paraula = borrarTab 
    }
    
    titols.forEach((titol) => {
        if(!titol.textContent.startsWith(paraula)){
            let papa = titol.closest('.productItem')
            papa.style.display = "none"
            ningun.style.display = "none"
        }

        if (paraula == ""){
            let veureTots = document.querySelector(".productItem")
            veureTots.style.display = "flex"
            ningun.style.display = "none"
        } 
        
        if (titol.textContent.startsWith(paraula)){
            let papa = titol.closest('.productItem')
            papa.style.display = "flex"
            ningun.style.display = "none"
            si++
        }
        if (si == 0){
            let ningun = document.getElementById("ningun")
            ningun.innerHTML = "Lo sentimos!<br>No se ha encontrado ningún producto"
            ningun.style.display = "block"
        }
    })
}