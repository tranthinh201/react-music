import React from 'react';
import PropTypes from 'prop-types';

function Search(props) {
    return (
        <div className='header__search'>
            <input type="text" placeholder='Nghệ sĩ, bài hát hoặc popcast'/>
        </div>
    );
}

export default Search;