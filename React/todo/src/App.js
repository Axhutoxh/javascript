
import './App.css';
import {useState} from 'react'

function App() {



  const [myList, setList] = useState([ {id:1,name:'first Task',active:true},{id:2,name:'Second Task',active:false}])
  const [taskInput ,settaskInput] = useState('')
  const [currentTarget, setCurrentTarget] = useState('')

  const style = {
    display: "flex",
    justifyContent: "center", 
    flexDirection: "column"

  }

  const handleTasks= ()=>{
    const newObj= {
      id : myList.length+1,
      active:true,
      name:taskInput
    }

    if(taskInput.includes('add top')){
      newObj.name = taskInput.split('add top')[1]
      setList([newObj,...myList])
    }
    else{
      newObj.name = taskInput
      
      setList([...myList,newObj])
    }



    settaskInput('')
  }


  function handleActive(e){


   const filteredobj = myList.filter(list=>{
      if(list.id===e){
        return list
      }
    })

    const lesTfilteredobj = myList.filter(list=>{
      if(list.id!==e){
        return list
      }
    })

    const editableObj = filteredobj[0]

    if(editableObj.active){
      editableObj.active = false
    }

    setList([editableObj,...lesTfilteredobj])
   
  }

  return (
    <div className="App">
        <h1>Todo List</h1>
        <div>
          <input type="text" placeholder="Add Task " value = {taskInput} onChange={e =>settaskInput(e.target.value)}/>
          <button onClick={handleTasks}>add</button>
        </div>

        <div>
        <div style={style}>
          { myList.map(task=>{
            return <span key={task.id} style = {{textDecoration : task.active?'':'line-through',cursor :task.active ?'pointer':'not-allowed'}}  onClick ={e=>task?.active&&handleActive(task.id)} >{task.id}:{task.name}</span>
          })}
        </div>
        </div>
    </div>
  );
}

export default App;
