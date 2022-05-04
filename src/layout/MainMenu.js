import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class MainMenu extends Component {

    render() {
        
        return (
            <header>
                <Link to={'/'}>라이브러리 반입 프로세스</Link>
                <div id="menu-tab">
                    <Link to={"/library"}>라이브러리 반입
                    <div className=""></div>
                    </Link>
                    <Link to={"/"}>이력관리</Link>
                    <div className="profile-tab">
                        <h1>22200223</h1>
                        <p>ICT 운영부 김다민</p>
                        <div className="logout-tab"><Link to={"/login"}>로그아웃</Link></div>
                    </div>
                </div>
            </header>
        )
    }

}

export default  MainMenu;