import { useState } from "react"

const TodoList = ()=>{

    
    const [list,newList] = useState([{title: "Index 1",id:1,completed:true}
    ,{title: "Index 2",id:2,completed:false},{title: "Index 3",id:3,completed:true},{title: "Index 4",id:4,completed:false}])
    const [newItem,setNewItem] = useState('')
    // const renderList = ()=>{
    //     const data =[]
    //     // eslint-disable-next-line array-callback-return
    //     list.map(item=>{
    //         data.push( <li>{item}</li>)
    //     })
    //     return data
    // }


    const handleItemChange = (e)=>{
        console.log(e.target.value)
        setNewItem(e.target.value)
    }

    const handleButtonClick = (e)=>{
        if(newItem){
            setNewItem('')
            newList([{title:newItem,id:list.length+1,completed:false},...list])
            
  

            return
        }
       
    }

    return(
        <div className="like-wrapper">
            <h2>Todo List</h2>
            <div> 
                <input placeholder="Search Item" onChange={handleItemChange} value={newItem} />
                <button onClick={handleButtonClick}>Add</button>
            </div>
           
            <ul>
                {
                     list.map((item)=>{
                        return ( <li key={item.id} className={item.completed?"completed":''}>{item.title}</li>)
                    })
                }
               
            </ul>
        </div>
    )

}

export default TodoList