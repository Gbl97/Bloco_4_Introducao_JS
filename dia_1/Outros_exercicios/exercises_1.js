let operacao;
let result;
let a;
let b;

a = 100;
b = 50;

operacao = "potenciação";

switch (operacao){
    case 'adição':
        result = a + b;
        console.log(result);
        break;
    case 'subtração':
        result = a - b;
        console.log(result);
        break;
    case 'multiplicação':
        result = a * b;
        console.log(result);
        break;
    case 'divisão':
        result = a / b;
        console.log(result);
        break;
    case 'módulo':
        result = a % b;
        console.log(result);
        break;
    default:
        console.log("Operação Inválida!");
        break;
}

