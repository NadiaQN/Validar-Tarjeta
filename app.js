
var number = prompt('Ingresa el número de tu tarjeta de crédito: ');


function isValidCard(number) {
	var array = Array.from(number).reverse(); //Convierte el string ingresado en un array y lo revierte
	var numberCard = [];
	var acumulador = 0
	
	for(i= 1; i<array.length; i+=2){		  //busco la posicion par de mi array
		numberCard.push(parseInt(array[i])); //Convierte los string en number y los mete a mi array vacio
		numberCard[i]*2;        
			if(numberCard[i]*2 >9){		     //Si los numeros son mayores a 9, se les restaran 9 para tener un numero de un solo digito
				numberCard[i]=-9
			}
		
		} return numberCard
	
}
