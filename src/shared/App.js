import React, { Component, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main  from "../pages/Main";
import Login from "../pages/Login";
import MainMenu from "../layout/MainMenu";
import Alert from "../components/Alert";
import Info from "../components/Info";
import Logout from "../pages/Logout";

const App = () => {

    //alert창
    // const [showAlert, setShowAlert] = useState(false);
    // const [alertMsg, setAlertMsg] = useState("");

    // const getShowAlert = (b) =>{
    //     setShowAlert(b);
    // }

    // const getAlertMsg = (msg) =>{
    //     setAlertMsg(msg);
    // }
    
    // function openAlert(msg, b) {
    //     setAlertMsg(msg);
    //     setShowAlert(b);
    // }

    // const [showInfo, setShowInfo] = useState(false);
    // const [infoMsg, setInfoMsg] = useState("");

    // function openInfo(msg,b){
    //     setInfoMsg(msg);
    //     setShowInfo(b);
    // }

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         showAlert : false,
    //         alertMsg : "",
    //         showInfo : false,
    //         infoMsg : ""
    //     }
    // }

    // parentAlert = (msg, b) =>{
    //     this.setState({
            
    //     })
    // }

    return (
        <>
        
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/logout" element={<Logout/>}></Route>
                </Routes>
                
            </BrowserRouter>
            {/* <Alert showAlert={showAlert} onClose={()=>setShowAlert(false)} alertMsg={alertMsg}/> */}
            {/* <Info showInfo={showInfo} onClose={()=>setShowInfo(false)} infoMsg={infoMsg}/> */}
        </>
    )
        
}

export default App;