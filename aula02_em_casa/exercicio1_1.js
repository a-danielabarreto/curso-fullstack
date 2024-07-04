const codigoProduto = "NOT12345";

var produto = "Notebook";

function categoriaProduto() {
    let categoria = "Eletrônicos";
    return categoria;
}

console.log(produto);
console.log(categoriaProduto());
console.log(codigoProduto);

console.log(`O produto ${produto} é da categoria ${categoriaProduto()} e possui código ${codigoProduto}.`);