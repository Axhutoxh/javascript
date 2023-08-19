import { useState } from "react";

const Like = ()=>{
console.log('rerender')
    const  [count,setCount] = useState(100)
    let count1=10
  

    const handleLike = ()=>{
        count1 =count1 + 1
        console.log(count1)
        setCount(count+1)
    }

    return(
        <div className="like-wrapper">
            {/* <div>
                <button onclick="handleLike()">
                  Like
                </button>
                {count}
            </div> */ // vanila js
            } 

            <div>
                <button onClick={handleLike}>
                  Like 
                </button> - 
                {count} {count1}
            </div>
        </div>
      
    )
}

export default Like