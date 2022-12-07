function newUser (name, age, country) {
    var name = name || "Luis";
    var age = age || 44;
    var country = country || "Mexico";
    console.log(name, age, country);
}
newUser();

function newUser2 (name = "Pedro" , age = 25, country = "Colombia") {
    var name = name ;
    var age = age ;
    var country = country ;
    console.log(name, age, country);
}
newUser2();

