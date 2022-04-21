import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main  from "../pages/Main";
import Login from "../pages/Login";
import MainMenu from "../layout/MainMenu";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/library" element={<MainMenu/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;