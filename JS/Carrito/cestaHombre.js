var i = 0;
let arrayTitol = []
let arrayPreu = []
let arrayImatge = []

let addToShoppingCartButtons = document.querySelectorAll(".addToCart")

let shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer')

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked)
})

function addToCartClicked(event){
    let button = event.target
    let item = button.closest('.item')
    
    arrayTitol[i] = item.querySelector('.item-title').textContent
    arrayPreu[i] = item.querySelector('.item-price').textContent
    arrayImatge[i] = item.querySelector('.item-image').src

    localStorage.setItem('arrayTitol', JSON.stringify(arrayTitol));
    localStorage.setItem('arrayPreu', JSON.stringify(arrayPreu));
    localStorage.setItem('arrayImatge', JSON.stringify(arrayImatge));
    i++;
}

