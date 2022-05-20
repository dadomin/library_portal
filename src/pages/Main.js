import axios from "axios";
import React, { useState } from "react";
import Footer from "../layout/Footer";
import MainMenu from "../layout/MainMenu";

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
    if(sessionStorage.user === undefined) {
        window.location.href = "/user/login";
        // console.log(JSON.parse(sessionStorage.user));
    }else {
        console.log(JSON.parse(sessionStorage.user));
    }

    return (
        <>
            <MainMenu/>
            <Footer/>
        </>
    )
}

export default Main;