import React from 'react';
import './Top100.scss'
import { Link } from 'react-router-dom'
function Top100({data}) {
    return (
        data.map((item, index) => (
            <div className="header-playlist" key={index}>
                <div className="header-playlist__image">
                    <img src={item.thumbnailM} alt={item.title} />
                </div>
                <div className="play-list__infor">
                    <Link to={item.link}>{item.title}</Link>
                    <p>{item.artistsNames}</p>
                    <p>{item.duration}</p>
                </div>
            </div>
        )) 
    );
}

export default Top100;