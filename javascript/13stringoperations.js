var city = "amsTErDam"
var city = "PAriS"

var city = "amsTErDam"
undefined
city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'

city.length
9
city[0]
'a'
city[1]
'm'
city.charAt(0)
'a'
city.charAt(1)
'm'
city.at(0)
'a'
city.at(1)
'm'

var city = "amsTErDam"

undefined
city.charAt(-1)
''
city.at(-1)
'm'
city.charAt(1)
'm'
city.at(1)
'm'

var city = "amsTErDam"
undefined
city.at(-2)
'a'
city.at(-3)
'D'

var a = "John"
var b = "john"
a==b
false
a.toLowerCase() == b.toLowerCase()
true

var city = "amsTErDam"
"Amsterdam"

var city = "amsTErDam"
undefined
city.slice(1)
'msTErDam'
city.slice(2)
'sTErDam'
city.slice(2,5)
'sTE'
city.slice(0,1)
'a'
city.slice(0,-1)
'amsTErDa'
city.slice(0,-2)
'amsTErD'
city.slice(2,-2)
'sTErD'

var city = "amsTErDam"
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'
var city = "PAriS"
undefined
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var a = " Nikita. "
undefined
a.length
9
a.trim()
'Nikita.'
var a = " Nikita . "
undefined
a.trim()
'Nikita .'

var a = "I am learning JavaScript"
a.replace('JavaScript','JS')
'I am learning JS'

var a = "JavaScript I am learning JavaScript"
a.replace('JavaScript','JS')
'JS I am learning JavaScript'

a.replace(/JavaScript/g,'JS')
'JS I am learning JS'

var a = " Nikita . "
a.replace(/ /g,'')
'Nikita.'

var a = " Nikita . "
undefined
a.replace(/ /g,'')
'Nikita.'
a.replaceAll(' ','')
'Nikita.'
var a = "JavaScript I am learning JavaScript"
undefined
a.replaceAll('JavaScript','JS')
'JS I am learning JS'

var url = "https://github.com/Aakashdeveloper/edu_may_node_22"

url.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'edu_may_node_22']
var a = "JavaScript I am learning JavaScript"
undefined
a.split(' ')
(5) ['JavaScript', 'I', 'am', 'learning', 'JavaScript']