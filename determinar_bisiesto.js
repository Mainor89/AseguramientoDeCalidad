
/* La funci�n comprobar_bisiesto determina si el a�o que se recibe
 por parametro es un a�o bisiesto, es decir si posee 366 d�as. El parametro que recibe
la funci�n es un n�mero entero positivo  */

function comprobar_bisiesto(a�o){

var a = parseInt(a�o);

/*Instruccion if que verifica las condiciones para que
un a�o sea bisiesto, el a�o bisisesto debe ser divisible
entre 4, adem�s no debe ser divisible entre 100, pero si debe ser divisible entre 400.
por ejemplo: los a�os divisibles por 4 son bisiestos siempre y cuando no sean divisibles por 100
en caso que el a�o cumpla las 2 condiciones anteriores y adem�s es divisible por 400, ese a�o
ser� bisiesto.
*/
if((a%4==0)&((a%100 !=0)|(a%400==0))) { 


alert("es bisiesto"); //muestra un mensaje indicando que el a�o es bisiesto
   
} 

else { 

/*En caso que el a�o no cumpla las condiciones necesarias
se muestra un mensaje indicando que el a�o no es bisiesto*/
alert("no es bisiesto"); 
  
}

}