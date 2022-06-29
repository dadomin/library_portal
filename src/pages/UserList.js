import axios from "axios";
import { useEffect } from "react";

const UserList = () => {

    const userType = [
        {name : "사용자"},
        {name : "관리자"},
        {name : "시스템관리자"}
    ]

    let userList = [];


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

    useEffect(()=>{
        axios
        .post("http://localhost:3787/user/list")
        .then((res)=>{
            console.log(res.data);
            userList = res.data;
            showList();
        })
    })

    return(
        <>
        <section id="req-form">

            <h1 className="title">사용자관리</h1>


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