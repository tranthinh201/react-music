import React from 'react';
import './Box.scss'
import { NavLink, Link } from 'react-router-dom'
function Box(props) {
    return (
        <>
            <li className='items__item'>
                <NavLink to={props.linkto} className='items__item-link'>
                    {props.icon}
                    <span className="items__item-text">  
                        {props.name}
                    </span>
                </NavLink>
            </li>
        </>
    );
}

export default Box;