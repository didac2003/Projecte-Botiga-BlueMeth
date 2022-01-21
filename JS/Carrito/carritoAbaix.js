var i = 0;
var j = 0;
var k = 0;

const addToShoppingCartButtons = document.querySelectorAll(".addToCart")

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked)
})

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer')
arrayTitol = []
arrayPreu = []
arrayImatge = []

function addToCartClicked(event){
    const button = event.target
    const item = button.closest('.item')
    
    const itemTitle = item.querySelector('.item-title').textContent
    const itemPrice = item.querySelector('.item-price').textContent
    const itemImage = item.querySelector('.item-image').src

  arrayTitol[i] = itemTitle 
  arrayPreu[j] = itemPrice 
  arrayImatge[k] = itemImage

  console.log(arrayTitol);
  console.log(arrayPreu);
  console.log(arrayImatge);

localStorage.setItem('arrayTitol', JSON.stringify(arrayTitol));
localStorage.setItem('arrayPreu', JSON.stringify(arrayPreu));
localStorage.setItem('arrayImatge', JSON.stringify(arrayImatge));
/*
localStorage.setItem('titol', JSON.stringify(itemTitle));
localStorage.setItem('preu', JSON.stringify(itemPrice));
localStorage.setItem('imatge', JSON.stringify(itemImage));
*/
addItemToShoppingCart(itemTitle, itemPrice, itemImage)
i++;
j++
k++
}

function addItemToShoppingCart (itemTitle, itemPrice, itemImage){
  const shoppingCartRow = document.createElement('div')
  const shoppingCartContent = `
  <div class="amplada">
        
        <div>
          <img class="producte" src=${itemImage}>
          <h4 id="nom">${itemTitle}</h4>
        </div>
    
        
        <div>
          <h4 id="preu">${itemPrice}</h4>
        </div>

        <div>
          <input type="number" class="cantidad addToCart" id="cantitat" value="1"></input>
        </div>
      </div>
  `

  shoppingCartRow.innerHTML = shoppingCartContent
  shoppingCartItemsContainer.append(shoppingCartRow)
}