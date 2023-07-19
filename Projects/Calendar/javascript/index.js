const calendarContainerRef = document.querySelector('.calendar-box')
const prevBtnRef  =document.querySelector('.controls .prev');
const nextBtnRef =document.querySelector('.controls .next');
const monthRef =document.querySelector('.controls .month');
const yearRef =document.querySelector('.controls .year');
const datesRef = document.querySelector('.dates ')
const todayBtnRef = document.querySelector('.emoji-box .todayBtn')
const emojiViewRef = document.querySelector('.emoji-box .emoji-view')
const selectedDateRef = document.querySelector('.emoji-box .selected-date')

const MONTHNAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

const todaysDate = new Date();


const Emoji=[
    '😪',
    '😢',
    '😫',
    '😑',
    '😌',
    '🍻',
    '🤩'

]

let selectedDate = []

if(!selectedDate.length){
    selectedDate = JSON.parse(localStorage.getItem('selectedDate'))
    renderSelectDate(selectedDate)
}


function renderSelectDate(dateList){
    if(dateList){
    const dateFragment =document.createDocumentFragment()
    selectedDateRef.innerHTML=''
    for (let i = 0; i < dateList.length; i++){
        const createDiv = document.createElement('li')
        createDiv.innerText = dateList[i]
        dateFragment.appendChild(createDiv)
    }
    selectedDateRef.appendChild(dateFragment)
}
}

function generateMonthsOption(){
    const monthOptionsFragment = document.createDocumentFragment();
    MONTHNAMES.forEach((monthName,idx)=>{
        const createOption = document.createElement('option');
        createOption.setAttribute('month-id',idx)
        createOption.value = idx
        createOption.innerText=monthName
        createOption.selected = todaysDate.getMonth()===idx
        monthOptionsFragment.appendChild(createOption)
        }
    )
    monthRef.appendChild(monthOptionsFragment)
}


function generateYearsOption(){
    const yearOptionsFragment = document.createDocumentFragment();
    const currentYear =  todaysDate.getFullYear()
    const yearDifference = 10

    for(let i=currentYear-yearDifference;i<=currentYear+yearDifference;i++){
        const createOption = document.createElement('option');
        createOption.setAttribute('month-id',i)
        createOption.value = i
        createOption.innerText=i
        createOption.selected = todaysDate.getFullYear()===i
        yearOptionsFragment.appendChild(createOption)
    }
    yearRef.appendChild(yearOptionsFragment)
}

function generateDaysOption(year,month){
    const startDate = new Date(year,month,1).getDay()
    const todaysDayInMonth = new Date(year,month+1,0).getDate()
    datesRef.innerHTML = ''
    const dateFragment = document.createDocumentFragment()

  
    for(let i=0;i<startDate;i++){
        const createDateSpan = document.createElement('span')
        dateFragment.appendChild(createDateSpan);
    }

    for(let i=0;i<todaysDayInMonth;i++){
        const createDateSpan = document.createElement('span')
        createDateSpan.classList.add('date',`date-${i+1}`)
        createDateSpan.setAttribute('date-id',i+1)
        createDateSpan.innerText=i+1
        if(todaysDate.getDate()==i+1 && todaysDate.getFullYear()==yearRef.value &&todaysDate.getMonth()==monthRef.value){
            createDateSpan.classList.add('selected')
            const emoji = document.createElement('span')
            emojiViewRef.innerText = Emoji[((startDate+1)+i)%7]
            
        }
        if(selectedDate.includes(`${i+1}/${monthRef.value}/${yearRef.value}`)){
            createDateSpan.setAttribute('selected-border',1)
        }
        dateFragment.appendChild(createDateSpan);
    }
    datesRef.appendChild(dateFragment)
}


generateMonthsOption()
generateYearsOption()
generateDaysOption(Number(todaysDate.getFullYear()),Number(todaysDate.getMonth()))


monthRef.addEventListener('change',(e)=>{
    const selectedYear = yearRef.value;
    const selectedMonth =e.target.value
    generateDaysOption(selectedYear,selectedMonth)
})


yearRef.addEventListener('change',(e)=>{
    const selectedYear = e.target.value;
    const selectedMonth =monthRef.value

    generateDaysOption(selectedYear,selectedMonth)
})

prevBtnRef.addEventListener('click',()=>{
    let selectedMonth  = +monthRef.value
    let selectedYear = +yearRef.value

    if(selectedMonth>0){
        monthRef.value = selectedMonth-1
    }
    else{
        yearRef.value =selectedYear-1
        monthRef.value =11 
    }

generateDaysOption(Number(yearRef.value),Number(monthRef.value))
})

nextBtnRef.addEventListener('click',()=>{

    let selectedMonth  = +monthRef.value
    let selectedYear = +yearRef.value
    if(selectedMonth>=11){
        yearRef.value =selectedYear+1
        monthRef.value = 0
   
    }
    else{
        monthRef.value =selectedMonth+1 
    }

generateDaysOption(Number(yearRef.value),Number(monthRef.value))
})


todayBtnRef.addEventListener('click',()=>{
    yearRef.value =todaysDate.getFullYear()
    monthRef.value=todaysDate.getMonth()
    generateDaysOption(Number(yearRef.value),Number(monthRef.value))
})


datesRef.addEventListener('click',(e)=>{
    
    if(selectedDate.includes(`${e.target.innerText}/${monthRef.value}/${yearRef.value}`)){
        selectedDate.splice(selectedDate.indexOf(`${e.target.innerText}/${monthRef.value}/${yearRef.value}`),1)
        e.target.removeAttribute('selected-border')
    }
    else{
        selectedDate.push(`${e.target.innerText}/${monthRef.value}/${yearRef.value}`)
        e.target.setAttribute('selected-border',1)
    }

    localStorage.setItem('selectedDate',JSON.stringify(selectedDate))
    renderSelectDate(selectedDate)
})
