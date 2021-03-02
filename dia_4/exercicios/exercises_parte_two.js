// Exercicio 1 - Criar a função Palíndromo:
// .split('') = cria um array com a string desejada;
// .reverse() = inverto a posição do array;
// .join('') = uni todos os campos em uma string novamente;
// referência: https://www.devmedia.com.br/forum/inverter-string-no-javascript/570951

function verificaPalindrome(nome) {
    let nome_inverso = nome.split('').reverse().join('');
    
    if (nome === nome_inverso) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

verificaPalindrome('mirim');
