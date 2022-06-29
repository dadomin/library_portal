import axios from "axios";
import react, { useState } from "react";
import {useEffect} from "react";
const Main = () => {
    
    
    const [user, setUser] = useState({});
    
    const [now, setNow] = useState("");
    useEffect(()=>{

        
        setUser(JSON.parse(sessionStorage.getItem('user')));
        setNow(sessionStorage.getItem('now'));
        
        
    }, []);

   if(now === "1") {
        return <AdminMain user={user} now={now} />;
   }else if(now === "0") {
        return <UserMain user={user} now={now}/>;
   }
}

function UserMain(props) {
    useEffect( () => {
        axios
        .post("http://localhost:3787/main/user")
        .then((res)=>{
            console.log(res.data);
        })
    })
    return(
        
        <section id="main">
            <h1>사용자 메인</h1>
        </section>
        
    )
}
function AdminMain(props) {
    return(
        
        <section id="main">
            <h1>관리자 메인</h1>
        </section>
        
    )
}

export default Main;