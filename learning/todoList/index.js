const themeContainer = document.getElementById('themeContainer');
const bodyRef = document.querySelector('body');
const todoListBoxRef = document.querySelector('.todo-list-box');
const todoInputRef= document.querySelector('.todo-input');

todoListBoxRef.style.fontFamily='cursive'
todoInputRef.classList.add('todo-light-input')

themeContainer.addEventListener('click', (e)=>{
    bodyRef.classList.remove(...bodyRef.classList)
    const clickedTheme = e.target.classList[1]
    bodyRef.classList.add(clickedTheme)
    if(clickedTheme.includes('2')){
        todoListBoxRef.classList.remove('light-box')
        todoInputRef.classList.remove('todo-light-input')
        
        todoListBoxRef.classList.add('dark-box')
        todoListBoxRef.style.color='green'
        todoListBoxRef.style.fontFamily = 'monospace'
        todoInputRef.classList.add('todo-dark-input')
    }

    else{  
        todoListBoxRef.classList.remove('dark-box'); 
        todoInputRef.classList.remove('todo-dark-input')

        todoListBoxRef.classList.add('light-box');
        todoListBoxRef.style.color='black'
        todoListBoxRef.style.fontFamily = 'cursive'
        todoInputRef.classList.add('todo-light-input')
    }
   
})


