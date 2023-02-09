import React from 'react';
import {NavLink} from 'react-router-dom'

function index(props) {
    return (
        <div>
            <h1>Làm đéo gì có trang này</h1>
            <NavLink to="/">
                Home Page
            </NavLink>
        </div>
    );
}

export default index;