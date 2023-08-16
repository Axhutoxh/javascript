

// function setCancellableInterval(cb,delay) {
//     const timerId=setInterval(cb,delay);
//     return function(){
//         clearInterval(timerId)
//     }
// }

// let i = 0 ;
// const cancel = setCancellableInterval(()=>{
//     i++;
//     console.log(i)
// },1000)

// setTimeout(()=>{
//     cancel();
// },5000)


// cancel()
// const timerId = setInterval(()=>{})




// if(!Array.prototype.myFilter){
//     Array.prototype.myFilter = function(cb){
//         var array=[] 
//         for(let i=0 ; i<this.length ; i++){
//             if(cb(this[i]))
//             array.push(this[i])
//         }
//         return array
//     }
// }



console.log([1,2,3,4].myFilter((val)=>val%2==0))