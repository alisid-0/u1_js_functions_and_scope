function sayHello(){
    console.log(`hello world`)
}

//sayHello()

function sayHelloName(name) {
    console.log(`hello ${name}`)
}

sayHelloName(`Ali`)

function sayFullName(firstName, lastName, age){
    console.log(`Hello, ${firstName} ${lastName}. You are ${age} years old.`)
}

sayFullName(`Ali`, `Siddiqui`, 21)

const sayHi = () => console.log(`hi`)

const findSum = (a,b) => console.log(a+b)

findSum(5,7)

const findRemainder = (a,b) => console.log(a%b)

findRemainder(10,3)