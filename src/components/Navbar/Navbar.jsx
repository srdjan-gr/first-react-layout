import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../img/logo192.png'
import { FaEllipsisV } from "react-icons/fa";
import Navigation from '../Navigation/Navigation';

const Navbar = () => {
    return (
        <div>
            <div className="container">

                <nav className="nav__content">
                    <div className="nav__content-container container-80">

                        <div className="nav__content-logo">
                            <Link to='/'><img src={logo} alt="logo" /></Link>
                        </div>

                        <div className="nav__content-right">
                            <div className="nav__content-links">
                                <Navigation />
                            </div>

                            <div className="nav__content-mobile"> <FaEllipsisV /></div>
                        </div>

                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar