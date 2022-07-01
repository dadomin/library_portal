import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserJavaDetail from "../layout/UserJavaDetail";

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
        axios
        .post('http://localhost:3787/lib/java/detail', {
            id : id
        })
        .then((res)=>{
            setData(res.data[0]);
            setStatus(res.data[0]);
        })
    }, [])
    const [user, setUser] = useState({});
    
    const [now, setNow] = useState("");
    useEffect(()=>{

        
        setUser(JSON.parse(sessionStorage.getItem('user')));
        setNow(sessionStorage.getItem('now'));
        
        
        
    }, []);

    if(now === "1") {

    }else if(now === "0") {
        return <UserJavaDetail user={user} data={data} impStatus={impStatus} />;
    }
}

export default JavaDetail;