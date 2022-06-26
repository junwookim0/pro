// 소개 페이지
import './IntroList.css';
import Nav from '../Nav/Nav';

const IntroList = () => {
    return (
    <div className='homebody'>
        <Nav/>
        <div className='video_box'>
            <video autoPlay muted loop className="introVideo">
                <source src="../../video/file_home.mp4" type="video/mp4"/>
            </video>
            <div className='video_text'>
                <h2 className='video_text_h2'>We are UPTOWN!</h2>
                <h3>업사이클링 아이디어와 방법</h3>
                <h3>여러분의 이야기를 들려주세요</h3>
            </div>
        </div>
        <div className="cInnerContent">
            {/*1단 나누기 */}
            <div className="cInnerContent_1">
                <div className="cInnerContent_1_left">
                        <h1>다시 한 번, <br /></h1> 
                        <h3>지구를 되살리기 위해</h3>
                        <p>
                            대한민국에서 버려지는 생수 페트병은 연간 49억개.<br/>
                            다 쓴 페트병을 모두 연결하면 지구를 10바퀴도 넘게 돌 수 있는 양입니다.<br/>
                            <br/>
                            전세계 1인당 일회용 플라스틱 폐기물 배출량 3위를 기록한 <br/>
                            우리나라가 할 수 있는 일은 과연 무엇이었을까요?<br/>
                            <br/></p> 
                            분류 배출을 넘어 쓰레기를 새로운 방법으로 재탄생시키는
                            <p><b className='point'>“Upcycling”</b><br/>
                            저희는 이 단어로부터 출발했습니다.
                            </p>
                    </div>
                <div className="cInnerContent_1_right">
                    <img className="intro01"src="../../images/intro01(수정).PNG" alt='intro01'></img>
                </div>
                <div className='cInnerContent_3'>
                <div className='cInnerContent_3_title'>
                    <p> 세상을 바꾸는 작은 노력 </p>
                    <h1><span>업타운</span>은 <span>여러분</span>과 함께 합니다.</h1>
                </div>
                <ul className='cInnerContent_31'>
                    <li className='cInnerContent_list'>
                    <i className="fab fa-envira"></i>
                        <h3>아껴쓰기</h3>
                        <p>내용1</p>
                    </li>
                    <li className='cInnerContent_list'>
                    <i className="fas fa-exchange-alt"></i>
                        <h3>나눠쓰기</h3>
                        <p>내용1</p>
                    </li>
                    <li className='cInnerContent_list'>
                    <i className="fas fa-oil-can"></i>
                        <h3>바꿔쓰기</h3>
                        <p>내용1</p>
                    </li>
                    <li className='cInnerContent_list'>
                    <i className="fas fa-recycle"></i>
                        <h3>다시쓰기</h3>
                        <p>내용1</p>
                    </li>
                </ul>
            </div>
            </div>

        </div>


    </div>
    );
};
export default IntroList;
