


/**
        emailjs.send("SERVICE ID", "TEMPLATE NAME", {
          to_name: "USERNAME",
          from_name: "FROM NAME",
          message: "MESSAGE",
        });
       **/
       
       function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
     }

    var randomNumero=getRandomInt(100,200);
    var nomPersona=document.querySelector(".usuari");
    var correuPersona=document.querySelector(".correu");


    
    
   
   
   

   
   
   
    function validate() {
      let loader = document.querySelector(".loader");
      let name = document.querySelector(".usuari");
      let email = document.querySelector(".correu");
      let btn = document.querySelector(".submit");
      let msg=randomNumero;
      console.log('Nom;'+name.textContent);

      btn.addEventListener("click", (e) => {
        
        e.preventDefault();
        console.log(nomPersona);
  console.log('Nom;'+name.value);

  localStorage.setItem('nomPerson', name.value);
  localStorage.setItem('correuPerson', correuPersona.value);
        if (nomPersona.value == "" || correuPersona.value == "" || msg.value == "") {
          emptyerror();
        } 
        else {
          sendmail(nomPersona.value,correuPersona.value,randomNumero);
          setTimeout(paginaValida,4000);
          suuccess();
          


        } 
        
      });
    }
    validate();


    function sendmail(name, email, msg) {
      emailjs.send("service_v5g0guh", "template_eiuucf6", {
        to_name: name,
        from_name: email,
        message: msg,
      });
    }

    function emptyerror() {
      Swal.fire({
        icon: "error",
        title: "Carai...",
        text: "Los campos no pueden estar vacios!",
      });
    }

    function error() {
      Swal.fire({
        icon: "error",
        title: "Carai...",
        text: "Alguna cosa ha ido mal!",
      });
    }
    
    function paginaValida(){
     swal({
          text: 'introduzca PIN de validación del correo".',
          content: "input",
         }).then((response)=>{
           if(response==randomNumero){
             pinCorrecte();
             setTimeout(obraInici,2000);

            }
           else{ 
             error();
             paginaValida();
            }
          })
    }

  function pinCorrecte(){
    Swal.fire({
        icon: "success",
        title: "Oleee!...",
        text: "Correo verificado, registro completado!",
        });
  }

    function suuccess() {
      Swal.fire({
        icon: "success",
        title: "Perfecto!...",
        text: "Se ha enviado un codigo de  verificación a su correo!",
      });
      
    }
    

    function obraInici(){
      window.location.href="iniciSessio.html"
    }


    

