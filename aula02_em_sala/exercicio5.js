let notas = [8.0, 9.0, 7.0];
const mediaParaAprovacao = 7.0;

console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);

const media = (notas[0] + notas[1] + notas[2]) / notas.length;
console.log(`A média do aluno é: ${media}`);

if (media < mediaParaAprovacao) {
    console.log(`O aluno está: REPROVADO`);
} 
else {
    console.log(`O aluno está: APROVADO`);
}
