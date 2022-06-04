var a = 10
var b = 20
a+b
30

function add(a,b){
    return a+b
}

add(1,2)

function add(a,b){
    return a+b
}

add(1,2)
3
add(7,9)
16
add('Hii','Test')
'HiiTest'

function isEven(userInput){
    let out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(5)
'Number 5 is odd'
isEven(52)
'Number 52 is even'

/////Arrow Function//// >> es6
function add(a,b){
    return a+b
}

let addfun = (a,b) => {return a+b}

addfun(4,8)
12


function add(a,b){
    return a,b
}
add(1,2)
2

function add(a,b){
    return b,a
}
add(1,2)
1

function add(a,b){
    var out = [a,b]
    return out
}
add(2,5)
(2) [2, 5]

/////pending >>> rest spread