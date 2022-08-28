//Laptop Setup//
https://code.visualstudio.com/ (install)
https://github.com (create account)
https://git-scm.com/downloads (install)
https://github.com/Aakashdeveloper (Follow)
https://github.com/developerTech (Follow)
https://www.youtube.com/developerfunnel (subscribe)
https://nodejs.org/en/(install)

//optional
> https://stackoverflow.com/ (create account)
> https://www.linkedin.com/ (create account)


>>>>Starting think second project topic

Learning
> Sat Sun
4 month

Doubt session
> wed Friday

Session 0
16 April Session1

23,24,30,1 

ground rule
> madeha
> hari

> Unable to join
> not able to getting

> Developer Funnel

> Tariq Aziz
> mentor

>>>>>>>>><<<<<<<<<

3 major
> Zomato > Convert in your version
> Second Project > Your choice
> Profile Website 

4 mini project

project + Assignment + Your perfomance in the class
> Final Interview


////////////////
Github
////////
https://raw.githubusercontent.com/Aakashdeveloper/Aakashdeveloper/master/README.md

//////////
HTML  >> Raw Structure of any website
CSS   >> Designing 
Bootstrap >> Responsive
JavaScript >> Dynamic
//////////////////////
NodeJs >> Backend
expressJs >> Backend Routing
Mongodb >> Database
React >> Frontend


////// Vs Code Extensions /////
vscode-icons
gitlens
githistory
eslint
tabnine
spellCheck


html > main tah wrapper
head> use to link css, JavaScript, title
body > for rest of the content

/////////
inline
> they always start in same line
> only occupy the space which is required by the content
> span, a ,img
block
> They start always from new line
> they occupy whole width of screen irrespective of content
> p , div, h1

src > source
alt > alternate
rel > related To
href > hyper refernce

////////
name
image
about you
skill images
map
contact
footer
(copyright + social link)

https://imgbb.com/


disc
circle
square

//////////
inline
styletag
stylesheet

inline>styletag>stylesheet

inline
{
    color:red;
    font-size:30px
}

styletag
{
    color:orange;
    border:2px solid red;
    height:200px
}

stylesheet
{
    height:250px;
    font-size:40px;
    background:red;
}

{
    color:red;
    font-size:30px;
    border:2px solid red;
    height:200px
    background:red;
}


https://htmlcolorcodes.com/

//////
> tagName
className 
> .
> use for multiple element
id  
> #
> should be used for unique element

/// study HW
position: Absolute
position: relative

solid
dotted
dashed
double
groove

window.innerWidth

///Bootstrap3
xs < 768px
sm > 768px
md > 992px
lg > 1200px

///Bootstrap4
col- < 576px
sm > 576px
md > 768px
lg > 992px
xl > 1200px

///Bootstrap5
col- < 576px
sm > 576px
md > 768px
lg > 992px
xl > 1200px
xxl > 1400px

https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html
https://icons.getbootstrap.com/

Mini Project1
Code Link > https://drive.google.com/file/d/13VEQbri-6vNVRBvseTg01anBDhdcG-F0/view?usp=sharing
Recording Link > https://drive.google.com/file/d/1DxRmHLDd-d4mpMDm1M_bEEsd9WIG0G6L/view?usp=sharing


////dummy api
npx json-server --watch data.json --port 9800

Async single threaded non blocking I/O

Code
||
byte Code
||
Machine Code

LibU + c++
v8 Engine
open source
/////////////
JSON
//////
2,001,057

//////
npm > node package manager
package.json
> Entry point to the app
> conatins scirpts > start build dev
> contains all the package using in the app
> meta data (name,version,description)

/// Step to generate package.json
> open cmd/terminal
> go inside the folder
> npm init
> Answer all question
> type "yes"

/// Step to install package
> open cmd/terminal
> go inside the folder
> npm i packageName / npm install packageName


nodemon

localDependency
> local to the folder
> used in same folder
> Max Dependencies should go local

globalDependency
> Install in your Laptop
> Need Admin permission
> used manily for Run the app and generate
> Any dependencies require before the app start
> Will not add to package.JSON

devDependency
> Same like local
> dependencies use only at time of development

///how to install globalDependency
#window
> open cmd as adminstrator
> npm i -g packageName

#mac/linux
> open terminal
> sudo npm i -g packageName

npm start
npm run dev

CRUD
Create > Insert>  Post
Read > Read Data> Get
Update> Update>   Put
Delete > Delete>  Delete

params
> What we pass after / in url
> it is complusry to define
> If Define complusry to pass
> Should be use for single entry
QueryParamd
> What we pass after ? in url
> No Need to define
> Not complusry to pass
> Should be use for multiple values

JWT > JSON Web Token

////////////////////
/******GetAllUser*****/
(GET)> https://developerjwt.herokuapp.com/api/auth/users

/******Register*****/
(POST)> https://developerjwt.herokuapp.com/api/auth/register
(body) => {"name":"Aakash", "email":"aa@gmail.com","password":"12345678","phone":343432,role?":"user"}

/******Login*****/
(POST) => https://developerjwt.herokuapp.com/api/auth/login
(body)  => {"email":"aa@gmail.com","password":"12345678"}
(response)=> {auth:true,token:'dgsdg'}

/******UserInfo*****/
(GET) => https://developerjwt.herokuapp.com/api/auth/userinfo
(Header) => {'x-access-token':'token value from login'}

npm i bcryptjs body-parser cors express jsonwebtoken mongoose

https://dashboard.paytm.com/next/activate

https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps

/////React
> Frontend library that help to build single page applications
using component based structure

///
Step to generate react appp
////
> open cmd/terminal
> go inside the folder
> npx create-react-app appname


#####Window#####
>>>>>>ONE TIME<<<<<<
>> open cmd as adminstrator
>> npm i -g create-react-app

>>>>>>Every time when i want new app<<<<<<
> open cmd
> Go inside folder  where you want app
> create-react-app appname

#####Mac/Linux#####
>>>>>>ONE TIME<<<<<<
>> open terminal
>> sudo npm i -g create-react-app

>>>>>>Every time when i want new app<<<<<<
> open terminal
> Go inside folder  where you want app
> create-react-app appname


React > is the main library
React-DOM > help to render content
React-scirpts > help to run the app


functional
> Dumb Component
> Display purpose only
> cannot maintain state

class
> Logical Component
> Any kind of logic,api calling as well as display
> can maintain state
hooks

///////////
State
> Act like a local variable
> Each component can have its own state
> Value of state can be update (mutable)
> Any data interaction will happen through state

Props
> Help to transfer the data
> We cannot update the value of props (immutable)
> We can only transfer data between child & parent component


parent => child (props)
child => parent (props with function)

parent
function add(a,b){
    return a+b
}

child
add(1,2)

History > for redirect
Location > for query params
match > for params

(get) cityname >           https://zomatoajulypi.herokuapp.com/location
(get) restwrtcity >        https://zomatoajulypi.herokuapp.com/restaurant?stateId=1
(get) quickSearch>         https://zomatoajulypi.herokuapp.com/quicksearch


(get) onbasisofMeal >      https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=
(get) cuisinefilter >      https://zomatoajulypi.herokuapp.com/filter/4?cuisine=1
(get) costfilter >         https://zomatoajulypi.herokuapp.com/filter/1?hcost=1000&lcost=500

(get) restdetails >        http://zomatoajulypi.herokuapp.com/details/1
(get) menu >               https://zomatoajulypi.herokuapp.com/menu/1

(post) orderspage >        http://zomatoajulypi.herokuapp.com/menuItem
                           body [1,4,5]
(post)placeOrder >        

(get) allorder>            
       
(get) restaurants>         https://zomatoajulypi.herokuapp.com/restaurants
https://developerpayment.herokuapp.com/paynow


var a = [6,9,23,45,9,7]
undefined
a.splice(a.indexOf(45),1)
[45]
a
(5) [6, 9, 23, 9, 7]
a.splice(a.indexOf(9),1)
[9]
a.splice(a.indexOf(9),1)
[9]
a
(3) [6, 23, 7]
a.splice(a.indexOf(9),1)
[7]


//////////////
/////////////
/******GetAllUser*****/
(GET)> https://developerjwt.herokuapp.com/api/auth/users

/******Register*****/
(POST)> https://developerjwt.herokuapp.com/api/auth/register
(body) => {"name":"Aakash", "email":"aa@gmail.com","password":"12345678","phone":343432,role?":"user"}

/******Login*****/
(POST) => https://developerjwt.herokuapp.com/api/auth/login
(body)  => {"email":"aa@gmail.com","password":"12345678"}
(response)=> {auth:true,token:'dgsdg'}

/******UserInfo*****/
(GET) => https://developerjwt.herokuapp.com/api/auth/userinfo
(Header) => {'x-access-token':'token value from login'}


> Heroku
BackendApi
Login Api
Payment Gateway

> Netlify
React App
