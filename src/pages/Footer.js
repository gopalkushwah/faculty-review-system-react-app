import React from 'react';

const Footer = () => {

    const footerstyle = {
        backgroundColor:'blue',
        color:'white',
        height:'80px',
        lineHeight:'80px',
        textAlign:'center',
        marginTop:'50px',
        textShadow : '2px 2px 2px rgba(0,0,0)',
        fontSize : '18px'
    }
    return (
        <div style={footerstyle}>
            <p> A Project by "Gopal Kushwah"</p>
        </div>
    );
};

export default Footer;