class Animal{
    constructor(name,age,food){
        this.name=name
        this.age=age
        this.food=food

    }
}
class Dog extends Animal{

    constructor(name,age,food){
        super(name,age,food)

    }
    dog_Goal(){
        console.log("Dog byte us",this.name)
    }
    cat_Goal(){
        console.log("meo meo ",this.age)
    }
}

const Dog1=new Dog("moti",2,"beef")
Dog1.cat_Goal()
console.log(Dog1)