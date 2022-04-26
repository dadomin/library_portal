import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";

const Login = ({}) => {

    const [id, setId] = useState("");
    const handleId = (e) => setId(e.target.value);

    const [pw, setPw] = useState("");
    const handlePw = (e) => setPw(e.target.value);

    //alert창
    const [showAlert, setShowAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");
    
    function openAlert(msg, b) {
        setAlertMsg(msg);
        setShowAlert(b);
    }

    function inputCheck() {
        console.log(id);
        console.log(pw);
        if(id === "" || pw === "") {
            openAlert("비워진 값이 존재합니다.", true)
            return;
        }
        window.location.href= "/";
    }


    return(
        <section id="login">
            <section id="login-bar">
                <img src={require('../img/login-back.png')} alt="back" id="login-back"/>
                <div className="login-txt">
                    <p>Shinhan Bank</p>
                    <h3>라이브러리 반입 프로세스</h3>
                </div>
                <ul className="login-mode-menu">
                    <li><input type="radio" name="login-mode" id="login-mode-user" className="dn"defaultChecked="checked"/> <label htmlFor="login-mode-user">사용자</label></li>
                    <li><input type="radio" name="login-mode" id="login-mode-admin" className="dn"/><label htmlFor="login-mode-admin">관리자</label></li>
                </ul>
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
                <Alert showAlert={showAlert} onClose={()=>setShowAlert(false)} alertMsg={alertMsg}/>
            </section>
            
        </section>
    )

}
export default Login;