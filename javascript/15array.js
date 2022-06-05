Array is collection of homogenious as well as hetrigenious datatypes

let a = ["Hii","Hello","Test","Code"] >> Array of String
let b = [4,56,32,45,89,12] > Array of Number
let c = [true,true,false,true] > Array of Boolean
let d = ["hi","xb",25,4634,true,"xcb",false]
typeof(a)
'object'

var city = ['Delhi','Mumbai','London','Amsterdam']
undefined
city[0]
'Delhi'
city.length
4
city.push('Venice')
5
city
(5) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice']
city.push('Boston')
6
city
(6) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice', 'Boston']
city.pop()
'Boston'
city
(5) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice']
city.pop(2)
'Venice'
city
(4) ['Delhi', 'Mumbai', 'London', 'Amsterdam']
city.pop(200000000)
'Amsterdam'
var city = ['Delhi','Mumbai','London','Amsterdam']
undefined
city.shift()
'Delhi'
city.unshift('Dubai')
4
city
(4) ['Dubai', 'Mumbai', 'London', 'Amsterdam']

push > add value in the end of array
pop > remove the last value of array
shift > remove the first value of Array
unshift > add first value to array

var city = ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice', 'Boston']

city.slice(1)
(5) ['Mumbai', 'London', 'Amsterdam', 'Venice', 'Boston']
city.slice(2,5)
(3) ['London', 'Amsterdam', 'Venice']
city
(6) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice', 'Boston']

var city = ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice', 'Boston']
city.splice(startIndex,delete)

city.splice(3,0,'Nice','Dubai')
[]
city
(8) ['Delhi', 'Mumbai', 'London', 'Nice', 'Dubai', 'Amsterdam', 'Venice', 'Boston']
city.splice(4,1)
['Dubai']
city
(7) ['Delhi', 'Mumbai', 'London', 'Nice', 'Amsterdam', 'Venice', 'Boston']
city.splice(2,1,'Helsinki')
['London']
city
(7) ['Delhi', 'Mumbai', 'Helsinki', 'Nice', 'Amsterdam', 'Venice', 'Boston']

var city = ['Delhi', 'Mumbai', 'London', 'Nice', 'Amsterdam', 'Venice', 'Boston']
undefined
city.indexOf('Nice')
3
city.indexOf('Venice')
5
city.indexOf('Helsinki')
-1
city.indexOf('Indore')
-1

var c = ['a','b','c',5]
var d = [1,2,'d','e']
undefined
c+d
'a,b,c,51,2,d,e'
c.concat(d)
['a', 'b', 'c', 5, 1, 2, 'd', 'e']

var x = "Hii"
var y = [1,2,3]
Array.isArray(x)
false
Array.isArray(y)
true

var city = ['Delhi', 'Mumbai',['Red',['BMW','Audi','Merc'],'Yellow','Orange'], 'London', 'Nice',]
city[0]
'Delhi'
city[2]
(4) ['Red', Array(3), 'Yellow', 'Orange']
city[2][0]
'Red'
city[2][1]
(3) ['BMW', 'Audi', 'Merc']
city[2][1][0]
'BMW'
city[2][1][1]
'Audi'