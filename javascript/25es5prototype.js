function human(name,city){
    this.name = name;
    this.city = city;
}

function robot(name){
    this.name = name;
    this.age = 10;
    this.hands = 2
}

human.prototype = new robot()
robot {name: undefined, age: 10, hands: 2}

var Anand = new human('Anand','Mumbai')
Anand
human {name: 'Anand', city: 'Mumbai'}
Anand.age
10
Anand.hands
2