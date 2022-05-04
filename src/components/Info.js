import React from "react";

const Info = props => {

    if(!props.showAlert) {
        return null;
    }

    return (
        <div className="info">
            <p>성공적으로 로그인되었습니다.</p>
        </div>
    )

}

export default Info;
