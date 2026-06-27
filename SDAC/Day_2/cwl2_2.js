class Emp{
    name= "Karan"
    salary= 13000
    id= 21

    displayInfo(){
        console.log("name: "+ this. name+", salary: " + this.salary );
    }
};
const emp1 = new Emp();
console.log(emp1.name);
emp1.displayInfo();
