//Lista de los meses con los dias que tienen, febrero no esta contemplado como bisiesto
var MonthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

//Obtiene los dias transcurridos a partir del primero de enero del año dado
//retorna la cantidad de dias para llegar a la fecha indicada
function ObtenerDiasTransacurridos(pDay, pMonth, pYear){
	var cantidadDias = 0;
	var diaInicial = 1;
	var mesInicial = 0;
	var anoInicial = pYear;

	var bisiesto = comprobar_bisiesto(pYear);	
	if(bisiesto){
		MonthDays[1] = 29;
	}else{
		MonthDays[1] = 28;
	}
	while(mesInicial != pMonth){		
		cantidadDias = cantidadDias + MonthDays[mesInicial];
		mesInicial = mesInicial + 1;
	}
	cantidadDias = cantidadDias + pDay-diaInicial;
	return cantidadDias;
}

//Obtiene la cantidad de dias para llegar de un año al otro
function ObtenerDiasTranscurridos(pYear1, pYear2){
	var cantidadDias = 0;
	for (;pYear1 < pYear2; pYear1++) {
		var bisiesto = comprobar_bisiesto(pYear1);
		if(bisiesto){
			cantidadDias = cantidadDias + 366;
		}else{
			cantidadDias = cantidadDias + 365;
		}		
	};
	return cantidadDias;
}

//Funcion encargada de retornar la diferencia de días entre dos fechas
function CalcularDiferenciaDeDias(pDay1, pMonth1, pYear1, pDay2, pMonth2, pYear2){	
	var fecha1valida = validar_fecha(pYear1,parseInt(pMonth1.toString()),pDay1.toString());
	var fecha2valida = validar_fecha(pYear2,parseInt(pMonth2.toString()),pDay2.toString());	
	if(fecha1valida && fecha2valida){
		pDay1 = parseInt(pDay1.toString());
		pMonth1 = parseInt(pMonth1.toString());
		pYear1 = parseInt(pYear1.toString());
		pDay2 = parseInt(pDay2.toString());
		pMonth2 = parseInt(pMonth2.toString());
		pYear2 = parseInt(pYear2.toString());
		var comparacionValida = ValidarComparacionFechas(pDay1, pMonth1, pYear1, pDay2, pMonth2, pYear2);		
		if(comparacionValida){
			var diasTranscurridos1 = ObtenerDiasTransacurridos(pDay1, pMonth1, pYear1);			
			var diasTranscurridos2 = ObtenerDiasTransacurridos(pDay2, pMonth2, pYear2);			
			var diasAnosTranscurridos = ObtenerDiasTranscurridos(pYear1,pYear2);			
			var totalDias = diasTranscurridos2 + diasAnosTranscurridos - diasTranscurridos1;
			return "El Total de Días que transcurrieron desde la Fecha1 hasta la Fecha2 es de: " + totalDias + " día(s)";
		}else{
			return "La Segunda Fecha no es mayor que la Primera Fecha";
		}
	}else{
		if(fecha1valida){
			return "La Segunda Fecha es inválida";
		}else{
			return "La Primera Fecha es inválida";
		}
	}
}