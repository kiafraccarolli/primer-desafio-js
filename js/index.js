//CALCULADORA DE TABLAS BÁSICAS
alert("Bienvenido a la caluladora de tablas básicas!");

let numero = parseInt(prompt("Ingrese un número para conocer su tabla:"));

if (numero > 0 && numero <= 10) {
  for (let i = 0; i <= 10; i++) {
    //Por convencion se le pone "i" al elemento iterador
    let resultado = numero * i;
    let mensaje = `${numero} x ${i} = ${resultado}`;
    alert(mensaje);
  }
} else if (numero < 0) {
  alert("Por favor, ingrese un número positivo.");
} else {
  alert("Por favor, ingrese un número del 1 al 10.");
}

//Buena logica! Me gusta que hayas validado todo y no dejado huecos ;)
