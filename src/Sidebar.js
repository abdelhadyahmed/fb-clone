import React from 'react';
import './Sidebar.css' ; 
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StoreFrontIcon from '@material-ui/icons/Storefront';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="/static/images/avatar/2.jpg" title="Hady Ahmed"/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StoreFrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />            
        </div>
    )
}

export default Sidebar;
