function sumar_n_dias(pYear,mes,dia,numero){
		if(numero==0){
					 alert(pYear+"/"+mes+"/"+dia);
		}
		
		else{
			var arreglo_dias_del_mes = [31,28,31,30,31,30,31,31,30,31,30,31];
			if(comprobar_bisiesto(pYear)){
			   arreglo_dias_del_mes[1] = 29;		
			}
			var dias_del_mes = arreglo_dias_del_mes[mes-1]-dia;
			
			
			if(numero<=dias_del_mes){
				dia = dia+numero;
				numero=0;
				sumar_n_dias(pYear,mes,dia,numero);
			}
			
			
			else{
				numero = numero-(dias_del_mes+1);
				dia=1;
				if(mes==12){
					mes=1;
				}
				else{
					mes++;
				}
				if(mes==1){
					pYear++;
				}
				
				sumar_n_dias(pYear,mes,dia,numero);
				
			}
			
			
		}

}

function Sumar_dias_a_fecha(pYear,mes,dia,numero)
{
	if(validar_fecha(String(pYear),String(mes),String(dia))){
		sumar_n_dias(pYear,mes,dia,numero);
	}
	else{
		alert("fecha invalida");
	}
	
}