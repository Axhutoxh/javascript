// function doubleValue(){
//     var result = arr.map((data)=>{
//         return data*2
//     })
// }


var arr = [1,2,3,4,5,6,7,8]


function sumDeclarative(){
    //accumulator
    const r=arr.reduce((acc,item)=>{
        acc +=  item
        return acc
    },0)
    console.log(r)
}


(sumDeclarative())


strArray = ['I', 'J', 'K', 'L',]


var result = strArray.reduce((acc,word)=>{
    acc +=  word +' '
    return acc
},'')

console.log(result)
// function filterEvenValues(){
//     var result =arr.filter((item)=>{
//         return item%2!==0
//     })

//     console.log(result)
// }

// filterEvenValues()

// function inperativeFn(){

//     var sum =0 

//     for(var i=0; i<arr.length; i++){
//         sum +=arr[i];
//     }
//     return sum
// }

// console.log(inperativeFn())



// function decrativeFn(){
//     var sum = 0
//     arr.forEach(function(item){
//     arrsum+=item
//     })
// }

// inperative means we to give each intruction