const cpf = "555.555.444-44";
var nome = "Daniela";

function sobreNome() {
    let sobreNome = "Barreto";
    //console.log(sobreNome);
    return sobreNome;
}

console.log(nome);
console.log(sobreNome());
console.log(cpf);

console.log(`O nome é: ${nome}. O sobrenome é: ${sobreNome()}. O CPF é: ${cpf}`);