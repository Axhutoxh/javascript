
/// fetch Employeee data using promises


let employeeInfo =[];
let selectedEmployee ={}
const employeeDetails = new Promise((resolve, reject) => {
    const data = fetch('https://jsonplaceholder.typicode.com/users')
    if(data){
        resolve(data)
        return
    }
    reject('Error in fetching employee details')
})



employeeDetails
.then((data)=>{return data.json()})
.then((employeeData)=>{
  
    employeeInfo =employeeData.map((data)=>{
        return {
            id:data.id,
            firstName:data.name.split(' ')[0],
            lastName:data.name.split(' ')[1]
        }
    })

    createEmployeeDataList(employeeInfo)

    })

.catch((err)=>{console.log(err)})



/// class Selector refs

const employeeListRef = document.querySelector('.employee-list')
const searchRef = document.querySelector('.searchText')
const addEmpRef=document.querySelector('.add-new-emp')
const popUpRef = document.querySelector('.pop-up-window')
const empDetailRef = document.querySelector('.emp-data')
const iconRef= document.querySelector('.emp-func')
const deleteRef= document.querySelector('.emp-func .delete')
const editRef = document.querySelector('.emp-func .edit')

const firstNameRef = document.querySelector('.firstname')
const lastNameRef = document.querySelector('.lastname')
const submitBtnRef = document.querySelector('.btn')


function clearEmployeeDataList(){
    employeeListRef.innerHTML =''
}



function createEmployeeDataList(data){
    const employeeList = document.createDocumentFragment()
    clearEmployeeDataList()
    data.forEach((employee)=>{
        const div = document.createElement('span')
        div.classList.add('employee-name','border-1','border-radius-12','pointer-cursor')
        div.setAttribute('id',employee.id)
        div.innerText = employee.firstName + ' '+employee.lastName
        employeeList.appendChild(div)
       
    })
   
    employeeListRef.appendChild(employeeList)
   
}





function searchDebounce(employeeList,delay){
    let timer;
    return function(searchText){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            employeeList(searchText)
        },delay)
    }
}


function filteredDataList(searchText){
    let filteredData = employeeInfo.filter((employee)=>{
        const name =employee.firstName + employee.lastName
        if(name.toLowerCase().includes(searchText.toLowerCase())){
            return employee
        }
    })
    createEmployeeDataList(filteredData)
    
}



const searchBounceFn = searchDebounce(filteredDataList,1000)
    searchRef.addEventListener('keyup',(e)=>{
        searchBounceFn(e.target.value)
})



addEmpRef.addEventListener('click',(e)=>{

    if(popUpRef.classList.contains('hide')){
        popUpRef.classList.remove('hide')
    }
    else{
        popUpRef.classList.add('hide')
    }

})


submitBtnRef.addEventListener('click',(e)=>{
    if(submitBtnRef.innerText==='Updated'){
        const editableEmployee= employeeInfo.find((employee)=>{
            if(employee.id===selectedEmployee.id){
                return employee
            }
        })
        editableEmployee.firstName = firstNameRef.value
        editableEmployee.lastName = lastNameRef.value
        submitBtnRef.innerText ='submit'
        employeeInfo = employeeInfo.filter((emp)=>{
            if(emp.id !==selectedEmployee.id){
                return emp
            }
        })
        employeeInfo.push(editableEmployee)
        createEmployeeDataList(employeeInfo)
        showSelectedEmpInfo(editableEmployee)
        firstNameRef.value=''
        lastNameRef.value=''
        popUpRef.classList.add('hide')

    return 
    }
    
    const employee = {
        id:employeeInfo.length+1,
        firstName:firstNameRef.value,
        lastName:lastNameRef.value
    }
    firstNameRef.value=''
    lastNameRef.value=''
    employeeInfo.push(employee)
    createEmployeeDataList(employeeInfo)
  
    popUpRef.classList.add('hide')

})


function empDataDiv(id,fname,lname) {
    return `<div class="emp-data border-1 border-radius-12">
    <div>${id}</div>
    <div>${fname}</div>
    <div>${lname}</div>
</div>`
}

function showSelectedEmpInfo(data){

    const empInfoDiv= empDataDiv(data.id,data.firstName,data.lastName)


    empDetailRef.innerHTML=empInfoDiv
    iconRef.classList.remove('hide')
   

}



employeeListRef.addEventListener('click',(e)=>{

if(e.target.tagName === 'SPAN'){
 const selectedEmpInfo = employeeInfo.filter((emp)=>{
     if(emp.id === Number(e.target.id)) 
     {
         return emp
        }
     })

     showSelectedEmpInfo(...selectedEmpInfo)
     selectedEmployee = selectedEmpInfo[0]
     empDetailRef.classList.remove('hide')
    }
})


deleteRef.addEventListener('click',(e)=>{
    employeeInfo = employeeInfo.filter((emp)=>{
        if(emp.id !==selectedEmployee.id){
            return emp
        }
    })

    empDetailRef.classList.add('hide')
    iconRef.classList.add('hide')

    createEmployeeDataList(employeeInfo)
    console.log(employeeInfo)
})

editRef.addEventListener('click',(e)=>{
    popUpRef.classList.remove('hide')
    firstNameRef.value = selectedEmployee.firstName
    lastNameRef.value=selectedEmployee.lastName
    submitBtnRef.innerText='Updated'

})



