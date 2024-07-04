const mediaParaAprovacao = 7.0;

const notas = [8.0, 7.0, 7.5];

console.log(`A primeira nota do aluno é: ${notas[0].toFixed(2)}`);
console.log(`A segunda nota do aluno é: ${notas[1].toFixed(2)}`);
console.log(`A terceira nota do aluno é: ${notas[2].toFixed(2)}`);

const media = (notas[0] + notas[1] + notas[2] )/ notas.length;

console.log(`A média do aluno é: ${media.toFixed(2)}`);

if (media >= mediaParaAprovacao) {
    console.log("APROVADO");
} else {
    console.log("REPROVADO");
}