//const arr = [5, -1, -3, 3]; //caso sin cero
//const arr = [5, -1, -3, 3, 0]; //caso con cero
//const arr = [-1, -3,-9,-8]; //Caso sin numero positivos
//const arr = [0]; //Caso con solo cero
//const arr = [-5]; //Caso con un solo negativo
//const arr = [5]; //Caso con un solo positivo
//const arr = [-1,1]; //Caso con -1 y 1
//const arr = [-1,0];  //Caso con -1 y 0
const arr = [0,1];  //Caso con 0 y 1

//Variables de comparacion
var numero1;
var numero2;

//Variable para conservar el numero mas cercano a 0
var numero;

//Funcion que recive como parametro un arreglo
function cercaCero(array){

    array.sort((a,b) => a-b); //------> Ordenamos nuestro arreglo de manera acendente, para empezar con los numero negativos o con su defecto con el 0
    //console.log(array);

    for (let i = 0; i< array.length; i++) {

        //Se asigna dos valores del arreglo para hacer una comparacion
        numero1 = array[i];
        numero2 = array[i+1];

        //console.log(numero1,numero2);

        if(numero1 == 0){ //---------------> encaso del que el primer numero sea igual 0 numero toma el valor de numero1 y se rompe el ciclo
            numero = numero1;
            break
        }else{//------------------------> encaso contrario

            if(numero1 < numero2){ //---> Hacemos comparacion  de nuestros dos numero, caso de que numero sea mayor que numero1
                numero = numero2;

                if(numero >=0){ //-------> verificamos que nuestro numero sea mayor o igual a cero, para romper el ciclo con el primer numero que cumple con esta condicion
                    //console.log(numero);
                    break;
                }
                if(numero == undefined){ //--> caso en que se comparo todo el arreglo, entonces se hasigna el ultimo numero del arreglo ordenado
                    numero = array[i];
                    break;
                }
            }else{
                numero = numero1;//--> en caso de que numero1 sea mayor que numero2

                if(numero >=0){ //-------> verificamos que nuestro numero sea mayor o igual a cero, para romper el ciclo con el primer numero que cumple con esta condicion
                    //console.log(numero);
                    break;
                }
                if(numero == undefined){ //--> caso en que se comparo todo el arreglo, entonces se hasigna el ultimo numero del arreglo ordenado
                    numero = array[i];
                    break;
                }
                
            }
        }
    }


    console.log(numero); //Imprimiendo numero cercano a cero
}

//Llamando a nuestra funcion
cercaCero(arr);