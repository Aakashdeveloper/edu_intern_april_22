var a = {} //object
var b = [] //array

var movieName = "Avengers"
var movieRating = 4.5
var movieType = "Action"

var movieName1 = "Jab We Met"
var movieRating1 = 4.9
var movieType1 = "Romantic"


var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}
undefined
typeof(movie)
'object'
movie.name
'Avengers'
movie.rating
4.5
movie.action
undefined
movie.type
'Action'
movie.lang = "English"
'English'
movie
{name: 'Avengers', rating: 4.5, type: 'Action', lang: 'English'}
movie.rating = 4.7
4.7
movie
{name: 'Avengers', rating: 4.7, type: 'Action', lang: 'English'}
delete movie.type
true
movie
{name: 'Avengers', rating: 4.7, lang: 'English'}

movie['name']


var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}

for(key in movie){
    console.log(key)
}
name
rating
type

for(key in movie){
    console.log(movie[key])
}
Avengers
4.5
Action

[[a,b],[c,d]]


//json > JavaScript Object Notation
//way to represent data

var movies = [
    {
        'name':'Avengers',
        'rating':4.5,
        'type':'Action'
    },
    {
        'name':'Jab We Met',
        'rating':4.9,
        'type':'Romantic'
    }
]

movies[1].name
'Jab We Met'

for(data of movies){
    console.log(data.name)
}