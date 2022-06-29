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
    useEffect(()=>{

        
        setUser(JSON.parse(sessionStorage.getItem('user')));
        setNow(sessionStorage.getItem('now'));
        
        
        
    }, []);


    if(now === "1") {
        return <AdminPythonList impStatusMsg={impStatusMsg} />
    }else if(now === "0") {
        return <UserPythonList impStatusMsg={impStatusMsg} user={user}/>
    }

   


}

function AdminList(props) {
    
}

export default PythonList;