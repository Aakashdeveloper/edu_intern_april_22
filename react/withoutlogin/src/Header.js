import React,{Component} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <header>
                <div id="icon">
                    <Link to="/">Xomato</Link>
                </div>
                <div id="social">
                    <a href="www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/dtzG625/facebook.png" alt="fb" className="slogo"/>
                    </a>
                    <a href="www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/19H5LvT/insta.png" alt="fb" className="slogo"/>
                    </a>
                    <a href="www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fb" className="slogo"/>
                    </a>
                </div>
            </header>
            
        )
    }
    
}

export default Header;