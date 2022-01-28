var i = 0;
let arrayTitol4 = []
let arrayPreu4 = []
let arrayImatge4 = []

let addToShoppingCartButtons = document.querySelectorAll(".addToCart")

let shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer')

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked)
})

function addToCartClicked(event){
    let button = event.target
    let item = button.closest('.item')
    
    arrayTitol4[i] = item.querySelector('.item-title').textContent
    arrayPreu4[i] = item.querySelector('.item-price').textContent
    arrayImatge4[i] = item.querySelector('.item-image').src

    localStorage.setItem('arrayTitol4', JSON.stringify(arrayTitol4));
    localStorage.setItem('arrayPreu4', JSON.stringify(arrayPreu4));
    localStorage.setItem('arrayImatge4', JSON.stringify(arrayImatge4));
    i++;
}