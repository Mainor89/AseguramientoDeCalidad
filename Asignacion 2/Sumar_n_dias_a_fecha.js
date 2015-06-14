function sumar_n_dias(pYear,mes,dia,numero){
	if(numero==0){
		 var string_resultado = pYear.toString()+"/"+MonthNames[mes].name+"/"+dia.toString();		 
		 return string_resultado;
	}
	else{
		var arreglo_dias_del_mes = [31,28,31,30,31,30,31,31,30,31,30,31];
		if(comprobar_bisiesto(pYear)){
		   arreglo_dias_del_mes[1] = 29;		
		}
		var dias_del_mes = arreglo_dias_del_mes[mes]-dia;		
		if(numero<=dias_del_mes){
			dia = dia+numero;
			numero=0;
			return sumar_n_dias(pYear,mes,dia,numero);
		}
		else{
			numero = numero-(dias_del_mes+1);
			dia=1;
			if(mes==12){
				mes=1;
				pYear++;
			}
			else{
				mes++;
			}			
			return sumar_n_dias(pYear,mes,dia,numero);	
		}	
	}
}

