import {useEffect, useState} from 'react'

const Header = ()=>{
    const [c,setC] =useState(0)

    useEffect(()=>{
        console.log('birth')
    })

    useEffect(()=>{
return()=>{
    console.log('death')
}
     
    })

    useEffect(()=>{

        console.log('update')
    },[c])

    const onButton=()=>{
        let nc = c+1
    setC(nc)
      }


    return (
        <div className="header">
                <button onClick={onButton}>click me{c}</button>
            Header</div>
    )
}

export default Header