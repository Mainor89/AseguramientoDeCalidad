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
var selectedYear, selectedMonth, selectedDay, maximumCellId;

//Valida si es un numero
function EsNumero(pNumero) {
  return !isNaN(parseFloat(pNumero)) && isFinite(pNumero) && parseInt(pNumero)>=1582;
}

//Valida si el dia es un numero correcto
function ValidarDia(pDay, pMonth ,pYear){
	var monthSize = MonthDays[pMonth];	
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
	//Se obtienen los valores que serviran de parametro para la funcion
	var year = dom.getElementById('TxtYearR0').value;
	var month = dom.getElementById('TxtMonthR0');
	month = month.options[month.selectedIndex].value
	var day = dom.getElementById('TxtDayR0');
	day = day.options[day.selectedIndex].value
	if(EsNumero(year)){//Se valida el parametro año
		year = parseInt(year);
		if(ValidarDia(day,month,year)){	//Se valida el día que se introdujo
			var element = dom.getElementById("TablaCalendario");
			var elementMesActual = dom.getElementById("lblMesActual");
			var elementFechaSeleccionada = dom.getElementById("lblFechaSeleccionada");
			var monthResult = CalcularMes(parseInt(month) + 1, year);//Se obtiene un arreglo con el valor de cada día y su respectivo día de la semana					
			var calendarString = "";
			var rowId = 0;
			var cellId = 0;
			for(var index=0, monthResultSize=monthResult.length; index < monthResultSize; index++){
				if(index == 0){//Se crea la primera fila en caso de que no se empiece el mes en Domingo q es el primer dia
					calendarString += "<tr id=linea"+ rowId +">";				
					for(var i=0, index0Pos = monthResult[index].pos; i < index0Pos; i++){
						calendarString += "<td id=celda"+cellId+">--</td>";
						cellId++;
					}
				}
				if(monthResult[index].pos==0){//Si el dia es Domingo se crea la linea y se le asigna el campo seleccionado
					if(index != 0){
						calendarString += "<tr id=linea"+ rowId +">";
					}
					if(monthResult[index].day == day){
						calendarString += "<td id=celda"+cellId+" class='Seleccionado'>"+ monthResult[index].day +"</td>";
						cellId++;
					}else{
						calendarString += "<td id=celda"+cellId+">"+ monthResult[index].day +"</td>";
						cellId++;
					}				
				}			
				else if(monthResult[index].pos==6){//Si el dia es Sabado se crea la linea y se le asigna el campo seleccionado
					if(monthResult[index].day == day){
						calendarString += "<td id=celda"+cellId+" class='Seleccionado'>"+ monthResult[index].day +"</td>";
						cellId++;
					}else{
						calendarString += "<td id=celda"+cellId+">"+ monthResult[index].day +"</td>";
						cellId++;
					}
					calendarString += "</tr>";
					rowId++;
				}
				else if(index == (monthResultSize - 1)){//Verifica el ultimo día del mes y valida si es el campo seleccionado
					if(monthResult[index].day == day){
						calendarString += "<td id=celda"+cellId+" class='Seleccionado'>"+ monthResult[index].day +"</td>";
						cellId++;
					}else{
						calendarString += "<td id=celda"+cellId+">"+ monthResult[index].day +"</td>";
						cellId++;
					}
					for(var i=monthResult[index].pos + 1; i < 7; i++){
						calendarString += "<td id=celda"+cellId+">--</td>";
						cellId++;
					}
					calendarString += "</tr>";
				}
				else{//llena la fila con los campos pertienentes y valida si alguno de ellos es el dia seleccionado
					if(monthResult[index].day == day){
						calendarString += "<td id=celda"+cellId+" class='Seleccionado'>"+ monthResult[index].day +"</td>";
						cellId++;
					}else{
						calendarString += "<td id=celda"+cellId+">"+ monthResult[index].day +"</td>";
						cellId++;
					}
				}
			}
			//Termina de llenar el calendario con las celdas para los dias siguientes con el valor --
			while(cellId%7!=0){
				calendarString += "<td id=celda"+cellId+">--</td>";
				cellId++;
			}
			//MaximumCellId contendra el valor de las celdas con el fin de poder hacer un for y pintar el calendario
			maximumCellId = cellId;
			//Se modifican los labels de Mes actual y fecha seleccionada
			element.innerHTML = calendarDays + calendarString;
			elementMesActual.innerHTML = MonthNames[month].name;
			elementFechaSeleccionada.innerHTML = year + " / " + MonthNames[month].name + " / " + day;
			selectedYear = year;
			selectedMonth = MonthNames[month].name;
			selectedDay = day;
			//Se agrega el evento de click a la tabla creada
			AgregarEventoTabla();
			//Se repinta la tabla creada
			RePintarCalendario();
		}
		else{
			alert("El día introducido es mayor a la cantidad de días para ese mes");					
		}
	}else{		
		alert("El año introducido no es un entero positivo mayor o igual a 1582");		
	}
}

//Se encarga de repintar el calendario despues de haberlo creado dinamicamente
function RePintarCalendario(){
	for(var cellIndex=0; cellIndex < maximumCellId; cellIndex++){
		var id = "#celda" + cellIndex;		
		var celda = $(id);
		if(cellIndex % 2 == 0){
			celda.attr("bgColor","#597CA0");
			celda.addClass("FontOscuro");
		}else{
			celda.attr("bgColor","#ADD8E6");
			celda.addClass("FontClaro");
		}		
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

//
function CalcularR5(){
	var year = dom.getElementById('TxtYearR5').value;
	
	var month = dom.getElementById('TxtMonthR5');
	month = month.options[month.selectedIndex].value;
	
	var day = dom.getElementById('TxtDayR5');
	day = day.options[day.selectedIndex].value;		
	var element = dom.getElementById('ResultadoR5');

	if(validar_fecha(year,parseInt(month),day)){
		var numero = dom.getElementById('TxtNumeroR5').value;
		numero = Number(numero);
		if(!isNaN(numero) && numero >= 0){
			year = parseInt(year.toString());
			month = parseInt(month.toString());
			day = parseInt(day.toString());
			numero = parseInt(numero.toString());
			var result = sumar_n_dias(year,month,day,numero);				
			element.innerHTML = "La fecha final sería: " + result;
		}else{
			element.innerHTML = "El valor a adicionar debe ser un número entero positivo";
		}		
	}else{
		element.innerHTML = "La fecha introducida no es válida";
	}	
}

//Funcion que comunica la pagina principal con el metodo de Calcular Dias Transcurridos en funcion_dias_entre_fechas.js
function CalcularR6(){
	var pYear1 = dom.getElementById('TxtYear1R6').value
	var pYear2 = dom.getElementById('TxtYear2R6').value

	var pMonth1 = dom.getElementById('TxtMonth1R6');
	pMonth1 = pMonth1.options[pMonth1.selectedIndex].value
	var pMonth2 = dom.getElementById('TxtMonth2R6');
	pMonth2 = pMonth2.options[pMonth2.selectedIndex].value

	var pDay1 = dom.getElementById('TxtDay1R6');
	pDay1 = pDay1.options[pDay1.selectedIndex].value	
	var pDay2 = dom.getElementById('TxtDay2R6');
	pDay2 = pDay2.options[pDay2.selectedIndex].value

	var element = dom.getElementById("ResultadoR6");
	var result = CalcularDiferenciaDeDias(pDay1, pMonth1, pYear1, pDay2, pMonth2, pYear2);
	element.innerHTML = result;	
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

