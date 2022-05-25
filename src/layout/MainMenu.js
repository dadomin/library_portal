import React, { useEffect, useState } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

function MainMenu () {

    const [user, setUser] = useState({});
    
    const [now, setNow] = useState("0");
    useEffect(()=>{

            setUser(JSON.parse(sessionStorage.user));
            setNow(user.admin_type);
    }, []);

    
    if(sessionStorage.user === undefined) {
        alert("로그인 후 이용 바랍니다.");
        window.location.href = "/login";
        return;
    }

  
   
    return (
        <header>
            <Link to={'/'}>라이브러리 반입 프로세스</Link>
            <div id="menu-tab">
                <div className="main-menu">
                    <div><span>라이브러리 반입</span>
                        <div className="menu-sub">
                            <Link to ={'/'}>Python Library</Link>
                            <Link to ={'/'}>Java Library</Link>
                        </div>
                    </div>
                    <div>
                        <span>이력관리</span>
                        <div className="menu-sub">
                            <Link to ={'/'}>Python Library</Link>
                            <Link to ={'/'}>Java Library</Link>
                        </div>
                    </div>
                </div>
    
                <div className="profile-tab">
                    <h1>{user.user_name}</h1>
                    <p>{user.user_dept}</p>
                    <div className="menu-sub logout-tab">
                        <Link to ={'/'}>관리자 전환</Link>
                        <Link to ={'/logout'}>로그아웃</Link>
                    </div>
                </div>
            </div>
        
            </header>

    )

}

export default  MainMenu;