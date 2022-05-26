import axios from "axios";
import React, { useState } from "react";
import Footer from "../layout/Footer";
import MainMenu from "../layout/MainMenu";
import Alert from "../components/Alert";
import Info from "../components/Info";

function Main(props) {

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
            {/* <Alert showAlert={showAlert} onClose={()=>setShowAlert(false)} alertMsg={alertMsg}/> */}
            {/* <Info showInfo={showInfo} onClose={()=>setShowInfo(false)} infoMsg={infoMsg}/> */}
            <h1>메인</h1>
            
        </>
    )
}

export default Main;