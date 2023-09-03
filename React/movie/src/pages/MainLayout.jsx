import { useContext } from "react"
import  { MainContext } from "../context/MainProvider"




const Main = ()=>{

    const data = useContext(MainContext)
    return (
        <section>Main
            {data}
        </section>
    )

}

export default Main