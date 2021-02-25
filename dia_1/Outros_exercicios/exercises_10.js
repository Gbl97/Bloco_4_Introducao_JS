let valorCusto;
let valorVenda;
let valorCustoTotal;
let lucro;

valorCusto = 100;
valorVenda = 1000;


if(valorCusto < 0 && valorVenda < 0){
    console.log("Erro: valores de entrada menores que zero!");
} else{
    valorCustoTotal = (valorCusto + (valorCusto*1.20));
    lucro = valorVenda - valorCustoTotal;
    console.log("O lucro obtido foi de: " + lucro);
}



