import './Home.css';
import React from "react";

function Home(){
    return(
        <div>

            <section className='container--top'>

                <div className='content--header'>
                    <h1>Sacred Ground Enterprises</h1>
                    <p>We supply clean soil for any type of project requiring dirt for landscaping or engineered backfill.</p>
                    <p>Been in business serving the Bay Area for 16+ years</p>
                    <a href='/contact-us'>Contact Us</a>
                </div>
                
                <img src="images/clean-dirt.JPG" alt="Clean dirt example"/>
            </section>

            <section className='dark--blue section-wave'>

                <div class="custom-shape-divider-top-1642996537">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

                <div className='white'>
                    <h2>Why Choose Us?</h2>
                    
                </div>
                
            </section>
        </div>
    );
}

export default Home;