import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/Shop'>Shop</Link> </li>
                <li> <Link to='/Blog'>Blog</Link> </li>
                <li> <Link to='/About'>About Us</Link> </li>
            </ul>
        </div>
    )
}

export default Navigation