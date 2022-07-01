const Approve = (props) => {
    const user = props.user;
    if(!props.showApprove) {
        return null;
    }

    return(
        <div id="info-form">
            <div className="info-back" onClick={props.closeApprove}></div>
            <div className="info-txt" onClick={e => e.stopPropagation()}>
                <h1>승인</h1>
                <div>
                    <span>담당자</span>
                    <input type={"text"} placeholder={user.user_name}/>
                </div>
                <div>
                    <span>담당자 의견</span>
                    <textarea></textarea>
                </div>
                <button className="btn blue-btn" onClick={props.closeApprove}>확인</button>
                <button className="btn white-btn" onClick={props.closeApprove}>닫기</button>
            </div>
        </div>
    )
}

export default Approve;