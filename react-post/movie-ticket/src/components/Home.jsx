import "./Home.css";
import  { useState } from "react";

const db = [
    { id: 1,  isToggle: false ,price:"1000"},
    { id: 2,  isToggle: false ,price:"1000"},
    { id: 3,  isToggle: false ,price:"1000"},
    { id: 4,  isToggle: false ,price:"1000"},
    { id: 5,  isToggle: false ,price:"1000"},
    { id: 6,  isToggle: false ,price:"1000"},
    { id: 7,  isToggle: false ,price:"1000"},
    { id: 8,  isToggle: false ,price:"1000"},
    { id: 9,  isToggle: false ,price:"1000"},
    { id: 10,  isToggle: false ,price:"1000"},
    { id: 11,  isToggle: false ,price:"1000"},
    { id: 12,  isToggle: false ,price:"1000"},
    { id: 13,  isToggle: false ,price:"1000"},
    { id: 14,  isToggle: false ,price:"1000"},
    { id: 15,  isToggle: false ,price:"1000"},
    { id: 16,  isToggle: false ,price:"1000"},
    { id: 17,  isToggle: false ,price:"1000"},
    { id: 18,  isToggle: false ,price:"1000"},
    { id: 19,  isToggle: false ,price:"1000"},
    { id: 20,  isToggle: false ,price:"1000"},
    { id: 21,  isToggle: false ,price:"1000"},
    { id: 22,  isToggle: false ,price:"1000"},
    { id: 23,  isToggle: false ,price:"1000"},
    { id: 24,  isToggle: false ,price:"1000"},
    { id: 25,  isToggle: false ,price:"1000"},
    { id: 26,  isToggle: false ,price:"1000"},
    { id: 27,  isToggle: false ,price:"1000"},
    { id: 28,  isToggle: false ,price:"1000"},
    { id: 29,  isToggle: false ,price:"1000"},
    { id: 30,  isToggle: false ,price:"1000"},
    { id: 31,  isToggle: false ,price:"1000"},
    { id: 32,  isToggle: false ,price:"1000"},
    { id: 33,  isToggle: false ,price:"1000"},
    { id: 34,  isToggle: false ,price:"1000"},
    { id: 35,  isToggle: false ,price:"1000"},
    { id: 36,  isToggle: false ,price:"1000"},
    { id: 37,  isToggle: false ,price:"1000"},
    { id: 38,  isToggle: false ,price:"1000"},
    { id: 39,  isToggle: false ,price:"1000"},
    { id: 40,  isToggle: false ,price:"1000"},
];
const Menu = ({ id,  isToggle }) => {
    const [toggle, setToggle] = useState(isToggle);

    const onChange = () => {
        setToggle(!toggle);
    };
    
    return (
        <div>
            <div id={id} onClick={onChange}>
                <div className={toggle ? 'bar_active': 'bar'}>
                    <span className="material-icons">square</span>
                </div>
            </div>
        </div>
    );
};

function Home() {
    const [list] = useState(db);
    return (
        <div>
            <div className="home_box">
                <div className="movie_poster">
                    <div className="poster1"></div>
                </div>
                <div className="movie_container">
                    <div className="movie_incontainer">
                        <label>영화를 선택해주세요</label>
                        <select id="movie">
                            <option value="0" selected >선택해주세요</option>
                            <option value="10000">기생수 (10,000원)</option>
                            <option value="12000">어벤져스 엔드게임 (12,000원)</option>
                            <option value="8000">Toy Story4 (8,000원)</option>
                            <option value="9000">스파이더맨 파프롬홈 (9,000원)</option>
                        </select>
                    </div> 
                    <div className="movie-seat-ex">
                        <div className="available"><span className="material-icons">square</span>
                            <div id="ex-text">선택가능</div>
                        </div>
                        <div className="selected">
                            <span className="material-icons">square</span> 
                            <div id="ex-text">선택좌석</div>
                        </div>
                        <div className="occupied">
                            <span className="material-icons">square</span>
                            <div id="ex-text">선택불가</div>
                        </div>
                    </div> 
                    <div>
                        <div className="screen">screen</div>
                    </div>
                    <div>
                        <div className="seat">
                            {list.map((item)=>(
                                <Menu
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                isToggle={item.isToggle}
                                >
                                </Menu>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;