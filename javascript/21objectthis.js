// let firstName = "Michal";
// let lastName = "Peter";

// let sayHi = {
//     firstName:'Zoe',
//     lastName:'Lisa',
//     greet:function(){
//         return `Say Hi To ${firstName} ${lastName}`;
//     }
// }

//console.log(sayHi.greet())
//Say Hi To Michal Peter

let firstName = "Michal";
let lastName = "Peter";

let sayHi = {
    firstName:'Zoe',
    lastName:'Lisa',
    greet:function(){
        return `Say Hi To ${this.firstName} ${this.lastName}`;
    }
}

console.log(sayHi.greet())
//Say Hi To Zoe Lisa