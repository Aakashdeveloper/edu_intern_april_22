import React, {Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay'

const oUrl = "http://localhost:8230/orders"

class ViewOrder extends Component{

    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        return(
           <>
                <OrderDisplay orderData={this.state.orders}/>
           </>
        )
    }

    //api call
    componentDidMount(){
        axios.get(`${oUrl}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;