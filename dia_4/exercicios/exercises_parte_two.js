// Exercicio 1 - Criar a função Palíndromo:
// .split('') = cria um array com a string desejada;
// .reverse() = inverto a posição do array;
// .join('') = uni todos os campos em uma string novamente;
// referência: https://www.devmedia.com.br/forum/inverter-string-no-javascript/570951

// function verificaPalindrome(nome) {
//     let nome_inverso = nome.split('').reverse().join('');
    
//     if (nome === nome_inverso) {
//         return console.log(true);
//     } else {
//         return console.log(false);
//     }
// }

// verificaPalindrome('mirim');

// Exercicio 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// let array_teste = [2, 3, 6, 7, 10, 1];


// function maiorIndice(array_test) {
//     let maior = 0;
//     let index;

//     for (index = 0; index < array_test.length; index+=1) {
//         if (array_test[index] > maior) {
//             maior = index;
//         }
//     }
//     return console.log(maior);
// }

// maiorIndice(array_teste);

// Exercício 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// let array_teste_2 = [2, 4, 6, 7, 10, 0, -3];

// menorIndice(array_teste_2);

// function menorIndice(array_test) {
//     let menor = 10000000;
//     let index;

//     for (index = 0; index < array_test.length; index+=1) {
//         if (array_test[index] < menor) {
//             menor = index;
//         }
//     }
//     return console.log(menor);
// }

// Exercicio 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// maiorCaracter(arrayNomes);

// function maiorCaracter(string) {
//     let qtdCaracteres = 0;
//     let maior = '';
//     let index;

//     for (index = 0; index < string.length; index+=1) {
//         if (string[index].length > qtdCaracteres) {
//             qtdCaracteres = string[index].length;
//             maior = string[index];
//         }
//     }
//     return console.log(maior);
// }

//Exercicio 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// let arrayInteiro = [2, 3, 2, 5, 8, 2, 3];

// inteiroQueMaisSeRepete(arrayInteiro);

// function inteiroQueMaisSeRepete(arrayNumbers) {
//     // Cria uma variável que recebe a contagem dos números repetidos, e inicialmente, atribui-se a variável a 0:
//     let contadorRepetido = 0;
//     // Cria uma variável que recebe a contagem dos números, atribui-se a variável a 0:
//     let contadorNumbers = 0;
//     // Crio uma variável que nela é atribuída o index do número repetido:
//     let indexDoNumeroQueRepete = 0;

//     for (let index = 0; index < arrayNumbers.length; index+=1) {
//         for (let index_2 = 0; index_2 < arrayNumbers.length; index_2+=1) {
//             if (arrayNumbers[index] === arrayNumbers[index_2]) {
//                 contadorNumbers+=1;
//             }         
//         }
//         if (contadorNumbers > contadorRepetido) {
//             contadorRepetido = contadorNumbers;
//             indexDoNumeroQueRepete = index;
//         }
//         contadorNumbers = 0;
//     }
//     return console.log("Número que mais se repete: " + arrayNumbers[indexDoNumeroQueRepete]+ " " + " Quanta vezes se repetiu o número: " + contadorRepetido);
// }

//Exercicio 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// somaN(10);

// function somaN(number){
//     let soma = 1;

//     for (let index = 2; index <= number; index += 1) {
//         soma+=index;
//     }
//     return console.log(soma);
// }

// Exercicio 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word. 
//Considere que a string ending sempre será menor que a string word.
