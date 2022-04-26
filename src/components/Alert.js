import React from "react";

const Alert = props => {
    if(!props.showAlert) {
        return null;
    }
    return (
        
        <section id="alert-form">
            <div className="alert-back" onClick={props.onClose}></div>
            <div className="alert-txt" onClick={e => e.stopPropagation()}>
                <h1>경고</h1>
                <p>{props.alertMsg}</p>
                <button onClick={props.onClose}>확인</button>
            </div>
        </section>
    )
};

export default Alert;