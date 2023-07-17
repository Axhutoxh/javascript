const toogleRef = document.querySelector('input')
const sliderRef = document.querySelector('.switch .slider')
const bodyRef = document.querySelector('body')
const headerRef = document.querySelector('header')
const createTaskBtn = document.querySelector('.row .col .btn')
const navBoxRef = document.querySelector('.row .nav-box')
const dialogBoxRef = document.querySelector('.dialog-box ')
const taskDataBoxRef = document.querySelector('.task-data-form')
const taskTitleRef = document.querySelector('.task-title-section .input-task-field')
const priorityRef =document.querySelector('.select-priorityTask-section .row .select-priority-field')
const priporityColorRef = document.querySelector('.select-priorityTask-section .row .priority-Color')
const taskFormRef = document.querySelector('.task-data-form')
const taskDescription =document.querySelector('.description-area')
const statusColRef = document.querySelectorAll('.status-box .col') 
const tasksBoxRef = document.querySelector('.status-box .col .column .tasks-box')
const trashTasksBoxRef =document.querySelector('.trash-tasks-box')


const bgLight="#ffffff";
const bgLight2="#f2f2f2";
const bgDark="#212121";
const bgDark2="#383838";
const bgDarkSideBar="#292929";
const defaultToogle = "#ccc"



const task={
    id:1,
    title:'',
    priority:'',
    description:'',
}



let tasks;
let trashTask;

function initializeLocaleStorage() {
    tasks = getTaskFromLocaleStorage() ;
    if(!tasks){
        tasks=[

        ]
    }
    trashTask = getTrashTaskFromLocaleStorage()
    if(!trashTask){
        trashTask=[

        ]
    }
    renderTaskList(tasks)
    renderTrashTaskList(trashTask)

}

initializeLocaleStorage()


function getTaskTicket(task){
    return `                
    <div class="row space-between ">
        <div class="task-id" task-id="${task.id}">${task.id} </div>
        <div class="task-priority" task-color="p${task.priority}"></div>
    </div>
    <div class="task-title mt-sm">${task.title}</div>
    <hr>
    <textarea class="task-description" disabled cursor="disable">${task.description} </textarea>
    <div class="row space-between mt-lg">
        <i class="material-icons md-10 delete">delete</i>
        <i class="material-icons md-10 lock" >lock</i>
    </div>
`
}

function getTrashTaskTicket(task){
    return `                
    <div class="row space-between btn">
        <div class="task-id" task-id="${task.id}">${task.id} </div>
        <div class="task-priority" task-color="p${task.priority}"></div>
    </div>
    <div class="task-title mt-sm">${task.title}</div>
    <hr>
    <textarea class="task-description" disabled cursor="disable">${task.description} </textarea>
    <div class="row  mt-lg">
        <div style="
        font-size: 14px;
        font-weight: 600;
        font-family: monospace;
        color: #2f2a2a;
    "> Double Click Insert Item Back To Progress coloumn <div>
    </div>
`
}

function clearList(){
    tasksBoxRef.innerHTML=''
}

function clearTrashList(){
    trashTasksBoxRef.innerHTML=''
}


function renderTaskList(taskList){
    clearList()
    taskList.forEach((taskData)=>{
        const taskDiv = document.createElement('div') 
        taskDiv.classList.add('task-box')
        taskDiv.classList.add('bg-light')
        taskDiv.innerHTML = getTaskTicket(taskData)
        tasksBoxRef.appendChild(taskDiv)
    })
}

function renderTrashTaskList(taskList){

    clearTrashList()
    taskList.forEach((taskData)=>{
        const taskDiv = document.createElement('div') 
        taskDiv.classList.add('task-box')
        taskDiv.classList.add('bg-light')
        taskDiv.innerHTML = getTrashTaskTicket(taskData)
        trashTasksBoxRef.appendChild(taskDiv)
    })

}

function updateTaskInLocalStorage(taskList){
    localStorage.setItem('tasks',JSON.stringify(taskList))
}

function updateTrashTaskList(taskList){
    localStorage.setItem('trashTasks',JSON.stringify(taskList))
}

function getTaskFromLocaleStorage(){
    return JSON.parse(localStorage.getItem('tasks'))
}
function getTrashTaskFromLocaleStorage(){
    return JSON.parse(localStorage.getItem('trashTasks'))
}


function addIcon(size,name){
    const icon= document.createElement('i')
    icon.classList.add('material-icons',`md-${size}`)
    icon.innerText=name
    icon.style.color = `${name.includes('light')?'white':'black'}`
    icon.style.float = `${name.includes('dark')?'right':'left'}`
    icon.style.margin = '3px 6px 0px'
    return icon
}


function removeIcon(parentElement){
    if(parentElement.querySelector('i')){
    const oldIcon =parentElement.querySelector('i')
    oldIcon.remove()
    }
}


function appendIconToSlider(parentElement,iconsData){
    removeIcon(parentElement)
    parentElement.appendChild(addIcon(iconsData.size,iconsData.name))
}

function onBackgroundToogleOn(){
    sliderRef.style.background=bgDark2;
    bodyRef.classList.remove('bg-light')
    createTaskBtn.classList.remove('btn-primary-dark')
    navBoxRef.classList.remove('nav-bg-dark')
    priporityColorRef.classList.remove('border-dark')
    priorityRef.classList.remove('border-dark')
    dialogBoxRef.classList.remove('bg-light')
    taskDataBoxRef.classList.remove('bg-light')
    removeBackground(statusColRef,'nav-bg-dark')

    bodyRef.classList.add('bg-dark')
    createTaskBtn.classList.add('btn-primary-light')
    navBoxRef.classList.add('nav-bg-light')
    priporityColorRef.classList.add('border-light')
    priorityRef.classList.add('border-light')
    dialogBoxRef.classList.add('bg-dark')
    taskDataBoxRef.classList.add('bg-dark')
    addBackground(statusColRef,'nav-bg-light')

    appendIconToSlider(sliderRef,iconsData={size:16,name:'light_mode'})

}


function onBackgroundToogleOff(){
    sliderRef.style.background=defaultToogle;
    bodyRef.classList.remove('bg-dark')
    createTaskBtn.classList.remove('btn-primary-light')
    navBoxRef.classList.remove('nav-bg-light')
    priporityColorRef.classList.remove('border-light')
    priorityRef.classList.remove('border-light')
    dialogBoxRef.classList.remove('bg-dark')
    taskDataBoxRef.classList.remove('bg-dark')
    removeBackground(statusColRef,'nav-bg-light')

    bodyRef.classList.add('bg-light')
    createTaskBtn.classList.add('btn-primary-dark')
    navBoxRef.classList.add('nav-bg-dark')
    priporityColorRef.classList.add('border-dark')
    priorityRef.classList.add('border-dark')
    dialogBoxRef.classList.add('bg-light')
    taskDataBoxRef.classList.add('bg-light')
    addBackground(statusColRef,'nav-bg-dark')

    appendIconToSlider(sliderRef,iconsData={size:16,name:'dark_mode'})
}

function removeBackground(parentRef,className){
    parentRef.forEach((childRef)=>{
    childRef.classList.remove(className)
    })
}


function addBackground(parentRef,className){
    parentRef.forEach((childRef)=>{
    childRef.classList.add(className)
})
}

function addPriorityColor(parentElement,colorCode){
    parentElement.classList.add('priority-Color')
    parentElement.classList.add(toogleRef.checked?'border-light':'border-dark')
    parentElement.classList.add(`p${colorCode}`)
}


function getFormData(){
    task.id='KB' + (new Date()).getTime()
    task.title=taskTitleRef.value
    task.priority=priorityRef.value,
    task.description=taskDescription.value

    return task
}


function clearCreateTaskValue(){
    taskTitleRef.value=''
    priorityRef.value =4
    taskDescription.value=''
    addPriorityColor(priporityColorRef,4)
    hideDialogBox()
}

function showDialogBox(){
    dialogBoxRef.classList.remove('hide')
    taskDataBoxRef.classList.remove('hide')
}

function hideDialogBox(){
    dialogBoxRef.classList.add('hide')
    taskDataBoxRef.classList.add('hide')
}

function moveTaskFromTrash(taskId){
    const findTaskIndex = trashTask.findIndex(task=>task.id===taskId)
    const moveTaskElement = trashTask.splice(findTaskIndex,1)
    tasks =[...moveTaskElement,...tasks]

    updateTrashTaskList(trashTask)
    updateTaskInLocalStorage(tasks)

    renderTaskList(tasks)
    renderTrashTaskList(trashTask)
}


function handleOnTaskPriority(parentRef){
    const taskId = parentRef.querySelector('.row .task-id').getAttribute('task-id')
    const currentPriorityRef =parentRef.querySelector('.row .task-priority')
    let currentPriority = +(currentPriorityRef.getAttribute('task-color').split('p')[1])
    const lockStatus = parentRef.querySelector('.task-description').hasAttribute('disabled')

    if(!lockStatus){
        currentPriority = (currentPriority)%4 +1
        currentPriorityRef.setAttribute('task-color',`p${currentPriority}`)

        const impactedTask = tasks.find(task=>task.id === taskId)
        impactedTask.priority = currentPriority
        updateTaskInLocalStorage(tasks)
        return
    }


}

function handleOnDelete(parentRef){
    const taskId = parentRef.querySelector('.row .task-id').getAttribute('task-id')
    const findTaskIndex = tasks.findIndex(task=>task.id === taskId)
    const deletedElement = (tasks.splice(findTaskIndex,1))

    trashTask=[...trashTask,...deletedElement]

    // updateTrashTaskList(trashTask)
    updateTaskInLocalStorage(tasks)

    renderTaskList(tasks)
    renderTrashTaskList(trashTask)
}

function handleOnLock(elementRef,parentRef){
    elementRef.classList.remove('unlock')
    elementRef.innerText ='lock'
    elementRef.classList.add('lock')

    const textareaRef =parentRef.querySelector('textarea')
    textareaRef.setAttribute('cursor','disable')
    textareaRef.setAttribute('disabled',true)

}

function handleOnUnlock(elementRef,parentRef){
    elementRef.classList.remove('lock')
    elementRef.innerText ='lock_open'
    elementRef.classList.add('unlock')

    const textareaRef =parentRef.querySelector('textarea')
    textareaRef.setAttribute('cursor','inherit')
    textareaRef.removeAttribute('disabled')

    textareaRef.addEventListener('blur',(e)=>{
      
        const currentTaskContainerRef = e.target.parentElement.querySelector('.row .task-id')
        const currentTaskId = currentTaskContainerRef.getAttribute('task-id')
        updateTaskDescription(currentTaskId,e.target.value)
    })
}


function updateTaskDescription(id,updatedDescription){
    const selectTask = tasks.find((task)=>task.id===id)
    selectTask.description = updatedDescription
    updateTaskInLocalStorage(tasks)

}

tasksBoxRef.addEventListener('click',(e)=>{
    const parentRef = e.target.parentElement.parentElement

    if(e.target.classList.contains('lock')){
        handleOnUnlock(e.target,parentRef)
        return
    }
    if(e.target.classList.contains('unlock')){
        handleOnLock(e.target,parentRef)
        return
    }
    if(e.target.classList.contains('delete')){
        handleOnDelete(parentRef)
        return
    }
    if(e.target.classList.contains('task-priority')){
        handleOnTaskPriority(parentRef)
        return
    }
   
    
})

trashTasksBoxRef.addEventListener('dblclick',(e)=>{
    const currentTask=(e.target.closest('.task-box'))
    const currentTaskId =currentTask.querySelector('.row .task-id').getAttribute('task-id')
    moveTaskFromTrash(currentTaskId)
})


navBoxRef.addEventListener('dblclick',(e)=>{
    navBoxRef.classList.add('hide')
    
   
})

toogleRef.addEventListener('click',(e)=>{
    if(e.target.checked){
        onBackgroundToogleOn()
    }
    else{
        onBackgroundToogleOff()
    }
    
})


createTaskBtn.addEventListener('click',(e)=>{
    if(dialogBoxRef.classList.contains('hide')){
        showDialogBox()
        return
    }
    hideDialogBox()
})

priorityRef.addEventListener('change',(e)=>{
    priporityColorRef.classList.remove(...priporityColorRef.classList)
    addPriorityColor(priporityColorRef,e.target.value)
})


taskFormRef.addEventListener('submit',(e)=>{
    e.preventDefault()
    const formData = getFormData()
    
    if(formData.title&&formData.description){
        tasks.push({...formData})
        renderTaskList(tasks)
        updateTaskInLocalStorage(tasks)
        clearCreateTaskValue()
    }else
   
 return true
})



