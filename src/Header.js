import React, { useState } from 'react';
import './Header.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import {Link} from "react-router-dom";
function Header() {

    const [inputSearch, setInputSearch] = useState( "" );

    return (<div className='header'>
        <div className='header__'>

            <MenuIcon/>
            <Link to={"/"}>
            <img className='header__logo' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'/>
            </Link>
        </div>
        <div className='header__input'>
            <input onChange= {
                        (e) => {setInputSearch( e.target.value );}}
                value={inputSearch}
                placeholder='Search'
                type="text"/>
                <Link to = {`/search/${inputSearch}`}>
            <SearchIcon className='header__inputButton'/>
                </Link>
        </div>
        <div className='header__icons'>
            <AppsIcon className='header_icon'/>
            <VideoCallIcon className='header_icon'/>
            <NotificationsIcon className='header_icon'/>
            <Avatar className='header_icon' src='https://avatars.githubusercontent.com/u/88846343?v=4'/>
        </div>
    </div>);



}

export default Header;
