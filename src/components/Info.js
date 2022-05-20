import React from "react";

const Info = props => {

    if(!props.showInfo) {
        return null;
    }

    return (
        <div id="info-form">
            <div className="info-back" onClick={props.onClose}></div>
            <div className="info-txt" onClick={e => e.stopPropagation()}>
                <h1>안내</h1>
                <p>{props.infoMsg}</p>
                <button onClick={props.onClose}>확인</button>
            </div>
        </div>
    )

}

export default Info;
