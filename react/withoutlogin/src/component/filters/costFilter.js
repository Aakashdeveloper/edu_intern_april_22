import React,{Component} from 'react';
import axios from 'axios';

const url = "https://zomatoajulypi.herokuapp.com/filter";

class CostFilter extends Component{

    filterCuisine = (event) => {
        let mealId = this.props.mealId;
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1]
        let costUrl;
        if(event.target.value === ""){
            costUrl = `${url}/${mealId}`
        }else{
            costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})
    }

    render(){
        return(
            <>
                <center>Cost Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterCuisine}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="100-300"/>100-300
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="301-600"/>301-600
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="601-900"/>601-900
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="901-5000"/>901-5000
                    </label>
                </div>
            </>
        )
    }
}

export default CostFilter