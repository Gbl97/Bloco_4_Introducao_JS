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
  