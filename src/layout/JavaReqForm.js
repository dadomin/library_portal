
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {faFileCode} from "@fortawesome/free-solid-svg-icons"

function JavaReqForm() {

   const [fileType, setFileType] = useState("ft-file");
   
   const changeFileType = (e) => {
       setFileType(e.target.id);
   }

   const checkForm = (e) => {
    console.log(fileType)
   }

    return(
        <>
        <section id="req-form">
            <h1>Java Library</h1>

            
            <div className="req-detail req-detail-2">
                <div id="req-choice">
                    <span>프로젝트 종류</span>
                    <ul className="ft-file-tab">
                        <li>
                            <input type="radio" className="dn" onChange={e=>changeFileType(e)} name="ft-file" id="ft-file" defaultChecked="checked"/>
                            <label htmlFor="ft-file" className="green-btn">Maven</label>
                        </li>
                        <li>
                            <input type="radio" className="dn"onChange={e=>changeFileType(e)} name="ft-file" id="ft-write"/>
                            <label htmlFor="ft-write" className="green-btn">Gradle</label>
                        </li>
                    </ul>

                    
                </div>
                <div>
                    <span>파일 첨부</span>
                    
                    <div className="ft-file-box">
                        <input type="file" id="ft-file-input" className=""/>
                        <label htmlFor="ft-file-input">
                        <FontAwesomeIcon icon={faFileCode} />
                            <p>파일을 찾아 선택하세요.</p>
                        </label>
                    </div>
                </div>
                <div>
                    <span>신청 사유</span>
                    <textarea placeholder="신청 사유를 입력하세요."></textarea>
                </div>
                
            </div>

            <div className="btn-tab">
                <button className="btn blue-btn" onClick={checkForm}>신청</button>
                <button className="btn white-btn" >초기화</button>
            </div>

        </section>
        </>
    )
}

export default JavaReqForm;