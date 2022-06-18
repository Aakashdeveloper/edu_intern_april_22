let calc = {
    sum: function(a,b) {return a+b},
    sub: (a,b) => {return a-b}
}

calc.sum(2,5)
7
calc.sub(4,2)
2

/////////
function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi to ${name}`}
}

var Hindi = new language('Hindi','India')
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say Hi to Hindi'

var English = new language('English','United Kingdom')
English
language {name: 'English', country: 'United Kingdom', greet: ƒ}