
const numero = 3; 
const numeroPar = numero % 2 === 0;

if(numero === 0 ){
    console.log("O número é zero!")
} else if(numeroPar){
    console.log("O número é par!");
} else {
    console.log("O valor é ímpar!");
} 
// console.log(numeroPar);  //retorna true para número PAR  e false para número IMPAR