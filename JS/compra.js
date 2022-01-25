let btn = document.querySelector(".submit");
let namee = localStorage.getItem('nomPerson');
let correu= localStorage.getItem('correuPerson')



btn.addEventListener("click", (e) => {
    
    if (namee== "" ) {
      alert("registrat abans de comprar")
        window.location.href="registre.html"
        
        
      } 
    else{
      window.location.href="comprar.html"
      alert("t'hem estafat pringat, jajaja 300 euros per aixo xd")
    }  
    });
        