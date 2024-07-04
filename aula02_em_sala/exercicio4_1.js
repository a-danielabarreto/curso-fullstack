let aluno = {
    nome: "Maria",
    cpf: "888.888.555-55",
    cidade: "São Paulo",
    notas: [8.5, 7.2, 9.0, 6.8]
}

console.log(`Nome: ${aluno.nome}\nCPF: ${aluno.cpf}\nCidade: ${aluno.cidade}`);
console.log(`A primeira nota do aluno é: ${aluno.notas[0]}\nA segunda nota do aluno é: ${aluno.notas[1]}\nA terceira nota do aluno é: ${aluno.notas[2]}\nA quarta nota do aluno é: ${aluno.notas[3]}`);

const media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]) / aluno.notas.length;
console.log(`A média do aluno é: ${media}`);

const notaSorteada = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];
const notaConvertida = notaSorteada * 10;
console.log(`A nota sorteada foi: ${notaSorteada} e convertida para a escala de 0-100 é: ${notaConvertida}`);