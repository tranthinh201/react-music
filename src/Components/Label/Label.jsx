import React from 'react';
import './Label.scss'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Skeleton } from "@mui/material"


function Label({ data, loading }) {
    return (
        <>
            {
                loading ? (
                    <Skeleton variant="rectangular" animation="wave" width={180} height={120} sx={{ bgcolor: 'grey.900' }}/>
                ) : (
                    data.map((item, index) => (
                        <Link to={item.link}>
                            <div className='item' key={index}>
                                <div className="item__image">
                                    <img src={item.thumbnailM} alt={item.title} />
                                    <div className="item__image-iconplay">
                                        <BsFillPlayCircleFill/>
                                    </div>
                                </div>
                                <div className="item__namemusic">
                                    <Link to={item.link}>{item.title}</Link>
                                </div>
                            </div>
                        </Link>
                    )) 
                )
            }
        </>
    );
}

export default Label;