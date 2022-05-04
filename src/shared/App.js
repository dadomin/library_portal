import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main  from "../pages/Main";
import Login from "../pages/Login";
import MainMenu from "../layout/MainMenu";

class App extends Component{

    
    render() {
        return (
            <>
            
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main/>}></Route>
                        <Route path="/login" element={<Login/>}></Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default App;