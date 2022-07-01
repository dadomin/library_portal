import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
    
    const userType = [
        {name : "사용자"},
        {name : "관리자"},
        {name : "시스템관리자"}
    ]

    const id = useParams().id;
    const [userData, setUserData] = useState({});

    const getUserDetail = (id) => {
        axios
        .post("http://localhost:3787/user/detail", {
            userId : id
        })
        .then((res)=>{
            let data = res.data[0]
            setUserData(data);
            document.getElementById("user-detail-userid").value = data.user_id;
            
            document.getElementById("user-detail-username").value = data.user_name;
            
            document.getElementById("user-detail-userdept").value = data.user_dept;
            
            document.getElementById("user-detail-usergrade").value = data.user_grade;
            
            document.getElementById("user-detail-admintype").value = userType[data.admin_type].name;
        })
        
    }

    useEffect(()=>{
        getUserDetail(id);
    },[])

    return(

        <>
        <section id="req-form">
            <h3 className="title-sub">사용자관리</h3>
            <h1 className="title">사용자 상세</h1>

            <section className="req-detail">
                <div>
                    <span>행번</span>
                    <input type={"text"} id={"user-detail-userid"} readOnly/>
                </div>
                <div>
                    <span>이름</span>
                    <input type={"text"} id={"user-detail-username"} />
                </div>
                <div>
                    <span>부서</span>
                    <input type={"text"} id={"user-detail-userdept"} />
                </div>
                <div>
                    <span>직급</span>
                    <input type={"text"} id={"user-detail-usergrade"}  />
                </div>
                <div>
                    <span>권한</span>
                    <input type={"text"} id={"user-detail-admintype"}  />
                </div>
            </section>

            <div className="btn-tab">
                <button className="btn white-btn">뒤로가기</button>
                <button className="btn blue-btn" >관리자권한부여</button>
                <button className="btn red-btn" >관리자권한회수</button>
            </div>
        </section>
        </>
    )
}

export default UserDetail;
