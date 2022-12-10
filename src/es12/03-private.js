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
        return "Hola";
    }
    greetings(){
        return `${this.speaks()} ${this.name}`;
    };
    get #uAge() {
        return this.age;
    }
    set #uAge(u) {
        this.age = u;
    }
}

//instancia
const newUser = new User("Oscar", 35, "Mexico");
newUser.uAge = 30;
console.log(newUser.uAge());
