const buttonRef= document.querySelector('button');
let c = 0 ;


function throttle(fn1,delay){
    let flag =true
    return function(){
        if(flag){
        setTimeout(()=>{
            fn1()
            flag=true;
        },delay)}
    }
}

const fn1 = ()=>{
    c++;
    console.log(c)
}

const throottleFn = throttle(fn1,3000)

buttonRef.addEventListener('click',throottleFn)











function debounce(fn,delay) {
let timeoutRef;
return function(){
    clearTimeout(timeoutRef);
   timeoutRef= setTimeout(()=>{
        fn();
    },delay);
    }   }

var count=0;
const inputRef=document.querySelector('input')
const delay = 1000;

const fn = ()=>{
    count++;
    console.log(inputRef.value,count);
}

const debounceFn = debounce(fn,delay);
inputRef.addEventListener('keyup',debounceFn)



