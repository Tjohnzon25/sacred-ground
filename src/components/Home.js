import './Home.css';
import React from "react";

function Home(){
    return(
        <div>
            <div className='wrapper'>
                <section className=' dark--blue container--top'>

                    <div className='white content--header'>
                        <h1>Sacred Ground Enterprises</h1>
                        <p>Since 2006, we have been supplying the Bay Area with clean soil 
                            for any type of project requiring dirt for landscaping or engineered backfill</p>
                        <a href='/contact-us'>Contact Us</a>
                    </div>
                    
                    <img src="images/clean-dirt.JPG" alt="Clean dirt example"/>
                </section>
                
                <section className='content--wrapper'>

                    <div className='content--container white-background'>
                        <img src="images/truck.png" alt="Clean dirt example" id="truckPic"/>
                        <h2>Why Choose Us?</h2>
                        <p>Dirt is <b>FREE</b> in many cases depending on the load.</p>
                    </div>

                    <div className='content--container white-background'>
                        <img src="images/truck.png" alt="Clean dirt example" id="truckPic1"/>
                        <h2>Why Choose Us?</h2>
                        <p>Dirt is <b>FREE</b> in many cases depending on the load.</p>
                    </div>

                    <div className='content--container white-background'>
                        <img src="images/truck.png" alt="Clean dirt example" id="truckPic1"/>
                        <h2>Why Choose Us?</h2>
                        <p>Dirt is <b>FREE</b> in many cases depending on the load.</p>
                    </div>
                    
                </section>
            </div>

            <div className='projects-wrapper'>
                <section className='projects'>
                    <h1>Past Project Examples</h1>

                    <div className='dirk-bike project-flex'>
                        <h3>Content about the dirt bike track</h3>
                        <img src="images/dirt-bike-track.JPG" alt="Dirt bike track project" />
                    </div>

                </section>
            </div>

        </div>
        
    );
}

export default Home;