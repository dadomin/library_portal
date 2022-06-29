import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChangeAdmin from "../action/ChangeAdmin";
import ChangeUser from "../action/ChangeUser";
import Logout from "../action/Logout";
import Footer from "../layout/Footer";
import MainMenu from "../layout/MainMenu";
import Login from "../pages/Login";
import Main from "../pages/Main";
// import { Provider } from "react-redux";
import App from "../shared/App";

// const showAlert = false;
// const alertMsg = "";

// function reducer(state = showAlert, action) {
//     if(action.type === 'setShowAlert') {
//         showAlert = true;
//     }
// }

const Root = () => (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App tab="main"/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/logout" element={<App tab="logout"/>}></Route>
            <Route path="/change/user" element={<App tab="changeUser"/>}/>
            <Route path="/change/admin" element={<App tab="changeAdmin"/>}/>
            <Route path="/lib/python/req" element={<App tab="pythonReq"/>}/>
            <Route path="/lib/java/req" element={<App tab="javaReq"></App>}></Route>
            <Route path="/lib/python/list" element={<App tab="pythonList"></App>}></Route>
            <Route path="/lib/java/list" element={<App tab="javaList"/>}></Route>
            <Route path="/lib/python/detail/:id" element={<App tab="pythonDetail"></App>}></Route>
            <Route path="/lib/java/detail/:id" element={<App tab="javaDetail"></App>}></Route>
            <Route path="/user/list" element={<App tab="userList"></App>}></Route>
        </Routes>
        
    </BrowserRouter>
);

export default Root;