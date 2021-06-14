import React from 'react'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import './MessageSender.css'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { InsertEmoticon } from '@material-ui/icons';
import { useState } from 'react';

function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("")
    const handelSubmit = e=>{
        e.preventDefault();
        // some DB
        setInput("");
        setImageUrl("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form >
                    <input 
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`what's on your mind`}
                    />

                    <input
                        value={imageUrl}
                        onChange={(e)=> setImageUrl(e.target.value)}  
                        className="messageSender__input"
                        placeholder={`image URL (Optional)`}
                    />
                    <button onClick={handelSubmit}>
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
