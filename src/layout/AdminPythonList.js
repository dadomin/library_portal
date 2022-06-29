import axios from "axios";
import { useEffect } from "react";

const AdminPythonList = (props) => {

    let pyList = [];

    const getList = () => {
        console.log(pyList.length);
        document.getElementById("list-cnt").innerHTML = pyList.length;

        let arr = '';

        for(let i = 0; i< pyList.length; i++) {
            let y = pyList[i];
            let imp_status = parseInt(y.imp_status);
            console.log(props.impStatusMsg[imp_status].id);
            let a = `
            <tr onclick="location.href='/lib/python/detail/${y.lib_id}'">
                <td>${y.lib_id}</td>
                <td>${y.python_ver}</td>
                <td>${y.plib_name}</td>
                <td>${y.plib_ver}</td>
                <td>${y.req_date}</td>
                <td>${y.req_user_name}</td>
                <td>
                    <div class="record-status status-${props.impStatusMsg[imp_status].id}"><p>${props.impStatusMsg[imp_status].msg}</p></div>
                </td>
            </tr>
            `;

            arr += a;

        }
        document.getElementById("list-box").innerHTML = arr;
    }

    const getPyList = () => {
        axios
        .post('http://localhost:3787/lib/python/list', {})
        .then((res)=>{
            console.log(res.data);
            pyList = res.data;
            console.log(pyList);
            getList();
        })
    }

    useEffect(()=>{
        axios
        .post('http://localhost:3787/lib/python/list', {})
        .then((res)=>{
            console.log(res.data);
            pyList = res.data;
            console.log(pyList);
            getList();
        })
    })

    return(
        <>
        <section id="req-form">
            <h3 className="title-sub">이력관리</h3>
            <h1 className="title">Python Library</h1>

            <section id="record-condition">
                <div>
                    <span>기간 설정</span>
                    <input type="date"/>
                    <input type="date"/>
                </div>
                <div>
                    <span>상태</span>
                    <input type="checkbox" name="req-status"/>신청
                    <input type="checkbox" name="req-status"/>승인
                    <input type="checkbox" name="req-status"/>반려
                    <input type="checkbox" name="req-status"/>완료
                    <input type="checkbox" name="req-status"/>실패
                </div>
                <div>
                    <span>라이브러리 이름</span>
                    <input type="text"/>
                </div>
                <div>
                    <span>신청자</span>
                    <input type="text"/>
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
                            <h1>1</h1>
                            <p>신청</p>
                        </div>
                        <div className="record-status status-2">
                            <h1>1</h1>
                            <p>승인</p>
                        </div>
                        <div className="record-status status-3">
                            <h1>1</h1>
                            <p>반려</p>
                        </div>
                        <div className="record-status status-4">
                            <h1>1</h1>
                            <p>완료</p>
                        </div>
                        <div className="record-status status-5">
                            <h1>1</h1>
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

export default AdminPythonList;