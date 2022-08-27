import React,{Component} from 'react';
import './Quick.css';
import QuickDisplay from './QuickDisplay';

const url = "https://zomatoajulypi.herokuapp.com/quicksearch"

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <div id="quickSearch">
            <span id="quickHeading">Quick Search</span>
            <span id="quickSubHeading">Discover Restaurants By Meal</span>
            <QuickDisplay mealData={this.state.mealType}/>
        </div>
            
        )
    }

    // 
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
    
}

export default QuickSearch;