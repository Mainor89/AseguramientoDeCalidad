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

//Dado un mes y un año retorna la fecha de inicio de ese mes
function CalcularPrimerDiaMes(pDay, pMonth, pYear){
	//Calcula el mes, orden de meses Marzo=1, Abril=2, .., Enero =11, Febrero =12
	var month = ((pMonth + 12) - 2)%12;
	if(month === 0){
		month = 12;
	}	
	//valor del día que queremos buscar
	var day = pDay;
	//Antes los meses iban de marzo a Febrero, por lo q si se busca el 1 de Enero del 2015
	//se debera buscar por el 1 de enero del 2014 por eso la sustracción siguiente
	var year = pYear % 100;
	if(month == 11 || month == 12){
		year = (pYear - 1) % 100;
	}
	//primeros dos dígitos del año
	var century = Math.floor(pYear / 100);	
	//Calculos de la formula para simplificarla
	var firstCalculation = Math.floor((2.6 * month) - 0.2);
	var secondCalculation = Math.floor(year / 4);
	var thirdCalculation = Math.floor(century / 4);
	//El resultado será un número del 0 al 6, ese valor indicará el día de la semana
	var result = (day + parseInt(firstCalculation) - (2 * century) + year + parseInt(secondCalculation) + parseInt(thirdCalculation)) % 7;
	if(result < 0){
		result = result + 7;
	}
	return result;
}


//Método que permitira calcular el dia que sera el 1 de Enero para el año dado
function CalcularPrimerDia(pYear){	
	var result = CalcularPrimerDiaMes(1, 1, pYear);	
	return DaysOfTheWeek[result].name;	
}

//Funcion que dado el mes y año creará todas las fechas de dicho mes
function CalcularMes(pMonth, pYear){
	var monthResult = [];	
	var monthStartDay = CalcularPrimerDiaMes(1, pMonth, pYear);
	var monthId = pMonth - 1;
	var monthSize = MonthDays[monthId].days;	
	if(monthId === 1){
		if(comprobar_bisiesto(pYear)){
			monthSize = 29;
		}
	}
	monthResult.push({day:1, name:DaysOfTheWeek[monthStartDay].name, pos:DaysOfTheWeek[monthStartDay].id});
	for (var day = 2; day <= monthSize; day++) {
		monthStartDay++;
		monthResult.push({day:day, name:DaysOfTheWeek[monthStartDay%7].name, pos:DaysOfTheWeek[monthStartDay%7].id});
	};
	return monthResult;
}
