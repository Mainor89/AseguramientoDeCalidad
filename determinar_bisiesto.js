
/* La función comprobar_bisiesto determina si el año que se recibe
 por parametro es un año bisiesto, es decir si posee 366 días. El parametro que recibe
la función es un número entero positivo  */

function comprobar_bisiesto(año){

var a = parseInt(año);

/*Instruccion if que verifica las condiciones para que
un año sea bisiesto, el año bisisesto debe ser divisible
entre 4, además no debe ser divisible entre 100, pero si debe ser divisible entre 400.
por ejemplo: los años divisibles por 4 son bisiestos siempre y cuando no sean divisibles por 100
en caso que el año cumpla las 2 condiciones anteriores y además es divisible por 400, ese año
será bisiesto.
*/
if((a%4==0)&((a%100 !=0)|(a%400==0))) { 


alert("es bisiesto"); //muestra un mensaje indicando que el año es bisiesto
   
} 

else { 

/*En caso que el año no cumpla las condiciones necesarias
se muestra un mensaje indicando que el año no es bisiesto*/
alert("no es bisiesto"); 
  
}

}