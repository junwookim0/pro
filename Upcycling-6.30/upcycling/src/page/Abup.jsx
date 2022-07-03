//home banner에 버튼 클릭시 이동되는 컴포넌트
import Nav from '../components/Nav/Nav';
import "./Abup.css";
const Abup = () => {
    return (
        <div>
            <Nav/>
            <div className='img_box'>
                <img src="../../images/home1.png" alt="post" />
                <img src="../../images/home2.png" alt="post" />
                <img src="../../images/home3.png" alt="post" />
                <img src="../../images/home4.png" alt="post" />
                <img src="../../images/home5.png" alt="post" />
            </div>
        </div>
    )
};

export default Abup;