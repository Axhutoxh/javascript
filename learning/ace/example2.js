//Q:1
// function createCounter(){
//     let count=0
//     function makeCounter(){

//         return ++count
//     }
//     return makeCounter
// }



// const counter1 = createCounter()
// const counter2 = createCounter()
// console.log(counter1())

// console.log(counter1())
// console.log(counter1())



// console.log(counter2())
// console.log(counter2())
// console.log(counter2())


// function numberGame(){
//     let targetNumber = Math.floor(Math.random()*100) +1
//     console.log(targetNumber)
//     return function(num){
      
//         if(num===targetNumber){
//             return 'found it'
//         }else if(num<targetNumber){
//             return 'Try higher number'
//         }else{
//             return 'Try lower number'
//         }
//     }
// }

// const guessedNumber = numberGame() //

// console.log(guessedNumber(150))
// console.log(guessedNumber(20))
// console.log(guessedNumber(80))


//Q:3 

// function sum(x){
//     return function(y){
//         return function(z){
//             return x+y+z
//         }
//     }
// }

// console.log(sum(5)(3)(2))

//Q:4 

// function fibonnacciSequence(){
//     let a=0
//     let b=1
//     return function(){
//         const result = a;
//         [a,b]=[b,a+b]
//         // a=b;
//         // b=result+a;
//         return result
//     }
// }


// const generateFibonnaci = fibonnacciSequence()
// console.log(generateFibonnaci())
// console.log(generateFibonnaci())
// console.log(generateFibonnaci())
// console.log(generateFibonnaci())
// console.log(generateFibonnaci())
// console.log(generateFibonnaci())
// console.log(generateFibonnaci())
// console.log(generateFibonnaci())


// //Q:5 

// function example(){
//     if(true){
//         var a=1
//         console.log(b)
//         let b=2

//     }
//     console.log(a)
//     // console.log(b)
// }

// example()

//Q:6

// function outer(x){
//     var a=10;
//     return function (){
//         return a
//     }

  
// }

// const innerF = outer();

// const newInnerRef = innerF
// console.log(newInnerRef())