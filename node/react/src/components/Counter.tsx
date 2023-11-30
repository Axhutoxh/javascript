import { useState } from 'react'


const Counter =(props)=> {
  const [count, setCount] = useState(0)

  return (
    <>

   
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Add 
        </button>
        {count}
        <button onClick={() => setCount((count) => count - 1)}>
          Sub 
        </button>
     {props.children}
      </div>

    </>
  )
}

export default Counter
