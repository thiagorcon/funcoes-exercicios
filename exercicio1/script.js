//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
 /*function olaNome(nome) {
  console.log(`Olá Sr ${nome}, tudo bem?`);
 }
console.log(olaNome('Thiago'));
*/

// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.
 /*
 function tabuada(num) {
    console.log(num * 1);
    console.log(num * 2);
    console.log(num * 3);
    console.log(num * 4);
    console.log(num * 5);
    console.log(num * 6);
    console.log(num * 7);
    console.log(num * 8);
    console.log(num * 9);
    console.log(num * 10);
 }
 console.log(tabuada(2));
*/

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
let olaNome = (nome) => {
  console.log(`Olá Sr ${nome}, tudo bem?`);
 }
console.log(olaNome('Thiago'));

let tabuada = (num) => {
  console.log(num * 1);
  console.log(num * 2);
  console.log(num * 3);
  console.log(num * 4);
  console.log(num * 5);
  console.log(num * 6);
  console.log(num * 7);
  console.log(num * 8);
  console.log(num * 9);
  console.log(num * 10);
}
console.log(tabuada(2));


