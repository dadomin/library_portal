import axios from "axios";
import { useEffect, useState } from "react";
import UserDetail from "./UserDetail";

const UserList = () => {
    
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [userDept, setUserDept] = useState("");
    const [userGrade, setUserGrade] = useState("");
    let checkStatus = [0,1];
    const changeCheckStatus = (e) => {
        console.log(e.target.value);
        let exist = false;
        for(let i = 0; i < checkStatus.length; i++) {
            if(checkStatus[i] === parseInt(e.target.value)){
                checkStatus.splice(i,1);
                exist = !exist;
                i--;
            }
        }
        if(!exist) {
            checkStatus.push(parseInt(e.target.value));
        }
        console.log(checkStatus);
    }
    const changeUserId = (e) => {setUserId(e.target.value)}
    const changeUserName = (e) => {setUserName(e.target.value)}
    const changeUserDept = (e) => {setUserDept(e.target.value)}
    const changeUserGrade = (e) => {setUserGrade(e.target.value)}


    const userType = [
        {name : "사용자"},
        {name : "관리자"},
        {name : "시스템관리자"}
    ]

    let userList = [];

    const [user, setUser] = useState({});
    
    const [now, setNow] = useState("");
    useEffect(()=>{
        setUser(JSON.parse(sessionStorage.getItem('user')));
        setNow(sessionStorage.getItem('now'));
        setList();
        
    }, []);



    const showList = () => {
        
        console.log(userList.length);
        document.getElementById("list-cnt").innerHTML = userList.length;

        let arr = '';

        for(let i = 0; i< userList.length; i++) {
            let y = userList[i];
            let a = `
            <tr onclick="location.href='/user/detail/${y.user_id}'">
                <td>${y.id}</td>
                <td>${y.user_name}</td>
                <td>${y.user_id}</td>
                <td>${y.user_dept}</td>
                <td>${y.user_grade}</td>
                <td>${userType[y.admin_type].name}</td>
            </tr>
            `;

            arr += a;

        }
        document.getElementById("list-box").innerHTML = arr;
    }

    const setList = () => {
        console.log(checkStatus);
        axios
        .post("http://localhost:3787/user/list",{
            userId : userId,
            userName : userName,
            userDept : userDept,
            userGrade : userGrade,
            checkStatus : checkStatus
        })
        .then((res)=>{
            console.log(res.data);
            userList = res.data;
            showList();
        })
    }


    return(
        <>
        <section id="req-form">

            <h1 className="title">사용자관리</h1>
            <section id="record-condition">

                <div>
                    <span>행번</span>
                    <input type="text" onChange={e=>changeUserId(e)}/>
                </div>
                <div>
                    <span>부서명</span>
                    <input type="text"  onChange={e=>changeUserDept(e)}/>
                </div>
                <div>
                    <span>사용자 이름</span>
                    <input type="text" id="input-user-name" onChange={e=>changeUserName(e)}/>
                </div>
                <div>
                    <span>직급</span>
                    <input type="text"  onChange={e=>changeUserGrade(e)}/>
                </div>
                <div>
                    <span>상태</span>
                    <input type="checkbox" name="req-status" defaultChecked={1}  onChange={e=>changeCheckStatus(e)} value={0}/>일반 사용자
                    <input type="checkbox" name="req-status" defaultChecked={1}  onChange={e=>changeCheckStatus(e)} value={1}/>관리자
                </div>

            </section>

            <div className="btn-tab">
                <button className="btn blue-btn" onClick={setList}>검색</button>
                <button className="btn white-btn" >초기화</button>
            </div>

            <section className="record-list">

                <div className="record-list-top">
                    <div className="record-list-top-sub">
                        <h1><span id="list-cnt">4</span>명의 사용자</h1>
                        <p>검색 조건에 알맞는 사용자 목록</p>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>이름</th>
                            <th>행번</th>
                            <th>부서</th>
                            <th>직급</th>
                            <th>등급</th>
                        </tr>
                    </thead>

                    <tbody id="list-box">
                    
                    </tbody>
                </table>

            </section>
        </section>
        </>
    )
}

export default UserList;