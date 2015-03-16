var dom = document;
var calendarDays = "<tr id='dias'><th>Domingo</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th></tr>";

//Lista de los meses con los dias que tienen, febrero no esta contemplado como bisiesto
var MonthDays = [
	{id:0, days:31},
	{id:1, days:28},
	{id:2, days:31},
	{id:3, days:30},
	{id:4, days:31},
	{id:5, days:30},
	{id:6, days:31},
	{id:7, days:31},
	{id:8, days:30},
	{id:9, days:31},
	{id:10, days:30},
	{id:11, days:31}
];

//variables para mantener la fecha actual
var selectedYear, selectedMonth, selectedDay;

//Valida si es un numero
function EsNumero(pNumero) {
  return !isNaN(parseFloat(pNumero)) && isFinite(pNumero) && parseInt(pNumero)>=1582;
}

//Valida si el dia es un numero correcto
function ValidarDia(pDay, pMonth ,pYear){
	var monthSize = MonthDays[pMonth].days;	
	if(pMonth == 1){
		if(comprobar_bisiesto(pYear)){
			monthSize = 29;
		}
	}
	if(pDay <= monthSize){
		return true;
	}
	return false;
}

//Funcion que comunica la pagina principal con el metodo de crear calendario para mostrarlo
function CalcularR0(){
	var year = dom.getElementById('TxtYearR0').value;
	var month = dom.getElementById('TxtMonthR0');
	month = month.options[month.selectedIndex].value
	var day = dom.getElementById('TxtDayR0');
	day = day.options[day.selectedIndex].value
	if(EsNumero(year)){
		year = parseInt(year);
		if(ValidarDia(day,month,year)){		
			var element = dom.getElementById("TablaCalendario");
			var elementMesActual = dom.getElementById("lblMesActual");
			var elementFechaSeleccionada = dom.getElementById("lblFechaSeleccionada");
			var monthResult = CalcularMes(parseInt(month) + 1, year);		
			var calendarString = "";
			for(var index=0, monthResultSize=monthResult.length; index < monthResultSize; index++){
				if(index == 0){
					calendarString += "<tr>";				
					for(var i=0, index0Pos = monthResult[index].pos; i < index0Pos; i++){
						calendarString += "<td>--</td>";
					}
				}
				if(monthResult[index].pos==0){
					if(index != 0){
						calendarString += "<tr>";
					}
					if(monthResult[index].day == day){
						calendarString += "<td class='Seleccionado'>"+ monthResult[index].day +"</td>";
					}else{
						calendarString += "<td>"+ monthResult[index].day +"</td>";
					}				
				}			
				else if(monthResult[index].pos==6){
					if(monthResult[index].day == day){
						calendarString += "<td class='Seleccionado'>"+ monthResult[index].day +"</td>";
					}else{
						calendarString += "<td>"+ monthResult[index].day +"</td>";
					}
					calendarString += "</tr>";				
				}
				else if(index == (monthResultSize - 1)){
					if(monthResult[index].day == day){
						calendarString += "<td class='Seleccionado'>"+ monthResult[index].day +"</td>";
					}else{
						calendarString += "<td>"+ monthResult[index].day +"</td>";
					}
					for(var i=monthResult[index].pos + 1; i < 7; i++){
						calendarString += "<td>--</td>";
					}
					calendarString += "</tr>";
				}
				else{
					if(monthResult[index].day == day){
						calendarString += "<td class='Seleccionado'>"+ monthResult[index].day +"</td>";
					}else{
						calendarString += "<td>"+ monthResult[index].day +"</td>";
					}
				}
			}
			element.innerHTML = calendarDays + calendarString;
			elementMesActual.innerHTML = MonthNames[month].name;
			elementFechaSeleccionada.innerHTML = year + " / " + MonthNames[month].name + " / " + day;
			selectedYear = year;
			selectedMonth = MonthNames[month].name;
			selectedDay = day;
			AgregarEventoTabla();
		}
		else{
			alert("El día introducido es mayor a la cantidad de días para ese mes");					
		}
	}else{		
		alert("El año introducido no es un entero positivo mayor o igual a 1582");		
	}
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

//Permite cargar funciones a los tags o elementos seleccionados desd jquery
 function AgregarEventoTabla(){	
	//Funcion de Click para cada td 	
 	$('#TablaCalendario td').click(function(){		
		var $this = $(this); // this is just for performance
		$('td.Seleccionado').attr('id', 'normal');
		$('td.Seleccionado').removeClass('Seleccionado');		
		$this.addClass('Seleccionado');
		$this.attr('id', 'actual');		
		var elementFechaSeleccionada = dom.getElementById("lblFechaSeleccionada");
		var diaSeleccionado = dom.getElementById("actual");		
		elementFechaSeleccionada.innerHTML = selectedYear + " / " + selectedMonth + " / " + diaSeleccionado.innerHTML;
		selectedDay = diaSeleccionado.innerHTML;
	});
}

