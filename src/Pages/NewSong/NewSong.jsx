import React from 'react';
import './NewSong.scss'
import { BsFillPlayCircleFill } from 'react-icons/bs';
function NewSong({data}) {
    return (
        data.map((item, index) => (
            <div className='newSong' key={index}>
                <div className="newSong__image">
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="newSong__image-iconplay">
                        <BsFillPlayCircleFill/>
                    </div>
                </div>
                <div className="newSong__infor">
                    <div>
                        <div className="newSong__infor-name">
                            <a href={item.link}>{item.title}</a>
                        </div>
                        <div className="newSong__infor-singer">
                            <a href="#">{item.artistsNames}</a>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
                        <div className="newSong__infor-topbxh">
                            <p>
                                {index+1}#
                            </p>
                        </div>
                        <div className="newSong__infor-date">
                            <p>
                                22.12.2001
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ))
    );
}

export default NewSong;