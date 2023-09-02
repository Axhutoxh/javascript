import { useEffect, useState } from "react"

const LifeCycle = ()=>{

    const [count,setBtn] =useState(1)

const handleBtn=()=>{
  setBtn(count+1)
}

useEffect(()=>{console.log('birth')})


useEffect(()=>{
    console.log('update part')
},[count])


useEffect(()=>{
    return ()=>{
        console.log('death')
    }
})

return (<>
   <button onClick={handleBtn}>{count}</button>
</>)
}

export default LifeCycle