//Declarando
class User {

    //constructor
    constructor(name, age, country){
        this.name = name;
        this.age = age
        this.country = country
    }

    //metodos
    speaks(){
        return "Hello";
    }
    greetings(){
        return `${this.speaks()} ${this.name}`;
    };
    get uAge() {
        return this.age;
    }
    set uAge(u) {
        this.age = u;
    }
}

//instancia
const newUser = new User("Oscar", 35, "Mexico");
newUser.age = 40
console.log(newUser.uAge)

