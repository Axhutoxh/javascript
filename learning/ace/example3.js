//Q:1

// if(!Array.prototype.customMap){
//     Array.prototype.customMap = function(cb){

//         //interates
//         //execute call back on every item
//         //add call back value to new array 
//         //return a new array
//         var newArray = [];
//         for(let i = 0; i <this.length;i++){
//             newArray.push(cb(this[i]))
//         }
//         return newArray
//     }
// }

// console.log([1,2,3].customMap((item)=>item*2))


// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age=age


//     }
// }

// const mad= new Person('MAD','23')
// Person.prototype.greeting = function(){
//     return `hello ${this.name} `
// }
// console.log(mad.greeting())


// class Person{
//         constructor(name,age){
//             this.name = name
//             this.age=age
    
    
//         }
//         greet(){
//             return `hello ${this.name} `
//         }
//     }
    
//     const mad= new Person('MAD','23')
 
//     console.log(mad.greet())


// function delayedLog(message,delay){
//     setTimeout(()=>{
//         console.log(message)
//     },delay)
// }

// delayedLog('I',1000)
// delayedLog('U',1000)


const fetchUserData = fetch('https://jsonplaceholder.typicode.com/users')
const getUserData = fetch('https://jsonplaceholder.typicode.com/posts')

Promise.all([fetchUserData,getUserData])
.then((res)=>Promise.all(res.map(res=>res.json())))
.then(res=>console.log(res))