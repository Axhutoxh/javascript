const openModalButtonRef = document.querySelector('.quick-action .icon.add ')
const modalRef =document.querySelector('.modal')
const closeModalButtonRef = document.querySelector('.modal .right-section .close')
const textAreaRef = document.querySelector('.modal textarea')
const priorityBoxRef = document.querySelectorAll('.modal .right-section .priority-filter .box')


const tasks =[]

const newTask = {
    id:'',
    description:'',
    priority:''
}

function openModal(){
    modalRef.classList.remove('hide')
}

function closeModal(){
    modalRef.classList.add('hide')
}


openModalButtonRef.addEventListener('click',()=>{
    
    const isHodeClassApplied = [...modalRef.classList].includes('hide')

    isHodeClassApplied ? openModal() : closeModal()
})


closeModalButtonRef.addEventListener('click',()=>{
    closeModal()
})

textAreaRef.addEventListener('keyup',(e)=>{
    if(e.key == 'Shift'){
      
            const description = e.target.value;
            const priority = getSelectedClassPriority();
            tasks.push({
                id: tasks.length + 1,
                description: description,
                priority: priority
            });
            console.log(tasks);
            setFieldsToDefault();
            closeModal();
     
    }
})


function setFieldsToDefault(){
    textAreaRef.value=''
    removeSelectedClassFromBox()
    priorityBoxRef[priorityBoxRef.length-1].classList.add('selected')
}

function getSelectedClassPriority() {
    let priority = '';
    priorityBoxRef.forEach(function(singleBoxRef, idx) {
        if ([...singleBoxRef.classList].includes('selected')) {
            priority = `p${idx+1}`;
        }
    });
    return priority;
}


function removeSelectedClassFromBox(){
    priorityBoxRef.forEach((boxref)=>{
        boxref.classList.remove('selected')
    })
}


function addSelectedClassToBox(boxRef){
    boxRef.classList.add('selected')
}

console.log(priorityBoxRef)
priorityBoxRef.forEach((boxRef)=>{
    boxRef.addEventListener('click',(e)=>{
        console.log(e)
        removeSelectedClassFromBox()
        addSelectedClassToBox(boxRef)
    })
})


function createTicket(){
    
}