let nascimentoAno = prompt("Informe seu ano de nascimemnto: ");
let anoPresente = prompt("Informme o ano: ");

if(anoPresente===""){
    let anoPresente=2023;
}
function idadeCalcula(anoPresente,nascimentoAno) {
    if (nascimentoAno===""){
        console.log("Dados Inválidos");
    };

    let idade=anoPresente-nascimentoAno;
    console.log("Você tem " +idade+ "anos!");
};
idadeCalcula(anoPresente,nascimentoAno);
