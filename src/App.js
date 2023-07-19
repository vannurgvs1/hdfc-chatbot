import React, { useState } from "react";
import { Space } from "antd";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import chatBotIcon from "./assets/images/chatbot.jpg";
import { Modal } from 'antd';
import ChatBotMsg from "../src/Pages/chatbot";





function App() {
    const [login, setLogin] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const closeDialog = (status) => {
        setOpen(status);
    }

    const showModal = () => {
        // setIsModalOpen(true);
        setOpen(true);
    };

    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };

    // const handleCancel = () => {
    //     setIsModalOpen(false);
    // };

    return (
        <div className="App">
            <AppHeader isLogin={login} setLogin={setLogin} />
            <Routes>
                <Route path="/" element={<Login setLogin={setLogin} />} />
            </Routes>
            <div className="SideMenuAndPageContent">
                {login && <><SideMenu></SideMenu>
                    <PageContent></PageContent></>}
            </div>
            <AppFooter />
            <div className="chat-ad">
                <img src={chatBotIcon} alt="chat-icon" width="70" height="70" className="chat-icon" onClick={showModal}></img>
            </div>
            {/* <Modal title="Chat Bot Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal> */}
            <div className="chatBotMsg-box">
            <ChatBotMsg closeDialog={closeDialog} isOpen={open}/>
            </div>
            
        </div>
    );
}

export default App;
