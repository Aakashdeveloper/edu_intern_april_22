import React, {Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay'
import Header from '../../Header';

const oUrl = "http://localhost:8230/orders"

class ViewOrder extends Component{

    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        if(sessionStorage.getItem('loginStatus') === 'LoggedOut'){
            return(
                <div>
                    <Header/>
                    <center>
                        <h2>Login First To Place Order</h2>
                    </center>
                </div>
            )
        }
        return(
           <>
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
           </>
        )
    }

    //api call
    componentDidMount(){
        if(this.props.location){
            let query = this.props.location.search.split('&');
            if(query){
                let data={
                    "status":query[0].split('=')[1],
                    "date":query[2].split('=')[1],
                    "bank_name":query[3].split('=')[1],
                }
                let id = query[1].split('=')[1].split('_')[1];
                fetch(`${oUrl}/${id}`,{
                    method:'PATCH',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
            }
        }
        let email = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:''
        axios.get(`${oUrl}?email=${email}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;