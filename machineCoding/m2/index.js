const hourRef = document.querySelector('.hh')
const minRef = document.querySelector('.mm')
const secRef = document.querySelector('.ss')
const startRef = document.querySelector('.start')
const resetRef = document.querySelector('.reset')

let counteDownTimer;




startRef.addEventListener('click',()=>{
  
    if(hourRef.value=='00'&& minRef.value=='00'&&secRef.value=='00') return
   
    function startTimer(){
        counteDownTimer = setInterval(()=>{
            timer()
        },1000)
    }


    function stopInterval(){
        clearInterval(counteDownTimer)
    }
    startTimer()
    // setInterval();
    function timer(){
        if(hourRef.value=='00'&& minRef.value=='00'&&secRef.value=='00') {
            hourRef.value = ''
            minRef.value = ''
            secRef.value = ''

            stopInterval()
        } else if(secRef.value!=0){
            secRef.value = `${secRef.value<=10?"0":""}${secRef.value-1}`
          
        }else if(minRef.value!=0){
            secRef.value =59
            minRef.value = `${minRef.value<=10?"0":""}${minRef.value-1}`
        }else{
            minRef.value=59
            hourRef.value = `${hourRef.value<=10?"0":""}${hourRef.value-1}`
        }
    }

})

