import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
        <div>HOME PAGE</div><Link to='/products/1'>Product 1</Link>
        <Link to='/products/2?name="abc"'>Product 2</Link>
        <Link to='/products/3'>Product 3</Link>
        <div>
        <Link to='/products/3/shoes'>Product 3.1</Link>
        <Link to='/products/3/Slipper'>Product 3.2</Link>
        </div>
        </>

    )
}

