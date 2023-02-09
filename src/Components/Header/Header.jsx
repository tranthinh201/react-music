import React, { useState, useEffect } from 'react';
import './Header.scss'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
function Header(props) {
    return (
        <div className='header'>
            <div className="header__main">
                <div className="header__icon">
                    <AiOutlineLeft className="header__icon-item"/>
                    <AiOutlineRight className="header__icon-item"/>
                    {/* {props.item} */}
                </div>
                <div className="header__user">
                    <BiUserCircle/>
                </div>
            </div>
        </div>
    );
}

export default Header;