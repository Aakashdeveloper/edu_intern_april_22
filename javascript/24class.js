// function language(name,country){
//     this.name = name;
//     this.country = country;
//     this.greet = () => {return `Say Hi to ${name}`}
// }

class language1{
    //all declaration
    constructor(name,country){
        this.name = name;
        this.country = country
    }

    greet=()=> {return `Say Hi to ${name}`}
}

var Hindi = new language1('Hindi','India')
Hindi
language1 {name: 'Hindi', country: 'India', greet: ƒ}