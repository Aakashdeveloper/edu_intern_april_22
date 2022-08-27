import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const lurl = "https://zomatoajulypi.herokuapp.com/location";
let rUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends Component{

    constructor(props){
        super(props)
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

    handleCity=(event) => {
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

    hanldeRest = (event) => {
        this.props.history.push(`/details?restId=${event.target.value}`)
    }

    render(){
        console.log(">>>>inside quich",this.props)
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
                        <select onChange={this.handleCity}>
                            <option>----SELECT YOUR CITY----</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select className="restSelect" onChange={this.hanldeRest}>
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

export default withRouter(Search)