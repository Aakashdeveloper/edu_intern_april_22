import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/listing/listingApi';
import Details from './component/details/details';
import PlaceOrder from './component/booking/placeOrder';
import ViewOrder from './component/booking/viewOrder';


const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/listing/:mealId" component={Listing}/>
                    <Route exact path="/details" component={Details}/>
                    <Route exact path="/placeOrder/:restName" component={PlaceOrder}/>
                    <Route exact path="/viewBooking" component={ViewOrder}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;