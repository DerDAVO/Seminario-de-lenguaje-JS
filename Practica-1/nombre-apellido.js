console.log("Hola Mundo!!");

////////////////////////////ejercicio 5////////////////////////

var text="Porro quisquam est qui dolorem ipsum";
function ejercicio5(variable){
    console.log("Cantiada de caracteres del String :" + variable.length);
    let palabra="ipsum";

    let i = variable.indexOf(palabra);
    
    if (i !== -1) {
        console.log("La palabra esta en la posicion"+i);
    }else{
        console.log("La palabra no ha sido encontrada");
    }
    let str = "Hello, World!";

    for (let i = 0; i < 4; i++) {
        console.log(variable[i]);
    }
    //Usando la funcion slice
    let subString= variable.slice(1,4);
    console.log("Usando slice"+subString);
} 

////////////////////////////ejercicio 6////////////////////////
//const a=2022;
//const b=12;
//const c=18;
const a=25;
const b=Math.floor(a);
const c=Math.random();

//si
function ejercicio6() {
    let res = Math.pow(a+b,c);
    console.log("Math.pow(a+b,c) = "+res);
    res = Math.max(a,b,c);
    console.log("Math.max(a,b,c) ="+res);
}

////////////////////////////ejercicio 7////////////////////////
var dia1 = Date();
var dia2 = 1575978300000; 
// padStart(2, '0') -> esta funcion permite poner un limite de digitos , en este caso 2
// y en caso de que los digitos sean menores a 2 se pone '0' adelante 
// ej  : dia = 1 -> resultado = 01
// ej : dia = 12 -> resultado = 12
function ejercicio7(fecha) {
    let dia = fecha.getDate().toString().padStart(2, '0');
    let mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses son 0-indexed
    let anio = fecha.getFullYear();
    let hora = fecha.getHours().toString().padStart(2, '0');
    let minuto = fecha.getMinutes().toString().padStart(2, '0');

    return `${dia}/${mes}/${anio} ${hora}:${minuto}`;
}
console.log("Resultado de convertir dia2 "+ejercicio7(dia2));
function intercambiar(fecha1,fecha2){
    let fecha = new (fecha2);
    fecha.setFullYear(fecha1.getDate());
    fecha1.setMonth(fecha.getMonth());
    return ejercicio7(fecha1)+" y "+ejercicio7(fecha);
}
console.log("Resultado del intercambio"+intercambiar(dia1,dia2));

function restarFechas(fecha1,fecha2){
    // hay que pasarlas a timestamp
    let timestamp1 = fecha1.getTime();
    let timestamp2 = fecha2.getTime();

    let res = timestamp1 - timestamp2;

    let fecha = new Date(res);

   return ejercicio7(fecha); // Mostrar la nueva fecha
}
console.log("Resultado de restar las fechas : "+restarFechas(dia1,dia2));