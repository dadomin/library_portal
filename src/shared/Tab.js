import ChangeAdmin from "../action/ChangeAdmin";
import ChangeUser from "../action/ChangeUser";
import Logout from "../action/Logout";
import PythonReqForm from "../layout/PythonReqForm";
import JavaReqForm from "../layout/JavaReqForm";
import Login from "../pages/Login";
import Main from "../pages/Main";
import PythonList from "../layout/PythonList";

function Tab(props) {
    const tab = props.tab;

    if(tab === "main") {
        return <Main/>
    }

    if(tab === "login") {
        return <Login/>
    }

    if(tab === "logout") {
        return <Logout/>
    }

    if(tab === "changeUser") {
        console.log('asd');
        return <ChangeUser/>
    }

    if(tab === "changeAdmin") {
        return <ChangeAdmin/>
    }

    if(tab === "pythonReq") {
        return <PythonReqForm/>
    }

    if(tab === "javaReq") {
        return <JavaReqForm/>
    }

    if(tab === "pythonList") {
        return <PythonList/>
    }
}

export default Tab;