let btn = document.querySelector(".submit");
let namee = localStorage.getItem('nomPerson');
let correu= localStorage.getItem('correuPerson')



btn.addEventListener("click", (e) => {
    
    if (namee== "" ) {
      alert("registrate antes de comprar!")
        window.location.href="registre.html"
        
        
      } 
    else{
      
      window.location.href="comprar.html"
      
    }  
    });


    