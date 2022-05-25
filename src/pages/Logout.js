

const Logout=() =>{

    if(sessionStorage.user === null) {
        alert("로그인 후 이용해주세요.");
        return;
    }else {
        alert("로그아웃 되었습니다.");
        sessionStorage.clear();
        window.location.href="/login";
        return;
    }

}

export default Logout;