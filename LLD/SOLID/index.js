
const empRoles = ['Fresher','Senior']

function sendAccessory(){
    return 'Accessory '
}

function sendChocolate(){
    return 'chocolate '
}

function sendMobile(){
    return 'mobile'
}

function sendCommonKit(){

    function sendLaptop(){
        return 'Windows Laptop'
    }
   function sendBook(){
        return 'Book added'
    }

    function sendGoodies(){
        return 'Goodies'
    }

    const sendingStuff =[sendLaptop,sendBook,sendGoodies]

    let rolePresentFlag = false
    for(let i =0 ;i<arguments.length ;i++){
    
      if(typeof arguments[i]==='string'){
        for(let j=0 ;j<empRoles.length;j++){
            if(empRoles[j]===arguments[i]){
                rolePresentFlag = true
               break
            }
        }
        if(!rolePresentFlag){
           return 'Role Missing' 
        }
      }
    else{
        sendingStuff.push(arguments[i])
    }

}
return sendingStuff




}

class Employee{
    constructor(name,lastName,id,role,developer){
        this.name = name;
        this.lastName = lastName;
        this.id = id;
        this.role=role;
        this.developer =developer;
   
    }

    sendJoiningKit(){    
      
        return sendCommonKit(this.role)
    }
}



class SeniorEmployee extends Employee{

    sendJoiningKit(){
        return sendCommonKit(this.role,sendAccessory)
    }

}


class HR extends SeniorEmployee{
    sendJoiningKit(){
        return sendCommonKit(this.role,sendAccessory,sendChocolate)
    }
}

class Manger extends SeniorEmployee{
    sendJoiningKit(){
        return sendCommonKit(this.role,sendAccessory,sendMobile)
    }
}





// const fresherEmp1 = new Employee('Akash','h',12,'Fresher','frontend')
// const fresherEmp2 = new Employee('Akash','h',12,'','frontend')//handle this one
const seniorEmp1 = new SeniorEmployee('Abhi','ram',21,'Senior','full stack')

empRoles.push('HR')
const HR1 = new HR('Abhi','ram',21,'HR','full stack')

empRoles.push('Manager')
const Manager = new Manger('Abhi','ram',21,'Manager','full stack')


console.log(HR1.sendJoiningKit())
console.log('``````````````')
// console.log(fresherEmp2.sendJoiningKit().sendGoodies())
// console.log(seniorEmp1.sendJoiningKit(),seniorEmp1)
