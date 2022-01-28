var i = 0;
let arrayTitol3 = []
let arrayPreu3 = []
let arrayImatge3 = []

let addToShoppingCartButtons = document.querySelectorAll(".addToCart")

let shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer')

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked)
})

function addToCartClicked(event){
    let button = event.target
    let item = button.closest('.item')
    
    arrayTitol3[i] = item.querySelector('.item-title').textContent
    arrayPreu3[i] = item.querySelector('.item-price').textContent
    arrayImatge3[i] = item.querySelector('.item-image').src

    localStorage.setItem('arrayTitol3', JSON.stringify(arrayTitol3));
    localStorage.setItem('arrayPreu3', JSON.stringify(arrayPreu3));
    localStorage.setItem('arrayImatge3', JSON.stringify(arrayImatge3));
    i++;
}