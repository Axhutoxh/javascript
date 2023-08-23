
class Person2 {
    constructor(name, salary,id,gender){
        this.name = name;
        this.salary = salary;
        this.id = id;
        this.gender = gender;
    }
}


class PersonBuilder{
    constructor(name,gender){
        this.name = name;
        this.gender = gender;
        this.setSalary = function(salary){
            this.salary =salary;
            return this
        }
        this.setId  =function(id){
            this.id = id;
            return this
        }

        this.build =function(){
            return new Person2(this.name,this?.salary||'X',this.id,this.gender)
        }
    }
}


const person1 = new PersonBuilder('Ak','male').setSalary(1345).build()
const person2 = new PersonBuilder('Ak','male').setId(13).build()


