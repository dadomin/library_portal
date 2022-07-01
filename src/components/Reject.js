const Reject = (props) => {
    const user = props.user;
    if(!props.showReject) {
        return null;
    }

    return(
        <div id="alert-form">
            <div className="alert-back" onClick={props.closeReject}></div>
            <div className="alert-txt" onClick={e => e.stopPropagation()}>
                <h1>반려</h1>
                <div>
                    <span>담당자</span>
                    <input type={"text"} placeholder={user.user_name}/>
                </div>
                <div>
                    <span>담당자 의견</span>
                    <textarea></textarea>
                </div>
                <button className="btn red-btn" onClick={props.closeReject}>확인</button>
                <button className="btn white-btn" onClick={props.closeReject}>닫기</button>
            </div>
        </div>
    )
}

export default Reject;