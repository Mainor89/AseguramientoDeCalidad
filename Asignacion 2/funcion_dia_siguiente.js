/*Esta funcion determina si la fehca escogida coincide con el fin de mes, recibe como parametros
el año, mes y dia seleccionados y retorna un booleano, true si el dia coincide con el fin de mes 
y false en caso contrario*/

function funcion_fin_de_mes(pYear,mes,dia){
	
	     var dias_del_mes = [31,28,31,30,31,30,31,31,30,31,30,31];    //array que contiene la cantidad de dias de cada mes
	     
		 //se verifica si el año es bisiesto
	     if(comprobar_bisiesto(parseInt(pYear))){
		               dias_del_mes[1]=29;		   //si el año es bisiesto se modifica el array para ajustar la cantidad de dias de febrero
	     }
	     
		 var entero_dia_seleccionado= parseInt(dia);   //se convierte el dia seleccionado en entero.
		 var fin_de_mes = dias_del_mes[mes]; //se convierte el mes seleccionado en entero.
		 
		 //se verifica si la cantidad de dias del mes seleccionado coincide con el dia que se eligio
		 if(fin_de_mes == entero_dia_seleccionado){
			 //alert("el dia coincide con el fin del mes");
			 return true; //si ambos numeros son iguales se encuentra en fin de mes
		 }
		 
		 else{
			 //alert("el dia no coincide con el fin del mes"); 
			 return false; //si los dias son distintos no es fin de mes
			 
		 }
		
	
	

	}
	
	

/*Esta funcion determina si la fehca escogida coincide con el fin de año, recibe como parametros
el mes y dia seleccionados y retorna un booleano, true si el dia coincide con el fin de año 
y false en caso contrario, en este caso el año no es necesario, ya que basta saber si el mes seleccionado es diciembre
y el dia es el 31*/
	
function last_day_of_the_year(meses,dias){
	
    //se revisa si el mes es diciembre y si el dia es el 31 simultaneamente 
	if((meses == 11) & (dias== 31)){
		//alert("es fin de año");
                return true; //si se encuenta que el mes es diciembre y el dia es el 31 se devuelve un true
	}
	
	else{
		//alert("no es fin de año");
                return false; //si el mes es no diciembre o el dia no es el 31 se devuelve un false
	}
		
}




/*Esta funcion encuentra el dia siguiente a la fecha seleccionada, recibe como parametros
el año, mes y dia escogidos y retorna un mensaje con la fecha del dia siguiente*/

function encontrar_dia_siguiente(pYear,mes,dia){
	var resultado = [0,0,0];
	//Se valida si la fecha es valida
	if(validar_fecha(pYear,mes,dia)){
	    var val_entero_mes_nuevo = parseInt(mes);   //si la fecha es fin de mes, se modifica el mes al mes siguiente
	   //se verifica si el dia y mes escogidos corresponden al fin de año
	   if(last_day_of_the_year(mes,dia)){
	   var val_entero_year_nuevo = parseInt(pYear)+1;   //en caso de que la fecha sea fin de año se modifica el valor del año
	   resultado = [1,0,val_entero_year_nuevo]//"1 de Enero del "+val_entero_year_nuevo.toString();
	   return resultado; //se muestra el mensaje con la fecha del año nuevo

	   }
	   
	   //si la fecha no es fin de año
	   else{
		   
		    //este if evalua si la fecha escogida corresponde a fin de mes
	        if(funcion_fin_de_mes(pYear,mes,dia)){
	              
	              resultado = [1,val_entero_mes_nuevo + 1,pYear];//"1 de "+MonthNames[val_entero_mes_nuevo + 1].name+" del "+pYear;   //  se muestra el mensaje con la fecha de inicio para el mes siguiente         
	              return resultado;
	       }
		   
		   //si la fecha no es fin de mes
	       else{
			    
	            var val_entero_dia_nuevo = parseInt(dia)+1; //se modifica el dia solamente            
	            resultado = [val_entero_dia_nuevo,val_entero_mes_nuevo,pYear];//""+ val_entero_dia_nuevo.toString()+" de "+MonthNames[val_entero_mes_nuevo].name+" del "+pYear;            //se muestra el mensaje con la fecha del dia siguiente al dia escogido  
	            return resultado;

	       }
	   }

	}

	else{
	     resultado = [0,0,0];//"Fecha inválida, es imposible encontrar el día siguiente";  //este mensaje se muestra si la fecha es invalida
	     return resultado;     
	}
}