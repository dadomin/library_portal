import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Approve from "../components/Approve";
import Reject from "../components/Reject";

const AdminPythonDetail = (props) => {

    const data = props.data;
    const impStatus = props.impStatus;


    const navigate = useNavigate();
    const goBack=()=>{navigate(-1)}
    const [showApprove, setShowApprove] = useState(false);
    const [showReject, setShowReject] = useState(false);
    const [user, setUser] = useState({});
    
    const [now, setNow] = useState("");
    useEffect(()=>{
        setUser(JSON.parse(sessionStorage.getItem('user')));
        setNow(sessionStorage.getItem('now'));
    }, []);

   
    const closeApprove = () => {
        setShowApprove(false);
    }

    const closeReject = () => {
        setShowReject(false);
    }

    const openApprove = () => {
        setShowApprove(true);
    }

    const openReject = () => {
        setShowReject(true);
    }

    if(impStatus !== "신청") {
        
    return(
        <>
        <section id="req-form">

            <h3 className="title-sub">이력관리 &gt; Python Library</h3>
            <h1 className="title">상세보기</h1>

            <div className="req-detail">
                
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
                            <th>Python 버전</th>
                            <td>{data.python_ver}</td>
                        </tr>
                        <tr>
                            <th>라이브러리 이름</th>
                            <td>{data.plib_name}</td>
                        </tr>
                        <tr>
                            <th>라이브러리 버전</th>
                            <td>{data.plib_ver}</td>
                        </tr>
                    </tbody>
                </table>

                <h1>신청사유</h1>
                <p>{data.lib_reason_comment}</p>
                <h1>담당자 의견</h1>
                <p>{data.admin_lib_comment}</p>
            </div>

            
            <div className="btn-tab">
                <button className="btn white-btn" onClick={goBack}>뒤로가기</button>
            </div>

        </section>
        </>
    )
    }else {
        
    return(
        <>
        <section id="req-form">

            <h3 className="title-sub">이력관리 &gt; Python Library</h3>
            <h1 className="title">상세보기</h1>

            <div className="req-detail">
                
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
                            <th>Python 버전</th>
                            <td>{data.python_ver}</td>
                        </tr>
                        <tr>
                            <th>라이브러리 이름</th>
                            <td>{data.plib_name}</td>
                        </tr>
                        <tr>
                            <th>라이브러리 버전</th>
                            <td>{data.plib_ver}</td>
                        </tr>
                    </tbody>
                </table>

                <h1>신청사유</h1>
                <p>{data.lib_reason_comment}</p>
                <h1>담당자 의견</h1>
                <p>{data.admin_lib_comment}</p>
            </div>

            
            <div className="btn-tab">
                <button className="btn white-btn" onClick={goBack}>뒤로가기</button>
                <button className={"btn blue-btn "} onClick={openApprove}>승인</button>
                <button className={"btn red-btn "} onClick={openReject}>반려</button>
            </div>

        </section>
        <Approve showApprove={showApprove} closeApprove={closeApprove} user={user}/>
        <Reject showReject={showReject} closeReject={closeReject} user={user} />
        </>
    )
    }
}

export default AdminPythonDetail;