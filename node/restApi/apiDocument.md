//Page 1

# List of city
> http://localhost:9870/location
# List of Restaurant
> http://localhost:9870/restaurants
# Restaurant wrt City
> http://localhost:9870/restaurants?stateId=4
# List of QuickSearch
> http://localhost:9870/mealtype

//Page 2
# Restaurant wrt Meal
> http://localhost:9870/restaurants?mealId=5
# Restaurant wrt Meal & cuisine
> http://localhost:9870/filter/2?cuisineId=1
# Restaurant wrt Meal & cost
> http://localhost:9870/filter/2?lcost=400&hcost=700
> http://localhost:9870/filter/2?lcost=600&hcost=1200&cuisineId=4
# Sort on basis of cost
> http://localhost:9870/filter/1?cuisineId=4&sort=-1

//Page3
# Details of the Restaurants
> http://localhost:9870/details/9
# Menu of the Restaurants
> http://localhost:9870/menu/7

//Page4
# Menu Details
> (POST) localhost:9870/menuItem
> {"id":[1,6,7]}
# Place Order
> (Post)http://localhost:9870/placeOrder
{
	"orderId" : 5,
	"name" : "Amit",
	"email" : "amit@gmail.com",
	"address" : "Hom 42",
	"phone" : 7834645457,
	"cost" : 365,
	"menuItem" : [
		24,
		13,
		8
	]
}

//Page5 
# List of order place
# List of order place wrt to email
# update order details with payment

///////
Delete order