import { useState } from "react"

const Counter = (props)=>{
    const [counter,setCounter] = useState(props.intialValue)

    const handleIncreaseCounter =()=>{
        if(counter>=10){
            return
        }
        setCounter(counter+1)
    }

    const handleDecreaseCounter =()=>{
        if(counter<=0){
            return
        }
        setCounter(counter-1)
    }

    return (
 
       <div>
        <h1>{props?.counterName||'props'}'s Couter</h1>
                <button onClick={handleIncreaseCounter}>
                 +
                </button> 
                {counter} 
                <button onClick={handleDecreaseCounter}>
                  -
                </button> 
            </div>
    
    )
}

export default Counter