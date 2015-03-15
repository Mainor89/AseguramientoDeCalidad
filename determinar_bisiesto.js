
/* La funci�n comprobar_bisiesto determina si el a�o que se recibe
 por parametro es un a�o bisiesto, es decir si posee 366 d�as. El parametro que recibe
la funci�n es un n�mero entero positivo, el valor que retorna es un booleano, verdadero en caso 
que cumpla las condiciones establecidas y falso en caso contrario */

function comprobar_bisiesto(pYear){

/*Instruccion if que verifica las condiciones para que
un a�o sea bisiesto, el a�o bisisesto debe ser divisible
entre 4, adem�s no debe ser divisible entre 100, pero si debe ser divisible entre 400.
por ejemplo: los a�os divisibles por 4 son bisiestos siempre y cuando no sean divisibles por 100
en caso que el a�o cumpla las 2 condiciones anteriores y adem�s es divisible por 400, ese a�o
ser� bisiesto.
*/

if((pYear%4==0)&((pYear%100 !=0)|(pYear%400==0))) { 


return true; //retorna true en caso el a�o es bisiesto
   
} 

else { 

/*En caso que el a�o no cumpla las condiciones necesarias
retorna false*/
return false; 
  
}

}

