// object 

var obj ={
    name:'Ashutosh Chandra',
    dob:'13/02/XXXX',
    age:25,
    married:false,
    techStack:['JS','React','Node'],
    address:{
        pincode:203131,
        city:"Khurja"
    },
    greet:function(){
        console.log("Hi, From X")
    }
}

var obj2={
    name:'Ashutosh Chandra',
    dob:'13/02/XXXX',
    age:25,
}


function sum(a1,a2){
    var r = a1.value+a2.value
    a1.value = 500
    return r
}


var a1={
    value:200
}


var a2={
    value:300
}

console.log(sum(a1,a2))
console.log(a1)
console.log(sum(a1,a2))
console.log(a1)