import { useState } from "react"

const RandomName=()=>{

    const [randomId,setRandomId] = useState('1243')
    const [randomName,setRandomName] = useState('1243')


    const changeIdentity = ()=>{
        const newRandomId = Math.random()
        setRandomId(newRandomId)

        const randomName =Math.random()
        setRandomName(randomName)

    }

return (
    <div onClick={changeIdentity}>
        <span>ID:{randomId}</span>
        <span>Name:{randomName}</span>
    </div>)


}

export default RandomName