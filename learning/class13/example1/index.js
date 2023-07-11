const todoList = [{
    id:1,
    text:'Buy Milk',
    isComplete:true
},{
    id:2,
    text:'Attend Class',
    isComplete:true
},{
    id:3,
    text:'Go for Shopping',
    isComplete:true
},{
    id:4,
    text:'cook food',
    isComplete:false
}]


function renderTodoList() {
    const todoListRef=document.querySelector('.todo-list')
    todoListRef.innerHTML=''
    todoList.forEach((todo) => {
        const todoListItem = document.createElement('li')
        todoListItem.classList.add('todo-item')
        todoListItem.innerHTML = todo.text
        todoListRef.appendChild(todoListItem)
    })
}

const inputRef=document.querySelector('#new-todo');
inputRef.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
      
        todoList.push({
            id:todoList.length+1,
            text:e.target.value,
            isComplete:false 
        })
        inputRef.value=''
        renderTodoList()
        console.log(e.target.value)
    }
})

renderTodoList()