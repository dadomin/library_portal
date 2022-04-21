import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [id, setId] = useState("");
    const handleId = (e) => setId(e.target.value);

    const [pw, setPw] = useState("");
    const handlePw = (e) => setPw(e.target.value);

    function inputCheck() {
        console.log(id);
        console.log(pw);
        if(id == "" || pw == "") {
            alert("빈값 존재");
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

            </section>
        </section>
    )

}
export default Login;