

// Chalenge 1 // Even or Odd

// description 

// Creat a function that as integer as an argument and returns "Even" for even numbers "Odd" for odd number



function even_or_odd(number) {
    return number % 2 === 0 ?
        `le nimiro ${number} est Even` :
        `le nimiro ${number} est Odd`
}

console.log(even_or_odd(2))
console.log(even_or_odd(21))
console.log(even_or_odd(4))
console.log(even_or_odd(3))
console.log(even_or_odd(25))
console.log(even_or_odd(29))
console.log(even_or_odd(28))
console.log(even_or_odd(32))
