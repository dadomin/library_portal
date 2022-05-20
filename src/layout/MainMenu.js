import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class MainMenu extends Component {

    

     

    render() {
        

     
        return (
            <header>
                <Link to={'/main'}>라이브러리 반입 프로세스</Link>
                <div id="menu-tab">
                    <div className="main-menu">
                        <div><span>라이브러리 반입</span>
                            <div className="menu-sub">
                                <Link to ={'/main'}>Python Library</Link>
                                <Link to ={'/main'}>Java Library</Link>
                            </div>
                        </div>
                        <div>
                            <span>이력관리</span>
                            <div className="menu-sub">
                                <Link to ={'/main'}>Python Library</Link>
                                <Link to ={'/main'}>Java Library</Link>
                            </div>
                        </div>
                    </div>
        
                    <div className="profile-tab">
                        <h1>22200223</h1>
                        <p>ICT 운영부 김다민</p>
                        <div className="menu-sub logout-tab">
                            <Link to ={'/main'}>관리자 전환</Link>
                            <Link to ={'/main'}>로그아웃</Link>
                        </div>
                    </div>
                </div>
            
             </header>
    
        )
    }

}

export default  MainMenu;