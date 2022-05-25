import axios from "axios";
import React, { useState } from "react";
import Footer from "../layout/Footer";
import MainMenu from "../layout/MainMenu";
import Alert from "../components/Alert";
import Info from "../components/Info";

function Main() {

    // const [showAlert, setShowAlert] = useState(false);
    // const [alertMsg, setAlertMsg] = useState("");
    
    // function openAlert(msg, b) {
    //     setAlertMsg(msg);
    //     setShowAlert(b);
    // }

    // const [showInfo, setShowInfo] = useState(false);
    // const [infoMsg, setInfoMsg] = useState("");

    // function openInfo(msg, b) {
    //     setInfoMsg(msg);
    //     setShowInfo(b);
    // }
    

    return (
        <>
            <MainMenu/>
            {/* <Alert showAlert={showAlert} onClose={()=>setShowAlert(false)} alertMsg={alertMsg}/> */}
            {/* <Info showInfo={showInfo} onClose={()=>setShowInfo(false)} infoMsg={infoMsg}/> */}
            <Footer/>
            
        </>
    )
}

export default Main;