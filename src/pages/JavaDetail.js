import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JavaDetail = () =>{
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
    ];

    const id = parseInt(useParams().id);
    const [data, setData] = useState({});
    const [impStatus, setImpStatus] = useState("");
    const setStatus = (data) =>{
        let i = data.imp_status;
        setImpStatus(impStatusMsg[parseInt(i)].msg);
    }
    useEffect(()=>{
        
        console.log(id);

        axios
        .post('http://localhost:3787/lib/java/detail', {
            id : id
        })
        .then((res)=>{
            console.log(res.data[0]);
            setData(res.data[0]);
            setStatus(res.data[0]);
        })
    }, [])

    return(
        <>
        <section id="req-form">

            <h3 className="title-sub">이력관리 &gt; Java Library</h3>
            <h1 className="title">상세보기</h1>

            <section className="req-detail">

                <div className="req-detail-top">
                    <div>
                        <h1>No.</h1>
                        <p>{data.id}</p>
                    </div>
                    <div>
                        <h1>요청자</h1>
                        <p>{data.req_user_name}</p>
                    </div>
                    <div>
                        <h1>담당자</h1>
                        <p>{data.admin_user_name}</p>
                    </div>
                    <div>
                        <h1>상태</h1>
                        <p>{impStatus}</p>
                    </div>
                </div>
                <table id="date-table">
                    <thead>
                        <tr>
                            <th>요청 날짜</th>
                            <th>결재 날짜</th>
                            <th>반입 날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.req_date}</td>
                            <td>{data.app_date}</td>
                            <td>{data.imp_date}</td>
                        </tr>
                    </tbody>
                </table>

                
                <h1>라이브러리 정보</h1>
                <table id="library-table">
                    <tbody>
                        <tr>
                            <th>프로젝트 이름</th>
                            <td>{data.jgroup_id}</td>
                        </tr>
                        <tr>
                            <th>라이브러리 이름</th>
                            <td>{data.jlib_name}</td>
                        </tr>
                        <tr>
                            <th>라이브러리 버전</th>
                            <td>{data.jlib_ver}</td>
                        </tr>
                    </tbody>
                </table>

                <h1>신청사유</h1>
                <p>{data.lib_reason_comment}</p>
                <h1>담당자 의견</h1>
                <p>{data.admin_lib_comment}</p>
                <h1>전문 보기</h1>
                <textarea value={data.package_mgt_file} readOnly></textarea>
            </section>

        </section>
        </>
    )
}

export default JavaDetail;