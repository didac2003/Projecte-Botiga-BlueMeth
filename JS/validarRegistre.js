let boto = document.querySelector(".submit");
let namee = localStorage.getItem('nomPerson');
let correu= localStorage.getItem('correuPerson')

boto.addEventListener("click", (e) => {
  if (namee == null ) {
    alert("Debes registrarte antes de comprar!")
    window.location.href="registre.html"
  } 
  else window.location.href="comprar.html"
});