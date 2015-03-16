/*Funci�n que determina si el a�o ingresado es un numero entero positivo, la funci�n recibe un string 
que contiene el a�o que ser� analizado, evalua que todos los caracteres del string sean numericos, en caso de no
serlo retorna falso */

function Es_numero(pYear){
		var contador; //contador que sirve para recorrer el arraglo y funciona como condicion para detener el clico for
		var largo_del_string = pYear.length; //es el largo del string "a�o" usado como condicion para detener el clico for
		
		/*Este ciclo for recorre el string "a�o" recibido como parametro para analizar sus caracteres*/
		for (contador = 0; contador < largo_del_string ; contador++){
			var arreglo_caracteres_validos = ["0","1","2","3","4","5","6","7","8","9"]; //arreglo que contiene los caracteres permitidos para los a�os
			var caracter = pYear.charAt(contador); //esta variable almacena caracteres individuales del string
			
			/*Este if revisa si el caracter se encuentra dentro del array de elementos validos, retorna falso si el caracter no esta en el array*/
		    if(arreglo_caracteres_validos.indexOf(caracter,0) == -1){
				//alert("no es entero");
				return false;
			}			
			
		}

        //si el a�o es menor a 1582 no sera valido para los calculos del calendario gregoriano		
		if(parseInt(pYear)<1582){
			return false;
			
		}
		else
		    return true; //si se alcanza esta instruccion quiere decir que todos los caracteres del a�o son numericos
		
	}
	
	

/*Esta funcion determina si el string que se recibe por parametro es vacio, devuelve true si el string es vacio y false en caso
contrario*/
function string_vacio(cadena){
	//se revisa si el largo del string si es 0 el string es vacio
	if(cadena.length == 0){
		//alert("string vacio");
		return true;
	}
	else{
		//alert("string no vacio");
		return false;
	}
}	
	

/*Esta funcion verifica que la fecha introducida sea valida, es decir que los valores de los parametros
sean los correctos para el a�o escogido, la funcion recibe tres string de parametros(el a�o, el mes y el dia) y devuelve un 
valor booleano, true si la fecha es valida y false en caso contrario
Adem�s esta funcion integra funciones de validacion de este archivo y una funcion para determinar a�os bisiestos que esta ubicada 
el archivo determinar_bisiesto.js */
	
function validar_fecha(pYear,mes,dia){
	
	//primero se verifica que el a�o no este en blanco
	if(!string_vacio(pYear)){
		
		//luego se analiza si el a�o posee solo caracteres numericos
		if(Es_numero(pYear)){
	      var valor_entero_year = parseInt(pYear);   //convierte a entero el string a�o
          var valor_entero_dia = parseInt(dia);   // convierte a entero el string dia
	      var cantidad_dias_del_mes = [31,28,31,30,31,30,31,31,30,31,30,31];     //arreglo que contiene la cantidad de dias de cada mes en orden, Enero: 31, Febrero 28, etc

		  //llamado a la funcion comprobar_bisiesto para verificar si el a�o es bisiesto
	      if(comprobar_bisiesto(valor_entero_year)){
		      cantidad_dias_del_mes[1]=29;    //En caso que el a�o sea bisiesto se modificara la posicion 1 del array correspondiente a febrero		   
	      }
	
          var cantidad_dias_del_mes_seleccionado = cantidad_dias_del_mes[mes];     //obtiene la posicion del array correspondiente al mes seleccionado
		  
		  //analiza si el dia seleccionado se encuentra entre la cantidad de dias del mes escogido, retorna true en caso que si este en el rango de dias posible y false en caso contrario
		  if(valor_entero_dia <= cantidad_dias_del_mes_seleccionado){
			  //alert("cantidad de dias valido");
			  return true;
		  }
		  else{
			  //alert("fecha invalida"); //si el dia escogido no se encuentra en el rango de dias posibles, se considera que la fecha es invalida
			  return false;
		  }
			
		  
	    }
		
		else{
			alert("el a�o es invalido");   //si el a�o no es un numero entero positivo, no se contara como un a�o valido por lo tanto la fecha sera invalida
			return false;
		}
	
	}
	
	else{
		alert("el a�o no puede estar vacio"); //si el espacio del a�o esta vacio se considera que la fecha es invalida
		return false;
		
	}
	
}



