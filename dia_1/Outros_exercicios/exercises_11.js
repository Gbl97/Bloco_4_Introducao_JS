let salarioBruto;
let salarioBase;
let salarioLiquido;
let inss;
let IR;

salarioBruto = 8000;

if(salarioBruto <= 1556.94){
    inss = (salarioBruto*0.08);
    salarioBase = (salarioBruto - inss);
    console.log("Salario Bruto: " + salarioBruto);
    console.log("Alíquota: 8% ");
    console.log("Salário-Base: " + salarioBase);

} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = (salarioBruto*0.09);
    salarioBase = (salarioBruto - inss);
    console.log("Salario Bruto: " + salarioBruto);
    console.log("Alíquota: 9% ");
    console.log("Salário-Base: " + salarioBase);

} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = (salarioBruto*0.11);
    salarioBase = (salarioBruto - inss);
    console.log("Salario Bruto: " + salarioBruto);
    console.log("Alíquota: 11% ");
    console.log("Salário-Base: " + salarioBase);

} else if (salarioBruto > 5189.82) {
    salarioBase = (salarioBruto - 570.88);
    console.log("Salario Bruto: " + salarioBruto);
    console.log("Alíquota: R$ 570,88 ");
    console.log("Salário-Base: " + salarioBase);
}

if(salarioBase <= 1903.98){
    console.log("Isento de imposto de renda");

} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    IR = ((salarioBase*0.075) - 142.80);
    salarioLiquido = (salarioBase - IR);
    console.log("Salário com INSS já deduzido: " + salarioBase);
    console.log("Alíquota de imposto de renda: 7,5%");
    console.log("Parcela a se deduzir do imposto de renda: R$ 142,80");
    console.log("Salário Líquido: " + salarioLiquido);

} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    IR = ((salarioBase*0.15) - 354.80);
    salarioLiquido = (salarioBase - IR);
    console.log("Salário com INSS já deduzido: " + salarioBase);
    console.log("Alíquota de imposto de renda: 15%");
    console.log("Parcela a se deduzir do imposto de renda: R$ 354,80");
    console.log("Salário Líquido: " + salarioLiquido);

} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    IR = ((salarioBase*0.225) - 636.13);
    salarioLiquido = (salarioBase - IR);
    console.log("Salário com INSS já deduzido: " + salarioBase);
    console.log("Alíquota de imposto de renda: 22,5%");
    console.log("Parcela a se deduzir do imposto de renda: R$ 636,13");
    console.log("Salário Líquido: " + salarioLiquido);

} else if (salarioBase > 4664.68) {
    IR = ((salarioBase*0.275) - 869.36);
    salarioLiquido = (salarioBase - IR);
    console.log("Salário com INSS já deduzido: " + salarioBase);
    console.log("Alíquota de imposto de renda: 27,5%");
    console.log("Parcela a se deduzir do imposto de renda: R$ 869,36");
    console.log("Salário Líquido: " + salarioLiquido);
}