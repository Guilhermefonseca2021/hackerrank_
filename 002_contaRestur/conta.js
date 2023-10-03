// exercio 2 - pagina 41 logica de progrmacao e algoritmo com js de edecio jepsen

//elabora progrma que leia valor de um jantar. calcule e informw o valor da taxa
//de garcom (10%) e o valor total a ser pago.
// exemplo:
//valor do jantar: 80R$
//taxa do garcom: 8R$
//total a pagar: R$88,00

let valorJantar  = 80;
let taxaGarcom = 90; 
let total = 0;

total = valorJantar + (taxaGarcom / 100) * valorJantar;

console.log('VALOR DO jantar: ' + valorJantar + ',00')
console.log('taxa do garcom: ' + (taxaGarcom / 100) * valorJantar + ',00')
console.log('total: ' + total + ',00')


