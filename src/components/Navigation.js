import './Navigation.css';
import React from "react";

function Navigation() {

    return(
            <nav>
                <ul>
                    <div className='logo'>
                        <li><a href='/'><img src="images/logo-black.png" alt="Sacred Grounds Enterprises"/></a></li>
                    </div>

                    <div className='container-tabs'>
                        <li><a href='/rates'>Rates</a></li>
                        <li><a href='/about-us'>About Us</a></li>
                        <li><a href='/contact-us'>Contact Us</a></li>
                    </div>
                    
                </ul>
            </nav>
    );
}

export default Navigation;