function calculaProduto(){
            var valor = document.getElementById("valor1").value;
            var quantidade = document.getElementById("quantidade1").value;
            var preco1 = quantidade/valor;
            
	     if (preco1 != "" && preco1 != null) {
	    setCookie("comparador1", preco1, 7);
	     
            location.href="comparador2.html";            
	     }
	     else{
	       alert ("Erro no preco1");
	     }
	       
           
        }
function calculaProduto2(){
	    var valor2 = document.getElementById("valor2").value;
            var quantidade2 = document.getElementById("quantidade2").value;
            var preco2 = quantidade2/valor2;
	    var precoprod1 = getCookie("comparador1");
	    
	     if (precoprod1 < preco2){
            alert("O produto 1 é mais barato que o produto 2.\n\nProduto 1 custa por unidade: R$"+precoprod1+"\nProduto 2 custa por unidade: R$"+preco2);
           location.href="comparador.html";
            }
            if(precoprod1 > preco2){
            alert("O produto 2 é mais barato que o produto 1.\n\nProduto 1 custa por unidade: R$"+precoprod1+"\nProduto 2 custa por unidade: R$"+preco2);
           location.href="comparador.html";
            }
            if (precoprod1 == preco2){
            alert("O produto 1 tem o mesmo preço que o produto 1.\n\nProduto 1 custa por unidade: R$"+precoprod1+"\nProduto 2 custa por unidade: R$"+preco2);
           location.href="comparador.html";
            }
  
}
//altera a virgula por ponto
function SubstituiVirgulaPorPonto(campo)
{
	campo.value = campo.value.replace(/,/gi, ".");
}

//cria o cookie com o nome, valor e data de expiração em dias
        function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//retorna o cookie de acordo com o nome cadastrado da variavel
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

