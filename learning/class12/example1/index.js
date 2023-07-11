// const usernameRef = document.querySelector('.form input.username');
// const passwordRef = document.querySelector('.form input.password');
// const emailRef = document.querySelector('.form input.email');
const formRef = document.querySelector('.form')

const obj = {}

// usernameRef.addEventListener('keyup',function(e){
//     obj.name=e.target.value
//     // const previewRef = document.querySelector('.preview')
//     // previewRef.innerText = e.target.value
// })

// emailRef.addEventListener('keyup',function(e){
//     obj.email=e.target.value
// })

// passwordRef.addEventListener('keyup',function(e){
//     obj.password=e.target.value
// })

formRef.addEventListener('submit',function(e){
    e.preventDefault()
    const result = [...formRef.elements].reduce(function(acc,item){
        if(item.name){
        acc[item.name]=item.value
        }
        return acc
    },{})
    console.log(result)
})