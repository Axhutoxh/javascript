const data =[{
    id:123,
    product:'product1'
},{
    id:23,
    product:'product2'
},{
    id:13,
    product:'product3'
},{
    id:12,
    product:'product4'
}]


const myFetch = (delay,cond)=>
setTimeout(()=>{
    new Promise((resolve, reject) =>{
        const details = data
        if(details.length>cond){
            resolve(details)
        }
        else{
            reject('Error in loading')
        }
    })
},delay)



//  myFetch(1000, 10)
//  .then(()=>{ myFetch(3000, 10) })
//  .then(()=>{ myFetch(4000, 10)})
//  .then(()=>{
//     console.log('Ready to show')
//  })


Promise.all([myFetch(5000,1),myFetch(3000,1),myFetch(2000,1)])
.then((data)=>{
    console.log('Resolved >',data)
})
.catch((e)=>{
    console.log('Rejected')
})