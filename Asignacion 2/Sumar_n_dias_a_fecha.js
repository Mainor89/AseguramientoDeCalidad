
//Esta función recibe por parametro el año, mes y día introducidos por el usuario y le suma la cantidad de días introducida por el usuario 
function sumar_n_dias(pYear,mes,dia,Cantidad_dias_a_sumar){	
	//Condición que detiene la recursión, si la cantidad de días alcanza el número 0 se devuelve la fecha resultante
	if(Cantidad_dias_a_sumar==0){		
		 var string_resultado = pYear.toString()+"/"+MonthNames[mes].name+"/"+dia.toString();		 //String que concatena la fecha en formato Año/Mes/Día		 
		 return string_resultado; 
	}
	
	//Si la cantidad de días es distinta de 0 quiere decir que aun hay días que sumar a la fecha
	else{
		var arreglo_dias_del_mes = [31,28,31,30,31,30,31,31,30,31,30,31]; //Arreglo que contiene la cantidad de días para cada mes del año 
		
		//Condición que comprueba si el año recibido por parametro es bisiesto
		if(comprobar_bisiesto(pYear)){
		   arreglo_dias_del_mes[1] = 29;		//En caso que el año sea bisiesto modifica el arreglo y establece la cantidad de días de Febrero en 29
		}
		var dias_del_mes = arreglo_dias_del_mes[mes]-dia;		//En esta variable se almacena la cantidad de días que faltan para alcanzar el fin de mes 
		
		//Condición que evalua si la cantidad de días restantes que se deben sumar es menor que la cantidad de días que faltan para alcanzar el fin de mes 
		if(Cantidad_dias_a_sumar<=dias_del_mes){
			dia = dia+Cantidad_dias_a_sumar; //Le suma al día la cantidad de días restantes que se deben sumar para obtener la fecha deseada
			Cantidad_dias_a_sumar=0; //establece la cantidad de días restantes que se deben sumar en 0 para alcanzar la condición que pone fin a la recursión
			return sumar_n_dias(pYear,mes,dia,Cantidad_dias_a_sumar); //llamada recursiva con los valores finales de la fecha y la cantidad de dias restantes a sumar en 0
		}
		
		//si la cantidad de días restantes que se deben sumar es mayor que la cantidad de días que faltan para alcanzar el fin de mes 
		else{
			Cantidad_dias_a_sumar = Cantidad_dias_a_sumar-(dias_del_mes+1); //Le resta a numero la la cantidad de días que faltan para alcanzar el fin de mes + 1, para establecer una nueva fecha en el primer día del mes siguiente
			dia=1; //establece el dia en el primero del mes
			
			//Si el mes es diciembre hace el cambio para que el mes pase a ser Enero del año siguiente
			if(mes==11){
				mes=0; //Cambia el mes a Enero
				pYear++; //Establece el año actual en el año siguiente
			}
			else{
				mes++; //Si el mes es distinto de diciembre solo modifica el valor de mes para que sea el mes siguiente
			}			
			return sumar_n_dias(pYear,mes,dia,Cantidad_dias_a_sumar);	//llamada recursiva a la función ya que aun quedan días que sumar a la fecha
		}	
	}
}

