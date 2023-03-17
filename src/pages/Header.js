import React from 'react';

const Header = () => {
    // const header = {
    //     position: "fixed",
    //     left: "0",
    //     top: "0",
    //     height:'80px',
    //     lineHeight:'80px',
    //     width: "100%",
    //     backgroundColor: "blue",
    //     color: "white",
    //     textAlign: "center",
    //     zIndex : '10'
    //   }
    const headerstyle = {
        backgroundColor:'blue',
        color:'white',
        height:'80px',
        lineHeight:'80px',
        textAlign:'center',
        textTransform : 'uppercase',
        textShadow : '2px 2px black'

        
    }
    return (
        <div>
            <h1 style={headerstyle}> Faculty Review System</h1>
        </div>
    );
};

export default Header;