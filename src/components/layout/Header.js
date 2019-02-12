import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header style= {headerStyle}>
            <h1>TodoList</h1>
            <ul className='nav'>
                <li role='presentation' className='active'><Link style={linkStyle} to='/'>Home</Link></li>
                <li role='presentation' className='active'><Link style={linkStyle} to='/profile'>Profile</Link></li>
                <li role='presentation' className='active'><Link style={linkStyle} to='/notes'>Notes</Link></li>
                <li role='presentation' className='active'><Link style={linkStyle} to='/about'>About</Link></li>
            </ul>
            {/* <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link> */}
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;