var i = 0;
let arrayTitol2 = []
let arrayPreu2 = []
let arrayImatge2 = []

let addToShoppingCartButtons = document.querySelectorAll(".addToCart")

let shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer')

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked)
})

function addToCartClicked(event){
    let button = event.target
    let item = button.closest('.item')
    
    arrayTitol2[i] = item.querySelector('.item-title').textContent
    arrayPreu2[i] = item.querySelector('.item-price').textContent
    arrayImatge2[i] = item.querySelector('.item-image').src

    localStorage.setItem('arrayTitol2', JSON.stringify(arrayTitol2));
    localStorage.setItem('arrayPreu2', JSON.stringify(arrayPreu2));
    localStorage.setItem('arrayImatge2', JSON.stringify(arrayImatge2));
    i++;
}
