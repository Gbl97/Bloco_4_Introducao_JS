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
let array_teste_2 = [2, 4, 6, 7, 10, 0, -3];

menorIndice(array_teste_2);

function menorIndice(array_test) {
    let menor = 10000000;
    let index;

    for (index = 0; index < array_test.length; index+=1) {
        if (array_test[index] < menor) {
            menor = index;
        }
    }
    return console.log(menor);
}

// Exercicio 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.