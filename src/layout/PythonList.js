function PythonList() {

    return(
        <>
        <section id="req-form">
            <h3 className="title-sub">이력관리</h3>
            <h1 className="title">Python Library</h1>

            <section id="record-condition">
                <div>
                    <span>기간 설정</span>
                    <input type="date"/>
                    <input type="date"/>
                </div>
                <div>
                    <span>상태</span>
                    <input type="checkbox" name="req-status"/>신청
                    <input type="checkbox" name="req-status"/>승인
                    <input type="checkbox" name="req-status"/>반려
                    <input type="checkbox" name="req-status"/>완료
                    <input type="checkbox" name="req-status"/>실패
                </div>
                <div>
                    <span>라이브러리 이름</span>
                    <input type="text"/>
                </div>
                <div>
                    <span>신청자</span>
                    <input type="text"/>
                </div>
            </section>

            <div className="btn-tab">
                <button className="btn blue-btn">검색</button>
                <button className="btn white-btn" >초기화</button>
            </div>

            <section className="record-list">

                <div className="record-list-top">
                    <div className="record-list-top-sub">
                        <h1><span>4</span>개의 요청 이력</h1>
                        <p>검색 조건에 알맞는 Python Library 신청 이력</p>
                    </div>
                    <div className="record-status-box">
                        <div className="record-status ">
                            <h1>1</h1>
                            <p>신청</p>
                        </div>
                        <div className="record-status">
                            <h1>1</h1>
                            <p>승인</p>
                        </div>
                        <div className="record-status">
                            <h1>1</h1>
                            <p>반려</p>
                        </div>
                        <div className="record-status">
                            <h1>1</h1>
                            <p>완료</p>
                        </div>
                        <div className="record-status">
                            <h1>1</h1>
                            <p>실패</p>
                        </div>
                    </div>
                </div>

                <table>
                    <thead>
                    <tr>
                            <th>No.</th>
                            <th>Python 버전</th>
                            <th>라이브러리 이름</th>
                            <th>라이브러리 버전</th>
                            <th>신청일자</th>
                            <th>신청자</th>
                            <th>상태</th>
                    </tr>
                    </thead>

                    <tbody>
                            
                        <tr>
                            <td>1</td>
                            <td>9.1</td>
                            <td>mpw</td>
                            <td>0.4</td>
                            <td>2022-03-02 09:34:21</td>
                            <td>김다민</td>
                            <td> <div className="record-status">
                                
                                <p>완료</p>
                            </div></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>9.1</td>
                            <td>mpw</td>
                            <td>0.4</td>
                            <td>2022-03-02 09:34:21</td>
                            <td>김다민</td>
                            <td> <div className="record-status">
                                
                                <p>완료</p>
                            </div></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>9.1</td>
                            <td>mpw</td>
                            <td>0.4</td>
                            <td>2022-03-02 09:34:21</td>
                            <td>김다민</td>
                            <td> <div className="record-status">
                                
                                <p>완료</p>
                            </div></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>9.1</td>
                            <td>mpw</td>
                            <td>0.4</td>
                            <td>2022-03-02 09:34:21</td>
                            <td>김다민</td>
                            <td> <div className="record-status">
                                
                                <p>완료</p>
                            </div></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>9.1</td>
                            <td>mpw</td>
                            <td>0.4</td>
                            <td>2022-03-02 09:34:21</td>
                            <td>김다민</td>
                            <td> <div className="record-status">
                                
                                <p>완료</p>
                            </div></td>
                        </tr>
                    </tbody>
                </table>

            </section>

        </section>
        </>
    )


}

export default PythonList;