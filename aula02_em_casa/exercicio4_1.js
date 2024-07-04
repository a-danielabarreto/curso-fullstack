let pessoa = {
    nome: "Daniela",
    cpf: "333.222.111-000",
    cidade: "João Pessoa",
    notas: [8.00, 9.00, 9.50, 10.00]
};

console.log(`Nome: ${pessoa.nome}\nCPF: ${pessoa.cpf}\nCidade: ${pessoa.cidade}`);

console.log(`A primeira nota do aluno é: ${pessoa.notas[0].toFixed(2)}`);
console.log(`A segunda nota do aluno é: ${pessoa.notas[1].toFixed(2)}`);
console.log(`A terceira nota do aluno é: ${pessoa.notas[2].toFixed(2)}`);
console.log(`A quarta nota do aluno é: ${pessoa.notas[3].toFixed(2)}`);

const media = (pessoa.notas[0] + pessoa.notas[1] + pessoa.notas[2]+ pessoa.notas[3]) / pessoa.notas.length;

console.log(`A média do aluno é: ${media.toFixed(2)}`);

const notaSorteada = pessoa.notas[Math.floor(Math.random() * pessoa.notas.length)];

const notaConvertida = notaSorteada * 10;

console.log(`A nota sorteada foi: ${notaSorteada.toFixed(2)} e convertida para a escala de 0-100 é: ${notaConvertida.toFixed(2)}`);