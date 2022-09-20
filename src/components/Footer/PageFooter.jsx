import React from 'react'
import './PageFooter.css'
import Navigation from '../Navigation/Navigation'
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

import { Link } from 'react-router-dom'

const PageFooter = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="footer__content">

                        <div className="socials">
                            <div className="icons">
                                <li> <FaInstagram /></li>
                                <li><FaTwitter /></li>
                                <li><FaGithub /></li>
                            </div>
                        </div>

                        <div className="info">

                        </div>

                        <div className="pages">
                            <Navigation />
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default PageFooter