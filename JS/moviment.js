$(document).ready(function(){
	// MOVIMENT DE TEXT =========================

    let barra = document.getElementById('barra');
	let barra1 = document.getElementById('barra1');
	let barra2 = document.getElementById('barra2');
    let velocidad = 5
    let mLeft = 17
	let contador = 0;
    
    function movDer () {
		if (contador > 0 && contador <=14){
			$('#barra').show();
			$('#barra1').hide();
			$('#barra2').hide();
          	mLeft += velocidad
          	barra.style.marginLeft = mLeft + "0.5px"
		}
				
		if (contador == 14) {
			mLeft = 20
			velocidad = 5
		}

		if (contador > 14){
			$('#barra').hide();	
			$('#barra1').show();
			mLeft += velocidad
			barra1.style.marginLeft =  mLeft + "0.5px"
		}

		if (contador == 26) {
			mLeft = 20
			velocidad = 2.5
		}

		if (contador > 26){
			$('#barra1').hide();	
			$('#barra2').show();
			mLeft += velocidad
			barra2.style.marginLeft =  mLeft + "0.5px"
		}

		if (contador == 37){
			$('#barra2').hide();
			mLeft = 20
			velocidad = 5
			contador = -1
		}

		contador++
				
        setTimeout(movDer, 350)}
        movDer()
    
	
	})