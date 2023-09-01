import { Link, useParams } from "react-router-dom"


const Product  = ()=>{
    const {id,name} = useParams()
    return (
        <>
        PRODUCT  <h1>{id} {name&&':' } {name}</h1>
        <Link to='/'>Home</Link>
        </>
    )
}

export default Product