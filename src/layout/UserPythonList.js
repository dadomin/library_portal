import axios from "axios";
import { useEffect, useState } from "react";

const UserPythonList = (props) =>{
    
    const user = props.user;
    const impStatusMsg = props.impStatusMsg;
    const now = props.now;

    let pyList = [];
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    
    var dateString = year + '-' + month  + '-' + day;
    const [startDate, setStartDate] = useState(dateString);
    const [endDate, setEndDate] = useState(dateString);
    const [libName, setLibName] = useState("");

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
    const changeLibName = (e) => {e.preventDefault();setLibName(e.target.value)};


    const getList = () => {
        console.log(pyList.length);
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

        if(startDate > endDate) {
            alert("?????????????????? ??????????????? ??? ????????? ????????????.");
            return;
        }
        axios
        .post('http://localhost:3787/lib/python/list', {
            startDate : startDate,
            endDate : endDate,
            libName : libName,
            userId : user.user_id,
            checkStatus : checkStatus,
            userName: user.user_name
        })
        .then((res)=>{
            console.log(res.data);
            pyList = res.data;
            console.log(pyList);
            getList();
        })
    }

    useEffect(()=>{
        getPyList();
        if(now ==="0") {
            console.log("????????????");
            console.log(user.user_id);
            console.log(startDate);
        }
    },[])

    return(
        <>
        <section id="req-form">
            <h3 className="title-sub">????????????</h3>
            <h1 className="title">Python Library</h1>

            <section id="record-condition">
                <div>
                    <span>?????? ??????</span>
                    <input type="date" defaultValue={dateString} onChange={e=>changeStartDate(e)}/>
                    <input type="date" defaultValue={dateString}  onChange={e=>changeEndDate(e)}/>
                </div>
                <div>
                    <span>??????</span>
                    <input type="checkbox" name="req-status" defaultChecked={1} onChange={e=>changeCheckStatus(e)} value={0}/>??????
                    <input type="checkbox" name="req-status" defaultChecked={1} onChange={e=>changeCheckStatus(e)} value={1}/>??????
                    <input type="checkbox" name="req-status" defaultChecked={1} onChange={e=>changeCheckStatus(e)} value={2}/>??????
                    <input type="checkbox" name="req-status" defaultChecked={1} onChange={e=>changeCheckStatus(e)} value={3}/>??????
                    <input type="checkbox" name="req-status" defaultChecked={1} onChange={e=>changeCheckStatus(e)} value={4}/>??????
                </div>
                <div>
                    <span>??????????????? ??????</span>
                    <input type="text" onChange={e=>changeLibName(e)}/>
                </div>
                <div>
                    <span>?????????</span>
                    <input type="text" placeholder={user.user_name} disabled/>
                </div>
            </section>

            <div className="btn-tab">
                <button className="btn blue-btn" onClick={getPyList}>??????</button>
                <button className="btn white-btn" >?????????</button>
            </div>

            <section className="record-list">

                <div className="record-list-top">
                    <div className="record-list-top-sub">
                        <h1><span id="list-cnt">4</span>?????? ?????? ??????</h1>
                        <p>?????? ????????? ????????? Python Library ?????? ??????</p>
                    </div>
                    <div className="record-status-box">
                        <div className="record-status status-1">
                            <h1 id="s1">1</h1>
                            <p>??????</p>
                        </div>
                        <div className="record-status status-2">
                            <h1 id="s2">1</h1>
                            <p>??????</p>
                        </div>
                        <div className="record-status status-3">
                            <h1 id="s3">1</h1>
                            <p>??????</p>
                        </div>
                        <div className="record-status status-4">
                            <h1 id="s4">1</h1>
                            <p>??????</p>
                        </div>
                        <div className="record-status status-5">
                            <h1 id="s5">1</h1>
                            <p>??????</p>
                        </div>
                    </div>
                </div>

                <table>
                    <thead>
                    <tr>
                            <th>No.</th>
                            <th>Python ??????</th>
                            <th>??????????????? ??????</th>
                            <th>??????????????? ??????</th>
                            <th>????????????</th>
                            <th>?????????</th>
                            <th>??????</th>
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

export default UserPythonList;