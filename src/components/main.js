import React from 'react';
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import '../App.css';

const main = () => {
    
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <div>
            <div className='main_content'>
                <div className='row'>
                    <div className='col-md-6 col-12 main_left '>
                        <h2>Hey! I am</h2>
                        <h1>Shreyasi Mandal.</h1>
                        <p>I'm a Full Stack Developer.</p>
                        <div className='buttons_main'>
                            <button className='main-button' role='link' onClick={() => openInNewTab('https://drive.google.com/file/d/1V0ecm6NpBI-WPoQv4ZKlc_pBA8M2NrEh/view?usp=drivesdk')}>Check My Resume</button>
                            <button className='main-button' role='link' onClick={() => openInNewTab('https://github.com/MandalShreyasi')}>Go To My Github</button>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 main_right'>
                        <img src='/images/popy.jpeg' className='main_image' alt='me' />
                    </div>
                </div>
            </div>
            <Projects />
            <About />
            <Contact />
        </div>
    );
};

export default main;
