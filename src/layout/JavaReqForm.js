
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {faFileCode} from "@fortawesome/free-solid-svg-icons"

function JavaReqForm() {

   const [fileType, setFileType] = useState("ft-file");
   
   const changeFileType = (e) => {
       setFileType(e.target.id);
   }

   const asdf = (e) => {
    console.log(fileType)
   }

    return(
        <>
        <section id="req-form">
            <h1>Java Library</h1>

            
            <div className="req-detail req-detail-2">
                <div id="req-choice">
                    <p>pom.xml OR build.gradle File</p>
                    <ul className="ft-file-tab">
                        <li>
                            <input type="radio" className="dn" onChange={e=>changeFileType(e)} name="ft-file" id="ft-file" defaultChecked="checked"/>
                            <label htmlFor="ft-file" className="green-btn">Choose File</label>
                            <div className="ft-file-box">
                                <input type="file" id="ft-file-input"/>
                                <label htmlFor="ft-file-input">
                                <FontAwesomeIcon icon={faFileCode} />
                                    <p>파일을 찾아 선택하세요.</p>
                                </label>
                            </div>
                        </li>
                        <li>
                            <input type="radio" className="dn"onChange={e=>changeFileType(e)} name="ft-file" id="ft-write"/>
                            <label htmlFor="ft-write" className="green-btn">Write Directly</label>
                                    
                            <div className="ft-file-box">
                                <textarea/>
                            </div>
                        </li>
                    </ul>

                    
                </div>
                <div>
                    <span>신청 사유</span>
                    <textarea></textarea>
                </div>
                
            </div>

            <div className="btn-tab">
                <button className="btn blue-btn" onClick={asdf}>신청</button>
                <button className="btn white-btn" >초기화</button>
            </div>

        </section>
        </>
    )
}

export default JavaReqForm;