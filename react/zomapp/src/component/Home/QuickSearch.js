import React,{Component} from 'react';
import './Quick.css';

class QuickSearch extends Component{

    render(){
        return(
            <div id="quickSearch">
            <span id="quickHeading">Quick Search</span>
            <span id="quickSubHeading">Discover Restaurants By Meal</span>
            <div id="main">
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src="image/dinner.png" alt="dinner"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            <a href="../listing/listing.html">Dinner</a>
                        </div>
                        <div className="componentSubHeading">
                            Best Place For Food Near You
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        )
    }
    
}

export default QuickSearch;