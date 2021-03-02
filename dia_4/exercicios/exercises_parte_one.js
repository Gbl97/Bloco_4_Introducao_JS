let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    // 2 - Inserindo uma nova propriedade:
    recorrente: 'Sim'
  };

  // 1 - Imprimir uma mensagem de boas-vindas:
  console.log("Bem-vinda, " + info.personagem);

  // 3 - Faça um for/in que mostre todas as chaves do objeto:
  for (let key in info) {
      console.log(key);
  }
  
  // 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto:
  for (const key in info) {
      console.log(info[key]);
  }

  // 5 - Definindo um 2° objeto com a mesma estrutura (as mesmas chaves) do primeiro, mas com novos valores:
  let info_2 = {
      personagem: 'Margarida e Tio Patinhas',
      origen: 'Pato Donald e Christmas on Bear Mountain, Dells Four Color Comics #178',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
      recorrentes: 'Ambos recorrentes'
  };

  for (const key in info_2) {
    console.log(info_2[key]);
}