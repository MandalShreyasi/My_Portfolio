import React from 'react';
import "./card.css";

const card = ({ title, imageUrl, body, buttonUrl }) => {

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <div className='card-container-project'>
            <div className="image-container-project">
                <img src={imageUrl} alt='' height="290px" width="470px" />
            </div>
            <div className="card-content-project">
                <div className="card-title-project">
                    <h3>{title}</h3>
                </div>
                <div className="card-body-project">
                    <p>{body}</p>
                </div>

                <div className="btn-project ">
                    <button role='link' onClick={() => openInNewTab(buttonUrl)}>Check it out</button>
                </div>
            </div>
        </div>
    );
};

export default card;
