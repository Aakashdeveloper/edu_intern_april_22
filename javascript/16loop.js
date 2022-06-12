for
while
do while
for of
for in
////////////////////////////////////////////////////////////////
//iterate over the array as well as print the series
for(variable; condition; increment)

for(i=0;i<5;i++){
 console.log(i)
}
0
1
2
3
4

var city = ['Delhi', 'Mumbai', 'London', 'Nice']
for(i=0;i<city.length;i++){
    console.log(city[i])
}

var city = ['Delhi', 'Mumbai', 'London', 'Nice']
for(i=0;i<city.length;i++){
    console.log(`<li>${city[i]}</li>`)
}
VM47:3 <li>Delhi</li>
VM47:3 <li>Mumbai</li>
VM47:3 <li>London</li>
VM47:3 <li>Nice</li>


var city = ['Delhi', 'Mumbai',['Red','Yellow','Green'], 'London', 'Nice'];

for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    } 
}

////while
var i = 10;
while(i<5){
    console.log(i);
    i++
}

///dowhile
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

//es6 for of
var city = ['Delhi', 'Mumbai', 'London', 'Nice']
for(mycity of city){
    console.log(mycity)
}


var city = ['Delhi', 'Mumbai',['Red','Yellow','Green'], 'London', 'Nice'];
for(mycity of city){
    if(Array.isArray(mycity)){
        for(mycolor of mycity){
            console.log(mycolor)
        }
    }else{
        console.log(mycity)
    }
    
}
