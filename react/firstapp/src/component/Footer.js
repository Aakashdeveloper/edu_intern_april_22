import React from 'react';

const Footer = (props) => {
    console.log(props)
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h3>&copy; Footer {props.year} {props.month}</h3>
            </center>
        </React.Fragment>
        
    )
}

export default Footer;