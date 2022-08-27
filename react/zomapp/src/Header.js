import React,{Component} from 'react';
import './header.css';
import {Link,withRouter} from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"

class Header extends Component{

    constructor(props){
        super(props)

        this.state={
            userData:'',
            username:'',
            userImg:''
        }
    }

    hadleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.setItem('loginStatus','LoggedOut')
        this.setState({userData:''})
        this.props.history.push('/')

    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outputArray = [data.name,data.email,data.phone];
            sessionStorage.setItem('userInfo',outputArray);
            sessionStorage.setItem('loginStatus','LoggedIn')
            return(
                <>
                    <Link className="btn btn-success" to="/login">
                    <span className="glyphicon glyphicon-user"></span> Hi {data.name}   
                    </Link> &nbsp;
                    <button className="btn btn-danger">
                        <span className="glyphicon glyphicon-log-out"
                        onClick={this.hadleLogout}></span>  Logout   
                    </button> 
                </>
            )

        }else{
            return(
                <>
                    <Link className="btn btn-success" to="/login">
                    <span className="glyphicon glyphicon-log-in"></span>  Login   
                    </Link> &nbsp;
                    <Link className="btn btn-warning" to="/register">
                        <span className="glyphicon glyphicon-user"></span>  SignUp   
                    </Link> 
                </>
            )
        }
    }

    render(){
        return(
            <header>
                <div id="icon">
                    <Link to="/">Xomato</Link>
                </div>
                <div id="social">
                    {this.conditionalHeader()}
                   
                </div>
            </header>
            
        )
    }
    
    ///api calling 
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header);