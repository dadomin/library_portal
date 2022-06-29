import React, { useEffect, useState } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

function MainMenu () {

    const [user, setUser] = useState({});
    
    const [now, setNow] = useState("");
    useEffect(()=>{

        
        setUser(JSON.parse(sessionStorage.getItem('user')));
        setNow(sessionStorage.getItem('now'));
        
    }, []);
    
    if(now === null) {
        alert("로그인 후 이용 바랍니다.");
        window.location.href = "/login";
        return;
    }

    if(now === "1") {
        return <AdminGreeting user={user} now = {now} />
    }else if(now === "0") {

        return <UserGreeting user={user} now = {now} />
    }

}

function UserGreeting(props) {
    
    return (
        <header>
        <Link to={'/'}>라이브러리 반입 프로세스</Link>
        <div id="menu-tab">
            <div className="main-menu">
                <div><span>라이브러리 반입</span>
                    <div className="menu-sub">
                        <Link to ={'/lib/python/req'}>Python Library</Link>
                        <Link to ={'/lib/java/req'}>Java Library</Link>
                    </div>
                </div>
                <div>
                    <span>이력관리</span>
                    <div className="menu-sub">
                        <Link to ={'/lib/python/list'}>Python Library</Link>
                        <Link to ={'/lib/java/list'}>Java Library</Link>
                    </div>
                </div>
            </div>

            <div className="profile-tab">
                <h1>{props.user.user_name}</h1>
                <p>{props.user.user_dept}</p>
                <div className="menu-sub logout-tab">
                    <Link to ={'/change/admin'}>관리자 전환</Link>
                    <Link to ={'/logout'}>로그아웃</Link>
                </div>
            </div>
        </div>
    
        </header>
    )
}

function AdminGreeting(props) {
    return (
        <header id="admin-header">
        <Link to={'/'}>라이브러리 반입 프로세스</Link>
        <div id="menu-tab">
            <div className="main-menu">
                <div><span>이력관리</span>
                    <div className="menu-sub">
                        <Link to ={'/lib/python/list'}>Python Library</Link>
                        <Link to ={'/lib/java/list'}>Java Library</Link>
                    </div>
                </div>
                <div>
                    <Link to={'/user/list'}>사용자관리</Link>
                </div>
            </div>

            <div className="profile-tab">
                <h1>{props.user.user_name}</h1>
                <p>{props.user.user_dept}</p>
                <div className="menu-sub logout-tab">
                    <Link to ={'/change/user'}>사용자 전환</Link>
                    <Link to ={'/logout'}>로그아웃</Link>
                </div>
            </div>
        </div>
    
        </header>
    )
}

export default  MainMenu;