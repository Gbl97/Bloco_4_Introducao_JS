// Exercicio 1 - Percorrendo o Array
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//for (let index = 0; index < numbers.length; index+=1) {
    //console.log(numbers[index]);
//}

// Exercicio 2 - Somando todos os valores dentro do array
// let soma = 0;
// for (let index = 0; index < numbers.length; index+=1) {
//     soma = soma + numbers[index]; 
// }
// console.log("A soma é: " + soma); 

// Exercicio 3 - Calcule e Imprima a Média Aritmética
// let soma = 0;
// let mediaAritmetica;

// for (let index = 0; index < numbers.length; index+=1) {
//     soma = soma + numbers[index];
// }

// mediaAritmetica = (soma/numbers.length);
// console.log("A Média Aritmética é: " + mediaAritmetica);

//Exercicio 4 
// let soma = 0;
// let mediaAritmetica;

// for (let index = 0; index < numbers.length; index+=1) {
//     soma = soma + numbers[index];
// }

// mediaAritmetica = (soma/numbers.length);

// if (mediaAritmetica > 20) {
//     console.log("Valor maior que 20: " + mediaAritmetica);
// } else {
//     console.log("Valor menor ou igual a 20: " + mediaAritmetica);
// }

//Exercicio 5
// let maior = 0;


// for (let index = 0; index < numbers.length; index+=1) {
    
//     if(numbers[index] > maior){
//         maior = numbers[index];
//     }
// }
// console.log("O maior é: " + maior);

//Exercicio 6
// let contador;
// contador = 0;

// for (let index = 0; index < numbers.length; index+=1) {
//     if (numbers[index] % 2 === 1) {
//         contador+=1;
//     } 
// }


// console.log("A quantidade de números ímpares dentro do array: " + contador);

//Exercicio 7
// let menor = 100000000;

// for (let index = 0; index < numbers.length; index+=1) {
//     if (numbers[index] < menor) {
//         menor = numbers[index];
//     }
// }
// console.log("O menor valor do array é: " + menor);

//Exercicio 8
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// for (let index = 0; index < numbers2.length; index+=1) {
//     console.log(numbers2[index]);
// }

//Exercicio 9
let resultDivisao;

for (let index = 0; index < numbers2.length; index+=1) {
    resultDivisao = (numbers2[index]/2);

    console.log(numbers2[index] + "/2" + " é: " + resultDivisao);
}

