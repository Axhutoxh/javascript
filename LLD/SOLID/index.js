
// const empRoles = ['Fresher','Senior']

// function sendAccessory(){
//     return 'Accessory '
// }

// function sendChocolate(){
//     return 'chocolate '
// }

// function sendMobile(){
//     return 'mobile'
// }

// function sendCommonKit(){

//     function sendLaptop(){
//         return 'Windows Laptop'
//     }
//    function sendBook(){
//         return 'Book added'
//     }

//     function sendGoodies(){
//         return 'Goodies'
//     }

//     const sendingStuff =[sendLaptop,sendBook,sendGoodies]

//     let rolePresentFlag = false
//     for(let i =0 ;i<arguments.length ;i++){
    
//       if(typeof arguments[i]==='string'){
//         for(let j=0 ;j<empRoles.length;j++){
//             if(empRoles[j]===arguments[i]){
//                 rolePresentFlag = true
//                break
//             }
//         }
//         if(!rolePresentFlag){
//            return 'Role Missing' 
//         }
//       }
//     else{
//         sendingStuff.push(arguments[i])
//     }

// }
// return sendingStuff




// }

// class Employee{
//     constructor(name,lastName,id,role,developer){
//         this.name = name;
//         this.lastName = lastName;
//         this.id = id;
//         this.role=role;
//         this.developer =developer;
   
//     }

//     sendJoiningKit(){    
      
//         return sendCommonKit(this.role)
//     }
// }


// class SeniorEmp extends Employee{

//     sendJoiningKit(){    
 
//         return sendCommonKit(this.role,sendAccessory)
//     }
// }


// class Manger extends SeniorEmp{

//     sendJoiningKit(){    
 
//         return sendCommonKit(this.role,sendAccessory,sendMobile)
//     }
// }

// class Hr extends SeniorEmp{

//     sendJoiningKit(){    
 
//         return sendCommonKit(this.role,sendAccessory,sendChocolate)
//     }
// }








// empRoles.push('manager')
// const manager = new Manger('Akash','h',121,'manger','fullstack')
// console.log(manager,manager.sendJoiningKit())
// empRoles.push('hr')
// const hr = new Hr('Akash','h',121,'hr','fullstack')

// console.log(hr,hr.sendJoiningKit())

const empRoles = ['Fresher','Senior']

class Employee{
    constructor(name,lastName,id,role,developer){
        this.name = name;
        this.lastName = lastName;
        this.id = id;
        this.role=role;
        this.developer =developer;
        this.sendLaptop = ()=>{return 'Send latop'}
   
    }


}

class SeniorEmp extends Employee{
    constructor(name,lastName,id,role,developer){
        super(name,lastName,id,role,developer)
        this.sendAccessory = () =>{return 'send accessory'}
    }
}

class Manager extends SeniorEmp{
    constructor(name,lastName,id,role,developer){
        super(name,lastName,id,role,developer)
        this.sendMobile = () =>{return 'send mobile'}
    }
}

const manger = new Manager('Abhi','ch',123,'manager','web')
const senior = new SeniorEmp('Abhi','ch',13,'fullstack','ios')

console.log(manger,senior)