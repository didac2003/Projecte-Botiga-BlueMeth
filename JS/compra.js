//Submit que no refresqui
$(document).on('submit', '#contenido', function() {
  obrirSegonForm()
  return false;
});

//Obrir els forms

let papapa = document.getElementById("input")

var primerForm = document.getElementById('contenido');
var segonForm = document.getElementById('contenido1');
var tercerForm = document.getElementById('contenido2');

var botoEditar = document.getElementById("editar")
var botoEditar1 = document.getElementById("editar1")

let tick = document.getElementById("tick")

let validarInputs = document.getElementById("contenido")
let allInputs = validarInputs.querySelectorAll("input")

let btnEnviar = document.getElementById("enviar")

btnEnviar.addEventListener('click', validarDades)

function validarDades(){
  let inputsLetras = document.getElementsByClassName("soloLetras")
  let letrasValidas = /^[A-Z]+$/i
  let numerosValidos = /[0-9]/
  let zero = false
  let un = false
  let tres = false
  let quatre = false
  let correcte = false
  let correcte1 = false
  let correcte2 = false
  let correcte3 = false
  let correcte4 = false
  let correcte5 = false
  let correcte6 = false
  let correcte7 = false

  if(!letrasValidas.test(inputsLetras[0].value)) nomDades.innerHTML =  "El formato es incorrecto"
  else{
    nomDades.innerHTML = ""
    correcte = true
  } 

  if(!letrasValidas.test(inputsLetras[1].value)) apellidoDades.innerHTML =  "El formato es incorrecto"
  else{
    apellidoDades.innerHTML = ""
    correcte1 = true
  } 

  if(inputsLetras[2].value == "") direccionDades.innerHTML =  "El formato es incorrecto"
  else{
    direccionDades.innerHTML = ""
    correcte2 = true
  } 

  if(!letrasValidas.test(inputsLetras[3].value)) provinciaDades.innerHTML =  "El formato es incorrecto"
  else{
    provinciaDades.innerHTML = ""
    correcte3 = true
  } 

  if(!letrasValidas.test(inputsLetras[4].value)) ciutatDades.innerHTML =  "El formato es incorrecto"
  else{
    ciutatDades.innerHTML = ""
    correcte4 = true
  } 

  if(!numerosValidos.test(inputsLetras[5].value)) codiDades.innerHTML = "El formato es incorrecto"
  else {
    codiDades.innerHTML = ""
    correcte5 = true
  }
  
  if(!inputsLetras[6].value.includes("@")) emailDades.innerHTML = "El formato es incorrecto"
  else {
    emailDades.innerHTML = ""
    correcte6 = true
  }

  if(!numerosValidos.test(inputsLetras[7].value)) numeroDades.innerHTML = "El formato es incorrecto"
  else {
    numeroDades.innerHTML = ""
    correcte7 = true
  }

  if(correcte == true && correcte1 == true && correcte2 == true && correcte3 == true && correcte4 == true && correcte5 == true && correcte6 == true && correcte7 == true) obrirSegonForm()
}

function obrirSegonForm(){
  primerForm.style.display = "none"
  segonForm.style.display = "block"
  botoEditar.style.display = "inline-block"
  tick.style.display = "inline-block"
}

let diaMes = document.querySelector(".diaMes")
let codiTarjeta = document.querySelector(".codiTarjeta")
let revisar = document.getElementById("confirm-pago")
let errorDia = document.getElementById("validarDia")
let numeroTarjeta = document.getElementById("numTarjeta")

numeroTarjeta.onkeydown = function hol(e){
  for (let i = 4; i < 20; i+=5) {
    if(numeroTarjeta.value.length == i) {
      numeroTarjeta.value = numeroTarjeta.value + " "
    }
  }
}

revisar.addEventListener('click', validarTarjeta)

function validarTarjeta(){
  let valorDiaMes = diaMes.value
  let valorCodiTarjeta = codiTarjeta.value
  let valorNumeroTarjeta = numeroTarjeta.value
  var numerosAceptados = /[0-9]/
  var correcte = false
  var correcte1 = false
  var correcte2 = false

  if (valorDiaMes.length != 5 || !valorDiaMes[2].includes("/")) errorDia.innerHTML = "El formato es incorrecto"
  else {
    correcte = true
    errorDia.innerHTML = ""
  }

  if (!valorCodiTarjeta.match(numerosAceptados) || valorCodiTarjeta.length != 3) validarCodiTarjeta.innerHTML = "El formato es incorrecto"
  else {
    correcte1 = true
    validarCodiTarjeta.innerHTML = ""
  }
  

  if (valorNumeroTarjeta.length != 19 || !valorNumeroTarjeta.match(numerosAceptados)) validarNumTarjeta.innerHTML = "El formato es incorrecto"
  else {
    validarNumTarjeta.innerHTML = ""
    correcte2 = true
  } 
  
  if (correcte == true && correcte1 == true && correcte2 == true) obrirTercerForm()
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

let botoRegistrar = document.getElementById("registrarDatosTarjeta")
let textRegistrar = document.getElementById("guardarDatos")
let textRegistrat = document.getElementById("registrarTarjeta")

botoRegistrar.addEventListener('click', registrarTarja)

function registrarTarja(){
  botoRegistrar.style.display = "none"
  textRegistrar.style.display = "none"
  textRegistrat.style.display = "block"
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
  preuDescompte.className = "preuDescompte"
  preuDescompte.innerHTML = total + ",00€ " + " <span>10% OFF</span>"
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