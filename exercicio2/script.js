//Declare e invoque as funções abaixo:

/*a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.*/
let resulSoma = (num1,num2) =>{
  soma = num1 + num2
  return soma
}
console.log(resulSoma(10,30));

/*b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.*/

let numValor = (a, b) => {
  if (a > b) {
    console.log(`número A : ${a} é maior que o B : ${b}`);
  } else {
    console.log(`número B : ${b} é maior que o A : ${a}`);
  }
}
console.log(numValor(10,220));

/*c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.*/

let paridade = (numParImpar) =>{
  if (numParImpar % 2 === 0) {
    console.log(`este número é par`);
  }
  else {console.log(`este número é ímpar`)}
}
console.log(paridade(9));

/*d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.*/

let inssLiq = (salario) => {
  let inss = (salario * 10 )/ 100
  console.log(`O salario bruto de R$${salario},00 descontou a parcela do INSS de R$${inss},00, sendo assim o liquido do salario ficou em  R$${salario - inss},00.`);
}
console.log(inssLiq(1000));