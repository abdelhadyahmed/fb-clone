import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import { StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://img.icons8.com/fluent/240/000000/facebook-new.png" alt=""/>
                <div className="Header__input">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Hady Ahmed</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
