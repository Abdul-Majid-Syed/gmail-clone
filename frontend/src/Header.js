import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';

function Header(){
    return (
        <div className="header">
            <div className="header_left">
                <IconButton> {/* This is for ripple effect around the component */}
                    <MenuIcon />
                </IconButton>
                {/* <img src="gmail_logo.png" alt="" /> */}
                <div className="header_logo">
                    <MailIcon />
                    <h1>Mail</h1>
                </div>
            </div>

            <div className="header_middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon />
            </div>

            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <Avatar />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;