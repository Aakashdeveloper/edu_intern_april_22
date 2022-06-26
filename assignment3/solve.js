class restaurantManager{
    // part1(a)
    restaurantList=[
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ]

    //part1(B)
    printAllRestaurantNames=()=>{
        return this.restaurantList.map((data) => {
            return data.restaurantName
        })
    }

    //part1(C)
    filterRestaurantByCity=(cityName)=>{
        return this.restaurantList.filter((data) => {
            return data.city === cityName
        })
    }
}

let restObj = new restaurantManager();
// console.log(restObj.restaurantList)
// console.log(restObj.printAllRestaurantNames())
//[ 'KFC', 'Domino', 'Burger King', 'Subway' ]
console.log(restObj.filterRestaurantByCity('Mumbai'))

//////part2-a/////
var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};