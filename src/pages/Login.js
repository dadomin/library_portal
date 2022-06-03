import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import Info from "../components/Info";

const Login = () => {


    const [id, setId] = useState("");
    const handleId = (e) => setId(e.target.value);

    const [pw, setPw] = useState("");
    const handlePw = (e) => setPw(e.target.value);

    
    if(sessionStorage.getItem('user') != null) {
        alert("로그아웃 후 로그인 하세요");
        window.location.href = "/";
        return;
    }
    //alert창
    // function openAlert(msg, b) {
    //     props.alertMsg = msg;
    //     props.setShowAlert(b);
    // }

    // const [showInfo, setShowInfo] = useState(false);
    // const [infoMsg, setInfoMsg] = useState("");

    // function openInfo(msg,b){
    //     setInfoMsg(msg);
    //     setShowInfo(b);
    // }

    function inputCheck() {
        console.log(id);
        console.log(pw);
        if(id === "" || pw === "") {
            alert("비워진 값이 존재합니다")
            return;
        }
        
        axios
        .post('http://localhost:3787/user/login', {
            id : id,
            pw : pw
        })
        .then((res)=>{
            let userData = res.data[0];
            if(userData === undefined) {
                alert("ID 혹은 비밀번호 오류");
                return;
            }
            console.log("로그인 성공");
            // console.log(JSON.stringify(userData));
            sessionStorage.removeItem('user');

            sessionStorage.removeItem('user_id');
            sessionStorage.setItem('user', JSON.stringify(userData));
            sessionStorage.removeItem('now');
            sessionStorage.setItem('now', userData.admin_type);
            console.log(sessionStorage);
            // sessionStorage.user.forEach(x=>{
            //     console.log(x);
            // })
            // openInfo(`${userData.user_name}님 로그인 성공`, true);
            
            alert(`${JSON.parse(sessionStorage.user).user_name}님 로그인 성공`);
            window.location.href= "/";
            // console.log(sessionStorage.user);
        })
    }


    return(
        <section id="login">
            <section id="login-bar">
                <img src={require('../img/login-back.png')} alt="back" id="login-back"/>
                <div className="login-txt">
                    <p>Shinhan Bank</p>
                    <h3>라이브러리 반입 프로세스</h3>
                </div>
                {/* <ul className="login-mode-menu">
                    <li><input type="radio" name="login-mode" id="login-mode-user" className="dn"defaultChecked="checked"/> <label htmlFor="login-mode-user">사용자</label></li>
                    <li><input type="radio" name="login-mode" id="login-mode-admin" className="dn"/><label htmlFor="login-mode-admin">관리자</label></li>
                </ul> */}
            </section>
            <section id="login-tab">

                <div className="login-form">
                    <h1>LOGIN</h1>

                    <p>ID</p>
                    <input className="input"type={"text"} placeholder={"행번 입력 (ex) 22200223"} onChange={e=> handleId(e)}/>

                    <p>Password</p>
                    <input className="input" type={"password"} placeholder={"비밀번호 입력"} onChange={e => handlePw(e)}/>

                    <Link to={'/login'}>비밀번호 초기화</Link>

                    <button onClick={inputCheck}>LOGIN</button>
                </div>
                {/* <Alert showAlert={props.showAlert} onClose={()=>setShowAlert(false)} alertMsg={props.alertMsg}/>
                <Info showInfo={showInfo} onClose={()=>setShowInfo(false)} infoMsg={infoMsg}/> */}
                
            </section>
            
        </section>
    )

}
export default Login;