import { memo} from "react"

const Hugelist = ()=>{  

    const items = Array.from({length:1000},()=>"itemsz")
    console.log('aaa')
    return (
    <ul>
        {items.map((item,index)=>(
            <li key={index}> {`${index} ${item}`}</li>
        ))}
    </ul>
    )
}

export default (Hugelist)