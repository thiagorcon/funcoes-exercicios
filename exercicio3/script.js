
/*a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).*/
/*function somar(numA, numB){
  let soma =  numA + numB 
  return soma
}
console.log(somar(100,10));
function mult(numA, numB){
  let mul =  numA * numB 
  return mul
}
console.log(mult(50,5));
function subt(numA, numB){
  let sub =  numB - numA 
  return sub
}
console.log(subt(60,10));
function divid(numA, numB){
  let div =  numA / numB 
  return div
}
console.log(divid(1000,50));
*/
console.log(`----------------------------`);
/*b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.*/
let a = +prompt(('Digite um número'))
let b = +prompt(('Digite outro número')) 

/*c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.*/

function somar(a, b){
  let soma =  a + b 
  return soma
}
console.log(somar(a,b));

function mult(numA, numB){
  let mul =  a * b 
  return mul
}
console.log(mult(50,5));
function subt(a,b){
  let sub =  b-a 
  return sub
}
console.log(subt(a,b));
function divid(b,a){
  let div =  b / a 
  return div
}
console.log(divid(a,b));
console.log(`----------------------------`);
/*d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.*/

let num1 = 5;
let num2 = 50;

function somar(num1, num2){
  let soma =  num1 + num2 
  return soma
}
let resulSoma = somar(num1, num2)
console.log(resulSoma);

function multiplicar(num1, num2){
  let mult =  num1  * num2 
  return mult
}
let resulMult = multiplicar(num1, num2)
console.log(resulMult);

function subtrair(num1, num2){
  let subtr =  num2 - num1 
  return subtr
}
let resulSub = subtrair(num1,num2)
console.log(resulSub);

function dividir(num1, num2){
  let divi =  num2 / num1 
  return divi
}
let resulDivi = dividir(num1,num2)
console.log(resulDivi)

