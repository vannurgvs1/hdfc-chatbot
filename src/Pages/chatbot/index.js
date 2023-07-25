import React, { useState, useEffect, useRef } from 'react';
import "./chatbot.css";
import closeIcon from '../../../src/assets/images/close.png';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from './config.js';
import MessageParser from './Messageparser.js';
import ActionProvider from './ActionProvider.js';
import Accountpage from '../chatbotn/Accountpage';

function ChatBotMsg(props) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        // props.onChecked(checked);
        setOpen(props.isOpen)
        console.log(props.isOpen, "props.isOpen");
        // console.log(props.deletData[0].accNumber, "props.deletData[0]");
    }, [props.isOpen]);

    const closeDialog = () => {
        document.body.classList.remove("body");
        props.closeDialog(false);
    }


    return (
        <>
            <div className={open ? "chatbot-delete-dialog" : "open-dialog  chatbot-delete-dialog"}>
                
                <div className='chat-message-body'>
                   <Accountpage />
                </div>
            </div>

        </>
    );
}

export default ChatBotMsg;