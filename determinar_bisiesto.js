
/* La función comprobar_bisiesto determina si el año que se recibe
 por parametro es un año bisiesto, es decir si posee 366 días. El parametro que recibe
la función es un número entero positivo, el valor que retorna es un booleano, verdadero en caso 
que cumpla las condiciones establecidas y falso en caso contrario */

function comprobar_bisiesto(pYear){

/*Instruccion if que verifica las condiciones para que
un año sea bisiesto, el año bisisesto debe ser divisible
entre 4, además no debe ser divisible entre 100, pero si debe ser divisible entre 400.
por ejemplo: los años divisibles por 4 son bisiestos siempre y cuando no sean divisibles por 100
en caso que el año cumpla las 2 condiciones anteriores y además es divisible por 400, ese año
será bisiesto.
*/

if((pYear%4==0)&((pYear%100 !=0)|(pYear%400==0))) { 


return true; //retorna true en caso el año es bisiesto
   
} 

else { 

/*En caso que el año no cumpla las condiciones necesarias
retorna false*/
return false; 
  
}

}

