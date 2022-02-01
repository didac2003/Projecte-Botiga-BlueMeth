window.onload = function addItemToShoppingCart(){
  arrayTitol = JSON.parse(localStorage.getItem('arrayTitol'));
  arrayPreu = JSON.parse(localStorage.getItem('arrayPreu'));
  arrayImatge = JSON.parse(localStorage.getItem('arrayImatge'));

  arrayTitol1 = JSON.parse(localStorage.getItem('titleDona'));
  arrayPreu1 = JSON.parse(localStorage.getItem('preuDona'));
  arrayImatge1 = JSON.parse(localStorage.getItem('imageDona'));

  arrayTitol2 = JSON.parse(localStorage.getItem('arrayTitol2'));
  arrayPreu2 = JSON.parse(localStorage.getItem('arrayPreu2'));
  arrayImatge2 = JSON.parse(localStorage.getItem('arrayImatge2'));

  arrayTitol3 = JSON.parse(localStorage.getItem('arrayTitol3'));
  arrayPreu3= JSON.parse(localStorage.getItem('arrayPreu3'));
  arrayImatge3 = JSON.parse(localStorage.getItem('arrayImatge3'));

  arrayTitol4 = JSON.parse(localStorage.getItem('arrayTitol4'));
  arrayPreu4= JSON.parse(localStorage.getItem('arrayPreu4'));
  arrayImatge4 = JSON.parse(localStorage.getItem('arrayImatge4'));

  let shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer')

  const elementsTitleHombre = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitleHombre')
  const elementsTitleMujer = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitleMujer')
  const elementsTitleCalzado = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitleCalzado')
  const elementsTitleNiño = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitleNiño')
  const elementsTitleAccesorios = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitleAccesorios')

  let items = 0
  
  hol:
  for (i = 0; i < 100; i++){
    if (arrayImatge[i] != null) {
      for (let j = 0; j < elementsTitleHombre.length; j++) {
        if(arrayTitol[i] == arrayTitol[j] && arrayTitol[i] != undefined){
          let elementQuantity = elementsTitleHombre[j].parentElement.parentElement.querySelector('.shoppingCartItemQuantity')
          elementQuantity.value++
          continue hol
        }
      }
      
      const shoppingCartRow = document.createElement('div')
      const shoppingCartContent = `
        <div class="shoppingCartItem">
          <div><br><br><br>
            <img class="producte" src=${arrayImatge[i]}><br><br>
            <h4 class="shoppingCartItemTitleHombre">${arrayTitol[i]}</h4>
          </div>
      
          <div>
            <h4 id="preu" class="shoppingCartItemPrice">${arrayPreu[i]}</h4>
          </div>

          <div>
            <input type="number" class="sumaCantitat shoppingCartItemQuantity shoppingCart" value="1"></input>
            <button class="boto buttonDelete">X</button>
          </div>
        </div>
      `
      shoppingCartRow.innerHTML = shoppingCartContent
      shoppingCartItemsContainer.append(shoppingCartRow)

      shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem)

      updateShoppingCartTotal()

      shoppingCartRow.querySelector('.shoppingCart').addEventListener('change', quantityChanged)
      items += 1
      actualitzarPreus()
    }
  }

   hul:
   for (i = 0; i < 100; i++){
     if (arrayImatge1[i] != null) {
       for (let j = 0; j < elementsTitleMujer.length; j++) {
         if(arrayTitol1[i] == arrayTitol1[j] && arrayTitol1[i] != undefined){
           let elementQuantity = elementsTitleMujer[j].parentElement.parentElement.querySelector('.shoppingCartItemQuantity')
           elementQuantity.value++
           continue hul
         }
       }
    
       const shoppingCartRow = document.createElement('div')
       const shoppingCartContent = `
       <div class="shoppingCartItem">
         <div><br><br><br>
           <img class="producte" src=${arrayImatge1[i]}><br><br>
           <h4 class="shoppingCartItemTitleMujer">${arrayTitol1[i]}</h4>
         </div>
      
         <div>
           <h4 id="preu" class="shoppingCartItemPrice">${arrayPreu1[i]}</h4>
         </div>

         <div>
           <input type="number" class="sumaCantitat shoppingCartItemQuantity shoppingCart" id="cantitat" value="1"></input>
           <button class="boto buttonDelete">X</button>
         </div>
       </div>
     `
     shoppingCartRow.innerHTML = shoppingCartContent
     shoppingCartItemsContainer.append(shoppingCartRow)

     updateShoppingCartTotal()
     shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem)
     shoppingCartRow.querySelector('.shoppingCart').addEventListener('change', quantityChanged)
     items += 1
     actualitzarPreus()
     }
   }

  hil:
  for (i = 0; i < 100; i++){
    if (arrayImatge2[i] != null) {
      for (let j = 0; j < elementsTitleCalzado.length; j++) {
        if(arrayTitol2[i] == arrayTitol2[j] && arrayTitol2[i] != undefined){
          let elementQuantity = elementsTitleCalzado[j].parentElement.parentElement.querySelector('.shoppingCartItemQuantity')
          elementQuantity.value++
          continue hil
        }
      }
    
      const shoppingCartRow = document.createElement('div')
      const shoppingCartContent = `
      <div class="shoppingCartItem">
        <div><br><br><br>
          <img class="producte" src=${arrayImatge2[i]}><br><br>
          <h4 class="shoppingCartItemTitleCalzado">${arrayTitol2[i]}</h4>
        </div>
      
        <div>
          <h4 id="preu" class="shoppingCartItemPrice">${arrayPreu2[i]}</h4>
        </div>

        <div>
          <input type="number" class="sumaCantitat shoppingCartItemQuantity shoppingCart" id="cantitat" value="1"></input>
          <button class="boto buttonDelete">X</button>
        </div>
      </div>
    `
    shoppingCartRow.innerHTML = shoppingCartContent
    shoppingCartItemsContainer.append(shoppingCartRow)

    updateShoppingCartTotal()
    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem)
    shoppingCartRow.querySelector('.shoppingCart').addEventListener('change', quantityChanged)
    items += 1
     actualitzarPreus()
    }
  }

 niño:
  for (i = 0; i < 100; i++){
    if (arrayImatge3[i] != null) {
      for (let j = 0; j < elementsTitleNiño.length; j++) {
        if(arrayTitol3[i] == arrayTitol3[j] && arrayTitol3[i] != undefined){
          let elementQuantity = elementsTitleNiño[j].parentElement.parentElement.querySelector('.shoppingCartItemQuantity')
          elementQuantity.value++
          continue niño
        }
      }
      
      const shoppingCartRow = document.createElement('div')
      const shoppingCartContent = `
        <div class="shoppingCartItem">
          <div><br><br><br>
            <img class="producte" src=${arrayImatge3[i]}><br><br>
            <h4 class="shoppingCartItemTitleNiño">${arrayTitol3[i]}</h4>
          </div>
      
          <div>
            <h4 id="preu" class="shoppingCartItemPrice">${arrayPreu3[i]}</h4>
          </div>

          <div>
            <input type="number" class="sumaCantitat shoppingCartItemQuantity shoppingCart" value="1"></input>
            <button class="boto buttonDelete">X</button>
          </div>
        </div>
      `
      shoppingCartRow.innerHTML = shoppingCartContent
      shoppingCartItemsContainer.append(shoppingCartRow)

      shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem)

      updateShoppingCartTotal()

      shoppingCartRow.querySelector('.shoppingCart').addEventListener('change', quantityChanged)
      items += 1
      actualitzarPreus()
    }
  }

  accesorios:
  for (i = 0; i < 100; i++){
    if (arrayImatge4[i] != null) {
      for (let j = 0; j < elementsTitleAccesorios.length; j++) {
        if(arrayTitol4[i] == arrayTitol4[j] && arrayTitol4[i] != undefined){
          let elementQuantity = elementsTitleAccesorios[j].parentElement.parentElement.querySelector('.shoppingCartItemQuantity')
          elementQuantity.value++
          continue accesorios
        }
      }
      
      const shoppingCartRow = document.createElement('div')
      const shoppingCartContent = `
        <div class="shoppingCartItem">
          <div><br><br><br>
            <img class="producte" src=${arrayImatge4[i]}><br><br>
            <h4 class="shoppingCartItemTitleAccesorios">${arrayTitol4[i]}</h4>
          </div>
      
          <div>
            <h4 id="preu" class="shoppingCartItemPrice">${arrayPreu4[i]}</h4>
          </div>

          <div>
            <input type="number" class="sumaCantitat shoppingCartItemQuantity shoppingCart" value="1"></input>
            <button class="boto buttonDelete">X</button>
          </div>
        </div>
      `
      shoppingCartRow.innerHTML = shoppingCartContent
      shoppingCartItemsContainer.append(shoppingCartRow)

      shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem)

      updateShoppingCartTotal()

      shoppingCartRow.querySelector('.shoppingCart').addEventListener('change', quantityChanged)
      items += 1
      actualitzarPreus()
    }
  }

  function actualitzarPreus(){
    let pipo = document.getElementById("itemsTotal")
    pipo.innerHTML = items
    localStorage.setItem('items', JSON.stringify(items));
  }

  function updateShoppingCartTotal (){
    let total = 0
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal')
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem')
    
    shoppingCartItems.forEach((shoppingCartItem) => {
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice')
      const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('€', ''))
      const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity')
      const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value)
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity
      localStorage.setItem('total', JSON.stringify(total));
    })
    shoppingCartTotal.innerHTML = `${total}€`
  }

  function removeShoppingCartItem (e) {
    const buttonClicked = e.target
    buttonClicked.closest('.shoppingCartItem').remove()
    updateShoppingCartTotal()
    items = items - 1
    actualitzarPreus();
  }
  
  function quantityChanged(e){
    const input = e.target
    if (input.value <= 0) input.value = 1
    updateShoppingCartTotal()
  };
}

let btn = document.getElementById("reiniciar")

btn.onclick = function limpiarCarrito() {
  location.reload()
}