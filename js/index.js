
//CALCULADORA DE TABLAS BÁSICAS
alert("Bienvenido a la caluladora de tablas básicas")

let numero = parseInt(prompt("Ingrese un número para conocer su tabla"));

if(numero > 0 && numero <= 10 ){
    for(let base = 0; base <= 10; base++){
        let resultado = numero * base;
        let mensaje = `${numero} x ${base} = ${resultado}`;
        alert(mensaje);
    }
} else if (numero < 0 ){
    alert("Ingrese un número positivo");
} else {
    alert("Ingrese un número del 1 al 10");
}


