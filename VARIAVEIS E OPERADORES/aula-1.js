// DESAFIO: Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
//  1 - Preço do combustível;
//  2 - Gasto médio de combustível do carro por KM;
//  3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let precoCombustivel = 5.40;
let kmLitro = 15;
let distanciaViagem = 30;


function calculaValor(distanciaViagem, kmLitro, precoCombustivel){
    let valor = (distanciaViagem/kmLitro) * precoCombustivel;
    return valor;
}

console.log("O valor que você gastará com essa viagem é de:" + calculaValor(distanciaViagem, kmLitro, precoCombustivel));



