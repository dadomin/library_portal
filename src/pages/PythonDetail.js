import axios from "axios";
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import AdminPythonDetail from "../layout/AdminPythonDetail";
import UserPythonDetail from "../layout/UserPythonDetail";

const PythonDetail=()=> {
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
    const [dn, setDn] = useState("");
    const setStatus = (data) =>{
        let i = data.imp_status;
        setImpStatus(impStatusMsg[parseInt(i)].msg);
        setDn(impStatusMsg[parseInt(i)].id);
    }
    useEffect(()=>{
        
        console.log(id);

        axios
        .post('http://localhost:3787/lib/python/detail', {
            id : id
        })
        .then((res)=>{
            console.log(res.data[0]);
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

    if(now === "1")  {
        return <AdminPythonDetail user={user} data={data} impStatus={impStatus} dn = {dn} />
        
    }else if(now === "0") {
        return <UserPythonDetail user={user} data={data} impStatus={impStatus} />
    }


}

export default PythonDetail;