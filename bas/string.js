const name = "Alok"
const repoCount = 60

console.log('Hello my name is ${name}  and my repo count is ${repoCount}')
const gameName = new String('Alok- kr')

console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt('3'));
console.log(gameName.indexOf('o'));
console.log(gameName.toLowerCase());

const newString = gameName.substring(0,3)
console.log(newString)
const anotherString = gameName.slice(-1,2)
console.log(anotherString);
const newStringOne = "   Alok   "
console.log(newStringOne) ;
console.log(newStringOne.trim())

const url = "https://alok.com/alok%20kumar"
console.log(url.replace('%20','-'));

console.log(url.includes('alok'))
console.log(gameName.split('-'))