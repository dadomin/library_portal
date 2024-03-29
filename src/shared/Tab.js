import ChangeAdmin from "../action/ChangeAdmin";
import ChangeUser from "../action/ChangeUser";
import Logout from "../action/Logout";
import PythonReqForm from "../layout/PythonReqForm";
import JavaReqForm from "../layout/JavaReqForm";
import Login from "../pages/Login";
import Main from "../pages/Main";
import PythonList from "../pages/PythonList";
import JavaList from "../pages/JavaList";
import PythonDetail from "../pages/PythonDetail";
import JavaDetail from "../pages/JavaDetail";
import UserList from "../pages/UserList";
import UserDetail from "../pages/UserDetail";

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

    if(tab === "javaList") {
        return <JavaList/>
    }

    if(tab === "pythonDetail") {
        return <PythonDetail/>
    }

    if(tab === "javaDetail") {
        return <JavaDetail/>
    }

    if(tab === "userList") {
        return <UserList/>
    }

    if(tab === "userDetail") {
        return <UserDetail/>
    }
}

export default Tab;