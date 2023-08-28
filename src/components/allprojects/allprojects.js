import React from 'react';
import Card from "../cards/card";

const allprojects = () => {
    return (
        <>
            <div className='project_content'>
                <h1>My Projects</h1>
                <div className="container cards_content">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Card
                                title='Calculator'
                                imageUrl='images/projects/calculator.png'
                                body='This is a Calculator App using HTML,CSS,JavaScript.'
                                buttonUrl='https://github.com/MandalShreyasi'
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <Card
                                title='Log In Page'
                                imageUrl='images/projects/login.png'
                                body='This is a Log In Page of a Website using HTML,CSS,JavaScript.'
                                buttonUrl='https://github.com/MandalShreyasi'
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <Card
                                title='railgari'
                                imageUrl='images/projects/train1.png'
                                body='This is a Railway Ticket Booking Website using MERN Full Stack.'
                                buttonUrl='https://github.com/MandalShreyasi'
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <Card
                                title='railway reservation'
                                imageUrl='images/projects/train2.png'
                                body='This is a Railway Ticket Booking Website using JAVA FX.'
                                buttonUrl='https://github.com/MandalShreyasi'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default allprojects;
