import axios from "axios";
import React,{ useState } from "react";

function PythonReqForm() {

    const now = sessionStorage.getItem("now");
    
    const [pyVer, setPyVer] = useState("");
    const [libVer, setLibVer] = useState("");
    const [libName, setLibName] = useState("");
    const [libReason, setLibReason] = useState("");

    const changePyVer = (e) => setPyVer(e.target.value);
    const changeLibVer = (e) => setLibVer(e.target.value);
    const changeLibName= (e) => setLibName(e.target.value);
    const changeLibReason = (e) => setLibReason(e.target.value);

    if(now !== "0") {
        alert("일반 사용자만 반입 신청 할 수 있습니다.");
        return;
    }

    const onReset = () => {
        setPyVer("");
        setLibVer("");
        setLibName("");
        setLibReason("");
    }

    const checkInput = () =>{
        if(pyVer === "" || libVer === "" || libName === "" || libReason === "") {
            alert("비워진 값이 존재합니다.");
            return;
        }
        reqLib();
    }

    const reqLib = () => {
        console.log({pyVer, libName, libVer, libReason});
        axios
        .post('http://localhost:3787/lib/python/req/1', {
            pyVer : pyVer,
            libVer : libVer,
            libName : libName
        })
        .then((res)=>{
            axios
            .post('http://localhost:3787/lib/python/req/2', {})
            .then((res2)=>{
                axios
                .post('http://localhost:3787/lib/python/req/3', {
                    userId : JSON.parse(sessionStorage.getItem('user')).user_id,
                    userName : JSON.parse(sessionStorage.getItem('user')).user_name,
                    pyId : res2.data[0].id,
                    libReason : libReason,
                    libKind : "python",
                })
                .then((res3)=>{

                })
            })
        })
        
    }
    
    const removeForm = () => {
        let inputList = document.getElementsByClassName("req-d");
        console.log(inputList)
        for( let i = 0; i < inputList.length; i++) {
            console.log(inputList[i].value);
            inputList[i].value = "";
        }
        onReset();
    }

    return(
        <>
        <section id="req-form">
            <h3 className="title-sub">라이브러리 반입</h3>
            <h1 className="title">Python Library</h1>

            <div className="req-detail">
                <div>
                    <span>Python Version</span>
                    <input type={"text"} className="req-d" placeholder={'파이썬 버전을 입력하세요.'} onChange={e => changePyVer(e)}/>
                </div>
                <div>
                    <span>Library Name</span>
                    <input type={"text"} className="req-d" placeholder={'라이브러리 이름을 입력하세요.'} onChange={e => changeLibName(e)}/>
                </div>
                <div>
                    <span>Library Version</span>
                    <input type={"text"} className="req-d" placeholder={'라이브러리 버전을 입력하세요.'} onChange={e => changeLibVer(e)}/>
                </div>
                <div>
                    <span>신청 사유</span>
                    <textarea className="req-d" placeholder={'신청 사유를 입력하세요.'} onChange={e => changeLibReason(e)}></textarea>
                </div>
            </div>

            <div className="btn-tab">
                <button className="btn blue-btn" onClick={checkInput}>신청</button>
                <button className="btn white-btn" onClick={removeForm}>초기화</button>
            </div>

        </section>
        </>
    )

}

export default PythonReqForm;