//Lista de dias para determinar segun la formula el día que será el primero de Enero
var DaysOfTheWeek = [
	{id:"0", name:"Domingo"},
	{id:"1", name:"Lunes"},
	{id:"2", name:"Martes"},
	{id:"3", name:"Miércoles"},
	{id:"4", name:"Jueves"},
	{id:"5", name:"Viernes"},
	{id:"6", name:"Sábado"}
	];

//Lista de los meses con los dias que tienen, febrero no esta contemplado como bisiesto
var MonthDays = [
	{id:"0", days:31},
	{id:"1", days:28},
	{id:"2", days:31},
	{id:"3", days:30},
	{id:"4", days:31},
	{id:"5", days:30},
	{id:"6", days:31},
	{id:"7", days:31},
	{id:"8", days:30},
	{id:"9", days:31},
	{id:"10", days:30},
	{id:"11", days:31}
];

function Prueba(){
	alert(CalcularPrimerDia(2015));
	var monthDates = CalcularMes(2,2016);
	for(var index = 0, size = monthDates.length; index < size; index++){
		console.log(monthDates[index].day + " " + monthDates[index].name);
	}

	var monthDates = CalcularMes(2,2018);
	for(var index = 0, size = monthDates.length; index < size; index++){
		console.log(monthDates[index].day + " " + monthDates[index].name);
	}	
}

//Dado un mes y un año retorna la fecha de inicio de ese mes
function CalcularPrimerDiaMes(pMonth, pYear){
	//Calcula el mes, orden de meses Marzo=1, Abril=2, .., Enero =11, Febrero =12
	var month = ((pMonth + 12) - 2)%12;
	if(month === 0){
		month = 12;
	}	
	//valor del día que queremos buscar
	var day = 1;
	//primeros dos dígitos del año
	var century = Math.floor(pYear / 100);
	//Antes los meses iban de marzo a Febrero, por lo q si se busca el 1 de Enero del 2015
	//se debera buscar por el 1 de enero del 2014 por eso la sustracción siguiente
	var year = pYear % 100;
	if(month === 11 || month === 12){
		year = (pYear - 1) % 100;
	}
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
	var result = CalcularPrimerDiaMes(1,pYear);	
	return DaysOfTheWeek[result].name;	
}

//Funcion que dado el mes y año creará todas las fechas de dicho mes
function CalcularMes(pMonth, pYear){
	var monthResult = [];
	var monthStartDay = CalcularPrimerDiaMes(pMonth, pYear);
	var monthId = pMonth - 1;
	if(monthId === 1){
		var bis = ComprobarBisiesto(pYear);
		if(bis){
			MonthDays[monthId].days = 29;
		}else{
			MonthDays[monthId].days = 28;
		}
	}
	monthResult.push({day:1, name:DaysOfTheWeek[monthStartDay].name});
	for (var day = 2, monthSize = MonthDays[monthId].days; day <= monthSize; day++) {
		monthStartDay++;
		monthResult.push({day:day, name:DaysOfTheWeek[monthStartDay%7].name});
	};
	return monthResult;
}


/*Instruccion if que verifica las condiciones para que
un año sea bisiesto, el año bisisesto debe ser divisible
entre 4, además no debe ser divisible entre 100, pero si debe ser divisible entre 400.
por ejemplo: los años divisibles por 4 son bisiestos siempre y cuando no sean divisibles por 100
en caso que el año cumpla las 2 condiciones anteriores y además es divisible por 400, ese año
será bisiesto.
*/
function ComprobarBisiesto(pYear){
	if((pYear%4==0)&((pYear%100 !=0)|(pYear%400==0))) { 
		return true; //retorna true en caso el año es bisiesto
	} 
	else{ 
	/*En caso que el año no cumpla las condiciones necesarias
	retorna false*/
		return false; 
	}
}
