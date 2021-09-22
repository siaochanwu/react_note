import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav style={navStyle}>
            <Link to="/">Note/</Link>
            <Link to="/second">Second/</Link>
            <Link to="/third">Third</Link>
        </nav>
    )
}

const navStyle = {
    width: '100%',
    textAlign: 'center',
    fontSize: '24px',
    margin: '10px auto',
}

export default Nav;