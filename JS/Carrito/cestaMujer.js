var i = 0;
let arrayTitol1 = []
let arrayPreu1 = []
let arrayImatge1 = []

let addToShoppingCartButtons = document.querySelectorAll(".addToCart")

let shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer')

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked)
})

function addToCartClicked(event){
    let button = event.target
    let item = button.closest('.item')
 
    arrayTitol1[i] = item.querySelector('.titleMujer').textContent
    arrayPreu1[i] = item.querySelector('.preuMujer').textContent
    arrayImatge1[i] = item.querySelector('.imageMujer').src;

    localStorage.setItem('titleDona', JSON.stringify(arrayTitol1));
    localStorage.setItem('preuDona', JSON.stringify(arrayPreu1));
    localStorage.setItem('imageDona', JSON.stringify(arrayImatge1));
    i++;
}