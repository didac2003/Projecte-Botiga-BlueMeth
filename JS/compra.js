//Submit que no refresqui
$(document).on('submit', '#contenido', function() {
  obrirSegonForm()
  return false;
});

//Obrir els forms

var primerForm = document.getElementById('contenido');
var segonForm = document.getElementById('contenido1');
var tercerForm = document.getElementById('contenido2');

var botoEditar = document.getElementById("editar")
var botoEditar1 = document.getElementById("editar1")

let tick = document.getElementById("tick")

let validarInputs = document.getElementById("contenido")
let allInputs = validarInputs.querySelectorAll("input")

let btnEnviar = document.getElementById("enviar")

btnEnviar.addEventListener('click', obrirSegonForm)

function obrirSegonForm(){
  let cont = 0;
  for (let i = 0; i < allInputs.length; i++) {
      if(allInputs[i].value != ""){
          cont++
      }
  }
  if (cont == 9){
      primerForm.style.display = "none"
      segonForm.style.display = "block"
      botoEditar.style.display = "inline-block"
      tick.style.display = "inline-block"
  }
}

let tick1 = document.getElementById("tick1")

let botons = document.querySelectorAll(".revisarCompra")

botons.forEach(boto => {
  boto.addEventListener('click', obrirTercerForm)
})

function obrirTercerForm(){
  segonForm.style.display = "none"
  tercerForm.style.display = "block"
  botoEditar1.style.display = "inline-block"
  tick1.style.display = "inline-block"
}

//Botons editar

botoEditar.addEventListener('click', editar)

function editar(){
  contenido.style.display = "block"
  contenido1.style.display = "none"
  contenido2.style.display = "none"
}

botoEditar1.addEventListener('click', editar1)

function editar1(){
  contenido.style.display = "none"
  contenido1.style.display = "block"
  contenido2.style.display = "none"
}


//Obrir codi descompte

let botoCodi = document.getElementById("descuento")
var aplicarDescuento = document.getElementById('aplicarDescuento');

botoCodi.addEventListener('click', obrirDescompte)

function obrirDescompte(){
  if (aplicarDescuento.style.display == "none") aplicarDescuento.style.display = "block"
  else if (aplicarDescuento.style.display = "block") aplicarDescuento.style.display = "none"
}

  //Verificar codis descompte

let botoAplicar = document.getElementById("aplicar")
let botoAplicar1 = document.getElementById("aplicar1")
let inputCodi = document.getElementById("inputCodi")
let textError = document.getElementById("error")

botoAplicar.addEventListener('click', error)

function error(){
  Number(inputCodi.value)
  if(inputCodi.value  == 9842) {
      botoAplicar.className = "hol"
      textError.innerHTML = "Has aplicado correctamente el código de descuento<br>Se te aplicará un <b>10%</b> de descuento a tu compra"
      textError.style.color = "green"
      
      dividirPreu()
  }
  else {
    botoAplicar.className = "hol"
    textError.innerHTML = "El codigo introducido no es válido"
  }
}

botoAplicar1.addEventListener('click', error1)

function error1(){
  botoAplicar1.className = "hol"
  let textError1 = document.getElementById("error1")
  textError1.innerHTML = "El codigo introducido no es válido"
}

//Aconseguir codi

let primerCodi = document.getElementById("primerCodi")
let codiCorrecte = document.getElementById("conseguirCodi")
let textCodi = document.getElementById("tuCodigo")

codiCorrecte.addEventListener('click', codiDescompte)

function codiDescompte(){
  textCodi.style.display = "block"
  codiCorrecte.style.display = "none"
  primerCodi.style.display = "none"
}

//Obrir mètodes de pago

  //Obrir tarjeta crèdit

let tarjetaCredito = document.getElementById("tarjetaCredito")
var bancaria = document.getElementById('bancaria');

tarjetaCredito.addEventListener('click', obrirTarjetaCredito)

function obrirTarjetaCredito(){
  bancaria.style.display = "block"
  tarjetRegalo.style.display = "none"
  paypal.style.display = "none"
  contingutReembolso.style.display = "none"

  botoReembolso.checked = false
  botoAnarPaypal.checked = false
  botoTarjetaRegalo.checked = false
}

  //Obrir tarjeta regal

let botoTarjetaRegalo = document.getElementById("tarjetaRegalo")
var tarjetRegalo = document.getElementById('tarjetRegalo');

botoTarjetaRegalo.addEventListener('click', obrirTarjetaRegalo)

function obrirTarjetaRegalo(){
  tarjetRegalo.style.display = "block"
  bancaria.style.display = "none"
  paypal.style.display = "none"
  contingutReembolso.style.display = "none"

  botoReembolso.checked = false
  tarjetaCredito.checked = false
  botoAnarPaypal.checked = false
}

  //Verificar codi targeta regals

let botoRegal = document.getElementById("enviarCodi")

botoRegal.addEventListener('click', errorRegal)

function errorRegal(){
  let errorCodiTargeta = document.getElementById("errorCodigo")
  errorCodiTargeta.innerHTML = "Por favor, introduce el número de la tarjeta regalo"
  let errorPin = document.getElementById("errorPin")
  errorPin.innerHTML = "Por favor, introduce un PIN válido"
}


  //Obrir paypal

let botoAnarPaypal = document.getElementById("obrirPaypal")
var paypal = document.getElementById('paypal');

botoAnarPaypal.addEventListener('click', obrirPaypal)

function obrirPaypal(){
  paypal.style.display = "block"
  bancaria.style.display = "none"
  tarjetRegalo.style.display = "none"
  contingutReembolso.style.display = "none"

  botoReembolso.checked = false
  tarjetaCredito.checked = false
  botoTarjetaRegalo.checked = false
}

  //Obrir reembolso

let botoReembolso = document.getElementById("botoReembolso")
var contingutReembolso = document.getElementById('reembolso');

botoReembolso.addEventListener('click', obrirReembolso)

function obrirReembolso(){
  contingutReembolso.style.display = "block"
  paypal.style.display = "none"
  tarjetRegalo.style.display = "none"
  bancaria.style.display = "none"

  tarjetaCredito.checked = false
  botoAnarPaypal.checked = false
  botoTarjetaRegalo.checked = false
}


//Posar productes
total = JSON.parse(localStorage.getItem('total'));

let preuTotal = document.getElementById("preuTotal")
let preuDescompte = document.getElementById("preuDescompte")

function dividirPreu(){
  let superTotal = total
  let hol = total/10
  total=total-hol
  preuTotal.className = "preuTotal"
  preuTotal.innerHTML = superTotal + ",00€"
  preuDescompte.innerHTML = total + ",00€"
}

preuTotal.innerHTML = total + ",00€"

items = JSON.parse(localStorage.getItem('items'));
let itemsTotal = document.getElementById("itemsTotal")
itemsTotal.innerHTML=items

arrayImatge = JSON.parse(localStorage.getItem('arrayImatge'));
arrayTitol = JSON.parse(localStorage.getItem('arrayTitol'));
arrayPreu = JSON.parse(localStorage.getItem('arrayPreu'));

arrayImatge1 = JSON.parse(localStorage.getItem('imageDona'));
arrayTitol1 = JSON.parse(localStorage.getItem('titleDona'));
arrayPreu1 = JSON.parse(localStorage.getItem('preuDona'));

arrayImatge2 = JSON.parse(localStorage.getItem('arrayImatge2'));
arrayTitol2 = JSON.parse(localStorage.getItem('arrayTitol2'));
arrayPreu2 = JSON.parse(localStorage.getItem('arrayPreu2'));

arrayImatge3 = JSON.parse(localStorage.getItem('arrayImatge3'));
arrayTitol3 = JSON.parse(localStorage.getItem('arrayTitol3'));
arrayPreu3 = JSON.parse(localStorage.getItem('arrayPreu3'));

arrayImatge4 = JSON.parse(localStorage.getItem('arrayImatge4'));
arrayTitol4 = JSON.parse(localStorage.getItem('arrayTitol4'));
arrayPreu4 = JSON.parse(localStorage.getItem('arrayPreu4'));

let productes = document.getElementById("productes")

for (i = 0; i < arrayTitol.length; i++){
  productes.innerHTML += `<img src=${arrayImatge[i]}><p>${arrayTitol[i]} ========== <b>${arrayPreu[i]}</b></p><br>`
}

for (i = 0; i < arrayTitol1.length; i++){
  productes.innerHTML += `<img src=${arrayImatge1[i]}><p>${arrayTitol1[i]} ========== <b>${arrayPreu1[i]}</b></p><br>`
}

for (i = 0; i < arrayTitol2.length; i++){
  productes.innerHTML += `<img src=${arrayImatge2[i]}><p>${arrayTitol2[i]} ========== <b>${arrayPreu2[i]}</b></p><br>`
}

for (i = 0; i < arrayTitol3.length; i++){
  productes.innerHTML += `<img src=${arrayImatge3[i]}><p>${arrayTitol3[i]} ========== <b>${arrayPreu3[i]}</b></p><br>`
}

for (i = 0; i < arrayTitol4.length; i++){
  productes.innerHTML += `<img src=${arrayImatge4[i]}><p>${arrayTitol4[i]} ========== <b>${arrayPreu4[i]}</b></p><br>`
}

// longitud = JSON.parse(localStorage.getItem('longitud'));
// let itemsTotal = document.getElementById("itemsTotal")
// itemsTotal.innerHTML=longitud


    