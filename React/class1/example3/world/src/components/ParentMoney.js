import { useState } from "react"
import PocketMoney from "./PocketMoney"

const ParentMoney=()=>{

    const [money,setMoney] =useState(100)

    const increaseMoney =()=>{
        setMoney(money+100)
    }

    return (<PocketMoney money={money} changeMoney={increaseMoney}/>)
}

export default ParentMoney