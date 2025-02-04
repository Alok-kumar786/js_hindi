const number = Math
console.log(number)
console.log(number.abs(-4))
console.log(number.round(4.3))
console.log(number.ceil(4.2))
console.log(number.floor(4.6))

console.log(number.min(4,5,7,2,8))
console.log(number.max(4,5,7,2,8))

console.log(number.random())
console.log(number.random() * 10)
console.log(number.floor(number.random() * 10) + 1)
const min = 10
const max = 20 
console .log(number.floor(number.random() * (max - min + 1)) + min) // must remember