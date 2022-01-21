$(document).ready(function(){
    // FILTRANDO PRODUCTOS  ============================================
    var ultim = [10]
    var array = [10]
    var cont = 0;
    var btn = document.getElementsByClassName("botoFiltre");
    var opcion = 0;
    $('.category_item').click(function(){
        var catProduct = $(this).attr('category');

        if (catProduct == "adidas") opcion = 0
        else if (catProduct == "nike") opcion = 1
        else if (catProduct == "puma") opcion = 2
        else if (catProduct == "xsmall") opcion = 3
        else if (catProduct == "small") opcion = 4
        else if (catProduct == "mid") opcion = 5
        else if (catProduct == "large") opcion = 6
        else if (catProduct == "xlarge ") opcion = 7
        else if (catProduct == "conjunto") opcion = 8
        else if (catProduct == "sudadera") opcion = 9
        else if (catProduct == "chaqueta") opcion = 10
        else if (catProduct == "camiseta") opcion = 11
        else if (catProduct == "pantalon") opcion = 12

        // Comprovar check
        if (cont == 0){
            ultim[0] = catProduct;
            btn[opcion].checked = true;
        }
        else{
            for (i = 0; i < cont; i++){
                ultim[cont] = catProduct;
                btn[opcion].checked = true;
                if (ultim[cont] == ultim[i]){
                    ultim[cont] = i
                    ultim[i] = i
                    btn[opcion].checked=false
                    break;
                }
            }
        }
            
        // OCULTANDO PRODUCTOS =========================
        $('.productItem').css('transform', 'scale(0)');
        function hideProduct(){
            $('.productItem').hide();
        } setTimeout(hideProduct,400);
        
        // MOSTRANDO PRODUCTOS =========================
        function showProduct(){
            if (cont == 0){
                array[0] = catProduct;
            }
            else{
                for (i = 0; i < cont; i++){
                    array[cont] = catProduct;
                    if (array[cont] == array[i]){
                        array[cont] = i
                        array[i] = i
                        break;
                    }
                }
            }
            cont++;
            
            for ( i = 0; i < cont; i++){
                $('.productItem[category="'+array[i]+'"]').show();
                $('.productItem[category="'+array[i]+'"]').css('transform', 'scale(1)');
            }
        } setTimeout(showProduct,400);
    });
})