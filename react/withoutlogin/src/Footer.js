import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <footer>
            <p id="footerText">&copy; Developer Funnel</p>
            <hr/>
            <div className="footDiv">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
            <div className="footDiv">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
            <div className="footDiv noBorder">
                <p>Contact Us</p>
                <p>About Us</p>
            </div>
        </footer>
        
    )
}

export default Footer;