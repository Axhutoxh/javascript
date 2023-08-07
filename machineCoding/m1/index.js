
/// fetch Employeee data using promises
let employeeInfo =[];
const employeeDetails = new Promise((resolve, reject) => {
    const data = fetch('employeeData.json')
    if(data){
        resolve(data)
        return
    }
    reject('Error in fetching employee details')
})



employeeDetails
.then((data)=>{return data.json()})
.then((employeeData)=>{
  
    employeeInfo =employeeData
    createEmployeeDataList(employeeInfo)

    })

.catch((err)=>{console.log(err)})



/// class Selector refs

const employeeListRef = document.querySelector('.employee-list')
const searchRef = document.querySelector('.searchText')
const addEmpRef=document.querySelector('.add-new-emp')
const popUpRef = document.querySelector('.pop-up-window')

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
        const div = document.createElement('div')
        div.classList.add('employee-name','border-1','border-radius-12','pointer-cursor')
        div.setAttribute('empId',employee.id)
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












