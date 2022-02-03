import React from 'react';
import './Header.css';




function Header (props) {


    return (
<div>
        <h2>{props.Name}</h2>
        <h2>{props.description}</h2>
        <h2>{props.price}</h2>
</div>

    );
}

export default Header;