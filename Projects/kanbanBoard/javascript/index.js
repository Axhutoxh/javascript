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
const trashTasksBoxRef =document.querySelector('.trash-task-box')


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
    renderTaskList(tasks)
    renderTrashTaskList(task)

}

initializeLocaleStorage()


function getTaskTicket(task){
    return `                
    <div class="row space-between ">
        <div class="task-id">${task.id} </div>
        <div class="task-priority" task-color="p${task.priority}"></div>
    </div>
    <div class="task-title mt-sm">${task.title}</div>
    <hr>
    <div class="task-description">${task.description} </div>
    <div class="row space-between mt-lg">
        <i class="material-icons md-10 delete" >delete</i>
        <i class="material-icons md-10 lock" >lock</i>

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
    if(taskList.length)
    {
    clearTrashList()
    taskList.forEach((taskData)=>{
        const taskDiv = document.createElement('div') 
        taskDiv.classList.add('task-box')
        taskDiv.classList.add('bg-light')
        taskDiv.innerHTML = getTaskTicket(taskData)
        trashTasksBoxRef.appendChild(taskDiv)
    })
}
}

function storeTaskToLocalStorage(taskList){
    localStorage.setItem('tasks',JSON.stringify(taskList))
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
        storeTaskToLocalStorage(tasks)
        clearCreateTaskValue()
    }else
   
 return true
})

