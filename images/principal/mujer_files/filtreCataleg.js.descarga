$(document).ready(function(){
    
	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.ofert[category="hombre"]').addClass('active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.ofert').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.ofert').removeClass('active');
		$(this).addClass('active');

		// OCULTANDO PRODUCTOS =========================
		$('.nomPreu').css('transform', 'scale(0)');
		function hideProduct(){
			$('.nomPreu').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.nomPreu[category="'+catProduct+'"]').show();
			$('.nomPreu[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

});