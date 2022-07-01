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
    const [data, setData] = useState({});
    const user = props.user;
    useEffect( () => {
        axios
        .post("http://localhost:3787/main", {
            now : props.now,
            userId : props.user.user_id
        })
        .then((res)=>{
            console.log(res.data.rows[0]);
            setData(res.data.rows[0])
        })
    },[])
    return(
        
        <section id="main">
            <h1>{user.user_name}님이 요청한 총 Library</h1>
            <div>
                <div>
                    <p>Total</p>
                    <h1>{data.cnt1}</h1>
                </div>
                
                <div>
                    <p>Python Library</p>
                    <h1>{data.cnt1}</h1>
                </div>

                <div>
                    <p>Java Library</p>
                    <h1>{data.cnt3}</h1>
                </div>
            </div>
            <h1>{user.user_name}님이 요청한 Python Library</h1>
            <div>
                <div>
                    <p>신청</p>
                    <h1>{data.cnt4}</h1>
                </div>
                
                <div>
                    <p>승인</p>
                    <h1>{data.cnt5}</h1>
                </div>

                <div>
                    <p>반려</p>
                    <h1>{data.cnt6}</h1>
                </div>
                
                <div>
                    <p>완료</p>
                    <h1>{data.cnt7}</h1>
                </div>
                
                <div>
                    <p>실패</p>
                    <h1>{data.cnt8}</h1>
                </div>
            </div>
            <h1>{user.user_name}님이 요청한 Java Library</h1>
            <div>
                <div>
                    <p>신청</p>
                    <h1>{data.cnt9}</h1>
                </div> 
                
                <div>
                    <p>승인</p>
                    <h1>{data.cnt10}</h1>
                </div>

                <div>
                    <p>반려</p>
                    <h1>{data.cnt11}</h1>
                </div>
                
                <div>
                    <p>완료</p>
                    <h1>{data.cnt12}</h1>
                </div>
                
                <div>
                    <p>실패</p>
                    <h1>{data.cnt13}</h1>
                </div>
            </div>
        </section>
        
    )
}
function AdminMain(props) {
    const [data, setData] = useState({});
    useEffect( () => {
        axios
        .post("http://localhost:3787/main", {
            now : props.now,
            userId : props.user.user_id
        })
        .then((res)=>{
            console.log(res.data.rows[0]);
            setData(res.data.rows[0])
        })
    },[])
    return(
        <section id="main">
            <h1>요청받은 Library 갯수</h1>
            <div>
                <div>
                    <p>Total</p>
                    <h1>{data.cnt1}</h1>
                </div>
                
                <div>
                    <p>Python Library</p>
                    <h1>{data.cnt1}</h1>
                </div>

                <div>
                    <p>Java Library</p>
                    <h1>{data.cnt3}</h1>
                </div>
            </div>
            <h1>요청받은 Python Library</h1>
            <div>
                <div>
                    <p>신청</p>
                    <h1>{data.cnt4}</h1>
                </div>
                
                <div>
                    <p>승인</p>
                    <h1>{data.cnt5}</h1>
                </div>

                <div>
                    <p>반려</p>
                    <h1>{data.cnt6}</h1>
                </div>
                
                <div>
                    <p>완료</p>
                    <h1>{data.cnt7}</h1>
                </div>
                
                <div>
                    <p>실패</p>
                    <h1>{data.cnt8}</h1>
                </div>
            </div>
            <h1>요청받은 Java Library</h1>
            <div>
                <div>
                    <p>신청</p>
                    <h1>{data.cnt9}</h1>
                </div> 
                
                <div>
                    <p>승인</p>
                    <h1>{data.cnt10}</h1>
                </div>

                <div>
                    <p>반려</p>
                    <h1>{data.cnt11}</h1>
                </div>
                
                <div>
                    <p>완료</p>
                    <h1>{data.cnt12}</h1>
                </div>
                
                <div>
                    <p>실패</p>
                    <h1>{data.cnt13}</h1>
                </div>
            </div>
        </section>
    )
}

export default Main;