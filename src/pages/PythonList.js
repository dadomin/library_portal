import axios from "axios";
import react, { useEffect } from "react";
import { useState } from "react";
import AdminPythonList from "../layout/AdminPythonList";
import UserPythonList from "../layout/UserPythonList";

function PythonList() {

    const impStatusMsg = [
        {
            id : 1,
            msg : "신청"
        },
        {
            id: 2,
            msg : "승인"
        },
        {
            id: 3,
            msg : "반려"
        },
        {
            id: 4,
            msg : "완료"
        },
        {
            id: 5,
            msg : "실패"
        }
    ]



    const [user, setUser] = useState({});
    
    const [now, setNow] = useState("");

    
    let pyList = [];
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    
    var dateString = year + '-' + month  + '-' + day;
    const [startDate, setStartDate] = useState(dateString);
    const [endDate, setEndDate] = useState(dateString);
    const [libName, setLibName] = useState("");
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");

    let checkStatus = [0,1,2,3,4];
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

    const changeStartDate = (e) => setStartDate(e.target.value);
    const changeEndDate = (e) => setEndDate(e.target.value);
    const changeLibName = (e) => {setLibName(e.target.value)};
    const changeUserName = (e) => {setUserName(e.target.value)};


    const getList = () => {
        console.log(pyList.length);
        console.log(now)
        document.getElementById("list-cnt").innerHTML = pyList.length;

        let arr = '';
        let s1 = 0;
        let s2 = 0;
        let s3 = 0;
        let s4 = 0;
        let s5 = 0;

        for(let i = 0; i< pyList.length; i++) {
            let y = pyList[i];
            let imp_status = parseInt(y.imp_status);
            if(imp_status === 0) s1++;
            if(imp_status === 1) s2++;
            if(imp_status === 2) s3++;
            if(imp_status === 3) s4++;
            if(imp_status === 4) s5++;
            let a = `
            <tr onclick="location.href='/lib/python/detail/${y.lib_id}'">
                <td>${y.lib_id}</td>
                <td>${y.python_ver}</td>
                <td>${y.plib_name}</td>
                <td>${y.plib_ver}</td>
                <td>${y.req_date}</td>
                <td>${y.req_user_name}</td>
                <td>
                    <div class="record-status status-${impStatusMsg[imp_status].id}"><p>${impStatusMsg[imp_status].msg}</p></div>
                </td>
            </tr>
            `;

            arr += a;

        }
        document.getElementById("list-box").innerHTML = arr;
        document.getElementById("s1").innerText = s1;
        document.getElementById("s2").innerText = s2;
        document.getElementById("s3").innerText = s3;
        document.getElementById("s4").innerText = s4;
        document.getElementById("s5").innerText = s5;
    }

    const getPyList = () => {
        if(userId === "") {
            console.log("a");
            console.log(libName)
        }
        if(startDate > endDate) {
            alert("시작날짜보다 종료날짜가 더 앞설수 없습니다.");
            return;
        }
        axios
        .post('http://localhost:3787/lib/python/list', {
            startDate : startDate,
            endDate : endDate,
            libName : libName,
            userId : userId,
            checkStatus : checkStatus,
            userName: userName
        })
        .then((res)=>{
            console.log(res.data);
            pyList = res.data;
            console.log(pyList);
            getList();
        })
    }

    
    useEffect(()=>{
        let n = sessionStorage.getItem('now');
        let u = JSON.parse(sessionStorage.getItem('user'));
        setUser(u);
        setNow(n);

        if(n === "0") {
            let target = document.getElementById("input-user-name");
            target.value = u.user_name;
            target.disabled= true;   
            setUserId(u.user_id);
            setUserName(u.user_name);
        }
        
        getPyList();
        
        
    }, []);

    return(
        <>
        <section id="req-form">
            <h3 className="title-sub">이력관리</h3>
            <h1 className="title">Python Library</h1>

            <section id="record-condition">
                <div>
                    <span>기간 설정</span>
                    <input type="date" defaultValue={dateString} onChange={e=>changeStartDate(e)}/>
                    <input type="date" defaultValue={dateString}  onChange={e=>changeEndDate(e)}/>
                </div>
                <div>
                    <span>상태</span>
                    <input type="checkbox" name="req-status" defaultChecked={1} onChange={e=>changeCheckStatus(e)} value={0}/>신청
                    <input type="checkbox" name="req-status" defaultChecked={1} onChange={e=>changeCheckStatus(e)} value={1}/>승인
                    <input type="checkbox" name="req-status" defaultChecked={1} onChange={e=>changeCheckStatus(e)} value={2}/>반려
                    <input type="checkbox" name="req-status" defaultChecked={1} onChange={e=>changeCheckStatus(e)} value={3}/>완료
                    <input type="checkbox" name="req-status" defaultChecked={1} onChange={e=>changeCheckStatus(e)} value={4}/>실패
                </div>
                <div>
                    <span>라이브러리 이름</span>
                    <input type="text" onChange={e=>changeLibName(e)}/>
                </div>
                <div>
                    <span>신청자</span>
                    <input type="text" id="input-user-name" onChange={e=>changeUserName(e)}/>
                </div>
            </section>

            <div className="btn-tab">
                <button className="btn blue-btn" onClick={getPyList}>검색</button>
                <button className="btn white-btn" >초기화</button>
            </div>

            <section className="record-list">

                <div className="record-list-top">
                    <div className="record-list-top-sub">
                        <h1><span id="list-cnt">4</span>개의 요청 이력</h1>
                        <p>검색 조건에 알맞는 Python Library 신청 이력</p>
                    </div>
                    <div className="record-status-box">
                        <div className="record-status status-1">
                            <h1 id="s1">1</h1>
                            <p>신청</p>
                        </div>
                        <div className="record-status status-2">
                            <h1 id="s2">1</h1>
                            <p>승인</p>
                        </div>
                        <div className="record-status status-3">
                            <h1 id="s3">1</h1>
                            <p>반려</p>
                        </div>
                        <div className="record-status status-4">
                            <h1 id="s4">1</h1>
                            <p>완료</p>
                        </div>
                        <div className="record-status status-5">
                            <h1 id="s5">1</h1>
                            <p>실패</p>
                        </div>
                    </div>
                </div>

                <table>
                    <thead>
                    <tr>
                            <th>No.</th>
                            <th>Python 버전</th>
                            <th>라이브러리 이름</th>
                            <th>라이브러리 버전</th>
                            <th>신청일자</th>
                            <th>신청자</th>
                            <th>상태</th>
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

export default PythonList;