//Here i use the validator method in one e-mail and one URL to validate it.
//npm i validator

const validator = require ('validator')

console.log(validator.isEmail('guilherme@teste.com'));
console.log(validator.isURL('https://www.hello.com'));
console.log(validator.isEmail('guilhermeteste.com'));
console.log(validator.isURL('htts://www.hello.com'));
