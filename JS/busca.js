let buscador = document.getElementById("buscar")
let titols = document.querySelectorAll(".item-title")
let paraula = ""

buscador.addEventListener('keydown', clicBoto)

function clicBoto(e){
    paraula+=e.key
    
    if(paraula.includes('Shift')){
        let borrarShift = paraula.replace('Shift', '')
        paraula=borrarShift
    } 

    if (e.key == "Backspace") {
        let borrarBackspace = paraula.replace('Backspace', '')
        let eliminarUltim = borrarBackspace.substring(0, borrarBackspace.length -1)
        paraula = eliminarUltim
    }
    
    titols.forEach((titol) => {
        if(!titol.textContent.startsWith(paraula)){
            let papa = titol.closest('.productItem')
            papa.style.display = "none"
        }
        if (titol.textContent.startsWith(paraula)){
            let papa = titol.closest('.productItem')
            papa.style.display = "block"
        }
    })
}