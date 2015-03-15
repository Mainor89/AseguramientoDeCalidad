/*Esta funcion determina si la fehca escogida coincide con el fin de mes, recibe como parametros
el año, mes y dia seleccionados y retorna un booleano, true si el dia coincide con el fin de mes 
y false en caso contrario*/

function funcion_fin_de_mes(pYear,mes,dia){
	
	     var dias_del_mes = ["31","28","31","30","31","30","31","31","30","31","30","31"];    //array que contiene la cantidad de dias de cada mes
	     
		 //se verifica si el año es bisiesto
	     if(comprobar_bisiesto(parseInt(pYear))){
		               dias_del_mes[1]="29";		   //si el año es bisiesto se modifica el array para ajustar la cantidad de dias de febrero
	     }
	     
		 var entero_dia_seleccionado= parseInt(dia);   //se convierte el dia seleccionado en entero.
		 var fin_de_mes = parseInt(dias_del_mes[mes-1]); //se convierte el mes seleccionado en entero.
		 
		 //se verifica si la cantidad de dias del mes seleccionado coincide con el dia que se eligio
		 if(fin_de_mes == entero_dia_seleccionado){
			 alert("el dia coincide con el fin del mes");
			 return true; //si ambos numeros son iguales se encuentra en fin de mes
		 }
		 
		 else{
			 alert("el dia no coincide con el fin del mes"); 
			 return false; //si los dias son distintos no es fin de mes
			 
		 }
		
	
	

	}
	
	

/*Esta funcion determina si la fehca escogida coincide con el fin de año, recibe como parametros
el mes y dia seleccionados y retorna un booleano, true si el dia coincide con el fin de año 
y false en caso contrario, en este caso el año no es necesario, ya que basta saber si el mes seleccionado es diciembre
y el dia es el 31*/
	
function last_day_of_the_year(meses,dias){
	
    //se revisa si el mes es diciembre y si el dia es el 31 simultaneamente 
	if((meses == 12) & (dias== 31)){
		alert("es fin de año");
                return true; //si se encuenta que el mes es diciembre y el dia es el 31 se devuelve un true
	}
	
	else{
		alert("no es fin de año");
                return false; //si el mes es no diciembre o el dia no es el 31 se devuelve un false
	}
		
}




/*Esta funcion encuentra el dia siguiente a la fecha seleccionada, recibe como parametros
el año, mes y dia escogidos y retorna un mensaje con la fecha del dia siguiente*/

function encontrar_dia_siguiente(pYear,mes,dia){


//Se valida si la fecha es valida
if(validar_fecha(pYear,mes,dia)){

   //se verifica si el dia y mes escogidos corresponden al fin de año
   if(last_day_of_the_year(mes,dia)){
   var val_entero_year_nuevo = parseInt(pYear)+1;   //en caso de que la fecha sea fin de año se modifica el valor del año

   alert("el dia siguiente es: 1 de Enero de "+val_entero_year_nuevo.toString()); //se muestra el mensaje con la fecha del año nuevo

   }
   
   //si la fecha no es fin de año
   else{
	   
	    //este if evalua si la fecha escogida corresponde a fin de mes
        if(funcion_fin_de_mes(pYear,mes,dia)){
              var val_entero_mes_nuevo = parseInt(mes)+1;   //si la fecha es fin de mes, se modifica el mes al mes siguiente
              alert("el dia siguiente es: 1 de "+val_entero_mes_nuevo.toString()+" del "+pYear);   //  se muestra el mensaje con la fecha de inicio para el mes siguiente         

       }
	   
	   //si la fecha no es fin de mes
       else{
		    
            var val_entero_dia_nuevo = parseInt(dia)+1; //se modifica el dia solamente
            alert("el dia siguiente es: "+ val_entero_dia_nuevo.toString()+" de "+mes+" del "+pYear);            //se muestra el mensaje con la fecha del dia siguiente al dia escogido  

       }
   }

}

else{
     alert("fecha invalida, es imposible encontrar el dia siguiente");  //este mensaje se muestra si la fecha es invalida
}

}