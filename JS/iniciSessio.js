/**
        emailjs.send("SERVICE ID", "TEMPLATE NAME", {
          to_name: "USERNAME",
          from_name: "FROM NAME",
          message: "MESSAGE",
        });
       **/
       
      
   
    
   

    

   
   
   
   
   
   
    function validar() {
      let namee = document.querySelector(".usuari");
      let email = document.querySelector(".correu");
      let btn = document.querySelector(".enviar");
      btn.addEventListener("click", (e) => {
        
        e.preventDefault();
     let name = localStorage.getItem('nomPerson');
     let correu= localStorage.getItem('correuPerson')

        
        console.log('Nom2;'+name);
        console.log('Nom2;'+correu);
        if ( name == namee.value && email.value==correu && name!="") {
            success();
            setTimeout(obrirPagina,2200);
        } 

        
        else{
         erroor();
        }
      });
    }
    validar();

    function obrirPagina(){
      window.location.href="comprar.html"
    }


    function erroor() {
      Swal.fire({
        icon: "error",
        title: "Carai...",
        text: "usuario o correo incorrectos!",
      });
    }
    
    

 

    function success() {
      Swal.fire({
        icon: "success",
        title: "Perfecto!...",
        text: "has iniciado sessión!",
      });
    }
    


