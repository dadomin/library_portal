
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {faFileCode} from "@fortawesome/free-solid-svg-icons"

function JavaReqForm() {

    const [fileType, setFileType] = useState("maven");
    const [libReason, setLibReason] = useState("");
    const [libFile, setLibFile] = useState("");

    const changeLibFile = (e) => {setLibFile(e.target.value)}
    const changeLibReason = (e) => {setLibReason(e.target.value)}
    const changeFileType = (e) => {setFileType(e.target.id)}

    const readFile = (file) => {
        let fr = new FileReader();
        fr.onload = () => {
            document.getElementById('output').textContent = fr.result;
            console.log(fr.result);
        }
        fr.readAsText(file);
    }
    const changeFile = (e) => {
        console.log(e.target.files[0]);
        let file = e.target.files[0];
        readFile(file);
    }
    const checkForm = (e) => {
        if(libFile === "") {alert("파일이 비워져있습니다."); return;}

    }

    

    return(
        <>
        <section id="req-form">
                
            <h3 className="title-sub">라이브러리 반입</h3>
            <h1 className="title">Java Library</h1>

            
            <div className="req-detail req-detail-2">
                <div id="req-choice">
                    <span>프로젝트 종류</span>
                    <ul className="ft-file-tab">
                        <li>
                            <input type="radio" className="dn" onChange={e=>changeFileType(e)} name="ft-file" id="maven" defaultChecked="checked"/>
                            <label htmlFor="maven" className="green-btn">Maven</label>
                        </li>
                        <li>
                            <input type="radio" className="dn"onChange={e=>changeFileType(e)} name="ft-file" id="gradle"/>
                            <label htmlFor="gradle" className="green-btn">Gradle</label>
                        </li>
                    </ul>

                    
                </div>
                
                <div>
                    <span>파일 첨부</span>
                    
                    <div className="ft-file-box">
                        <input type="file" id="ft-file-input" className="dn" onChange={e=>changeFile(e)}/>
                        <label htmlFor="ft-file-input">
                        <FontAwesomeIcon icon={faFileCode} />
                            <p>파일을 찾아 선택하세요.</p>
                        </label>
                    </div>
                </div>

                <div>
                    <span>파일 첨부 내용</span>
                    <pre id="output" onChange={e=>changeLibFile(e)}></pre>
                </div>
                <div>
                    <span>신청 사유</span>
                    <textarea placeholder="신청 사유를 입력하세요." onChange={e=>changeLibReason(e)}></textarea>
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