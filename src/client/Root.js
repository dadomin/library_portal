import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import App from "../shared/App";


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
            <Route path="/user/detail/:id" element={<App tab="userDetail"></App>}></Route>
        </Routes>
        
    </BrowserRouter>
);

export default Root;