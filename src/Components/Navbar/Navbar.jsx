import React from 'react';
import './Navbar.scss'
import { NavLink, Link } from 'react-router-dom'
import { FaSpotify } from 'react-icons/fa'
import { RiAncientGateLine } from "react-icons/ri";
import { CgSearch } from 'react-icons/cg';
import { MdLibraryMusic } from 'react-icons/md'
import {AiFillPlusSquare} from 'react-icons/ai'
import {BiHeartSquare} from 'react-icons/bi'
import Box from '../Box/Box.jsx';
function Header(props) {
    return (
        <div className="navbar">
            <div className="navbar__main">
                <div className="logo">
                    <FaSpotify style={{color: '#1ed760'}}/>
                    <div className="logo__link">
                        <Link to="/">
                            Spotify
                        </Link>
                    </div>
                    {/* <Box name="Sportify" linkto="/" icon={<FaSpotify/>}/> */}
                </div>
                <ul className="items">
                    <Box name="Trang chủ" linkto="/" icon={<RiAncientGateLine/>}/>
                    <Box name="Tìm kiếm" linkto="/detail" icon={<CgSearch/>}/>
                    <Box name="Thư viện" linkto="/library" icon={<MdLibraryMusic/>}/>
                </ul>

                <ul className="items items-two">
                    <Box name="Tạo playlist" linkto="/create-playlist" icon={<AiFillPlusSquare/>}/>
                    <Box name="Bài hát yêu thích" linkto="/love" icon={<BiHeartSquare/>}/>
                </ul>
            </div>
        </div>
    );
}

export default Header;