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
        
        
        localStorage.setItem('nomPerson', JSON.stringify(nomPersona));
        localStorage.setItem('correuPerson', JSON.stringify(correuPersona));
        
        
           
        function validate() {
            let loader = document.querySelector(".loader");
            
            let btn = document.querySelector(".submit");
            let msg=randomNumero;
        
            btn.addEventListener("click", (e) => {
                console.log(nomPersona.textContent);
                e.preventDefault();
                
                if (nomPersona.value == "" || correuPersona.value == "" || msg.value == "") {
                  emptyerror();
                }  
                
                else{
                  sendmail(nomPersona.value, correuPersona.value,randomNumero);
                  setTimeout(paginaValida,4000);
                  success();
                  
                }
            });
        }
        
        
        
        //validate();
        /*
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
            title: "Ostres...",
            text: "Els camps no poden estar buids!",
            });
        }
        function error() {
            Swal.fire({
            icon: "error",
            title: "Ostres...",
            text: "Alguna cosa ha anat malament!",
            });
        }
            
        function paginaValida(){
            swal({
                text: 'introdueix PIN de validacio del correu".',
                content: "input",
                }).then((response)=>{
                   if(response==randomNumero){
                        pinCorrecte();
                    }
                   else{ 
                        error();
                    }
                })
        }
          function pinCorrecte(){
            Swal.fire({
                icon: "success",
                title: "Oleee!...",
                text: "Correu verificat, registre completat!",
                });
          }
            function success() {
              Swal.fire({
                icon: "success",
                title: "Perfecte!...",
                text: "S'ha enviat un codi de  validació al teu correu!",
              });
            }*/