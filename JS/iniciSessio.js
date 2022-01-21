/**
        emailjs.send("SERVICE ID", "TEMPLATE NAME", {
          to_name: "USERNAME",
          from_name: "FROM NAME",
          message: "MESSAGE",
        });
       **/
       
        nomPersona = JSON.parse(localStorage.getItem('nomPerson'));
        correuPersona = JSON.parse(localStorage.getItem('correuPerson'));
    
        console.log(nomPersona);
       
       
       
       
       
       
       
        function validar() {
          let name = document.querySelector(".usuari");
          let email = document.querySelector(".correu");
          let btn = document.querySelector(".enviar");
          btn.addEventListener("click", (e) => {
            
            e.preventDefault();
            
            
            if (name == nomPersona || email == correuPersona ) {
                success();
            }  
            
            else{
             error();
            }
          });
        }
        validar();
    
        
    
    
        function error() {
          Swal.fire({
            icon: "error",
            title: "Ostres...",
            text: "usuari o correu incorrectes!",
          });
        }
        
        
    
     
    
        function success() {
          Swal.fire({
            icon: "success",
            title: "Perfecte!...",
            text: "has iniciat sessio!",
          });
        }