var dom = document;

//Valida si es un numero
function EsNumero(pNumero) {
  return !isNaN(parseFloat(pNumero)) && isFinite(pNumero) && parseInt(pNumero)>=1582;
}

//Funcion que comunica la pagina principal con el metodo de verificar si un año es bisiesto
function CalcularR1(){
	var pYear = dom.getElementById('TxtYearR1').value
	var element = dom.getElementById("ResultadoR1");
	if(EsNumero(pYear)){
		pYear = parseInt(pYear);
		var result = comprobar_bisiesto(pYear);		
		if(result){
			element.innerHTML = "El año " + pYear + " SI es un año Bisiesto";
		}else{
			element.innerHTML = "El año " + pYear + " NO es un año Bisiesto";
		}				
	}else{		
		element.innerHTML = "El año indtroducido no es un entero positivo mayor o igual a 1582";		
	}
}

//Funcion que comunica la pagina principal con el metodo de verificar fecha en funciones_verificacion.js
function CalcularR2(){
	var year = dom.getElementById('TxtYearR2').value;
	var month = dom.getElementById('TxtMonthR2');
	month = month.options[month.selectedIndex].value
	var day = dom.getElementById('TxtDayR2');
	day = day.options[day.selectedIndex].value	
	var result = validar_fecha(year,parseInt(month.toString()),day.toString());
	var element = dom.getElementById("ResultadoR2");
	if(result){
		element.innerHTML = "La Fecha Introducida es una Fecha Válida";		
	}else{
		element.innerHTML = "La Fecha Introducida es una Fecha Inválida";		
	}
}

//Funcion que comunica la pagina principal con el metodo de verificar fecha en funciones_verificacion.js
function CalcularR3(){
	var year = dom.getElementById('TxtYearR3').value;
	var month = dom.getElementById('TxtMonthR3');
	month = month.options[month.selectedIndex].value
	var day = dom.getElementById('TxtDayR3');
	day = day.options[day.selectedIndex].value;		
	var result = encontrar_dia_siguiente(year,parseInt(month.toString()),day.toString());
	var element = dom.getElementById("ResultadoR3");
	element.innerHTML = "El día siguiente es: " + result;
}

//Funcion que comunica la pagina principal con el metodo de Calcular Primer Dia en Funciones de obtener dia.js
function CalcularR4(){
	var pYear = dom.getElementById('TxtYearR4').value
	var element = dom.getElementById("ResultadoR4");
	if(EsNumero(pYear)){
		pYear = parseInt(pYear);
		var result = CalcularPrimerDia(pYear);		
		element.innerHTML = "El 1 de Enero para el Año " + pYear + " es: " + result;		
	}else{		
		element.innerHTML = "El año indtroducido no es un entero positivo mayor o igual a 1582";		
	}
}
