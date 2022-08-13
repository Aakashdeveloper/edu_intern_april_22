import React,{Component} from 'react';
import './Search.css';

const lurl = "https://zomatoajulypi.herokuapp.com/location";
let rUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends Component{

    constructor(){
        super()
        console.log(">>>>inside constructor")
        this.state={
            location:'',
            restaurant:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    handleRest=(event) => {
        let stateId = event.target.value;
        fetch(`${rUrl}${stateId}`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({restaurant:data})
        })
    }

    renderRest=(data)=>{
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    render(){
        console.log(">>>>inside render")
        return(
            <div id="search">
                <div id="container">
                    <div id="logo">
                        <span>E!</span>
                    </div>
                    <div id="heading">
                        Find The Best Restaurants Near You
                    </div>
                    <div className="dropdown">
                        <select onChange={this.handleRest}>
                            <option>----SELECT YOUR CITY----</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select className="restSelect">
                            <option>----SELECT YOUR RESTAURANTS----</option>
                            {this.renderRest(this.state.restaurant)}
                        </select>
                    </div>
                </div>
            </div> 
        )
    }

    //api calling on page load 
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
    
}

export default Search;