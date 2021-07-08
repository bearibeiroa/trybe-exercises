//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let custoDoProduto = 20;
let valorDeVenda = 50;


if (custoDoProduto >= 0 && valorDeVenda >= 0) {
    let valorCustoTotal = custoDoProduto * 0.2 + custoDoProduto;
    let lucro = (valorDeVenda - valorCustoTotal) * 1000;
    console.log(lucro);
} else {
    console.log("Error, os valores não podem ser negativos");
}