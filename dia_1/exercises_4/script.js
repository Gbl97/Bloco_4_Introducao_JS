let estadoCandidato;

estadoCandidato = 'xablau';

switch (estadoCandidato){
    case 'reprovada':
        console.log("Você foi reprovada(o)");
        break;
    case 'espera':
        console.log("Você está na nossa lista de espera");
        break;
    case 'aprovada':
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    default:
        console.log("Estado do canditado desconhecido");
        break;
}