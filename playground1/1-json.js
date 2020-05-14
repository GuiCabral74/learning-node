const fs = require('fs');

const myJson = fs.readFileSync('1-json.json');
//.tostring method is for transform data json in string.
const dataJson = myJson.toString();
//with PARSE i transform json in the object.
const user = JSON.parse(dataJson);

console.log(user);
console.log(user.name);

user.name = 'guilherme';
user.age = 32;

//whit STRINGFY i back my object to json file.
const userJson = JSON.stringify(user);
//and here i write my news values in the json file.
fs.writeFileSync('1-json.json', userJson);

console.log(user);
